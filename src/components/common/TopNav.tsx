import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  SlidersHorizontal,
  Bell,
  Globe,
  Check,
  Building,
  AlertTriangle,
  FileText,
  UserCheck,
  X,
  Sparkles,
  ShieldCheck,
  Clock,
  ExternalLink,
  ChevronDown,
  Menu
} from 'lucide-react';
import { LoanApplication } from '../../types/nbfc';
import { useLanguage, LANGUAGES, LanguageCode } from '../../context/LanguageContext';

interface TopNavProps {
  onSearchSelect?: (app: LoanApplication) => void;
  applications: LoanApplication[];
  onOpenNotifications?: () => void;
  onToggleMobileMenu?: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onSearchSelect,
  applications,
  onOpenNotifications,
  onToggleMobileMenu
}) => {
  const { language, languageLabel, setLanguage, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showBellDropdown, setShowBellDropdown] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [activeNotificationTab, setActiveNotificationTab] = useState<'all' | 'urgent'>('all');

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const bellRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false);
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setShowLangMenu(false);
      }
      if (bellRef.current && !bellRef.current.contains(e.target as Node)) {
        setShowBellDropdown(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut (⌘K or Ctrl+K) to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.getElementById('global-omni-search');
        input?.focus();
        setShowSearchDropdown(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'pa', label: 'Punjabi', native: 'ਪੰਜਾਬੀ' }
  ];

  const filteredApplications = searchQuery.trim() === ''
    ? []
    : applications.filter(app =>
        app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.phone.includes(searchQuery) ||
        app.pan.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.branch.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.product.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6);

  const notifications = [
    { id: 1, title: 'Credit SLA Deviation Alert', desc: '14 MSME files pending > 48 hrs in Jaipur-VK1', type: 'urgent', time: '12m ago', priority: 'High Risk' },
    { id: 2, title: 'Disbursement Milestone Reached', desc: 'MTD target crossed ₹185 Cr (86.5% achieved)', type: 'milestone', time: '45m ago', priority: 'Growth' },
    { id: 3, title: 'High-Value Sanction Approved', desc: 'LAP ₹45 Lakhs sanctioned by Level-3 Board Committee', type: 'info', time: '1h ago', priority: 'Credit' },
    { id: 4, title: 'Branch CCTV Stream Offline', desc: 'Jodhpur cash counter camera stream requires reconnection', type: 'urgent', time: '2h ago', priority: 'Security' }
  ];

  const displayedNotifications = activeNotificationTab === 'urgent'
    ? notifications.filter(n => n.type === 'urgent')
    : notifications;

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between px-3 sm:px-6 py-2.5 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      {/* LEFT: Branding Title, Pulse Beacon & Status */}
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
        {/* Mobile Sidebar Hamburger Toggle */}
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
          title="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-700 to-[#0f294a] flex items-center justify-center text-white shadow-sm ring-2 ring-blue-500/20 shrink-0">
          <Building className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-none truncate">
              CEO Executive Command Center
            </h2>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>LIVE FEED</span>
            </div>
            <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400 border-l border-slate-200 pl-2">
              <ShieldCheck className="w-3 h-3 text-blue-600" />
              <span>RBI Scale-Based NBFC-ICC</span>
            </span>
          </div>

          <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
            Real-time view of lending, risk, collections and operational performance · Jaipur HQ
          </p>
        </div>
      </div>

      {/* RIGHT: Search, Live Tickers, Notifications & CEO Desk Profile */}
      <div className="flex items-center gap-2.5 shrink-0">
        {/* Live CBS Status Pill (Hidden on mobile) */}
        <div className="hidden 2xl:flex items-center gap-2 px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-600 font-medium">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <b className="text-slate-800">CBS Core:</b> Connected
          </span>
          <span className="text-slate-300">|</span>
          <span><b>Repo Rate:</b> 6.50%</span>
        </div>

        {/* Global Omni-Search with ⌘K Badge */}
        <div ref={searchContainerRef} className="relative w-56 sm:w-72 lg:w-80">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              id="global-omni-search"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchDropdown(true);
              }}
              onFocus={() => setShowSearchDropdown(true)}
              placeholder="Search case, customer, PAN, mobile..."
              className="w-full pl-9 pr-14 py-1.5 text-xs bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-slate-900 placeholder-slate-400 font-medium transition-all shadow-2xs"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono font-bold bg-white text-slate-400 border border-slate-200 rounded">
                ⌘K
              </span>
            )}
          </div>

          {/* Instant Search Results Dropdown */}
          {showSearchDropdown && searchQuery.trim() !== '' && (
            <div className="absolute left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-100">
              <div className="p-2.5 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-[11px] text-slate-500 font-bold">
                <span>Matching Files & Customers ({filteredApplications.length})</span>
                <span className="text-[10px] text-blue-600 font-normal">Press ESC to dismiss</span>
              </div>
              {filteredApplications.length > 0 ? (
                <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                  {filteredApplications.map(app => (
                    <div
                      key={app.id}
                      onClick={() => {
                        onSearchSelect?.(app);
                        setShowSearchDropdown(false);
                      }}
                      className="p-3 hover:bg-blue-50/70 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-900">{app.applicantName}</span>
                        <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                          {app.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700">{app.product}</span>
                        <span>·</span>
                        <span className="font-bold text-slate-900">₹{(app.amount / 100000).toFixed(2)}L</span>
                        <span>·</span>
                        <span>{app.branch}</span>
                        <span>·</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 font-medium">
                          {app.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-5 text-center text-xs text-slate-500">
                  No active cases found matching <b className="text-slate-800">"{searchQuery}"</b>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Language Selector Dropdown */}
        <div ref={langRef} className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>{languageLabel}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          {showLangMenu && (
            <div className="absolute right-0 mt-1.5 w-44 bg-white border border-slate-200 rounded-xl shadow-xl p-1 z-50 animate-in fade-in duration-100">
              <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Select Language
              </div>
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as LanguageCode);
                    setShowLangMenu(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 text-xs rounded-lg flex items-center justify-between transition-colors font-medium cursor-pointer ${
                    language === lang.code ? 'bg-blue-50 text-blue-800' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div>
                    <span className="font-semibold">{lang.label}</span>
                    <span className="text-[10px] text-slate-400 ml-1.5">({lang.native})</span>
                  </div>
                  {language === lang.code && <Check className="w-3.5 h-3.5 text-blue-600" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notifications Bell */}
        <div ref={bellRef} className="relative">
          <button
            onClick={() => setShowBellDropdown(!showBellDropdown)}
            title="Executive Alerts & Exceptions"
            className="relative p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all cursor-pointer shadow-2xs"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[9px] font-extrabold rounded-full flex items-center justify-center animate-pulse">
              4
            </span>
          </button>

          {showBellDropdown && (
            <div className="absolute right-0 mt-1.5 w-84 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in duration-100">
              <div className="p-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Executive Alert Center</h4>
                  <span className="text-[10px] text-slate-400">4 Unresolved management items</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-200/80 p-0.5 rounded-md text-[10px] font-semibold">
                  <button
                    onClick={() => setActiveNotificationTab('all')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      activeNotificationTab === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveNotificationTab('urgent')}
                    className={`px-2 py-0.5 rounded cursor-pointer ${
                      activeNotificationTab === 'urgent' ? 'bg-white text-red-700 shadow-2xs' : 'text-slate-600'
                    }`}
                  >
                    Urgent (2)
                  </button>
                </div>
              </div>

              <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                {displayedNotifications.map(item => (
                  <div key={item.id} className="p-3 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.type === 'urgent' ? 'bg-red-600' : 'bg-blue-600'}`} />
                        <span>{item.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-normal">{item.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setShowBellDropdown(false);
                    onOpenNotifications?.();
                  }}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 cursor-pointer flex items-center gap-1"
                >
                  <span>Open Full Board Dossier</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
                <span className="text-[10px] text-slate-400">Escalated to MD & CEO</span>
              </div>
            </div>
          )}
        </div>

        {/* CEO Desk Profile Card */}
        <div ref={profileRef} className="relative pl-1">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-1 pl-1.5 pr-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-2xs"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#1e3a8a] to-blue-600 text-white font-extrabold text-[11px] flex items-center justify-center ring-2 ring-blue-500/20 shadow-xs">
              JT
            </div>
            <div className="text-left hidden sm:block">
              <div className="text-xs font-extrabold text-slate-900 leading-tight">Jitendra Tanwar</div>
              <div className="text-[9.5px] font-semibold text-blue-700 leading-none">MD & CEO Desk</div>
            </div>
            <ChevronDown className="w-3 h-3 text-slate-400 ml-0.5" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-1.5 w-60 bg-white border border-slate-200 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in duration-100">
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-slate-100">
                <div className="w-9 h-9 rounded-full bg-blue-900 text-white font-black text-xs flex items-center justify-center">
                  JT
                </div>
                <div>
                  <div className="font-extrabold text-xs text-slate-900">Jitendra Tanwar</div>
                  <div className="text-[10px] text-blue-700 font-semibold">MD & CEO · Namdev Finvest</div>
                  <div className="text-[9px] text-slate-400 font-mono">DIN: 01482910</div>
                </div>
              </div>

              <div className="py-2 space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">Headquarters:</span>
                  <span className="font-semibold text-slate-800">Jaipur, Rajasthan</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">Access Mode:</span>
                  <span className="font-bold text-emerald-700">Executive Clearance</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-slate-400">Active Workspaces:</span>
                  <span className="font-semibold text-slate-800">105+ Branches</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    onOpenNotifications?.();
                  }}
                  className="w-full py-1.5 bg-[#0f294a] hover:bg-blue-900 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Generate Board Report</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
