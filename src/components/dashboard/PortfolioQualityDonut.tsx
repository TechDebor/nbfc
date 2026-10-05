import React, { useState } from 'react';
import { PORTFOLIO_QUALITY } from '../../data/mockData';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export const PortfolioQualityDonut: React.FC = () => {
  const [activeBucket, setActiveBucket] = useState<string | null>(null);
  const buckets = PORTFOLIO_QUALITY;

  const radius = 54;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Portfolio Quality</h3>
          <p className="text-[11px] text-slate-500 font-medium">Delinquency & DPD aging buckets</p>
        </div>

        <button className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-md cursor-pointer">
          <span>NPA View</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>
      </div>

      {/* Donut and Aging Breakdown */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
        {/* Donut */}
        <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90 transform">
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="transparent"
              stroke="#f1f5f9"
              strokeWidth={strokeWidth}
            />

            {buckets.map((b) => {
              const dashLength = (b.percentage / 100) * circumference;
              const strokeDasharray = `${dashLength} ${circumference}`;
              const strokeDashoffset = -currentOffset;
              currentOffset += dashLength;
              const isHovered = activeBucket === b.label;

              return (
                <circle
                  key={b.label}
                  cx="70"
                  cy="70"
                  r={radius}
                  fill="transparent"
                  stroke={b.color}
                  strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setActiveBucket(b.label)}
                  onMouseLeave={() => setActiveBucket(null)}
                />
              );
            })}
          </svg>

          {/* Center NPA Callout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="text-base font-black text-slate-900 leading-tight tabular-nums">1.8%</span>
            <span className="text-[10px] font-bold text-red-600 uppercase tracking-tight">NPA</span>
          </div>
        </div>

        {/* Breakdown List */}
        <div className="flex-1 w-full space-y-1.5">
          {buckets.map((b) => {
            const isHovered = activeBucket === b.label;
            return (
              <div
                key={b.label}
                onMouseEnter={() => setActiveBucket(b.label)}
                onMouseLeave={() => setActiveBucket(null)}
                className={`flex items-center justify-between px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  isHovered ? 'bg-slate-100' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: b.color }} />
                  <span className="text-xs font-semibold text-slate-700">{b.label}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-900 tabular-nums">{b.percentage}%</span>
                  <span className="text-xs text-slate-500 tabular-nums min-w-[65px] text-right font-medium">
                    {b.amount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Provision Coverage Ratio: 78.4%</span>
        <span className="text-emerald-700 font-semibold flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> Well within RBI threshold
        </span>
      </div>
    </div>
  );
};
