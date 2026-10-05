import React, { useState } from 'react';
import { MONTHLY_DISBURSEMENT_DATA } from '../../data/mockData';
import { ChevronDown, TrendingUp, Info } from 'lucide-react';

export const TargetActualChart: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = MONTHLY_DISBURSEMENT_DATA;
  const maxVal = 240;
  const minVal = 100;
  const chartWidth = 560;
  const chartHeight = 170;
  const paddingX = 30;
  const paddingY = 20;

  const getX = (index: number) => {
    return paddingX + (index / (data.length - 1)) * (chartWidth - paddingX * 2);
  };

  const getY = (val: number) => {
    return chartHeight - paddingY - ((val - minVal) / (maxVal - minVal)) * (chartHeight - paddingY * 2);
  };

  // Generate Actual Line & Area points
  const actualPoints = data.map((d, i) => `${getX(i)},${getY(d.actual)}`).join(' ');
  const targetPoints = data.map((d, i) => `${getX(i)},${getY(d.target)}`).join(' ');
  const projectedPoints = data.map((d, i) => `${getX(i)},${getY(d.projected)}`).join(' ');

  const areaPoints = `${getX(0)},${chartHeight - paddingY} ${actualPoints} ${getX(data.length - 1)},${chartHeight - paddingY}`;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">
            Target vs Actual Disbursement
          </h3>
          <p className="text-[11px] text-slate-500 font-medium">Monthly trajectory & projection</p>
        </div>

        <button className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-md cursor-pointer">
          <span>MTD</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </button>
      </div>

      {/* Top Key Metrics Banner */}
      <div className="grid grid-cols-4 gap-2 p-2 bg-slate-50 border border-slate-100 rounded-lg mb-3">
        <div className="text-left">
          <div className="text-[10px] text-slate-400 font-medium">Actual</div>
          <div className="text-xs sm:text-sm font-extrabold text-blue-700 tabular-nums">₹ 186 Cr</div>
        </div>
        <div className="text-left">
          <div className="text-[10px] text-slate-400 font-medium">Target</div>
          <div className="text-xs sm:text-sm font-extrabold text-slate-800 tabular-nums">₹ 215 Cr</div>
        </div>
        <div className="text-left">
          <div className="text-[10px] text-slate-400 font-medium">Achievement</div>
          <div className="text-xs sm:text-sm font-extrabold text-amber-600 tabular-nums">86.5%</div>
        </div>
        <div className="text-left">
          <div className="text-[10px] text-slate-400 font-medium">Projected</div>
          <div className="text-xs sm:text-sm font-extrabold text-cyan-600 tabular-nums">₹ 224 Cr</div>
        </div>
      </div>

      {/* Interactive SVG Chart */}
      <div className="relative w-full overflow-hidden">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-44 overflow-visible">
          <defs>
            <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[100, 140, 180, 220].map((level) => (
            <line
              key={level}
              x1={paddingX}
              y1={getY(level)}
              x2={chartWidth - paddingX}
              y2={getY(level)}
              stroke="#f1f5f9"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {/* Area Fill */}
          <polygon fill="url(#actualGradient)" points={areaPoints} />

          {/* Target Line (Red Dashed) */}
          <polyline
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="4 3"
            points={targetPoints}
          />

          {/* Projected Line (Light Cyan Dashed) */}
          <polyline
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeDasharray="3 3"
            points={projectedPoints}
          />

          {/* Actual Line (Solid Blue) */}
          <polyline
            fill="none"
            stroke="#0284c7"
            strokeWidth="2.5"
            strokeLinecap="round"
            points={actualPoints}
          />

          {/* Data Points on Hover / Last */}
          {data.map((d, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <g key={`${d.month}-${i}`} className="cursor-pointer" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                {/* Invisible hover bar */}
                <rect
                  x={getX(i) - 15}
                  y={0}
                  width="30"
                  height={chartHeight}
                  fill="transparent"
                />
                
                {/* Actual Dot */}
                <circle
                  cx={getX(i)}
                  cy={getY(d.actual)}
                  r={isHovered ? 5 : 2.5}
                  fill="#0284c7"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />

                {/* Target Dot */}
                <circle
                  cx={getX(i)}
                  cy={getY(d.target)}
                  r={isHovered ? 4 : 2}
                  fill="#ef4444"
                />

                {/* X-Axis Month Label */}
                <text
                  x={getX(i)}
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
        </svg>

        {/* Hover Tooltip Card */}
        {hoveredIndex !== null && (
          <div
            className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[11px] px-2.5 py-1.5 rounded-lg shadow-lg pointer-events-none flex items-center gap-3 z-20"
          >
            <span className="font-bold text-amber-300">{data[hoveredIndex].month}</span>
            <span>Actual: <b className="text-sky-300">₹{data[hoveredIndex].actual} Cr</b></span>
            <span>Target: <b className="text-red-300">₹{data[hoveredIndex].target} Cr</b></span>
            <span>Ach: <b>{((data[hoveredIndex].actual / data[hoveredIndex].target) * 100).toFixed(1)}%</b></span>
          </div>
        )}
      </div>

      {/* Chart Legend */}
      <div className="flex items-center justify-center gap-6 pt-2 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 bg-[#0284c7]" />
          <span className="text-[11px]">Actual</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 border-t border-dashed border-red-500" />
          <span className="text-[11px]">Target</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 border-t border-dotted border-sky-400" />
          <span className="text-[11px]">Projection</span>
        </div>
      </div>
    </div>
  );
};
