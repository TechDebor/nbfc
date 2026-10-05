import React, { useState } from 'react';
import { EMPLOYEE_PERFORMANCE } from '../../data/mockData';
import { EmployeePerformance } from '../../types/nbfc';
import { Award, User } from 'lucide-react';

interface EmployeePerformanceCardProps {
  onViewAll?: () => void;
  onSelectEmployee?: (emp: EmployeePerformance) => void;
}

export const EmployeePerformanceCard: React.FC<EmployeePerformanceCardProps> = ({
  onViewAll,
  onSelectEmployee
}) => {
  const [tab, setTab] = useState<'top' | 'bottom' | 'team'>('top');

  const topList = EMPLOYEE_PERFORMANCE.filter(e => e.type === 'top');
  const bottomList = EMPLOYEE_PERFORMANCE.filter(e => e.type === 'bottom');

  const teamData = [
    { id: 1, name: 'Marwar Sourcing Team', role: 'Sales Cluster', disbursement: '₹ 48.2 Cr', target: '₹ 42 Cr', achievement: 114 },
    { id: 2, name: 'Jaipur Metro Central', role: 'Branch Hub', disbursement: '₹ 66.1 Cr', target: '₹ 59 Cr', achievement: 112 },
    { id: 3, name: 'Mewar Rural LAP Wing', role: 'Credit Vertical', disbursement: '₹ 32.4 Cr', target: '₹ 30 Cr', achievement: 108 },
    { id: 4, name: 'Shekhawati Two-Wheeler Hub', role: 'Retail Hub', disbursement: '₹ 19.5 Cr', target: '₹ 20 Cr', achievement: 97.5 }
  ];

  const currentList = tab === 'top' ? topList : tab === 'bottom' ? bottomList : teamData;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header & Tabs */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Employee Performance</h3>
            <p className="text-[11px] text-slate-500 font-medium">Individual productivity & target achievement</p>
          </div>

          <button
            onClick={onViewAll}
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer"
          >
            View All →
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 mb-2">
          <button
            onClick={() => setTab('top')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              tab === 'top' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Top Performers
          </button>
          <button
            onClick={() => setTab('bottom')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              tab === 'bottom' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Bottom Performers
          </button>
          <button
            onClick={() => setTab('team')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              tab === 'team' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Team View
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto my-1">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
              <th className="py-1.5 pr-2 w-6 text-slate-400">#</th>
              <th className="py-1.5 px-2">Employee</th>
              <th className="py-1.5 px-2">Role</th>
              <th className="py-1.5 px-2 text-right">Disbursement</th>
              <th className="py-1.5 px-2 text-right">Target</th>
              <th className="py-1.5 pl-2 text-right">Achieved</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {currentList.map((emp, idx) => (
              <tr
                key={emp.id}
                onClick={() => 'type' in emp && onSelectEmployee?.(emp as EmployeePerformance)}
                className="hover:bg-blue-50/60 transition-colors cursor-pointer"
              >
                <td className="py-2 pr-2 text-slate-400 text-[11px] font-mono">{idx + 1}</td>
                <td className="py-2 px-2 font-bold text-slate-900 truncate max-w-[120px]" title={emp.name}>
                  {emp.name}
                </td>
                <td className="py-2 px-2 text-slate-500 font-semibold text-[11px]">
                  <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {emp.role}
                  </span>
                </td>
                <td className="py-2 px-2 text-right font-extrabold text-blue-900 tabular-nums">
                  {emp.disbursement}
                </td>
                <td className="py-2 px-2 text-right text-slate-500 tabular-nums">
                  {emp.target}
                </td>
                <td className="py-2 pl-2 text-right">
                  <span
                    className={`font-black tabular-nums ${
                      emp.achievement >= 110
                        ? 'text-emerald-700'
                        : emp.achievement >= 100
                        ? 'text-blue-700'
                        : emp.achievement >= 90
                        ? 'text-amber-600'
                        : 'text-red-600'
                    }`}
                  >
                    {emp.achievement}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Total Sales Officers: 412</span>
        <span className="text-blue-700 font-semibold cursor-pointer hover:underline">
          View Incentive Scorecard
        </span>
      </div>
    </div>
  );
};
