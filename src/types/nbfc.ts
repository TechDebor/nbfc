export type TimePeriod = 'today' | 'mtd' | 'qtd' | 'ytd' | 'fy2627';

export interface FilterState {
  period: TimePeriod;
  product: string;
  region: string;
  state: string;
  branch: string;
  department: string;
  compareWith: string;
}

export interface KpiMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  isPositive: boolean;
  sparkline: number[];
  color: 'blue' | 'red' | 'green' | 'amber' | 'slate';
  description?: string;
}

export interface ProductPerformance {
  name: string;
  key: string;
  percentage: number;
  aumAmount: string;
  aumValue: number;
  disbAmount: string;
  disbValue: number;
  customersCount: number;
  color: string;
  iconName: string;
}

export interface BranchPerformance {
  id: number;
  name: string;
  region: string;
  zone: string;
  target: string;
  targetValue: number;
  disbursement: string;
  disbValue: number;
  achievement: number;
  growth: string;
  growthValue: number;
  collection: string;
  collectionValue: number;
}

export interface EmployeePerformance {
  id: number;
  name: string;
  role: string;
  disbursement: string;
  target: string;
  achievement: number;
  rank: number;
  type: 'top' | 'bottom';
  team: string;
}

export interface WatchlistItem {
  id: string;
  title: string;
  count: number;
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM';
  trend: string;
  description: string;
}

export interface GeographicState {
  state: string;
  amount: string;
  share: number;
  branches: number;
  growth: string;
}

export interface LoanApplication {
  id: string;
  applicantName: string;
  product: string;
  amount: number;
  disbursalTargetDate: string;
  branch: string;
  status: 'In Queue' | 'Credit Review' | 'CAM Generated' | 'Sanctioned' | 'Disbursed' | 'Rejected';
  riskGrade: 'A' | 'B' | 'C' | 'D' | 'E';
  cibilScore: number;
  tatHours: number;
  appliedDate: string;
  phone: string;
  pan: string;
}

export interface PortfolioBucket {
  label: string;
  percentage: number;
  amount: string;
  amountValue: number;
  color: string;
}

export interface CrmLead {
  id: string;
  name: string;
  phone: string;
  city: string;
  source: 'Digital / Web' | 'DSA Partner' | 'Branch Walk-in' | 'Dealer Tie-up' | 'Customer Referral';
  loanType: string;
  requiredAmount: number;
  assignedOfficer: string;
  stage: 'New Lead' | 'Contacted' | 'Documents Collected' | 'Login Initiated' | 'Converted' | 'Lost';
  leadScore: number;
  createdDate: string;
}

export interface MsmeCase {
  id: string;
  businessName: string;
  promoterName: string;
  businessVintage: string;
  annualTurnover: number;
  loanAmount: number;
  gstin: string;
  collateralType: string;
  status: 'Field Visit Pending' | 'Financial Appraisal' | 'Valuation Done' | 'CAM Preparation' | 'Sanctioned';
  branch: string;
}

export interface CustomerProfile {
  id: string;
  name: string;
  pan: string;
  phone: string;
  city: string;
  branch: string;
  activeLoans: number;
  totalBorrowed: number;
  outstandingAmount: number;
  creditScore: number;
  kycStatus: 'Fully Verified' | 'Re-KYC Due' | 'Pending Verification';
  segment: 'Prime' | 'Growth MSME' | 'Rural Retail' | 'Agri Allied';
}

export interface PreEligibilityRecord {
  id: string;
  applicantName: string;
  phone: string;
  monthlyIncome: number;
  existingEmi: number;
  foirPercentage: number;
  maxEligibleAmount: number;
  requestedAmount: number;
  recommendation: 'Eligible - Fast Track' | 'Eligible - Standard' | 'Requires Co-Applicant' | 'High FOIR - Rejected';
  status: 'Qualified' | 'Conditional' | 'Disqualified';
}

export interface KycRecord {
  id: string;
  customerName: string;
  pan: string;
  documentType: 'Aadhaar + PAN' | 'Form 60 + Voter ID' | 'Passport' | 'Driving License';
  matchPercentage: number;
  biometricVerified: boolean;
  hunterMatch: boolean;
  status: 'Verified & Approved' | 'Manual Inspection' | 'Flagged Fraud Risk';
  verificationDate: string;
}

export interface DocumentItem {
  id: string;
  docName: string;
  category: 'Identity Proof' | 'Income / ITR' | 'Bank Statement' | 'Property Title' | 'Vehicle RC' | 'Legal CAM';
  customerName: string;
  loanId: string;
  uploadDate: string;
  fileSize: string;
  status: 'Verified' | 'Pending Review' | 'Rejected';
  verifiedBy: string;
}

export interface WorkflowTask {
  id: string;
  title: string;
  category: 'Credit Appraisal' | 'Legal Search' | 'Field Inspection' | 'Disbursement' | 'Collection Followup';
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  dueDate: string;
  assignedTo: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  relatedId: string;
}

export interface AssetItem {
  id: string;
  assetTag: string;
  assetType: 'Biometric Scanner' | 'Executive Laptop' | 'Printer / Scanner' | 'CCTV Camera' | 'POS Tablet';
  branch: string;
  assignedUser: string;
  purchaseDate: string;
  condition: 'Optimal' | 'Maintenance Required' | 'Offline';
  status: 'Active' | 'Under Service' | 'Surplus';
}

export interface GovernanceItem {
  id: string;
  category: 'RBI Master Circular' | 'Fair Practices Code' | 'AML / CFT' | 'Statutory Audit' | 'Customer Ombudsman';
  regulationRef: string;
  title: string;
  dueDate: string;
  ownerDepartment: string;
  complianceStatus: '100% Compliant' | 'Action Scheduled' | 'Pending Review';
  riskLevel: 'Low' | 'Moderate' | 'High';
}

export interface CreditCommitteeCase {
  id: string;
  applicantName: string;
  businessOrPurpose: string;
  product: string;
  proposedAmount: number;
  committeeLevel: 'Level 1 (Branch)' | 'Level 2 (Credit Head)' | 'Level 3 (CEO / Board)';
  meetingDate: string;
  quorumStatus: string;
  votesApproved: number;
  votesRequired: number;
  underwriterNote: string;
  riskRating: 'Low' | 'Moderate' | 'High';
  status: 'Scheduled for Meeting' | 'Approved with Covenants' | 'Referred for Clarification' | 'Declined';
}

export interface CamApprovalItem {
  id: string;
  applicantName: string;
  product: string;
  requestedAmount: number;
  assessedAmount: number;
  dscrRatio: number;
  ltvRatio: number;
  annualIncome: number;
  valuationAmount: number;
  preparedBy: string;
  approvalStatus: 'Ready for Sign-off' | 'Approved' | 'Returned for Verification' | 'Disbursal Ready';
  camScore: number;
}

export interface DeviationRecord {
  id: string;
  applicantName: string;
  loanId: string;
  deviationType: 'CIBIL Cutoff Waiver' | 'LTV Variance > 15%' | 'FOIR Exceeding 55%' | 'Collateral Non-Standard' | 'Age Criteria Relaxation' | 'Surrogate Inflow Assessment';
  requestedWaiver: string;
  mitigatingFactor: string;
  approvalAuthority: 'Branch Manager' | 'Zonal Head' | 'Chief Credit Officer' | 'MD & CEO';
  waiverStatus: 'Approved' | 'Pending Committee' | 'Rejected';
  createdDate: string;
}

