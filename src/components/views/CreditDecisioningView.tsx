import React, { useState } from 'react';
import { LOAN_APPLICATIONS } from '../../data/mockData';
import { LoanApplication } from '../../types/nbfc';
import { CreditCard, ShieldCheck, CheckCircle2, AlertTriangle, FileText, ChevronRight } from 'lucide-react';

interface CreditDecisioningViewProps {
  onNavigate?: (tabId: string) => void;
}

export const CreditDecisioningView: React.FC<CreditDecisioningViewProps> = ({ onNavigate }) => {
  const [apps] = useState<LoanApplication[]>(LOAN_APPLICATIONS);

  const committeeQueue = apps.filter(a => a.status === 'CAM Generated' || a.status === 'Credit Review');

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Credit Underwriting & Decisioning Desk</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">Credit Committee CAM appraisals, deviations matrix and board sanction thresholds</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
            Approval Authority Level: Board / CEO Desk
          </span>
        </div>
      </div>

      {/* Direct Module Fast-Switchers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => onNavigate?.('credit_committee_desk')}
          className="p-3.5 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200 rounded-xl hover:shadow-xs transition-all text-left cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-amber-800">Module 1</span>
            <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="font-extrabold text-sm text-slate-900 mt-1">Credit Committee Desk</h3>
          <p className="text-xs text-slate-500 mt-0.5">Quorum voting for Level-1, Level-2 & CEO/Board sanctions</p>
        </button>

        <button
          onClick={() => onNavigate?.('cam_approvals')}
          className="p-3.5 bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-200 rounded-xl hover:shadow-xs transition-all text-left cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-blue-800">Module 2</span>
            <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="font-extrabold text-sm text-slate-900 mt-1">CAM Approvals</h3>
          <p className="text-xs text-slate-500 mt-0.5">Credit Appraisal Memos, DSCR cashflows, LTV valuation sign-offs</p>
        </button>

        <button
          onClick={() => onNavigate?.('deviations_matrix')}
          className="p-3.5 bg-gradient-to-br from-red-50 to-pink-50/50 border border-red-200 rounded-xl hover:shadow-xs transition-all text-left cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-red-800">Module 3</span>
            <ChevronRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="font-extrabold text-sm text-slate-900 mt-1">Deviations Matrix</h3>
          <p className="text-xs text-slate-500 mt-0.5">Policy exceptions, CIBIL waivers, LTV & FOIR relaxations audit log</p>
        </button>
      </div>

      {/* Credit Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
          <span className="text-slate-500 font-medium">CAM Queue</span>
          <div className="text-xl font-extrabold text-blue-900 mt-0.5 tabular-nums">42 Cases</div>
          <span className="text-[10px] text-slate-400">Total ₹28.5 Cr volume</span>
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
          <span className="text-slate-500 font-medium">Average Credit TAT</span>
          <div className="text-xl font-extrabold text-emerald-700 mt-0.5 tabular-nums">3.6 Hours</div>
          <span className="text-[10px] text-emerald-600 font-semibold">18% faster than benchmark</span>
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
          <span className="text-slate-500 font-medium">Sanction Ratio</span>
          <div className="text-xl font-extrabold text-blue-700 mt-0.5 tabular-nums">78.3%</div>
          <span className="text-[10px] text-slate-400">Strict risk policy adhered</span>
        </div>
        <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
          <span className="text-slate-500 font-medium">Deviations Flagged</span>
          <div className="text-xl font-extrabold text-red-600 mt-0.5 tabular-nums">14 Cases</div>
          <span className="text-[10px] text-red-500 font-semibold">Pending Committee review</span>
        </div>
      </div>

      {/* CAM Queue Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800">
          Pending Credit Committee Decisions ({committeeQueue.length} files)
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">File ID</th>
                <th className="py-2.5 px-3">Applicant Name</th>
                <th className="py-2.5 px-3">Loan Vertical</th>
                <th className="py-2.5 px-3">Branch</th>
                <th className="py-2.5 px-3 text-right">Loan Amount</th>
                <th className="py-2.5 px-3 text-center">Bureau Score</th>
                <th className="py-2.5 px-3 text-center">Risk Grade</th>
                <th className="py-2.5 px-3 text-center">Status</th>
                <th className="py-2.5 pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {committeeQueue.map((app) => (
                <tr key={app.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{app.id}</td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{app.applicantName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{app.pan}</div>
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">{app.product}</td>
                  <td className="py-3 px-3 text-slate-600">{app.branch}</td>
                  <td className="py-3 px-3 text-right font-extrabold text-blue-900 tabular-nums">
                    ₹{(app.amount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-center font-bold text-emerald-700 tabular-nums">{app.cibilScore}</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded font-bold bg-slate-100 text-slate-800 text-[10px]">
                      Grade {app.riskGrade}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <button
                      onClick={() => alert(`Reviewing Credit Appraisal Memo for ${app.applicantName}...`)}
                      className="px-3 py-1 bg-blue-600 text-white font-bold text-[11px] rounded-md hover:bg-blue-700 cursor-pointer shadow-xs"
                    >
                      Approve Sanction
                    </button>
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
