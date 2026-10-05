import React, { useState } from 'react';
import { PRE_ELIGIBILITY_RECORDS } from '../../data/mockData';
import { PreEligibilityRecord } from '../../types/nbfc';
import { Search, Sliders, CheckCircle2, AlertTriangle, XCircle, ArrowRight } from 'lucide-react';

interface PreEligibilityViewProps {
  onOpenCalculator?: () => void;
}

export const PreEligibilityView: React.FC<PreEligibilityViewProps> = ({ onOpenCalculator }) => {
  const [records] = useState<PreEligibilityRecord[]>(PRE_ELIGIBILITY_RECORDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filtered = records.filter(r => {
    const matchesSearch =
      r.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.phone.includes(searchTerm);

    const matchesStatus = statusFilter === 'ALL' || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Pre-Eligibility & FOIR Underwriting Desk</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">Income assessment, Fixed Obligation to Income Ratio (FOIR) and credit capacity calculations</p>
        </div>

        <button
          onClick={onOpenCalculator}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Sliders className="w-4 h-4" />
          <span>Launch Underwriting Simulator</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
        <div className="relative w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by applicant or phone..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1">
          {['ALL', 'Qualified', 'Conditional', 'Disqualified'].map((st) => (
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

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">Ref ID</th>
                <th className="py-2.5 px-3">Applicant Name</th>
                <th className="py-2.5 px-3 text-right">Monthly Inflow</th>
                <th className="py-2.5 px-3 text-right">Existing EMI</th>
                <th className="py-2.5 px-3 text-center">FOIR Ratio</th>
                <th className="py-2.5 px-3 text-right">Max Eligible Amount</th>
                <th className="py-2.5 px-3 text-right">Requested Loan</th>
                <th className="py-2.5 px-3">Credit Recommendation</th>
                <th className="py-2.5 pr-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{item.id}</td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{item.applicantName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{item.phone}</div>
                  </td>
                  <td className="py-3 px-3 text-right font-semibold text-slate-700 tabular-nums">
                    ₹{item.monthlyIncome.toLocaleString('en-IN')}
                  </td>
                  <td className="py-3 px-3 text-right text-slate-500 tabular-nums">
                    ₹{item.existingEmi.toLocaleString('en-IN')}
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`font-black tabular-nums ${
                        item.foirPercentage <= 40
                          ? 'text-emerald-700'
                          : item.foirPercentage <= 50
                          ? 'text-blue-700'
                          : 'text-red-600'
                      }`}
                    >
                      {item.foirPercentage}%
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-extrabold text-emerald-800 tabular-nums">
                    ₹{(item.maxEligibleAmount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-right font-bold text-slate-900 tabular-nums">
                    ₹{(item.requestedAmount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-slate-700 font-medium">{item.recommendation}</td>
                  <td className="py-3 pr-4 text-center">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        item.status === 'Qualified'
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : item.status === 'Conditional'
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
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
