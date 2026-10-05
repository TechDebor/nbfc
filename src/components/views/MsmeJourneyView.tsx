import React, { useState } from 'react';
import { MSME_CASES } from '../../data/mockData';
import { MsmeCase } from '../../types/nbfc';
import { Search, Building2, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export const MsmeJourneyView: React.FC = () => {
  const [cases] = useState<MsmeCase[]>(MSME_CASES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCase, setSelectedCase] = useState<MsmeCase | null>(null);

  const filtered = cases.filter(c =>
    c.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.promoterName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.gstin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">MSME Co-Created Lending Journey</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">Secured & unsecured business loans for Tier-2/3 micro enterprises</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg">
            Active MSME Book: ₹362 Cr
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
        <div className="relative w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search enterprise, GSTIN, promoter..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* MSME Cases Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">Case ID</th>
                <th className="py-2.5 px-3">Enterprise / Business Name</th>
                <th className="py-2.5 px-3">Promoter</th>
                <th className="py-2.5 px-3">Vintage</th>
                <th className="py-2.5 px-3 text-right">Annual Turnover</th>
                <th className="py-2.5 px-3 text-right">Requested Loan</th>
                <th className="py-2.5 px-3">Primary Collateral</th>
                <th className="py-2.5 px-3">Branch</th>
                <th className="py-2.5 px-3 text-center">Appraisal Stage</th>
                <th className="py-2.5 pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{c.id}</td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{c.businessName}</div>
                    <div className="text-[10px] text-slate-400 font-mono">GSTIN: {c.gstin}</div>
                  </td>
                  <td className="py-3 px-3 text-slate-700 font-semibold">{c.promoterName}</td>
                  <td className="py-3 px-3 text-slate-600">{c.businessVintage}</td>
                  <td className="py-3 px-3 text-right font-bold text-slate-800 tabular-nums">
                    ₹{(c.annualTurnover / 10000000).toFixed(2)} Cr
                  </td>
                  <td className="py-3 px-3 text-right font-extrabold text-blue-800 tabular-nums">
                    ₹{(c.loanAmount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-slate-600 max-w-[150px] truncate" title={c.collateralType}>
                    {c.collateralType}
                  </td>
                  <td className="py-3 px-3 text-slate-700">{c.branch}</td>
                  <td className="py-3 px-3 text-center">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <button
                      onClick={() => setSelectedCase(c)}
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

      {/* Case Appraisal Drawer Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedCase.businessName}</h3>
                <p className="text-xs text-slate-500 font-mono">{selectedCase.id} · {selectedCase.branch}</p>
              </div>
              <button onClick={() => setSelectedCase(null)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                ✕
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-500">Collateral Evaluation:</span>
                <p className="font-bold text-slate-900 mt-0.5">{selectedCase.collateralType}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-500">Annual GST Turnover:</span>
                  <p className="font-extrabold text-blue-800 mt-0.5">₹{(selectedCase.annualTurnover / 10000000).toFixed(2)} Cr</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-500">Loan Ticket Size:</span>
                  <p className="font-extrabold text-emerald-800 mt-0.5">₹{(selectedCase.loanAmount / 100000).toFixed(2)} Lakhs</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Financial appraisal report generated for ${selectedCase.businessName}`);
                setSelectedCase(null);
              }}
              className="w-full py-2 bg-blue-600 text-white font-bold text-xs rounded-lg hover:bg-blue-700 cursor-pointer shadow-xs"
            >
              Issue Provisional Sanction
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
