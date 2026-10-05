import React from 'react';
import { ShieldCheck, Scale, AlertOctagon, Headphones } from 'lucide-react';

interface GovernanceAuditCardProps {
  onViewAll?: () => void;
}

export const GovernanceAuditCard: React.FC<GovernanceAuditCardProps> = ({
  onViewAll
}) => {
  const items = [
    {
      title: 'Open Audits',
      count: '12',
      subtext: '4 Overdue findings',
      icon: Scale,
      color: 'text-blue-700',
      bg: 'bg-blue-50',
      border: 'border-blue-100'
    },
    {
      title: 'Compliance Due',
      count: '18',
      subtext: '2 Overdue filings',
      icon: ShieldCheck,
      color: 'text-amber-700',
      bg: 'bg-amber-50',
      border: 'border-amber-100'
    },
    {
      title: 'Current High Risk',
      count: '3',
      subtext: 'High Risk escalation',
      icon: AlertOctagon,
      color: 'text-red-700',
      bg: 'bg-red-50',
      border: 'border-red-100'
    },
    {
      title: 'Helpdesk SLA',
      count: '96%',
      subtext: 'TAT 1.8 hrs',
      icon: Headphones,
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100'
    }
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Governance, Audit & Compliance</h3>
          <p className="text-[11px] text-slate-500 font-medium">Statutory filings, RBI audits & customer grievance SLA</p>
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
        <span>RBI Fair Practices Code: 100% compliant</span>
        <span className="text-emerald-700 font-semibold cursor-pointer hover:underline">
          Download Compliance Audit PDF
        </span>
      </div>
    </div>
  );
};
