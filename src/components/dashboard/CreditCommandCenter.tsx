import React from 'react';
import { Clock, ShieldAlert, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

interface CreditCommandCenterProps {
  onQueueClick?: () => void;
}

export const CreditCommandCenter: React.FC<CreditCommandCenterProps> = ({
  onQueueClick
}) => {
  const tatData = [
    { label: '< 1 Day', percentage: 54, count: '1,532', color: 'bg-emerald-500' },
    { label: '1-2 Days', percentage: 28, count: '794', color: 'bg-blue-500' },
    { label: '2-3 Days', percentage: 14, count: '397', color: 'bg-amber-500' },
    { label: '> 3 Days', percentage: 4, count: '113', color: 'bg-red-500' },
  ];

  const riskGrades = [
    { grade: 'A', label: 'Grade A (Low Risk)', pct: 14, color: '#38bdf8' },
    { grade: 'B', label: 'Grade B (Prime)', pct: 39, color: '#2563eb' },
    { grade: 'C', label: 'Grade C (Moderate)', pct: 19, color: '#10b981' },
    { grade: 'D', label: 'Grade D (Borderline)', pct: 12, color: '#f59e0b' },
    { grade: 'E', label: 'Grade E (High Risk)', pct: 16, color: '#ef4444' }
  ];

  // Donut values
  const radius = 38;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;
  let currentOffset = 0;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Credit Command Center</h3>
          <p className="text-[11px] text-slate-500 font-medium">Underwriting queue, TAT & risk grade dispersion</p>
        </div>

        <button
          onClick={onQueueClick}
          className="text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer"
        >
          Open Queue →
        </button>
      </div>

      {/* Top Credit Key KPI Indicators */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-2 bg-slate-50 border border-slate-100 rounded-lg mb-3 text-center">
        <div className="p-1 rounded cursor-pointer hover:bg-white transition-colors" onClick={onQueueClick}>
          <div className="text-[10px] text-slate-400 font-medium truncate">Credit Queue</div>
          <div className="text-xs sm:text-sm font-black text-blue-700 tabular-nums">127</div>
        </div>
        <div className="p-1 rounded">
          <div className="text-[10px] text-slate-400 font-medium truncate">Avg TAT</div>
          <div className="text-xs sm:text-sm font-black text-emerald-700 tabular-nums">3.6h</div>
        </div>
        <div className="p-1 rounded">
          <div className="text-[10px] text-slate-400 font-medium truncate">CAM Pending</div>
          <div className="text-xs sm:text-sm font-black text-amber-600 tabular-nums">42</div>
        </div>
        <div className="p-1 rounded">
          <div className="text-[10px] text-slate-400 font-medium truncate">Risk Flags</div>
          <div className="text-xs sm:text-sm font-black text-red-600 tabular-nums">18</div>
        </div>
        <div className="p-1 rounded">
          <div className="text-[10px] text-slate-400 font-medium truncate">Technical</div>
          <div className="text-xs sm:text-sm font-black text-slate-700 tabular-nums">14</div>
        </div>
        <div className="p-1 rounded">
          <div className="text-[10px] text-slate-400 font-medium truncate">Legal Pending</div>
          <div className="text-xs sm:text-sm font-black text-slate-700 tabular-nums">8</div>
        </div>
      </div>

      {/* Two Sub-Panels: TAT Distribution & Risk Grade Distribution */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        {/* Sub-panel 1: TAT Analysis */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
            <span>Credit TAT Analysis</span>
            <span className="text-[10px] text-slate-400 font-normal">Applications %</span>
          </div>

          <div className="space-y-2">
            {tatData.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-[11px] mb-0.5">
                  <span className="font-semibold text-slate-600">{item.label}</span>
                  <span className="font-bold text-slate-900 tabular-nums">{item.percentage}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-300`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-panel 2: Risk Grade Distribution Donut */}
        <div className="flex items-center justify-between gap-2 border-l border-slate-100 pl-3">
          {/* Mini Donut */}
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
              <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#f1f5f9" strokeWidth={strokeWidth} />
              {riskGrades.map((g) => {
                const dash = (g.pct / 100) * circumference;
                const offset = -currentOffset;
                currentOffset += dash;
                return (
                  <circle
                    key={g.grade}
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="transparent"
                    stroke={g.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${dash} ${circumference}`}
                    strokeDashoffset={offset}
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-xs font-black text-slate-900 leading-none">284</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase mt-0.5">Cases</span>
            </div>
          </div>

          {/* Grade legend */}
          <div className="flex-1 space-y-1 text-[11px]">
            {riskGrades.map((g) => (
              <div key={g.grade} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: g.color }} />
                  <span className="text-slate-600 font-medium">Grade {g.grade}</span>
                </div>
                <span className="font-bold text-slate-800 tabular-nums">{g.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
