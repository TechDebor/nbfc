import React, { useState } from 'react';
import { BRANCH_PERFORMANCE } from '../../data/mockData';
import { BranchPerformance } from '../../types/nbfc';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

interface BranchPerformanceTableProps {
  onViewAll?: () => void;
  onSelectBranch?: (branch: BranchPerformance) => void;
}

export const BranchPerformanceTable: React.FC<BranchPerformanceTableProps> = ({
  onViewAll,
  onSelectBranch
}) => {
  const [tab, setTab] = useState<'branches' | 'regions' | 'zones'>('branches');

  const branches = BRANCH_PERFORMANCE.slice(0, 5);

  const regionData = [
    { id: 1, name: 'North (Rajasthan Central & Jaipur)', target: '₹ 85 Cr', disbursement: '₹ 94.2 Cr', achievement: 111, growth: '+ 16%', collection: '97.5%' },
    { id: 2, name: 'South (Mewar & Udaipur)', target: '₹ 38 Cr', disbursement: '₹ 41.5 Cr', achievement: 109, growth: '+ 12%', collection: '96.8%' },
    { id: 3, name: 'East (Hadoti & Kota)', target: '₹ 32 Cr', disbursement: '₹ 35.8 Cr', achievement: 112, growth: '+ 15%', collection: '96.0%' },
    { id: 4, name: 'West (Marwar & Jodhpur)', target: '₹ 35 Cr', disbursement: '₹ 39.2 Cr', achievement: 112, growth: '+ 18%', collection: '95.2%' },
    { id: 5, name: 'Central (Ajmer & Pushkar)', target: '₹ 25 Cr', disbursement: '₹ 27.5 Cr', achievement: 110, growth: '+ 11%', collection: '96.5%' }
  ];

  const zoneData = [
    { id: 1, name: 'Zone 1 (Jaipur Metropolitan)', target: '₹ 95 Cr', disbursement: '₹ 106.5 Cr', achievement: 112, growth: '+ 17%', collection: '98.0%' },
    { id: 2, name: 'Zone 2 (Mewar & Vagad)', target: '₹ 42 Cr', disbursement: '₹ 45.8 Cr', achievement: 109, growth: '+ 11%', collection: '97.0%' },
    { id: 3, name: 'Zone 3 (Chambal & Shekhawati)', target: '₹ 36 Cr', disbursement: '₹ 40.2 Cr', achievement: 111, growth: '+ 14%', collection: '96.2%' },
    { id: 4, name: 'Zone 4 (Thar & Marwar)', target: '₹ 42 Cr', disbursement: '₹ 48.0 Cr', achievement: 114, growth: '+ 19%', collection: '95.5%' }
  ];

  const currentList = tab === 'branches' ? branches : tab === 'regions' ? regionData : zoneData;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header & Tabs */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Branch Performance</h3>
            <p className="text-[11px] text-slate-500 font-medium">Disbursement against branch targets</p>
          </div>

          <button
            onClick={onViewAll}
            className="text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer"
          >
            View All →
          </button>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1 mb-2.5">
          <button
            onClick={() => setTab('branches')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              tab === 'branches' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Top Branches
          </button>
          <button
            onClick={() => setTab('regions')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              tab === 'regions' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Top Regions
          </button>
          <button
            onClick={() => setTab('zones')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              tab === 'zones' ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Top Zones
          </button>
        </div>
      </div>

      {/* Performance Data Table */}
      <div className="overflow-x-auto my-1">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
              <th className="py-1.5 pr-2 w-6 text-slate-400">#</th>
              <th className="py-1.5 px-2">Branch</th>
              <th className="py-1.5 px-2">Target</th>
              <th className="py-1.5 px-2">Disbursement</th>
              <th className="py-1.5 px-2 text-right">Achievement</th>
              <th className="py-1.5 px-2 text-right">Growth</th>
              <th className="py-1.5 pl-2 text-right">Collection</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            {currentList.map((item, idx) => (
              <tr
                key={item.id}
                onClick={() => 'disbValue' in item && onSelectBranch?.(item as BranchPerformance)}
                className="hover:bg-blue-50/60 transition-colors cursor-pointer"
              >
                <td className="py-2 pr-2 text-slate-400 text-[11px] font-mono">{idx + 1}</td>
                <td className="py-2 px-2 font-bold text-slate-900 truncate max-w-[130px]" title={item.name}>
                  {item.name}
                </td>
                <td className="py-2 px-2 text-slate-500 tabular-nums">{item.target}</td>
                <td className="py-2 px-2 font-extrabold text-blue-900 tabular-nums">{item.disbursement}</td>
                <td className="py-2 px-2 text-right">
                  <span className="font-extrabold text-emerald-700 tabular-nums">
                    {item.achievement}%
                  </span>
                </td>
                <td className="py-2 px-2 text-right">
                  <span className="inline-flex items-center text-emerald-700 font-semibold tabular-nums text-[11px]">
                    <ArrowUpRight className="w-3 h-3 inline mr-0.5" />
                    {item.growth}
                  </span>
                </td>
                <td className="py-2 pl-2 text-right font-bold text-slate-800 tabular-nums">
                  {item.collection}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Average Target Achievement: 112.2%</span>
        <span className="text-emerald-700 font-semibold flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> All top branches &gt; 100%
        </span>
      </div>
    </div>
  );
};
