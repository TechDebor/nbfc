import React, { useState } from 'react';
import { LOAN_APPLICATIONS } from '../../data/mockData';
import {
  Cog,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  DollarSign,
  Download,
  CreditCard,
  FileText,
  ShieldCheck,
  Send,
  Building,
  RefreshCw,
  Search,
  Filter
} from 'lucide-react';

interface LoanOperationsViewProps {
  initialSubTab?: 'disbursement' | 'nach' | 'vault' | 'schedules';
}

export const LoanOperationsView: React.FC<LoanOperationsViewProps> = ({
  initialSubTab = 'disbursement'
}) => {
  const [subTab, setSubTab] = useState<'disbursement' | 'nach' | 'vault' | 'schedules'>(initialSubTab);
  const [apps] = useState(LOAN_APPLICATIONS);
  const [statusNotification, setStatusNotification] = useState<string | null>(null);

  const disbQueue = apps.filter(a => a.status === 'Sanctioned' || a.status === 'Disbursed');

  const nachMandates = [
    {
      umrn: 'NAMD0029104829104',
      customer: 'Kailash Meena',
      bank: 'State Bank of India',
      accNo: '•••• 4910',
      maxAmount: '₹ 15,000 / mo',
      status: 'Active Registered',
      createdDate: '2026-03-24',
      lastPresentation: 'Success (₹9,450)',
      loanId: 'APP-2026-001'
    },
    {
      umrn: 'NAMD0029104829105',
      customer: 'Geeta Devi Kumawat',
      bank: 'Punjab National Bank',
      accNo: '•••• 1204',
      maxAmount: '₹ 25,000 / mo',
      status: 'Active Registered',
      createdDate: '2026-03-22',
      lastPresentation: 'Success (₹18,200)',
      loanId: 'APP-2026-002'
    },
    {
      umrn: 'NAMD0029104829106',
      customer: 'Suresh Kumar Saini',
      bank: 'Bank of Baroda',
      accNo: '•••• 7741',
      maxAmount: '₹ 12,000 / mo',
      status: 'Mandate In Process',
      createdDate: '2026-03-25',
      lastPresentation: 'Pending NPCI Approval',
      loanId: 'APP-2026-003'
    },
    {
      umrn: 'NAMD0029104829107',
      customer: 'Om Prakash Gurjar',
      bank: 'HDFC Bank',
      accNo: '•••• 8829',
      maxAmount: '₹ 35,000 / mo',
      status: 'Active Registered',
      createdDate: '2026-03-20',
      lastPresentation: 'Success (₹24,500)',
      loanId: 'APP-2026-005'
    }
  ];

  const vaultDocs = [
    {
      id: 'DOC-V-901',
      loanId: 'APP-2026-001',
      customer: 'Kailash Meena',
      docType: 'Vehicle RC Book & Hypothecation',
      storageLocation: 'Jaipur Fireproof Vault #B-14',
      status: 'Verified & Secured',
      receivedDate: '2026-03-22'
    },
    {
      id: 'DOC-V-902',
      loanId: 'APP-2026-002',
      customer: 'Geeta Devi Kumawat',
      docType: 'Original Property Title Deed (LAP)',
      storageLocation: 'Central Vault Locker #C-08',
      status: 'Dual Custody Sealed',
      receivedDate: '2026-03-18'
    },
    {
      id: 'DOC-V-903',
      loanId: 'APP-2026-004',
      customer: 'Vikram Singh Shekhawat',
      docType: 'Promissory Note & Loan Agreement',
      storageLocation: 'Jodhpur Branch Safe #A-02',
      status: 'Verified & Secured',
      receivedDate: '2026-03-20'
    },
    {
      id: 'DOC-V-904',
      loanId: 'APP-2026-005',
      customer: 'Om Prakash Gurjar',
      docType: 'Solar Subsidy Undertaking & Invoice',
      storageLocation: 'Central Vault Locker #D-12',
      status: 'PDD Pending Verification',
      receivedDate: '2026-03-24'
    }
  ];

  const handleBatchRelease = () => {
    setStatusNotification('NEFT/RTGS Batch #DISB-2026-448 released to Partner Banks (₹4.8 Cr dispatched)!');
    setTimeout(() => setStatusNotification(null), 4000);
  };

  const handleTriggerNach = (customer: string) => {
    setStatusNotification(`eNACH Auto-Debit mandate presentation triggered for ${customer}`);
    setTimeout(() => setStatusNotification(null), 3500);
  };

  return (
    <div className="space-y-4">
      {/* Toast Notification */}
      {statusNotification && (
        <div className="fixed top-16 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xl animate-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
          <span>{statusNotification}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Cog className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Loan Operations & Settlement Hub</h2>
              <p className="text-xs text-slate-500 font-medium">Core banking settlement, eNACH auto-debit mandates, and physical collateral document vaulting</p>
            </div>
          </div>
        </div>

        {/* Sub-Tabs Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-bold">
          <button
            onClick={() => setSubTab('disbursement')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'disbursement' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Disbursement Queue
          </button>
          <button
            onClick={() => setSubTab('nach')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'nach' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Bank NACH / eMandate
          </button>
          <button
            onClick={() => setSubTab('vault')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'vault' ? 'bg-white text-emerald-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Document Vault
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: DISBURSEMENT QUEUE */}
      {subTab === 'disbursement' && (
        <div className="space-y-4">
          {/* Disbursal Pipeline Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Monthly Disbursed</span>
              <div className="text-xl font-black text-blue-900 mt-0.5 tabular-nums">₹ 185 Cr</div>
              <span className="text-[10px] text-emerald-600 font-bold">+38.4% vs last period</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">eNACH Success Rate</span>
              <div className="text-xl font-black text-emerald-700 mt-0.5 tabular-nums">98.4%</div>
              <span className="text-[10px] text-slate-400">NPCI Mandates Registered</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Ready for Bank Release</span>
              <div className="text-xl font-black text-amber-600 mt-0.5 tabular-nums">₹ 14.8 Cr</div>
              <span className="text-[10px] text-slate-400">22 Sanctioned files cleared</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">PDD Collection Rate</span>
              <div className="text-xl font-black text-blue-700 mt-0.5 tabular-nums">92.6%</div>
              <span className="text-[10px] text-slate-400">Within 30-day window</span>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-slate-800">
              Approved Sanction Files Ready for Settlement ({disbQueue.length})
            </div>
            <button
              onClick={handleBatchRelease}
              className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Release NEFT/RTGS Batch (₹4.8 Cr)</span>
            </button>
          </div>

          {/* Disbursal Batch Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                    <th className="py-2.5 px-4">Application ID</th>
                    <th className="py-2.5 px-3">Borrower Name</th>
                    <th className="py-2.5 px-3">Branch</th>
                    <th className="py-2.5 px-3">Product</th>
                    <th className="py-2.5 px-3 text-right">Sanction Amount</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                    <th className="py-2.5 px-3">Settlement Bank</th>
                    <th className="py-2.5 pr-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {disbQueue.map((app) => (
                    <tr key={app.id} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-blue-700">{app.id}</td>
                      <td className="py-3 px-3 font-bold text-slate-900">{app.applicantName}</td>
                      <td className="py-3 px-3 text-slate-600">{app.branch}</td>
                      <td className="py-3 px-3 font-semibold text-slate-800">{app.product}</td>
                      <td className="py-3 px-3 text-right font-black text-slate-900 tabular-nums">
                        ₹{(app.amount / 100000).toFixed(2)} L
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          app.status === 'Disbursed'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}>
                          {app.status === 'Disbursed' ? 'Funds Dispatched' : 'Ready for Payout'}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-700 font-mono text-[11px]">
                        SBI Bank (A/C: 3819•••92)
                      </td>
                      <td className="py-3 pr-4 text-right">
                        <button
                          onClick={() => {
                            setStatusNotification(`Disbursal voucher generated for ${app.id}`);
                            setTimeout(() => setStatusNotification(null), 3000);
                          }}
                          className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                          Voucher
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

      {/* SUB-TAB 2: BANK NACH / EMANDATE */}
      {subTab === 'nach' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">NPCI Registered eMandates</span>
              <div className="text-xl font-black text-emerald-700 mt-0.5 tabular-nums">14,290 Mandates</div>
              <span className="text-[10px] text-emerald-600 font-bold">98.4% monthly success rate</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Pending Registration</span>
              <div className="text-xl font-black text-amber-600 mt-0.5 tabular-nums">48 Files</div>
              <span className="text-[10px] text-slate-400">Awaiting bank authorization</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Monthly Auto-Debit Inflow</span>
              <div className="text-xl font-black text-blue-900 mt-0.5 tabular-nums">₹ 34.2 Cr</div>
              <span className="text-[10px] text-slate-400">Recurring 5th of every month</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800">
              Active NPCI NACH Auto-Debit Mandate Register
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                    <th className="py-2.5 px-4">UMRN Number</th>
                    <th className="py-2.5 px-3">Customer Name</th>
                    <th className="py-2.5 px-3">Linked Loan ID</th>
                    <th className="py-2.5 px-3">Bank Name</th>
                    <th className="py-2.5 px-3">Account</th>
                    <th className="py-2.5 px-3">Max Cap</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                    <th className="py-2.5 pr-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {nachMandates.map((nach) => (
                    <tr key={nach.umrn} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-800">{nach.umrn}</td>
                      <td className="py-3 px-3 font-bold text-slate-900">{nach.customer}</td>
                      <td className="py-3 px-3 font-mono text-blue-700">{nach.loanId}</td>
                      <td className="py-3 px-3 text-slate-700">{nach.bank}</td>
                      <td className="py-3 px-3 font-mono text-slate-500">{nach.accNo}</td>
                      <td className="py-3 px-3 font-bold text-slate-800">{nach.maxAmount}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          nach.status.includes('Active') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {nach.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-right">
                        <button
                          onClick={() => handleTriggerNach(nach.customer)}
                          className="px-2 py-1 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-md text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          Trigger Debit
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

      {/* SUB-TAB 3: DOCUMENT VAULT */}
      {subTab === 'vault' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Vaulted Collateral Packets</span>
              <div className="text-xl font-black text-slate-900 mt-0.5 tabular-nums">8,940 Files</div>
              <span className="text-[10px] text-emerald-600 font-bold">100% Dual Custody Compliant</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">RC Deposit Compliance</span>
              <div className="text-xl font-black text-emerald-700 mt-0.5 tabular-nums">94.8%</div>
              <span className="text-[10px] text-slate-400">Two-Wheeler & Tractors</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">PDD Pending Collection</span>
              <div className="text-xl font-black text-amber-600 mt-0.5 tabular-nums">64 Documents</div>
              <span className="text-[10px] text-slate-400">Within 45-day grace window</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800">
              Central Physical Collateral & Original Deed Repository
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                    <th className="py-2.5 px-4">Vault Tag ID</th>
                    <th className="py-2.5 px-3">Loan ID</th>
                    <th className="py-2.5 px-3">Borrower Name</th>
                    <th className="py-2.5 px-3">Document Security Type</th>
                    <th className="py-2.5 px-3">Vault Storage Location</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                    <th className="py-2.5 pr-4 text-right">Audit Check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {vaultDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-slate-800">{doc.id}</td>
                      <td className="py-3 px-3 font-mono text-blue-700">{doc.loanId}</td>
                      <td className="py-3 px-3 font-bold text-slate-900">{doc.customer}</td>
                      <td className="py-3 px-3 text-slate-800 font-semibold">{doc.docType}</td>
                      <td className="py-3 px-3 text-slate-600">{doc.storageLocation}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          doc.status.includes('Dual') || doc.status.includes('Verified')
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-right">
                        <button
                          onClick={() => {
                            setStatusNotification(`Barcode audit scan recorded for ${doc.id}`);
                            setTimeout(() => setStatusNotification(null), 3000);
                          }}
                          className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-[11px] font-bold transition-colors cursor-pointer"
                        >
                          Scan Barcode
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
    </div>
  );
};
