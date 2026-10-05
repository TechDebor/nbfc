import React, { useState } from 'react';
import { MONTHLY_COLLECTION_DATA } from '../../data/mockData';
import { ChevronDown } from 'lucide-react';

export const CollectionPerformanceChart: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const data = MONTHLY_COLLECTION_DATA;

  const chartWidth = 420;
  const chartHeight = 150;
  const maxAmount = 180;
  const paddingX = 35;
  const paddingY = 20;

  const getBarX = (idx: number) => {
    return paddingX + (idx / data.length) * (chartWidth - paddingX * 2);
  };

  const getYAmount = (amt: number) => {
    return chartHeight - paddingY - (amt / maxAmount) * (chartHeight - paddingY * 2);
  };

  const getYEfficiency = (eff: number) => {
    // 94% to 98% scale for line
    return chartHeight - paddingY - ((eff - 94) / 4) * (chartHeight - paddingY * 2);
  };

  // Efficiency line points
  const effPoints = data
    .map((d, i) => `${getBarX(i) + 18},${getYEfficiency(d.efficiency)}`)
    .join(' ');

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Collection Performance</h3>
          <p className="text-[11px] text-slate-500 font-medium">EMI demand recovery & resolution</p>
        </div>

        <button className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-md cursor-pointer">
          <span>MTD</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-4 gap-2 p-2 bg-slate-50 border border-slate-100 rounded-lg mb-2">
        <div>
          <div className="text-[10px] text-slate-400 font-medium">Due</div>
          <div className="text-xs sm:text-sm font-extrabold text-slate-900 tabular-nums">₹ 164 Cr</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-medium">Collected</div>
          <div className="text-xs sm:text-sm font-extrabold text-blue-700 tabular-nums">₹ 158 Cr</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-medium">Efficiency</div>
          <div className="text-xs sm:text-sm font-extrabold text-emerald-700 tabular-nums">96.4%</div>
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-medium">Remaining</div>
          <div className="text-xs sm:text-sm font-extrabold text-red-600 tabular-nums">₹ 6 Cr</div>
        </div>
      </div>

      {/* SVG Dual-Axis Chart */}
      <div className="relative w-full overflow-hidden">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-36 overflow-visible">
          {/* Horizontal lines */}
          {[40, 80, 120, 160].map((val) => (
            <line
              key={val}
              x1={paddingX}
              y1={getYAmount(val)}
              x2={chartWidth - paddingX}
              y2={getYAmount(val)}
              stroke="#f1f5f9"
              strokeWidth="1"
            />
          ))}

          {/* Grouped Bars */}
          {data.map((d, i) => {
            const x = getBarX(i);
            const dueHeight = (d.due / maxAmount) * (chartHeight - paddingY * 2);
            const collectedHeight = (d.collected / maxAmount) * (chartHeight - paddingY * 2);
            const isHovered = hoveredIdx === i;

            return (
              <g
                key={`${d.month}-${i}`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Due Bar (Cyan/Blue) */}
                <rect
                  x={x + 4}
                  y={chartHeight - paddingY - dueHeight}
                  width="12"
                  height={dueHeight}
                  fill={isHovered ? "#38bdf8" : "#93c5fd"}
                  rx="2"
                />

                {/* Collected Bar (Deep Blue/Teal) */}
                <rect
                  x={x + 18}
                  y={chartHeight - paddingY - collectedHeight}
                  width="12"
                  height={collectedHeight}
                  fill={isHovered ? "#0284c7" : "#0369a1"}
                  rx="2"
                />

                {/* Month Label */}
                <text
                  x={x + 17}
                  y={chartHeight - 4}
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="9.5"
                  fontWeight={isHovered ? "bold" : "normal"}
                >
                  {d.month}
                </text>
              </g>
            );
          })}

          {/* Efficiency Line */}
          <polyline
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
            points={effPoints}
          />

          {/* Efficiency Dots */}
          {data.map((d, i) => (
            <circle
              key={`${d.month}-${i}`}
              cx={getBarX(i) + 18}
              cy={getYEfficiency(d.efficiency)}
              r={hoveredIdx === i ? 4 : 2.5}
              fill="#ef4444"
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          ))}
        </svg>

        {/* Hover Tooltip */}
        {hoveredIdx !== null && (
          <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] px-2.5 py-1 rounded-lg shadow-md flex items-center gap-3 z-10 pointer-events-none">
            <span className="font-bold text-amber-300">{data[hoveredIdx].month}</span>
            <span>Due: <b>₹{data[hoveredIdx].due} Cr</b></span>
            <span>Coll: <b>₹{data[hoveredIdx].collected} Cr</b></span>
            <span>Eff: <b className="text-emerald-400">{data[hoveredIdx].efficiency}%</b></span>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 pt-2 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#93c5fd] rounded-xs" />
          <span className="text-[11px]">Due</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-[#0369a1] rounded-xs" />
          <span className="text-[11px]">Collected</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-red-500 rounded-full" />
          <span className="text-[11px]">Efficiency %</span>
        </div>
      </div>
    </div>
  );
};
