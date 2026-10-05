import React, { useState } from 'react';
import { KYC_RECORDS } from '../../data/mockData';
import { KycRecord } from '../../types/nbfc';
import { Search, ShieldCheck, CheckCircle2, AlertTriangle, Fingerprint, RefreshCw } from 'lucide-react';

interface KycDedupeViewProps {
  onOpenCheckModal?: () => void;
}

export const KycDedupeView: React.FC<KycDedupeViewProps> = ({ onOpenCheckModal }) => {
  const [records] = useState<KycRecord[]>(KYC_RECORDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filtered = records.filter(r => {
    const matchesSearch =
      r.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.pan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">KYC, Biometric & Hunter Dedupe Desk</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">Automated Aadhaar XML, NSDL PAN verification and internal fraud dedupe network</p>
        </div>

        <button
          onClick={onOpenCheckModal}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Fingerprint className="w-4 h-4" />
          <span>New KYC Verification Check</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
        <div className="relative w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, PAN or reference..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1">
          {['ALL', 'Verified & Approved', 'Manual Inspection', 'Flagged Fraud Risk'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
                statusFilter === st
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* KYC Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">Verification ID</th>
                <th className="py-2.5 px-3">Customer Name</th>
                <th className="py-2.5 px-3">PAN Number</th>
                <th className="py-2.5 px-3">Document Set</th>
                <th className="py-2.5 px-3 text-center">Name Match %</th>
                <th className="py-2.5 px-3 text-center">Biometric Live</th>
                <th className="py-2.5 px-3 text-center">Hunter Dedupe</th>
                <th className="py-2.5 px-3">Verification Date</th>
                <th className="py-2.5 pr-4 text-center">Final Decision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{item.id}</td>
                  <td className="py-3 px-3 font-bold text-slate-900">{item.customerName}</td>
                  <td className="py-3 px-3 font-mono font-semibold text-slate-700">{item.pan}</td>
                  <td className="py-3 px-3 text-slate-600">{item.documentType}</td>
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`font-black tabular-nums ${
                        item.matchPercentage >= 95
                          ? 'text-emerald-700'
                          : item.matchPercentage >= 90
                          ? 'text-amber-600'
                          : 'text-red-600'
                      }`}
                    >
                      {item.matchPercentage}%
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    {item.biometricVerified ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Matched
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400">Exempted / OTP</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {item.hunterMatch ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                        <AlertTriangle className="w-3 h-3" /> MATCHED
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-emerald-700">Clean (0)</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-slate-500 font-mono text-[11px]">{item.verificationDate}</td>
                  <td className="py-3 pr-4 text-center">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        item.status === 'Verified & Approved'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : item.status === 'Manual Inspection'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-red-50 text-red-800 border-red-200'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
