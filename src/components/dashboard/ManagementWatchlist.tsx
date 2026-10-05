import React from 'react';
import { WATCHLIST_ITEMS } from '../../data/mockData';
import { WatchlistItem } from '../../types/nbfc';
import { AlertCircle, ChevronRight, ShieldAlert } from 'lucide-react';

interface ManagementWatchlistProps {
  onViewAll?: () => void;
  onSelectItem?: (item: WatchlistItem) => void;
}

export const ManagementWatchlist: React.FC<ManagementWatchlistProps> = ({
  onViewAll,
  onSelectItem
}) => {
  const items = WATCHLIST_ITEMS;

  const severityStyles: Record<string, { bg: string; text: string; border: string }> = {
    CRITICAL: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
    HIGH: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    MEDIUM: { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200' }
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-red-600" />
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Management Watchlist</h3>
        </div>

        <button
          onClick={onViewAll}
          className="text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer"
        >
          View All →
        </button>
      </div>

      {/* Items List */}
      <div className="divide-y divide-slate-100 my-auto">
        {items.map((item) => {
          const style = severityStyles[item.severity] || severityStyles.MEDIUM;
          return (
            <div
              key={item.id}
              onClick={() => onSelectItem?.(item)}
              className="py-1.5 px-1 flex items-center justify-between hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-red-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-800 truncate" title={item.title}>
                  {item.title}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="font-extrabold text-xs text-slate-900 tabular-nums">
                  {item.count}
                </span>
                <span
                  className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded border ${style.bg} ${style.text} ${style.border} min-w-[58px] text-center`}
                >
                  {item.severity}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer warning */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Active escalation triggers</span>
        <span className="text-red-600 font-bold flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> 2 Immediate Board Action
        </span>
      </div>
    </div>
  );
};
