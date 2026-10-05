import React from 'react';
import { ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';

export const LoanFunnelChart: React.FC = () => {
  const steps = [
    { label: 'Leads', count: '13,440', rate: '100%', width: 'w-full', bg: 'bg-[#2563eb]', textColor: 'text-white' },
    { label: 'Login/Application', count: '9,214', rate: '69%', width: 'w-[84%]', bg: 'bg-[#0ea5e9]', textColor: 'text-white' },
    { label: 'Credit', count: '4,812', rate: '52%', width: 'w-[68%]', bg: 'bg-[#6366f1]', textColor: 'text-white' },
    { label: 'Sanction', count: '3,914', rate: '81.3%', width: 'w-[54%]', bg: 'bg-[#a855f7]', textColor: 'text-white' },
    { label: 'Disbursed', count: '1,748', rate: '44.6%', width: 'w-[40%]', bg: 'bg-[#ef4444]', textColor: 'text-white' },
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Loan Conversion Funnel</h3>
          <p className="text-[11px] text-slate-500 font-medium">Pipeline velocity & drop-offs</p>
        </div>

        <button className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-md cursor-pointer">
          <span>MTD</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>
      </div>

      {/* Funnel Visual Stack */}
      <div className="space-y-1.5 my-auto py-1">
        {steps.map((step, idx) => (
          <div key={step.label} className="group relative">
            <div className="flex items-center justify-between text-[11px] mb-0.5 font-semibold text-slate-600">
              <span className="truncate">{step.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 font-extrabold tabular-nums">{step.count}</span>
                <span className="text-slate-400 text-[10px] tabular-nums font-medium">({step.rate})</span>
              </div>
            </div>

            {/* Funnel Bar Bar */}
            <div className="w-full bg-slate-100 h-5 rounded-md overflow-hidden flex items-center p-0.5">
              <div
                className={`h-full rounded-sm ${step.bg} transition-all duration-300 flex items-center justify-between px-2 text-[10px] font-bold text-white shadow-xs ${step.width}`}
              >
                <span className="truncate text-[9.5px]">{step.label}</span>
                <span className="text-[9.5px]">{step.count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conversion Callout Footnote */}
      <div className="mt-3 p-2.5 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/60 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">
            %
          </div>
          <span className="text-xs font-bold text-slate-800">
            Lead to Disbursed Conversion
          </span>
        </div>
        <div className="text-lg font-black text-red-600 tracking-tight tabular-nums">
          13.0%
        </div>
      </div>
    </div>
  );
};
