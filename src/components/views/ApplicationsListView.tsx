import React, { useState } from 'react';
import { LoanApplication } from '../../types/nbfc';
import { Search, Filter, Plus, FileText, ArrowUpDown, ChevronRight } from 'lucide-react';

interface ApplicationsListViewProps {
  applications: LoanApplication[];
  onSelectApplication: (app: LoanApplication) => void;
  onNewApplication: () => void;
}

export const ApplicationsListView: React.FC<ApplicationsListViewProps> = ({
  applications,
  onSelectApplication,
  onNewApplication
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  const filtered = applications.filter((app) => {
    const matchesSearch =
      app.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.product.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = selectedStatus === 'ALL' || app.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In Queue': return 'bg-slate-100 text-slate-700';
      case 'Credit Review': return 'bg-amber-100 text-amber-800';
      case 'CAM Generated': return 'bg-blue-100 text-blue-800';
      case 'Sanctioned': return 'bg-purple-100 text-purple-800';
      case 'Disbursed': return 'bg-emerald-100 text-emerald-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <h2 className="text-base font-bold text-slate-900 tracking-tight">Active Loan Applications (LOS)</h2>
          <p className="text-xs text-slate-500 font-medium">Pipeline tracking, underwriting status and decisioning</p>
        </div>

        <button
          onClick={onNewApplication}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Application</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
        <div className="relative w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter by applicant, file ID, branch..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto text-xs">
          {['ALL', 'In Queue', 'Credit Review', 'CAM Generated', 'Sanctioned', 'Disbursed'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
                selectedStatus === st
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">File ID</th>
                <th className="py-2.5 px-3">Applicant Name</th>
                <th className="py-2.5 px-3">Product</th>
                <th className="py-2.5 px-3">Branch</th>
                <th className="py-2.5 px-3 text-right">Loan Amount</th>
                <th className="py-2.5 px-3 text-center">CIBIL</th>
                <th className="py-2.5 px-3 text-center">TAT</th>
                <th className="py-2.5 px-3 text-center">Status</th>
                <th className="py-2.5 pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((app) => (
                <tr
                  key={app.id}
                  onClick={() => onSelectApplication(app)}
                  className="hover:bg-blue-50/60 transition-colors cursor-pointer group"
                >
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{app.id}</td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{app.applicantName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{app.phone}</div>
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">{app.product}</td>
                  <td className="py-3 px-3 text-slate-600">{app.branch}</td>
                  <td className="py-3 px-3 text-right font-extrabold text-slate-900 tabular-nums">
                    ₹{(app.amount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="font-bold text-emerald-700 tabular-nums">{app.cibilScore}</span>
                  </td>
                  <td className="py-3 px-3 text-center font-semibold text-slate-600 tabular-nums">
                    {app.tatHours}h
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getStatusBadge(app.status)}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <span className="inline-flex items-center text-blue-600 group-hover:text-blue-800 font-bold text-xs">
                      View File <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-xs">
            No active loan applications match your search query.
          </div>
        )}
      </div>
    </div>
  );
};
