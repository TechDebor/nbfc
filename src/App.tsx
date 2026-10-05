/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/common/Sidebar';
import { TopNav } from './components/common/TopNav';
import { FilterBar } from './components/common/FilterBar';
import { NamdevHero } from './components/dashboard/NamdevHero';
import { Login } from './components/auth/Login';
import { KpiCardsGrid } from './components/dashboard/KpiCardsGrid';
import { TargetActualChart } from './components/dashboard/TargetActualChart';
import { ProductMixChart } from './components/dashboard/ProductMixChart';
import { LoanFunnelChart } from './components/dashboard/LoanFunnelChart';
import { BranchPerformanceTable } from './components/dashboard/BranchPerformanceTable';
import { PortfolioQualityDonut } from './components/dashboard/PortfolioQualityDonut';
import { CollectionPerformanceChart } from './components/dashboard/CollectionPerformanceChart';
import { CreditCommandCenter } from './components/dashboard/CreditCommandCenter';
import { EmployeePerformanceCard } from './components/dashboard/EmployeePerformanceCard';
import { ManagementWatchlist } from './components/dashboard/ManagementWatchlist';
import { GeographicMapPerformance } from './components/dashboard/GeographicMapPerformance';
import { AssetsAdminOverview } from './components/dashboard/AssetsAdminOverview';
import { GovernanceAuditCard } from './components/dashboard/GovernanceAuditCard';

import { ApplicationsListView } from './components/views/ApplicationsListView';
import { HierarchyMonitorView } from './components/views/HierarchyMonitorView';
import { CrmLeadsView } from './components/views/CrmLeadsView';
import { MsmeJourneyView } from './components/views/MsmeJourneyView';
import { Customer360View } from './components/views/Customer360View';
import { PreEligibilityView } from './components/views/PreEligibilityView';
import { KycDedupeView } from './components/views/KycDedupeView';
import { DocumentsView } from './components/views/DocumentsView';
import { MyTasksView } from './components/views/MyTasksView';
import { CreditDecisioningView } from './components/views/CreditDecisioningView';
import { CreditCommitteeDeskView } from './components/views/CreditCommitteeDeskView';
import { CamApprovalsView } from './components/views/CamApprovalsView';
import { DeviationsMatrixView } from './components/views/DeviationsMatrixView';
import { LoanOperationsView } from './components/views/LoanOperationsView';
import { AssetsAdminView } from './components/views/AssetsAdminView';
import { GovernanceView } from './components/views/GovernanceView';
import { InsightsPlatformView } from './components/views/InsightsPlatformView';
import { PeopleAndWorkView } from './components/views/PeopleAndWorkView';

import { CaseDetailModal } from './components/modals/CaseDetailModal';
import { BoardReportModal } from './components/modals/BoardReportModal';
import { LoanCalculatorModal } from './components/modals/LoanCalculatorModal';
import { KycDedupeModal } from './components/modals/KycDedupeModal';

import {
  KPI_DATA,
  LOAN_APPLICATIONS
} from './data/mockData';
import { FilterState, LoanApplication, KpiMetric } from './types/nbfc';
import { ArrowLeft, Layers, CheckCircle } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('namdev_auth') === 'true';
  });

  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [applications, setApplications] = useState<LoanApplication[]>(LOAN_APPLICATIONS);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  // Active global filters
  const [filters, setFilters] = useState<FilterState>({
    period: 'mtd',
    product: 'All Products',
    region: 'All Regions',
    state: 'All States',
    branch: 'All Branches',
    department: 'All Departments',
    compareWith: 'Previous Month'
  });

  // Modal dialog states
  const [selectedApplication, setSelectedApplication] = useState<LoanApplication | null>(null);
  const [showBoardReport, setShowBoardReport] = useState<boolean>(false);
  const [showLoanCalculator, setShowLoanCalculator] = useState<boolean>(false);
  const [showKycDedupe, setShowKycDedupe] = useState<boolean>(false);
  const [selectedKpi, setSelectedKpi] = useState<KpiMetric | null>(null);

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      period: 'mtd',
      product: 'All Products',
      region: 'All Regions',
      state: 'All States',
      branch: 'All Branches',
      department: 'All Departments',
      compareWith: 'Previous Month'
    });
  };

  const handleStatusUpdate = (id: string, newStatus: LoanApplication['status']) => {
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  const handleNewApplication = () => {
    setShowLoanCalculator(true);
  };

  const handleApplyFromCalculator = (prod: string, amt: number) => {
    const newApp: LoanApplication = {
      id: `NAM-2026-${Math.floor(8860 + Math.random() * 500)}`,
      applicantName: 'Applicant Walk-in Lead',
      product: prod,
      amount: amt,
      disbursalTargetDate: '2026-10-15',
      branch: 'Jaipur - VK1',
      status: 'In Queue',
      riskGrade: 'A',
      cibilScore: 765,
      tatHours: 2,
      appliedDate: '2026-10-05',
      phone: '+91 98290 99881',
      pan: 'AAAAA1111A'
    };
    setApplications(prev => [newApp, ...prev]);
    setSelectedApplication(newApp);
  };

  const handleLogout = () => {
    localStorage.removeItem('namdev_auth');
    setIsAuthenticated(false);
  };

  const handleLogin = () => {
    localStorage.setItem('namdev_auth', 'true');
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] text-slate-900 overflow-hidden font-sans">
      {/* 1. Desktop Left Sidebar (Visible on lg and larger) */}
      <div className="hidden lg:flex shrink-0">
        <Sidebar
          onLogout={handleLogout}
          activeTab={activeTab}
          onSelectTab={(tabId) => {
            setActiveTab(tabId);
          }}
          onNewUtility={() => setShowLoanCalculator(true)}
        />
      </div>

      {/* 1B. Mobile Slide-Over Drawer Navigation */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Dimmed Backdrop */}
          <div
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in"
          />
          {/* Slide-out Sidebar Content */}
          <div className="relative z-10 w-72 max-w-[85vw] h-full bg-white shadow-2xl animate-in slide-in-from-left duration-200 flex flex-col">
            <Sidebar
          onLogout={handleLogout}
              activeTab={activeTab}
              onSelectTab={(tabId) => {
                setActiveTab(tabId);
                setMobileSidebarOpen(false);
              }}
              onNewUtility={() => {
                setShowLoanCalculator(true);
                setMobileSidebarOpen(false);
              }}
            />
          </div>
        </div>
      )}

      {/* 2. Main Content Canvas */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Navbar with Mobile Hamburger trigger */}
        <TopNav
          applications={applications}
          onSearchSelect={(app) => setSelectedApplication(app)}
          onOpenNotifications={() => setShowBoardReport(true)}
          onToggleMobileMenu={() => setMobileSidebarOpen(prev => !prev)}
        />

        {/* Scrollable Dashboard View */}
        <main className="flex-1 overflow-y-auto px-3 sm:px-5 py-3 sm:py-4 space-y-4">
          {/* Breadcrumb / Return to Dashboard link when inside deep views */}
          {activeTab !== 'dashboard' && (
            <div className="flex items-center justify-between pb-1 border-b border-slate-200">
              <button
                onClick={() => setActiveTab('dashboard')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to CEO Executive Command Center</span>
              </button>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Module: {activeTab.replace('_', ' ')}
              </span>
            </div>
          )}

          {/* Filter Ribbon Bar (shown on dashboard & reporting views) */}
          {activeTab === 'dashboard' && (
            <FilterBar
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          )}

          {/* TAB 1: EXECUTIVE COMMAND CENTER DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Executive CEO Banner Spotlight */}
              <NamdevHero />

              {/* 8 Primary KPI Metric Cards Grid */}
              <KpiCardsGrid
                metrics={KPI_DATA}
                onCardClick={(m) => setSelectedKpi(m)}
              />

              {/* Chart Row 1: Target vs Actual, Product Mix, Loan Funnel */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
                <div className="md:col-span-2 lg:col-span-5 h-[340px]">
                  <TargetActualChart />
                </div>
                <div className="md:col-span-1 lg:col-span-4 h-[340px]">
                  <ProductMixChart />
                </div>
                <div className="md:col-span-1 lg:col-span-3 h-[340px]">
                  <LoanFunnelChart />
                </div>
              </div>

              {/* Row 2: Branch Performance, Portfolio Quality, Collection Performance */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
                <div className="md:col-span-2 lg:col-span-5 h-[340px]">
                  <BranchPerformanceTable
                    onViewAll={() => setActiveTab('applications')}
                    onSelectBranch={(branch) => {
                      handleFilterChange({ branch: branch.name });
                    }}
                  />
                </div>
                <div className="md:col-span-1 lg:col-span-3 h-[340px]">
                  <PortfolioQualityDonut />
                </div>
                <div className="md:col-span-1 lg:col-span-4 h-[340px]">
                  <CollectionPerformanceChart />
                </div>
              </div>

              {/* Row 3: Credit Command Center, Employee Performance, Management Watchlist */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
                <div className="md:col-span-2 lg:col-span-5 h-[330px]">
                  <CreditCommandCenter
                    onQueueClick={() => setActiveTab('applications')}
                  />
                </div>
                <div className="md:col-span-1 lg:col-span-4 h-[330px]">
                  <EmployeePerformanceCard
                    onViewAll={() => setActiveTab('employee_performance')}
                  />
                </div>
                <div className="md:col-span-1 lg:col-span-3 h-[330px]">
                  <ManagementWatchlist
                    onViewAll={() => setShowBoardReport(true)}
                    onSelectItem={() => setActiveTab('applications')}
                  />
                </div>
              </div>

              {/* Row 4: Geographic Business, Assets & Admin, Governance */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
                <div className="md:col-span-2 lg:col-span-4 h-[300px]">
                  <GeographicMapPerformance />
                </div>
                <div className="md:col-span-1 lg:col-span-4 h-[300px]">
                  <AssetsAdminOverview
                    onViewAll={() => setActiveTab('assets_admin')}
                  />
                </div>
                <div className="md:col-span-1 lg:col-span-4 h-[300px]">
                  <GovernanceAuditCard
                    onViewAll={() => setActiveTab('governance_view')}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MY TASKS */}
          {activeTab === 'my_tasks' && (
            <MyTasksView />
          )}

          {/* TAB 3: APPLICATIONS / LOS / CASES VIEW */}
          {(activeTab === 'applications' ||
            activeTab === 'los_applications' ||
            activeTab === 'cases_view') && (
            <ApplicationsListView
              applications={applications}
              onSelectApplication={(app) => setSelectedApplication(app)}
              onNewApplication={handleNewApplication}
            />
          )}

          {/* TAB 4: CRM & LEADS */}
          {activeTab === 'crm_leads' && (
            <CrmLeadsView onConvertLead={() => setShowLoanCalculator(true)} />
          )}

          {/* TAB 5: MSME JOURNEY */}
          {activeTab === 'msme_journey' && (
            <MsmeJourneyView />
          )}

          {/* TAB 6: CUSTOMER 360 */}
          {activeTab === 'customer_360' && (
            <Customer360View />
          )}

          {/* TAB 7: PRE-ELIGIBILITY */}
          {activeTab === 'pre_eligibility' && (
            <PreEligibilityView onOpenCalculator={() => setShowLoanCalculator(true)} />
          )}

          {/* TAB 8: KYC & DEDUPE */}
          {activeTab === 'kyc_dedupe' && (
            <KycDedupeView onOpenCheckModal={() => setShowKycDedupe(true)} />
          )}

          {/* TAB 9: DOCUMENTS VAULT */}
          {activeTab === 'documents' && (
            <DocumentsView />
          )}

          {/* TAB 10: HIERARCHY MONITOR */}
          {activeTab === 'hierarchy_monitor' && (
            <HierarchyMonitorView />
          )}

          {/* TAB 11: PEOPLE & WORK (FULL WORKFORCE MODULE) */}
          {(activeTab === 'employee_performance' || activeTab === 'people_officers') && (
            <PeopleAndWorkView initialSubTab="officers" />
          )}
          {activeTab === 'people_incentives' && (
            <PeopleAndWorkView initialSubTab="incentives" />
          )}
          {activeTab === 'people_attendance' && (
            <PeopleAndWorkView initialSubTab="attendance" />
          )}

          {/* TAB 12: CREDIT & DECISIONING */}
          {activeTab === 'credit_command' && (
            <CreditDecisioningView onNavigate={(tab) => setActiveTab(tab)} />
          )}

          {/* TAB 12A: CREDIT COMMITTEE DESK */}
          {activeTab === 'credit_committee_desk' && (
            <CreditCommitteeDeskView />
          )}

          {/* TAB 12B: CAM APPROVALS */}
          {activeTab === 'cam_approvals' && (
            <CamApprovalsView />
          )}

          {/* TAB 12C: DEVIATIONS MATRIX */}
          {activeTab === 'deviations_matrix' && (
            <DeviationsMatrixView />
          )}

          {/* TAB 13: LOAN OPERATIONS & SUB-MODULES */}
          {(activeTab === 'disbursement_hub' || activeTab === 'loan_ops_disbursement') && (
            <LoanOperationsView initialSubTab="disbursement" />
          )}
          {activeTab === 'loan_ops_nach' && (
            <LoanOperationsView initialSubTab="nach" />
          )}
          {activeTab === 'loan_ops_vault' && (
            <LoanOperationsView initialSubTab="vault" />
          )}

          {/* TAB 14: ASSETS & ADMIN & SUB-MODULES */}
          {(activeTab === 'assets_admin' || activeTab === 'assets_hardware') && (
            <AssetsAdminView initialSubTab="hardware" />
          )}
          {activeTab === 'assets_cctv' && (
            <AssetsAdminView initialSubTab="cctv" />
          )}
          {activeTab === 'assets_leases' && (
            <AssetsAdminView initialSubTab="leases" />
          )}

          {/* TAB 15: GOVERNANCE & AUDIT & SUB-MODULES */}
          {(activeTab === 'governance_view' || activeTab === 'governance_rbi') && (
            <GovernanceView initialSubTab="rbi" />
          )}
          {activeTab === 'governance_audit' && (
            <GovernanceView initialSubTab="audit" />
          )}
          {activeTab === 'governance_aml' && (
            <GovernanceView initialSubTab="aml" />
          )}

          {/* TAB 16: INSIGHTS & PLATFORM & SUB-MODULES */}
          {(activeTab === 'insights_platform' || activeTab === 'insights_board') && (
            <InsightsPlatformView initialSubTab="board" />
          )}
          {activeTab === 'insights_alm' && (
            <InsightsPlatformView initialSubTab="alm" />
          )}

          {/* TAB 17: ALL WORKSPACES OVERVIEW */}
          {activeTab === 'all_workspaces' && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">Namdev Finvest Enterprise Workspaces</h2>
                  <p className="text-xs text-slate-500">Switch between executive, zonal, branch and audit workspaces</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div
                  onClick={() => setActiveTab('dashboard')}
                  className="p-4 rounded-xl border-2 border-blue-600 bg-blue-50/50 cursor-pointer hover:shadow-xs transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Primary Workspace</span>
                  <h3 className="font-extrabold text-sm text-slate-900 mt-1">CEO Executive Command Center</h3>
                  <p className="text-xs text-slate-500 mt-1">Full board oversight, real-time AUM, disbursements, collections and risk.</p>
                </div>
                <div
                  onClick={() => setActiveTab('crm_leads')}
                  className="p-4 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-blue-400 hover:shadow-xs transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Origination Workspace</span>
                  <h3 className="font-bold text-sm text-slate-900 mt-1">Sourcing & CRM Lead Management</h3>
                  <p className="text-xs text-slate-500 mt-1">Direct Sales Agents, dealer partnerships, rural walk-ins and conversions.</p>
                </div>
                <div
                  onClick={() => setActiveTab('credit_command')}
                  className="p-4 rounded-xl border border-slate-200 bg-white cursor-pointer hover:border-blue-400 hover:shadow-xs transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Credit Workspace</span>
                  <h3 className="font-bold text-sm text-slate-900 mt-1">Underwriting & Decisioning Desk</h3>
                  <p className="text-xs text-slate-500 mt-1">Credit committee approvals, CAM generation, bureau underwriting and waivers.</p>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <footer className="pt-6 pb-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <div>
              <span className="font-bold text-slate-700">Namdev Finvest Ltd.</span> · Co-created Lending Co. (CIN: U65921RJ1997PLC047095)
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span>System Version 2026.4.1</span>
              <span>·</span>
              <span>Encrypted 256-bit TLS</span>
              <span>·</span>
              <button
                onClick={() => setShowBoardReport(true)}
                className="text-blue-700 font-semibold hover:underline cursor-pointer"
              >
                Board Executive Report
              </button>
            </div>
          </footer>
        </main>
      </div>

      {/* Modals */}
      {selectedApplication && (
        <CaseDetailModal
          application={selectedApplication}
          onClose={() => setSelectedApplication(null)}
          onStatusUpdate={handleStatusUpdate}
        />
      )}

      {showBoardReport && (
        <BoardReportModal onClose={() => setShowBoardReport(false)} />
      )}

      {showLoanCalculator && (
        <LoanCalculatorModal
          onClose={() => setShowLoanCalculator(false)}
          onApplyNow={handleApplyFromCalculator}
        />
      )}

      {showKycDedupe && (
        <KycDedupeModal onClose={() => setShowKycDedupe(false)} />
      )}

      {selectedKpi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900">{selectedKpi.title} Breakdown</h3>
              <button
                onClick={() => setSelectedKpi(null)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-400 font-medium">Current Figure</span>
              <div className="text-2xl font-black text-slate-900 tabular-nums">{selectedKpi.value}</div>
              <div className="text-xs font-bold text-emerald-700 mt-1">{selectedKpi.change} vs previous cycle</div>
              <p className="text-xs text-slate-500 mt-2">{selectedKpi.description}</p>
            </div>
            <button
              onClick={() => setSelectedKpi(null)}
              className="w-full py-2 bg-slate-900 text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
