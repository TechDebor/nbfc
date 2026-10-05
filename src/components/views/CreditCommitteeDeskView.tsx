import React, { useState } from 'react';
import { CREDIT_COMMITTEE_CASES } from '../../data/mockData';
import { CreditCommitteeCase } from '../../types/nbfc';
import { CreditCard, Search, CheckCircle2, AlertTriangle, Users, FileCheck, ThumbsUp, ThumbsDown, XCircle } from 'lucide-react';

export const CreditCommitteeDeskView: React.FC = () => {
  const [cases, setCases] = useState<CreditCommitteeCase[]>(CREDIT_COMMITTEE_CASES);
  const [searchTerm, setSearchTerm] = useState('');
  const [levelFilter, setLevelFilter] = useState('ALL');
  const [selectedCase, setSelectedCase] = useState<CreditCommitteeCase | null>(null);

  const filtered = cases.filter(c => {
    const matchesSearch =
      c.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.businessOrPurpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.product.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLevel = levelFilter === 'ALL' || c.committeeLevel === levelFilter;
    return matchesSearch && matchesLevel;
  });

  const handleVote = (id: string, decision: CreditCommitteeCase['status']) => {
    setCases(prev =>
      prev.map(c => (c.id === id ? { ...c, status: decision, votesApproved: c.votesRequired } : c))
    );
    setSelectedCase(null);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Approved with Covenants': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Scheduled for Meeting': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'Referred for Clarification': return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Declined': return 'bg-red-50 text-red-800 border-red-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Credit Committee Desk (Quorum & Sanctions)</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">Multi-tier delegated approval authority: Branch Committee, Zonal Credit Head & CEO / Board</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
            Active Quorum: CEO · CRO · COO · CCO
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
            placeholder="Search by case ID, applicant or vertical..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto">
          {['ALL', 'Level 3 (CEO / Board)', 'Level 2 (Credit Head)', 'Level 1 (Branch)'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
                levelFilter === lvl
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Committee Cases Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">Committee ID</th>
                <th className="py-2.5 px-3">Applicant Name</th>
                <th className="py-2.5 px-3">Business / Loan Purpose</th>
                <th className="py-2.5 px-3">Vertical</th>
                <th className="py-2.5 px-3 text-right">Proposed Sanction</th>
                <th className="py-2.5 px-3">Authority Level</th>
                <th className="py-2.5 px-3 text-center">Quorum Vote</th>
                <th className="py-2.5 px-3 text-center">Decision Status</th>
                <th className="py-2.5 pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{item.id}</td>
                  <td className="py-3 px-3 font-bold text-slate-900">{item.applicantName}</td>
                  <td className="py-3 px-3 text-slate-600 max-w-[180px] truncate" title={item.businessOrPurpose}>
                    {item.businessOrPurpose}
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">{item.product}</td>
                  <td className="py-3 px-3 text-right font-extrabold text-blue-900 tabular-nums">
                    ₹{(item.proposedAmount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-semibold text-[10px]">
                      {item.committeeLevel}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="font-bold text-slate-800 tabular-nums">
                      {item.votesApproved} / {item.votesRequired}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <button
                      onClick={() => setSelectedCase(item)}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-slate-300 text-blue-700 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      Cast Vote
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Committee Vote Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedCase.applicantName}</h3>
                <p className="text-xs text-slate-500 font-mono">{selectedCase.id} · {selectedCase.committeeLevel}</p>
              </div>
              <button onClick={() => setSelectedCase(null)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Proposed Loan Amount:</span>
                  <b className="text-blue-900 font-extrabold">₹{(selectedCase.proposedAmount / 100000).toFixed(2)} Lakhs</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Underwriting Memo:</span>
                  <span className="text-slate-800 font-medium text-right max-w-[240px]">{selectedCase.underwriterNote}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Risk Assessment:</span>
                  <b className="text-emerald-700 font-bold">{selectedCase.riskRating} Risk Category</b>
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
                <span className="text-blue-950 font-bold block mb-1">Standard Sanction Covenants:</span>
                <p className="text-[11px] text-slate-600">
                  1. Pre-disbursement hypothecation registration with ROC / RTO.<br/>
                  2. Monthly eNACH mandate debit active on primary clearing bank account.<br/>
                  3. End-use verification inspection within 60 days of loan credit.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => handleVote(selectedCase.id, 'Approved with Covenants')}
                className="py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <ThumbsUp className="w-4 h-4" />
                <span>Sanction Loan</span>
              </button>
              <button
                onClick={() => handleVote(selectedCase.id, 'Referred for Clarification')}
                className="py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Refer Back</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
