import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, AlertTriangle, Search, FileText } from 'lucide-react';

interface KycDedupeModalProps {
  onClose: () => void;
}

export const KycDedupeModal: React.FC<KycDedupeModalProps> = ({ onClose }) => {
  const [panInput, setPanInput] = useState('ABCPS1289K');
  const [aadhaarInput, setAadhaarInput] = useState('8912 3456 7890');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verifiedResult, setVerifiedResult] = useState<{
    status: 'CLEAN' | 'FLAGGED';
    name: string;
    dob: string;
    existingLoan: boolean;
    cibil: number;
  } | null>(null);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerifiedResult({
        status: 'CLEAN',
        name: 'Manoj Kumar Sharma',
        dob: '14-Aug-1984',
        existingLoan: false,
        cibil: 785
      });
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Instant KYC & Hunter Dedupe Engine</h3>
              <p className="text-xs text-slate-500">NSDL PAN verification & internal dedupe match</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">PAN Number</label>
              <input
                type="text"
                value={panInput}
                onChange={(e) => setPanInput(e.target.value.toUpperCase())}
                placeholder="e.g. ABCDE1234F"
                className="w-full px-3 py-2 text-xs font-mono uppercase bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Aadhaar (Last 4 digits / Virtual ID)</label>
              <input
                type="text"
                value={aadhaarInput}
                onChange={(e) => setAadhaarInput(e.target.value)}
                placeholder="XXXX XXXX 7890"
                className="w-full px-3 py-2 text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            onClick={handleVerify}
            disabled={isVerifying}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs disabled:opacity-50"
          >
            {isVerifying ? (
              <span>Querying NSDL & UIDAI Central Hub...</span>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Run Instant KYC & Dedupe Check</span>
              </>
            )}
          </button>

          {/* Results Display */}
          {verifiedResult && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-sm text-emerald-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  NSDL PAN Verification Passed
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  NO DEDUPE CONFLICT
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-emerald-200/60">
                <div>
                  <span className="text-slate-500">Registered Name:</span>
                  <div className="font-bold text-slate-900">{verifiedResult.name}</div>
                </div>
                <div>
                  <span className="text-slate-500">Date of Birth:</span>
                  <div className="font-bold text-slate-900">{verifiedResult.dob}</div>
                </div>
                <div>
                  <span className="text-slate-500">Existing Active Namdev Loan:</span>
                  <div className="font-bold text-emerald-700">None (New to Namdev)</div>
                </div>
                <div>
                  <span className="text-slate-500">Bureau Experian/CIBIL:</span>
                  <div className="font-bold text-blue-700">{verifiedResult.cibil} (Low Default Risk)</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
