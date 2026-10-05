import React, { useState } from "react";
import {
  LayoutDashboard,
  Layers,
  Wrench,
  CheckSquare,
  FileCheck,
  Network,
  Users,
  UserPlus,
  FileSpreadsheet,
  Briefcase,
  FileText,
  UserCheck,
  Sliders,
  ShieldCheck,
  FolderOpen,
  ChevronDown,
  ChevronRight,
  LogOut,
  CreditCard,
  Cog,
  Building,
  ShieldAlert,
  BarChart3,
  Plus,
} from "lucide-react";
import { NamdevLogo } from "./NamdevLogo";
import { useLanguage } from "../../context/LanguageContext";

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onNewUtility?: () => void;
  onLogout?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  onNewUtility,
  onLogout,
}) => {
  const { t } = useLanguage();
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({
    credit: true,
    ops: true,
    people: true,
    assets: true,
    governance: true,
    insights: true,
  });

  const toggleSection = (section: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen shrink-0 select-none">
      {/* Top Logo Block */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">
        <NamdevLogo size="md" showSubtitle={true} />
      </div>

      {/* Scrollable Navigation Items */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4 text-xs font-medium">
        {/* Workspace Switcher */}
        <button
          onClick={() => onSelectTab("all_workspaces")}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-semibold transition-colors cursor-pointer"
        >
          <Layers className="w-4 h-4 text-blue-600" />
          <span>{t("nav.all_workspaces", "All Workspaces")}</span>
        </button>

        {/* Primary Dashboard */}
        <div className="space-y-1">
          <button
            onClick={() => onSelectTab("dashboard")}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
              activeTab === "dashboard"
                ? "bg-red-50 text-red-700 border-l-4 border-red-600 shadow-2xs"
                : "text-slate-700 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <LayoutDashboard
                className={`w-4 h-4 ${activeTab === "dashboard" ? "text-red-600" : "text-slate-500"}`}
              />
              <span>{t("nav.dashboard", "Dashboard")}</span>
            </div>
            {activeTab === "dashboard" && (
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
            )}
          </button>

          <button
            onClick={onNewUtility}
            className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Wrench className="w-4 h-4 text-slate-400" />
              <span>My Utility</span>
            </div>
            <Plus className="w-3.5 h-3.5 text-slate-400 hover:text-slate-700" />
          </button>

          <button
            onClick={() => onSelectTab("my_tasks")}
            className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "my_tasks"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <CheckSquare className="w-4 h-4 text-slate-400" />
              <span>{t("nav.my_tasks", "My Tasks")}</span>
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">
              293
            </span>
          </button>
        </div>

        {/* Case Docs & Audit Trail */}
        <div className="space-y-1">
          <div className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Case Docs & Audit Trail
          </div>
          <button
            onClick={() => onSelectTab("cases_view")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "cases_view"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FileCheck className="w-4 h-4 text-slate-400" />
            <span>{t("nav.cases_view", "Cases View")}</span>
          </button>
          <button
            onClick={() => onSelectTab("hierarchy_monitor")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "hierarchy_monitor"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Network className="w-4 h-4 text-slate-400" />
            <span>{t("nav.hierarchy", "Hierarchy Monitor")}</span>
          </button>
          <button
            onClick={() => onSelectTab("employee_performance")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "employee_performance"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Users className="w-4 h-4 text-slate-400" />
            <span>{t("nav.employee_perf", "Employee Performance")}</span>
          </button>
        </div>

        {/* Origination Section */}
        <div className="space-y-1">
          <div className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Origination</span>
          </div>

          <button
            onClick={() => onSelectTab("crm_leads")}
            className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "crm_leads"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <UserPlus className="w-4 h-4 text-slate-400" />
              <span>{t("nav.crm_leads", "CRM & Leads")}</span>
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">
              844
            </span>
          </button>

          <button
            onClick={() => onSelectTab("los_applications")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "los_applications"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FileSpreadsheet className="w-4 h-4 text-slate-400" />
            <span>{t("nav.los_apps", "LOS Application")}</span>
          </button>

          <button
            onClick={() => onSelectTab("msme_journey")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "msme_journey"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Briefcase className="w-4 h-4 text-slate-400" />
            <span>{t("nav.msme_journey", "MSME Journey")}</span>
          </button>

          <button
            onClick={() => onSelectTab("applications")}
            className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "applications"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-slate-400" />
              <span>{t("nav.applications", "Applications")}</span>
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
              1051
            </span>
          </button>

          <button
            onClick={() => onSelectTab("customer_360")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "customer_360"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <UserCheck className="w-4 h-4 text-slate-400" />
            <span>{t("nav.customer_360", "Customer 360")}</span>
          </button>

          <button
            onClick={() => onSelectTab("pre_eligibility")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "pre_eligibility"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Sliders className="w-4 h-4 text-slate-400" />
            <span>{t("nav.pre_eligibility", "Pre-Eligibility")}</span>
          </button>

          <button
            onClick={() => onSelectTab("kyc_dedupe")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "kyc_dedupe"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            <span>{t("nav.kyc_dedupe", "KYC & Dedupe")}</span>
          </button>

          <button
            onClick={() => onSelectTab("documents")}
            className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === "documents"
                ? "bg-blue-50 text-blue-800 font-semibold"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <FolderOpen className="w-4 h-4 text-slate-400" />
            <span>{t("nav.documents", "Documents")}</span>
          </button>
        </div>

        {/* Collapsible Departments */}
        <div className="space-y-1 pt-2">
          {/* Credit & Decisioning */}
          <div>
            <button
              onClick={() => {
                onSelectTab("credit_command");
                toggleSection("credit");
              }}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                activeTab === "credit_command"
                  ? "bg-amber-50 text-amber-900"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <CreditCard className="w-4 h-4 text-amber-600" />
                <span>{t("nav.credit_command", "Credit & Decisioning")}</span>
              </div>
              {collapsedSections.credit ? (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
            {!collapsedSections.credit && (
              <div className="pl-9 pr-3 py-1 space-y-1 text-slate-600">
                <div
                  onClick={() => onSelectTab("credit_committee_desk")}
                  className={`py-1 cursor-pointer ${activeTab === "credit_committee_desk" ? "text-blue-700 font-bold" : "hover:text-blue-700"}`}
                >
                  Credit Committee Desk
                </div>
                <div
                  onClick={() => onSelectTab("cam_approvals")}
                  className={`py-1 cursor-pointer ${activeTab === "cam_approvals" ? "text-blue-700 font-bold" : "hover:text-blue-700"}`}
                >
                  CAM Approvals
                </div>
                <div
                  onClick={() => onSelectTab("deviations_matrix")}
                  className={`py-1 cursor-pointer ${activeTab === "deviations_matrix" ? "text-blue-700 font-bold" : "hover:text-blue-700"}`}
                >
                  Deviations Matrix
                </div>
              </div>
            )}
          </div>

          {/* Loan Operations */}
          <div>
            <button
              onClick={() => {
                onSelectTab("loan_ops_disbursement");
                toggleSection("ops");
              }}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                activeTab.startsWith("loan_ops_") ||
                activeTab === "disbursement_hub"
                  ? "bg-emerald-50 text-emerald-900 border-l-3 border-emerald-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Cog className="w-4 h-4 text-emerald-600" />
                <span>{t("nav.loan_ops", "Loan Operations")}</span>
              </div>
              {collapsedSections.ops ? (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
            {!collapsedSections.ops && (
              <div className="pl-9 pr-3 py-1 space-y-1 text-slate-600 text-[11px]">
                <div
                  onClick={() => onSelectTab("loan_ops_disbursement")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "loan_ops_disbursement" ||
                    activeTab === "disbursement_hub"
                      ? "text-emerald-700 font-bold"
                      : "hover:text-emerald-700"
                  }`}
                >
                  Disbursement Queue
                </div>
                <div
                  onClick={() => onSelectTab("loan_ops_nach")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "loan_ops_nach"
                      ? "text-emerald-700 font-bold"
                      : "hover:text-emerald-700"
                  }`}
                >
                  Bank NACH / eMandate
                </div>
                <div
                  onClick={() => onSelectTab("loan_ops_vault")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "loan_ops_vault"
                      ? "text-emerald-700 font-bold"
                      : "hover:text-emerald-700"
                  }`}
                >
                  Document Vault
                </div>
              </div>
            )}
          </div>

          {/* People & Work */}
          <div>
            <button
              onClick={() => {
                onSelectTab("people_officers");
                toggleSection("people");
              }}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                activeTab.startsWith("people_") ||
                activeTab === "employee_performance"
                  ? "bg-blue-50 text-blue-900 border-l-3 border-blue-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-blue-600" />
                <span>{t("nav.people_work", "People & Work")}</span>
              </div>
              {collapsedSections.people ? (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
            {!collapsedSections.people && (
              <div className="pl-9 pr-3 py-1 space-y-1 text-slate-600 text-[11px]">
                <div
                  onClick={() => onSelectTab("people_officers")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "people_officers"
                      ? "text-blue-700 font-bold"
                      : "hover:text-blue-700"
                  }`}
                >
                  Branch Officers Directory
                </div>
                <div
                  onClick={() => onSelectTab("people_incentives")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "people_incentives"
                      ? "text-blue-700 font-bold"
                      : "hover:text-blue-700"
                  }`}
                >
                  Incentive Calculator
                </div>
                <div
                  onClick={() => onSelectTab("people_attendance")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "people_attendance"
                      ? "text-blue-700 font-bold"
                      : "hover:text-blue-700"
                  }`}
                >
                  Geo-Attendance & Beat
                </div>
              </div>
            )}
          </div>

          {/* Assets & Admin */}
          <div>
            <button
              onClick={() => {
                onSelectTab("assets_hardware");
                toggleSection("assets");
              }}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                activeTab.startsWith("assets_") || activeTab === "assets_admin"
                  ? "bg-slate-100 text-slate-900 border-l-3 border-slate-700"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Building className="w-4 h-4 text-slate-500" />
                <span>{t("nav.assets_admin", "Assets & Admin")}</span>
              </div>
              {collapsedSections.assets ? (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
            {!collapsedSections.assets && (
              <div className="pl-9 pr-3 py-1 space-y-1 text-slate-600 text-[11px]">
                <div
                  onClick={() => onSelectTab("assets_hardware")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "assets_hardware" ||
                    activeTab === "assets_admin"
                      ? "text-slate-900 font-bold"
                      : "hover:text-blue-700"
                  }`}
                >
                  Branch Infra & Hardware
                </div>
                <div
                  onClick={() => onSelectTab("assets_cctv")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "assets_cctv"
                      ? "text-slate-900 font-bold"
                      : "hover:text-blue-700"
                  }`}
                >
                  CCTV & Surveillance
                </div>
                <div
                  onClick={() => onSelectTab("assets_leases")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "assets_leases"
                      ? "text-slate-900 font-bold"
                      : "hover:text-blue-700"
                  }`}
                >
                  Branch Leases & Facilities
                </div>
              </div>
            )}
          </div>

          {/* Governance */}
          <div>
            <button
              onClick={() => {
                onSelectTab("governance_rbi");
                toggleSection("governance");
              }}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                activeTab.startsWith("governance_") ||
                activeTab === "governance_view"
                  ? "bg-red-50 text-red-900 border-l-3 border-red-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>{t("nav.governance", "Governance")}</span>
              </div>
              {collapsedSections.governance ? (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
            {!collapsedSections.governance && (
              <div className="pl-9 pr-3 py-1 space-y-1 text-slate-600 text-[11px]">
                <div
                  onClick={() => onSelectTab("governance_rbi")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "governance_rbi" ||
                    activeTab === "governance_view"
                      ? "text-red-700 font-bold"
                      : "hover:text-red-700"
                  }`}
                >
                  RBI Inspection Readiness
                </div>
                <div
                  onClick={() => onSelectTab("governance_audit")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "governance_audit"
                      ? "text-red-700 font-bold"
                      : "hover:text-red-700"
                  }`}
                >
                  Internal Audit Desk
                </div>
                <div
                  onClick={() => onSelectTab("governance_aml")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "governance_aml"
                      ? "text-red-700 font-bold"
                      : "hover:text-red-700"
                  }`}
                >
                  AML / CFT & FIU-IND
                </div>
              </div>
            )}
          </div>

          {/* Insights & Platform */}
          <div>
            <button
              onClick={() => {
                onSelectTab("insights_board");
                toggleSection("insights");
              }}
              className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg font-semibold cursor-pointer ${
                activeTab.startsWith("insights_") ||
                activeTab === "insights_platform"
                  ? "bg-indigo-50 text-indigo-900 border-l-3 border-indigo-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BarChart3 className="w-4 h-4 text-indigo-600" />
                <span>{t("nav.insights", "Insights & Platform")}</span>
              </div>
              {collapsedSections.insights ? (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
            {!collapsedSections.insights && (
              <div className="pl-9 pr-3 py-1 space-y-1 text-slate-600 text-[11px]">
                <div
                  onClick={() => onSelectTab("insights_board")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "insights_board" ||
                    activeTab === "insights_platform"
                      ? "text-indigo-700 font-bold"
                      : "hover:text-indigo-700"
                  }`}
                >
                  Board Presentation Reports
                </div>
                <div
                  onClick={() => onSelectTab("insights_alm")}
                  className={`py-1 cursor-pointer transition-colors ${
                    activeTab === "insights_alm"
                      ? "text-indigo-700 font-bold"
                      : "hover:text-indigo-700"
                  }`}
                >
                  ALM Cashflow & Liquidity Model
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* User Footer: Rajiv Mehta (COO - Executive) */}
      <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center shrink-0">
            MD
          </div>
          <div className="min-w-0">
            <div className="font-bold text-xs text-slate-900 truncate">
              Jitendra Tanwar
            </div>
            <div className="text-[10px] text-slate-500 truncate">
              COO - Executive
            </div>
          </div>
        </div>
        <button
          title="Sign out"
          onClick={() =>
            { if (onLogout) onLogout(); }
          }
          className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-white transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
