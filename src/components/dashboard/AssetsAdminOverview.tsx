import React from 'react';
import { Laptop, CheckSquare, FileText, Monitor, ChevronRight } from 'lucide-react';

interface AssetsAdminOverviewProps {
  onViewAll?: () => void;
}

export const AssetsAdminOverview: React.FC<AssetsAdminOverviewProps> = ({
  onViewAll
}) => {
  const items = [
    {
      title: 'Total Asset Requests',
      count: 148,
      subtext: '8 Pending approval',
      icon: Laptop,
      color: 'text-blue-700',
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      title: 'Assigned Assets',
      count: 58,
      subtext: '+9 this month',
      icon: CheckSquare,
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100'
    },
    {
      title: 'Admin Requests',
      count: 42,
      subtext: '8 Budget Pending',
      icon: FileText,
      color: 'text-amber-700',
      bg: 'bg-amber-50',
      border: 'border-amber-100'
    },
    {
      title: 'Office Devices',
      count: 14,
      subtext: '3 Offline streams',
      icon: Monitor,
      color: 'text-purple-700',
      bg: 'bg-purple-50',
      border: 'border-purple-100'
    }
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Assets & Admin Overview</h3>
          <p className="text-[11px] text-slate-500 font-medium">Branch hardware, laptops & office requisitions</p>
        </div>

        <button
          onClick={onViewAll}
          className="text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer"
        >
          View All →
        </button>
      </div>

      {/* 4 Mini Cards Grid */}
      <div className="grid grid-cols-2 gap-2 my-auto">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`p-2.5 rounded-lg border ${item.bg} ${item.border} flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className={`text-base font-extrabold ${item.color} tabular-nums`}>
                  {item.count}
                </span>
              </div>
              <div className="mt-1">
                <div className="text-[11px] font-bold text-slate-800 leading-tight truncate">
                  {item.title}
                </div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                  {item.subtext}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Hardware uptime: 98.2%</span>
        <span className="text-blue-700 font-semibold cursor-pointer hover:underline">
          Requisition Portal
        </span>
      </div>
    </div>
  );
};
