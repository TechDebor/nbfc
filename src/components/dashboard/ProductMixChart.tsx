import React, { useState } from 'react';
import { PRODUCT_PERFORMANCE } from '../../data/mockData';

type MetricView = 'aum' | 'disb' | 'customers';

export const ProductMixChart: React.FC = () => {
  const [view, setView] = useState<MetricView>('aum');
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const products = PRODUCT_PERFORMANCE;

  // Compute values based on view
  const totalValue = view === 'aum'
    ? '₹ 1,248 Cr'
    : view === 'disb'
    ? '₹ 185 Cr'
    : '52,318';

  const viewLabel = view === 'aum'
    ? 'Total AUM'
    : view === 'disb'
    ? 'Total Disb'
    : 'Total Active';

  // SVG Donut calculation
  const radius = 62;
  const strokeWidth = 22;
  const circumference = 2 * Math.PI * radius;

  let currentAngle = 0;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header & Segmented Controls */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Product Mix & Performance</h3>
          <p className="text-[11px] text-slate-500 font-medium">Asset distribution by vertical</p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-0.5 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
          <button
            onClick={() => setView('aum')}
            className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
              view === 'aum' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            AUM
          </button>
          <button
            onClick={() => setView('disb')}
            className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
              view === 'disb' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Disbursement
          </button>
          <button
            onClick={() => setView('customers')}
            className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all cursor-pointer ${
              view === 'customers' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Customers
          </button>
        </div>
      </div>

      {/* Donut and Legend Grid */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-1">
        {/* Donut SVG */}
        <div className="relative w-40 h-40 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90 transform">
            {/* Background ring */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="transparent"
              stroke="#f1f5f9"
              strokeWidth={strokeWidth}
            />

            {/* Slices */}
            {products.map((p) => {
              const strokeDasharray = `${(p.percentage / 100) * circumference} ${circumference}`;
              const strokeDashoffset = -currentAngle;
              currentAngle += (p.percentage / 100) * circumference;
              const isHovered = activeSegment === p.key;

              return (
                <circle
                  key={p.key}
                  cx="80"
                  cy="80"
                  r={radius}
                  fill="transparent"
                  stroke={p.color}
                  strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-200 cursor-pointer"
                  onMouseEnter={() => setActiveSegment(p.key)}
                  onMouseLeave={() => setActiveSegment(null)}
                />
              );
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight">{viewLabel}</span>
            <span className="text-base font-extrabold text-slate-900 leading-tight tabular-nums">{totalValue}</span>
          </div>
        </div>

        {/* Right Product Breakdown List */}
        <div className="flex-1 w-full space-y-1.5">
          {products.map((p) => {
            const isHovered = activeSegment === p.key;
            const displayVal = view === 'aum'
              ? p.aumAmount
              : view === 'disb'
              ? p.disbAmount
              : p.customersCount.toLocaleString();

            return (
              <div
                key={p.key}
                onMouseEnter={() => setActiveSegment(p.key)}
                onMouseLeave={() => setActiveSegment(null)}
                className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  isHovered ? 'bg-blue-50/80 shadow-2xs' : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  <span className="text-xs font-semibold text-slate-800">{p.name}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-500 tabular-nums">{p.percentage}%</span>
                  <span className="text-xs font-bold text-slate-900 tabular-nums min-w-[64px] text-right">
                    {displayVal}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Active verticals: 5</span>
        <span className="text-blue-700 font-semibold cursor-pointer hover:underline">Download Portfolio Mix</span>
      </div>
    </div>
  );
};
