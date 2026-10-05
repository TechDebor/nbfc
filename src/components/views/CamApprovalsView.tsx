import React, { useState } from 'react';
import { CAM_APPROVAL_ITEMS } from '../../data/mockData';
import { CamApprovalItem } from '../../types/nbfc';
import { FileText, Search, Download, CheckCircle2, ShieldCheck, ChevronRight, Calculator } from 'lucide-react';

export const CamApprovalsView: React.FC = () => {
  const [cams, setCams] = useState<CamApprovalItem[]>(CAM_APPROVAL_ITEMS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [selectedCam, setSelectedCam] = useState<CamApprovalItem | null>(null);

  const filtered = cams.filter(c => {
    const matchesSearch =
      c.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.preparedBy.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || c.approvalStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApproveCam = (id: string) => {
    setCams(prev =>
      prev.map(c => (c.id === id ? { ...c, approvalStatus: 'Approved' } : c))
    );
    setSelectedCam(null);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Credit Appraisal Memo (CAM) Approvals</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">Detailed financial cashflows, Debt Service Coverage Ratio (DSCR), LTV ratios and underwriter sign-offs</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg">
            Standard Benchmark: DSCR &gt; 1.50x · LTV &lt; 70%
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
        <div className="relative w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by CAM ID, applicant, vertical..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto">
          {['ALL', 'Ready for Sign-off', 'Approved', 'Disbursal Ready', 'Returned for Verification'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-2.5 py-1 rounded-md font-semibold cursor-pointer transition-colors ${
                statusFilter === st
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* CAM Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">CAM ID</th>
                <th className="py-2.5 px-3">Applicant Name</th>
                <th className="py-2.5 px-3">Loan Vertical</th>
                <th className="py-2.5 px-3 text-right">Requested</th>
                <th className="py-2.5 px-3 text-right">Assessed Loan</th>
                <th className="py-2.5 px-3 text-center">DSCR Ratio</th>
                <th className="py-2.5 px-3 text-center">LTV %</th>
                <th className="py-2.5 px-3">Underwriter</th>
                <th className="py-2.5 px-3 text-center">Status</th>
                <th className="py-2.5 pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((cam) => (
                <tr key={cam.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{cam.id}</td>
                  <td className="py-3 px-3 font-bold text-slate-900">{cam.applicantName}</td>
                  <td className="py-3 px-3 font-semibold text-slate-800">{cam.product}</td>
                  <td className="py-3 px-3 text-right text-slate-500 tabular-nums">
                    ₹{(cam.requestedAmount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-right font-extrabold text-blue-900 tabular-nums">
                    ₹{(cam.assessedAmount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`font-black tabular-nums ${
                        cam.dscrRatio >= 1.5 ? 'text-emerald-700' : 'text-amber-600'
                      }`}
                    >
                      {cam.dscrRatio.toFixed(2)}x
                    </span>
                  </td>
                  <td className="py-3 px-3 text-center font-bold text-slate-800 tabular-nums">
                    {cam.ltvRatio}%
                  </td>
                  <td className="py-3 px-3 text-slate-600 text-[11px]">{cam.preparedBy}</td>
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        cam.approvalStatus === 'Approved' || cam.approvalStatus === 'Disbursal Ready'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : cam.approvalStatus === 'Ready for Sign-off'
                          ? 'bg-blue-50 text-blue-800 border-blue-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      {cam.approvalStatus}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <button
                      onClick={() => setSelectedCam(cam)}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-slate-300 text-blue-700 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      Audit CAM
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CAM Audit Dialog */}
      {selectedCam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedCam.applicantName}</h3>
                <p className="text-xs text-slate-500 font-mono">{selectedCam.id} · {selectedCam.product}</p>
              </div>
              <button onClick={() => setSelectedCam(null)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500">Assessed Loan Quantum:</span>
                  <div className="text-base font-extrabold text-blue-900 mt-0.5">
                    ₹{(selectedCam.assessedAmount / 100000).toFixed(2)} Lakhs
                  </div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500">Valuation Benchmark:</span>
                  <div className="text-base font-extrabold text-slate-900 mt-0.5">
                    ₹{(selectedCam.valuationAmount / 100000).toFixed(2)} Lakhs
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-600">Debt Service Coverage (DSCR):</span>
                  <b className="text-emerald-700 font-extrabold">{selectedCam.dscrRatio.toFixed(2)}x</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Loan to Value (LTV):</span>
                  <b className="text-slate-900">{selectedCam.ltvRatio}%</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Verified Annual Inflow:</span>
                  <b className="text-slate-900">₹{(selectedCam.annualIncome / 100000).toFixed(2)} L/year</b>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">CAM Financial Score:</span>
                  <b className="text-blue-700">{selectedCam.camScore} / 100</b>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                onClick={() => handleApproveCam(selectedCam.id)}
                className="py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Sign-off & Approve CAM</span>
              </button>
              <button
                onClick={() => alert(`Downloading detailed CAM PDF for ${selectedCam.applicantName}`)}
                className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Export Memo PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
