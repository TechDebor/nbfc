import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Download,
  PieChart,
  FileText,
  Sparkles,
  Building,
  CheckCircle2,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Layers
} from 'lucide-react';

interface InsightsPlatformViewProps {
  initialSubTab?: 'board' | 'alm';
}

export const InsightsPlatformView: React.FC<InsightsPlatformViewProps> = ({
  initialSubTab = 'board'
}) => {
  const [subTab, setSubTab] = useState<'board' | 'alm'>(initialSubTab);
  const [notification, setNotification] = useState<string | null>(null);

  const boardDecks = [
    {
      id: 'DECK-2026-Q2',
      title: 'Q2 FY26 Comprehensive Board Presentation Pack',
      description: 'AUM growth, branch profitability, collection trends & rural penetration',
      pages: 42,
      lastUpdated: '2026-03-25',
      author: 'CEO Secretariat & Corporate Planning',
      fileSize: '18.4 MB'
    },
    {
      id: 'DECK-CR-04',
      title: 'Board Risk & Credit Committee Portfolio Quality Review',
      description: 'Stage 1/2/3 ECL provisioning, early warning signals & high-ticket watch',
      pages: 28,
      lastUpdated: '2026-03-22',
      author: 'Chief Risk Officer',
      fileSize: '12.1 MB'
    },
    {
      id: 'DECK-ESG-02',
      title: 'Solar & Green Finance Portfolio Impact Report',
      description: 'Rooftop solar installations, carbon offset & rural MSME green adoption',
      pages: 20,
      lastUpdated: '2026-03-18',
      author: 'ESG & Green Financing Desk',
      fileSize: '9.8 MB'
    },
    {
      id: 'DECK-AUD-01',
      title: 'Statutory Audit & Scale-Based Compliance Dossier',
      description: 'Independent audit report, internal controls & RBI master circular audit',
      pages: 35,
      lastUpdated: '2026-03-15',
      author: 'Head of Internal Audit',
      fileSize: '14.6 MB'
    }
  ];

  const handleDownloadDeck = (title: string) => {
    setNotification(`Downloading "${title}" for Board of Directors review...`);
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="space-y-4">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-16 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-indigo-600 text-white text-xs font-bold rounded-xl shadow-xl animate-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-indigo-200 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Executive Insights & ALM Platform</h2>
              <p className="text-xs text-slate-500 font-medium">Asset-Liability Management, structural liquidity projections and official board presentation decks</p>
            </div>
          </div>
        </div>

        {/* Sub-Tabs Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-bold">
          <button
            onClick={() => setSubTab('board')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'board' ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Board Presentation Reports
          </button>
          <button
            onClick={() => setSubTab('alm')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'alm' ? 'bg-white text-indigo-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ALM Cashflow & Liquidity Model
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: BOARD PRESENTATION REPORTS */}
      {subTab === 'board' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {boardDecks.map((deck) => (
              <div key={deck.id} className="p-5 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-3 hover:border-indigo-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                      {deck.id}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">{deck.fileSize}</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900 mt-2">{deck.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{deck.description}</p>
                  
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-100">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      {deck.pages} Slides
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Updated: {deck.lastUpdated}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-500 truncate max-w-[200px]">
                    {deck.author}
                  </span>
                  <button
                    onClick={() => handleDownloadDeck(deck.title)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Deck</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: ALM CASHFLOW MODEL */}
      {subTab === 'alm' && (
        <div className="space-y-4">
          {/* ALM Summary Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Weighted Avg Cost of Funds</span>
              <div className="text-2xl font-black text-blue-900 mt-1 tabular-nums">9.85%</div>
              <span className="text-[11px] text-emerald-600 font-semibold">-25 bps vs benchmark</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Net Interest Margin (NIM)</span>
              <div className="text-2xl font-black text-emerald-700 mt-1 tabular-nums">7.42%</div>
              <span className="text-[11px] text-emerald-600 font-semibold">Strong rural spread</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Capital Adequacy (CRAR)</span>
              <div className="text-2xl font-black text-blue-700 mt-1 tabular-nums">26.8%</div>
              <span className="text-[11px] text-slate-500">Tier-1 Capital at 24.5%</span>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Undrawn Bank Sanction Limits</span>
              <div className="text-2xl font-black text-slate-900 mt-1 tabular-nums">₹ 210 Cr</div>
              <span className="text-[11px] text-slate-500">From SBI, SIDBI, NABARD</span>
            </div>
          </div>

          {/* ALM Maturity Bucket Grid */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">Structural Liquidity & Cash Inflow Profile (ALM)</h3>
                <p className="text-xs text-slate-500">Maturity buckets across 1 day to 5+ years</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Positive Cumulative Gap Across All Buckets
              </span>
            </div>

            <div className="overflow-x-auto text-xs">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
                    <th className="py-2.5 px-3">Maturity Bucket</th>
                    <th className="py-2.5 px-3 text-right">Inflows (₹ Cr)</th>
                    <th className="py-2.5 px-3 text-right">Outflows (₹ Cr)</th>
                    <th className="py-2.5 px-3 text-right">Net Gap (₹ Cr)</th>
                    <th className="py-2.5 px-3 text-right">Cumulative Gap</th>
                    <th className="py-2.5 px-3 text-center">Prudential Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {[
                    { bucket: '1 to 14 Days', in: 48.5, out: 18.2, gap: 30.3, cum: 30.3, status: 'Safe (+166%)' },
                    { bucket: '15 to 30 Days', in: 52.0, out: 24.5, gap: 27.5, cum: 57.8, status: 'Safe (+112%)' },
                    { bucket: '1 to 3 Months', in: 125.0, out: 68.0, gap: 57.0, cum: 114.8, status: 'Safe (+84%)' },
                    { bucket: '3 to 6 Months', in: 180.0, out: 95.0, gap: 85.0, cum: 199.8, status: 'Safe (+89%)' },
                    { bucket: '6 Mo to 1 Year', in: 340.0, out: 210.0, gap: 130.0, cum: 329.8, status: 'Safe (+62%)' },
                    { bucket: '1 to 3 Years', in: 620.0, out: 410.0, gap: 210.0, cum: 539.8, status: 'Safe (+51%)' },
                    { bucket: '3 to 5 Years', in: 480.0, out: 320.0, gap: 160.0, cum: 699.8, status: 'Safe (+50%)' },
                    { bucket: 'Over 5 Years', in: 310.0, out: 180.0, gap: 130.0, cum: 829.8, status: 'Safe (+72%)' }
                  ].map((row) => (
                    <tr key={row.bucket} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3 font-semibold text-slate-800">{row.bucket}</td>
                      <td className="py-2.5 px-3 text-right text-emerald-700 font-bold tabular-nums">₹ {row.in.toFixed(1)}</td>
                      <td className="py-2.5 px-3 text-right text-rose-700 font-bold tabular-nums">₹ {row.out.toFixed(1)}</td>
                      <td className="py-2.5 px-3 text-right text-blue-800 font-black tabular-nums">+₹ {row.gap.toFixed(1)}</td>
                      <td className="py-2.5 px-3 text-right text-slate-900 font-black tabular-nums">₹ {row.cum.toFixed(1)}</td>
                      <td className="py-2.5 px-3 text-center">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                          {row.status}
                        </span>
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
