import React, { useState } from 'react';
import { CUSTOMER_PROFILES } from '../../data/mockData';
import { CustomerProfile } from '../../types/nbfc';
import { Search, UserCheck, ShieldCheck, CreditCard, ChevronRight, Phone } from 'lucide-react';

export const Customer360View: React.FC = () => {
  const [customers] = useState<CustomerProfile[]>(CUSTOMER_PROFILES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCust, setSelectedCust] = useState<CustomerProfile | null>(null);

  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.pan.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">Customer 360 Portfolio View</h2>
          </div>
          <p className="text-xs text-slate-500 font-medium">Holistic borrower profiles, active loan exposure and repayment track</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg">
            52,318 Total Verified Borrowers
          </span>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
        <div className="relative w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by customer name, PAN, mobile..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Customer 360 Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                <th className="py-2.5 px-4">Customer ID</th>
                <th className="py-2.5 px-3">Borrower Name</th>
                <th className="py-2.5 px-3">PAN & Phone</th>
                <th className="py-2.5 px-3">Branch Location</th>
                <th className="py-2.5 px-3 text-center">Active Loans</th>
                <th className="py-2.5 px-3 text-right">Total Disbursed</th>
                <th className="py-2.5 px-3 text-right">Current Outstanding</th>
                <th className="py-2.5 px-3 text-center">Credit Score</th>
                <th className="py-2.5 px-3 text-center">KYC Status</th>
                <th className="py-2.5 pr-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((cust) => (
                <tr key={cust.id} className="hover:bg-blue-50/60 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{cust.id}</td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{cust.name}</div>
                    <span className="text-[10px] font-semibold text-slate-400">{cust.segment}</span>
                  </td>
                  <td className="py-3 px-3">
                    <div className="font-mono text-slate-700 font-semibold">{cust.pan}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{cust.phone}</div>
                  </td>
                  <td className="py-3 px-3 text-slate-600">{cust.branch}</td>
                  <td className="py-3 px-3 text-center font-bold text-slate-900">
                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px]">
                      {cust.activeLoans}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right font-semibold text-slate-700 tabular-nums">
                    ₹{(cust.totalBorrowed / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-right font-extrabold text-blue-900 tabular-nums">
                    ₹{(cust.outstandingAmount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="font-bold text-emerald-700 tabular-nums">{cust.creditScore}</span>
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        cust.kycStatus === 'Fully Verified'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}
                    >
                      {cust.kycStatus}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <button
                      onClick={() => setSelectedCust(cust)}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-slate-300 text-blue-700 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      View 360°
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 360 Profile Modal */}
      {selectedCust && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">{selectedCust.name}</h3>
                <p className="text-xs text-slate-500 font-mono">{selectedCust.id} · {selectedCust.segment}</p>
              </div>
              <button onClick={() => setSelectedCust(null)} className="text-slate-400 hover:text-slate-700 cursor-pointer">
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-500">CIBIL Bureau Score:</span>
                  <div className="text-base font-extrabold text-emerald-700 mt-0.5">{selectedCust.creditScore} / 900</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="text-slate-500">Total Borrowed:</span>
                  <div className="text-base font-extrabold text-blue-900 mt-0.5">₹{(selectedCust.totalBorrowed / 100000).toFixed(2)} L</div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg space-y-1">
                <div className="flex justify-between text-slate-600">
                  <span>Current Outstanding Exposure:</span>
                  <b className="text-slate-900">₹{(selectedCust.outstandingAmount / 100000).toFixed(2)} L</b>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Repayment Track Record:</span>
                  <b className="text-emerald-700">100% On-Time (0 DPD)</b>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>KYC Compliance:</span>
                  <b className="text-emerald-700">Biometric Aadhaar Verified</b>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Generated Statement of Account (SOA) for ${selectedCust.name}`);
                setSelectedCust(null);
              }}
              className="w-full py-2 bg-blue-600 text-white font-bold text-xs rounded-lg hover:bg-blue-700 cursor-pointer shadow-xs"
            >
              Download Full Statement of Account (SOA)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
