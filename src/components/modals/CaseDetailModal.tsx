import React, { useState } from 'react';
import { LoanApplication } from '../../types/nbfc';
import { X, CheckCircle2, AlertTriangle, FileText, Download, ShieldCheck, UserCheck, Calendar } from 'lucide-react';

interface CaseDetailModalProps {
  application: LoanApplication | null;
  onClose: () => void;
  onStatusUpdate?: (id: string, newStatus: LoanApplication['status']) => void;
}

export const CaseDetailModal: React.FC<CaseDetailModalProps> = ({
  application,
  onClose,
  onStatusUpdate
}) => {
  if (!application) return null;

  const [currentStatus, setCurrentStatus] = useState(application.status);
  const [successNote, setSuccessNote] = useState('');

  const handleUpdate = (status: LoanApplication['status']) => {
    setCurrentStatus(status);
    onStatusUpdate?.(application.id, status);
    setSuccessNote(`Status updated to "${status}" successfully!`);
    setTimeout(() => setSuccessNote(''), 3000);
  };

  const getRiskBadge = (grade: string) => {
    switch (grade) {
      case 'A': return 'bg-sky-100 text-sky-800 border-sky-300';
      case 'B': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'C': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'D': return 'bg-amber-100 text-amber-800 border-amber-300';
      default: return 'bg-red-100 text-red-800 border-red-300';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              LOS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">{application.applicantName}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getRiskBadge(application.riskGrade)}`}>
                  Risk Grade {application.riskGrade}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">File ID: {application.id} · Branch: {application.branch}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs">
          {successNote && (
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successNote}</span>
            </div>
          )}

          {/* Key Facts Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] text-slate-400 font-semibold uppercase">Loan Product</span>
              <div className="text-sm font-bold text-slate-900 mt-0.5">{application.product}</div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] text-slate-400 font-semibold uppercase">Applied Amount</span>
              <div className="text-sm font-extrabold text-blue-700 mt-0.5 tabular-nums">
                ₹{(application.amount / 100000).toFixed(2)} Lakhs
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] text-slate-400 font-semibold uppercase">CIBIL Score</span>
              <div className="text-sm font-bold text-emerald-700 mt-0.5 tabular-nums">
                {application.cibilScore} / 900
              </div>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-[10px] text-slate-400 font-semibold uppercase">Underwriting TAT</span>
              <div className="text-sm font-bold text-slate-900 mt-0.5 tabular-nums">
                {application.tatHours} Hours
              </div>
            </div>
          </div>

          {/* Applicant & KYC details */}
          <div className="border border-slate-200 rounded-xl p-4 space-y-3 bg-white">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-blue-600" />
              Verified Applicant Details
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
              <div>
                <span className="text-slate-400">Mobile Phone:</span>
                <p className="font-semibold text-slate-800 font-mono mt-0.5">{application.phone}</p>
              </div>
              <div>
                <span className="text-slate-400">PAN Number:</span>
                <p className="font-semibold text-slate-800 font-mono mt-0.5">{application.pan}</p>
              </div>
              <div>
                <span className="text-slate-400">Application Date:</span>
                <p className="font-semibold text-slate-800 mt-0.5">{application.appliedDate}</p>
              </div>
            </div>
          </div>

          {/* Verification Checklist */}
          <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-white">
            <h4 className="font-bold text-slate-800 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Underwriting Checklist & Dedupe Verifications
            </h4>
            <div className="space-y-1.5 pt-1 text-[11px]">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Aadhaar e-KYC & Biometric Match</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Match
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Hunter Fraud Dedupe Database</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Clean / No Matches
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Bank Statement Analysis (6 Months eNACH)</span>
                <span className="text-blue-700 font-bold flex items-center gap-1">
                  Average Inflow ₹1.45L/mo
                </span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-600">Field Investigation (FI) & Geo-Tagging</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Residence & Business Verified
                </span>
              </div>
            </div>
          </div>

          {/* Status Workflow Action Bar */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="font-bold text-slate-800 block text-[11px]">
              Executive Action Workflow (Current: <b className="text-blue-700">{currentStatus}</b>)
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {(['In Queue', 'Credit Review', 'CAM Generated', 'Sanctioned', 'Disbursed', 'Rejected'] as const).map(
                (st) => (
                  <button
                    key={st}
                    onClick={() => handleUpdate(st)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                      currentStatus === st
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {st}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => alert(`Downloading full Credit Appraisal Memo (CAM) for ${application.id}...`)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Download CAM PDF</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 cursor-pointer shadow-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
