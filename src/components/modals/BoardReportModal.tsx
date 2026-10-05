import React, { useState } from 'react';
import { X, Download, Printer, Sparkles, Building, CheckCircle2, TrendingUp } from 'lucide-react';
import { NamdevLogo } from '../common/NamdevLogo';

interface BoardReportModalProps {
  onClose: () => void;
}

export const BoardReportModal: React.FC<BoardReportModalProps> = ({ onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-900 via-[#0f294a] to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg">
              <NamdevLogo size="sm" showSubtitle={false} />
            </div>
            <div>
              <h3 className="text-base font-bold">Executive Board Briefing Dossier</h3>
              <p className="text-xs text-blue-200 font-medium">
                Confidential Report · Prepared for Jitendra Tanwar (MD & CEO)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Report Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-700 leading-relaxed">
          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Namdev_Finvest_Board_Deck_Oct2026.pdf prepared for download!</span>
            </div>
          )}

          {/* AI Executive Summary Card */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/60 border border-blue-200">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <h4 className="font-bold text-sm text-blue-950">CEO Performance Synthesis</h4>
            </div>
            <p className="text-slate-700 text-xs">
              Namdev Finvest Ltd. continues stellar trajectory across five Northern/Western states, achieving a total AUM of{' '}
              <b className="text-slate-900">₹1,248 Cr</b> (+12.5% YoY) with monthly disbursements reaching{' '}
              <b className="text-slate-900">₹185 Cr</b> against target ₹215 Cr (86.5% achievement). Asset quality remains pristine
              with Gross NPA at <b className="text-emerald-700">1.8%</b> and 96.4% collection efficiency.
            </p>
          </div>

          {/* Three Key Pillar Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-slate-400">Origination Engine</span>
              <div className="text-base font-black text-slate-900 mt-0.5">13,440 Leads</div>
              <p className="text-[11px] text-slate-500 mt-1">
                Conversion funnel at 13.0% lead-to-disbursal, driven by rapid 3.6h avg credit underwriting TAT.
              </p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-slate-400">Portfolio Health</span>
              <div className="text-base font-black text-emerald-700 mt-0.5">94.2% Standard</div>
              <p className="text-[11px] text-slate-500 mt-1">
                ₹1,175 Cr in 0-DPD clean bucket; Provision Coverage Ratio stands sound at 78.4%.
              </p>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-slate-400">Branch Network</span>
              <div className="text-base font-black text-blue-700 mt-0.5">105+ Branches</div>
              <p className="text-[11px] text-slate-500 mt-1">
                Rajasthan contributes 38.6% followed by MP (20.7%) and Gujarat (16.2%).
              </p>
            </div>
          </div>

          {/* Key Strategic Initiatives */}
          <div className="border border-slate-200 rounded-xl p-4 bg-white space-y-2">
            <h4 className="font-bold text-slate-900 text-xs">FY 2026-27 Board Action Items</h4>
            <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
              <li>
                <b>Green Lending Expansion:</b> Solar Loan vertical expanded to ₹125 Cr AUM with 10% portfolio share.
              </li>
              <li>
                <b>MSME Priority Sector:</b> Direct focus on Tier-2 and Tier-3 micro-enterprises with ticket sizes between ₹5L - ₹25L.
              </li>
              <li>
                <b>Automated Digital LOS:</b> Instant Aadhaar OCR and eNACH mandate reduced customer onboarding time from 3 days to under 4 hours.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Board Presentation (PDF)</span>
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Dossier</span>
            </button>
          </div>

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
