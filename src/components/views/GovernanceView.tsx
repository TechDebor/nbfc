import React, { useState } from 'react';
import { GOVERNANCE_ITEMS } from '../../data/mockData';
import { GovernanceItem } from '../../types/nbfc';
import {
  Scale,
  Search,
  ShieldCheck,
  CheckCircle2,
  AlertOctagon,
  Download,
  AlertTriangle,
  FileText,
  Clock,
  ExternalLink
} from 'lucide-react';

interface GovernanceViewProps {
  initialSubTab?: 'rbi' | 'audit' | 'aml';
}

export const GovernanceView: React.FC<GovernanceViewProps> = ({
  initialSubTab = 'rbi'
}) => {
  const [subTab, setSubTab] = useState<'rbi' | 'audit' | 'aml'>(initialSubTab);
  const [items] = useState<GovernanceItem[]>(GOVERNANCE_ITEMS);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [notification, setNotification] = useState<string | null>(null);

  const internalAudits = [
    { id: 'AUD-2026-08', branch: 'Jaipur Main', area: 'Vault Cash Reconciliation', severity: 'Low', status: 'Closed / Clean', auditor: 'Ernst & Young LLP', date: '2026-03-15' },
    { id: 'AUD-2026-09', branch: 'Kota Junction', area: 'PDD RC Book Physical Ingestion', severity: 'Medium', status: 'Under Remediation', auditor: 'Internal Inspection Wing', date: '2026-03-18' },
    { id: 'AUD-2026-10', branch: 'Udaipur Sector 4', area: 'eSign & Loan Stamp Duty Verification', severity: 'Low', status: 'Closed / Clean', auditor: 'Internal Inspection Wing', date: '2026-03-22' },
    { id: 'AUD-2026-11', branch: 'Jodhpur City', area: 'Fixed Asset Tag Physical Barcoding', severity: 'Low', status: 'Closed / Clean', auditor: 'KPMG India', date: '2026-03-24' }
  ];

  const amlAlerts = [
    { id: 'AML-941', customer: 'Ramesh Agro Trade', amount: '₹ 14,50,000', type: 'Cash Inflow > 10 Lakhs', date: '2026-03-24', status: 'CTR Reported to FIU-IND', officer: 'Compliance Wing' },
    { id: 'AML-942', customer: 'Bhanwar Singh', amount: '₹ 28,00,000', type: 'Rapid Foreclosure within 30 days', date: '2026-03-20', status: 'Source of Funds Verified', officer: 'Chief Risk Officer' },
    { id: 'AML-943', customer: 'Kishore Solar EPC', amount: '₹ 45,00,000', type: 'Third-party Remittance', date: '2026-03-18', status: 'Escrow Cleared', officer: 'Legal Counsel' }
  ];

  const filtered = items.filter(g => {
    const matchesSearch =
      g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.regulationRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.ownerDepartment.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'ALL' || g.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleExport = () => {
    setNotification('Compliance Audit Dossier (PDF/Excel) downloaded for RBI Scale-Based inspection!');
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="space-y-4">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-16 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xl animate-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-red-700 flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Statutory Governance, RBI Compliance & Audit</h2>
              <p className="text-xs text-slate-500 font-medium">Scale-based regulatory framework compliance, PMLA AML/CFT filings and internal audit desk</p>
            </div>
          </div>
        </div>

        {/* Sub-Tabs Switcher & Export */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-bold">
            <button
              onClick={() => setSubTab('rbi')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                subTab === 'rbi' ? 'bg-white text-red-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              RBI Master Regulations ({items.length})
            </button>
            <button
              onClick={() => setSubTab('audit')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                subTab === 'audit' ? 'bg-white text-red-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Internal Audit Desk
            </button>
            <button
              onClick={() => setSubTab('aml')}
              className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                subTab === 'aml' ? 'bg-white text-red-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              AML / CFT & FIU-IND
            </button>
          </div>

          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export Audit Report</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: RBI MASTER REGULATIONS */}
      {subTab === 'rbi' && (
        <div className="space-y-4">
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Regulatory Framework</span>
              <div className="text-xl font-black text-slate-900 mt-1">Scale-Based NBFC</div>
              <span className="text-[10px] text-emerald-600 font-bold">Middle Layer Categorized</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Capital Adequacy (CRAR)</span>
              <div className="text-xl font-black text-emerald-700 mt-1 tabular-nums">26.8%</div>
              <span className="text-[10px] text-emerald-600 font-bold">vs 15.0% RBI Mandate</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Gross NPA Classification</span>
              <div className="text-xl font-black text-blue-700 mt-1 tabular-nums">1.42%</div>
              <span className="text-[10px] text-slate-500">Day-end IRAC compliant</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Compliance Readiness</span>
              <div className="text-xl font-black text-purple-700 mt-1 tabular-nums">100% Green</div>
              <span className="text-[10px] text-emerald-600 font-bold">All returns filed in time</span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by regulation, circular, department..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-1 overflow-x-auto">
              {['ALL', 'RBI Master Circular', 'Fair Practices Code', 'AML / CFT', 'Statutory Audit'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-bold cursor-pointer transition-colors whitespace-nowrap ${
                    categoryFilter === cat
                      ? 'bg-red-600 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Governance Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                    <th className="py-2.5 px-4">Circular / Topic</th>
                    <th className="py-2.5 px-3">Regulatory Ref</th>
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3">Owner Dept</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                    <th className="py-2.5 px-3 text-center">Due Date</th>
                    <th className="py-2.5 pr-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">{item.title}</td>
                      <td className="py-3 px-3 font-mono text-[11px] text-blue-700">{item.regulationRef}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-700 font-semibold">{item.ownerDepartment}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.complianceStatus === '100% Compliant'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.complianceStatus}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center font-mono text-[11px] text-slate-500">{item.dueDate}</td>
                      <td className="py-3 pr-4 text-right">
                        <button
                          onClick={() => {
                            setNotification(`Regulatory circular ${item.regulationRef} verified`);
                            setTimeout(() => setNotification(null), 3000);
                          }}
                          className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 cursor-pointer"
                        >
                          Verify
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: INTERNAL AUDIT DESK */}
      {subTab === 'audit' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800">
            Internal & Concurrent Audit Observations (Branch Inspections)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                  <th className="py-2.5 px-4">Audit ID</th>
                  <th className="py-2.5 px-3">Inspected Branch</th>
                  <th className="py-2.5 px-3">Audit Scope / Area</th>
                  <th className="py-2.5 px-3">Auditor Body</th>
                  <th className="py-2.5 px-3 text-center">Severity</th>
                  <th className="py-2.5 px-3 text-center">Remediation Status</th>
                  <th className="py-2.5 pr-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {internalAudits.map((aud) => (
                  <tr key={aud.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-slate-800">{aud.id}</td>
                    <td className="py-3 px-3 font-bold text-slate-900">{aud.branch}</td>
                    <td className="py-3 px-3 text-slate-800 font-semibold">{aud.area}</td>
                    <td className="py-3 px-3 text-slate-600">{aud.auditor}</td>
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        aud.severity === 'Low' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {aud.severity} Risk
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center font-bold text-slate-700">{aud.status}</td>
                    <td className="py-3 pr-4 text-right">
                      <button
                        onClick={() => {
                          setNotification(`Audit observation sheet opened for ${aud.id}`);
                          setTimeout(() => setNotification(null), 3000);
                        }}
                        className="px-2.5 py-1 text-[11px] font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md cursor-pointer"
                      >
                        Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: AML / CFT */}
      {subTab === 'aml' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800">
            PMLA Anti-Money Laundering & FIU-IND Regulatory Alerts
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                  <th className="py-2.5 px-4">Alert ID</th>
                  <th className="py-2.5 px-3">Borrower / Account</th>
                  <th className="py-2.5 px-3">Transaction Amount</th>
                  <th className="py-2.5 px-3">Trigger Type</th>
                  <th className="py-2.5 px-3">Regulatory Status</th>
                  <th className="py-2.5 px-3">Reviewing Officer</th>
                  <th className="py-2.5 pr-4 text-right">Dossier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {amlAlerts.map((alert) => (
                  <tr key={alert.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-red-700">{alert.id}</td>
                    <td className="py-3 px-3 font-bold text-slate-900">{alert.customer}</td>
                    <td className="py-3 px-3 font-black text-slate-900">{alert.amount}</td>
                    <td className="py-3 px-3 text-slate-700 font-semibold">{alert.type}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">
                        {alert.status}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-slate-600">{alert.officer}</td>
                    <td className="py-3 pr-4 text-right">
                      <button
                        onClick={() => {
                          setNotification(`FIU-IND filing dossier prepared for ${alert.id}`);
                          setTimeout(() => setNotification(null), 3000);
                        }}
                        className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-md cursor-pointer"
                      >
                        View FIU Dossier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
