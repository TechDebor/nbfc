import React, { useState } from 'react';
import { DEVIATION_RECORDS } from '../../data/mockData';
import { DeviationRecord } from '../../types/nbfc';
import { AlertTriangle, Search, CheckCircle2, XCircle, ShieldAlert, Award } from 'lucide-react';

export const DeviationsMatrixView: React.FC = () => {
  const [deviations, setDeviations] = useState<DeviationRecord[]>(DEVIATION_RECORDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [authorityFilter, setAuthorityFilter] = useState('ALL');
  const [selectedDev, setSelectedDev] = useState<DeviationRecord | null>(null);

  const filtered = deviations.filter(d => {
    const matchesSearch =
      d.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.loanId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.deviationType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.mitigatingFactor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAuthority = authorityFilter === 'ALL' || d.approvalAuthority === authorityFilter;
    return matchesSearch && matchesAuthority;
  });

  const handleGrantWaiver = (id: string) => {
    setDeviations(prev =>
      prev.map(d => (d.id === id ? { ...d, waiverStatus: 'Approved' } : d))
    );
    setSelectedDev(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Pending Committee': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Rejected': return 'bg-red-50 text-red-800 border-red-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-700 flex items-center justify-center">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Credit Policy Deviations & Exception Matrix</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">Policy threshold waivers, delegated authority caps and risk mitigation audit logs</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-lg">
            14 Active Deviations Under Review
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
        <div className="relative w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by deviation type, applicant, mitigating factor..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto">
          {['ALL', 'MD & CEO', 'Chief Credit Officer', 'Zonal Head', 'Branch Manager'].map((auth) => (
            <button
              key={auth}
              onClick={() => setAuthorityFilter(auth)}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
                authorityFilter === auth
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {auth}
            </button>
          ))}
        </div>
      </div>

      {/* Deviations Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">Ref ID</th>
                <th className="py-2.5 px-3">Applicant Name</th>
                <th className="py-2.5 px-3">Deviation Category</th>
                <th className="py-2.5 px-3">Requested Exception</th>
                <th className="py-2.5 px-3">Mitigating Risk Factor</th>
                <th className="py-2.5 px-3">Approval Authority</th>
                <th className="py-2.5 px-3 text-center">Status</th>
                <th className="py-2.5 pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((dev) => (
                <tr key={dev.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{dev.id}</td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{dev.applicantName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{dev.loanId}</div>
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">{dev.deviationType}</td>
                  <td className="py-3 px-3 text-slate-600 max-w-[160px] truncate" title={dev.requestedWaiver}>
                    {dev.requestedWaiver}
                  </td>
                  <td className="py-3 px-3 text-slate-600 max-w-[200px] truncate" title={dev.mitigatingFactor}>
                    {dev.mitigatingFactor}
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-semibold text-[10px]">
                      {dev.approvalAuthority}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(dev.waiverStatus)}`}>
                      {dev.waiverStatus}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <button
                      onClick={() => setSelectedDev(dev)}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-slate-300 text-blue-700 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      Audit Waiver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Waiver Decision Dialog */}
      {selectedDev && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedDev.applicantName}</h3>
                <p className="text-xs text-slate-500 font-mono">{selectedDev.id} · {selectedDev.loanId}</p>
              </div>
              <button onClick={() => setSelectedDev(null)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-2">
                <div>
                  <span className="text-slate-500">Requested Policy Exception:</span>
                  <div className="font-bold text-slate-900 mt-0.5">{selectedDev.requestedWaiver}</div>
                </div>
                <div>
                  <span className="text-slate-500">Documented Compensating Mitigants:</span>
                  <div className="font-semibold text-emerald-800 mt-0.5">{selectedDev.mitigatingFactor}</div>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-200">
                  <span className="text-slate-500">Required Delegation:</span>
                  <b className="text-blue-900">{selectedDev.approvalAuthority}</b>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => handleGrantWaiver(selectedDev.id)}
                className="py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Grant Exception Waiver</span>
              </button>
              <button
                onClick={() => setSelectedDev(null)}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
