import {
  KpiMetric,
  ProductPerformance,
  BranchPerformance,
  EmployeePerformance,
  WatchlistItem,
  GeographicState,
  PortfolioBucket,
  LoanApplication,
  CrmLead,
  MsmeCase,
  CustomerProfile,
  PreEligibilityRecord,
  KycRecord,
  DocumentItem,
  WorkflowTask,
  AssetItem,
  GovernanceItem,
  CreditCommitteeCase,
  CamApprovalItem,
  DeviationRecord
} from '../types/nbfc';

export const KPI_DATA: KpiMetric[] = [
  {
    id: 'aum',
    title: 'Total AUM',
    value: '₹ 1,248 Cr',
    change: '+12.5%',
    trend: 'up',
    isPositive: true,
    sparkline: [880, 920, 990, 1040, 1120, 1180, 1248],
    color: 'green',
    description: 'Active Loan Book under management'
  },
  {
    id: 'disbursement',
    title: 'Disbursement',
    value: '₹ 185 Cr',
    change: '+38.4%',
    trend: 'up',
    isPositive: true,
    sparkline: [95, 110, 125, 142, 160, 172, 185],
    color: 'red',
    description: 'Disbursements in current cycle'
  },
  {
    id: 'sanctioned',
    title: 'Sanctioned',
    value: '₹ 214 Cr',
    change: '+31.2%',
    trend: 'up',
    isPositive: true,
    sparkline: [120, 135, 150, 175, 190, 202, 214],
    color: 'green',
    description: 'Credit sanctioned loans'
  },
  {
    id: 'customers',
    title: 'Active Customers',
    value: '52,318',
    change: '+8.2%',
    trend: 'up',
    isPositive: true,
    sparkline: [41000, 43200, 45800, 47900, 49800, 51100, 52318],
    color: 'blue',
    description: 'Verified active borrowers'
  },
  {
    id: 'approval_rate',
    title: 'Approval Rate',
    value: '78.3%',
    change: '+4.1%',
    trend: 'up',
    isPositive: true,
    sparkline: [71, 72.5, 74, 75.2, 76.8, 77.5, 78.3],
    color: 'green',
    description: 'First-time right conversion'
  },
  {
    id: 'collection_eff',
    title: 'Collection Efficiency',
    value: '96.4%',
    change: '+1.2%',
    trend: 'up',
    isPositive: true,
    sparkline: [93.8, 94.2, 94.8, 95.1, 95.7, 96.0, 96.4],
    color: 'blue',
    description: 'Total EMI recovery vs demand'
  },
  {
    id: 'par',
    title: 'Portfolio at Risk',
    value: '2.6%',
    change: 'v 0.4%',
    trend: 'down',
    isPositive: true,
    sparkline: [3.4, 3.2, 3.1, 2.9, 2.8, 2.7, 2.6],
    color: 'amber',
    description: 'PAR 30+ delinquency bucket'
  },
  {
    id: 'npa',
    title: 'NPA',
    value: '1.8%',
    change: 'v 0.4%',
    trend: 'down',
    isPositive: true,
    sparkline: [2.5, 2.4, 2.2, 2.1, 2.0, 1.9, 1.8],
    color: 'red',
    description: 'Gross Non-Performing Assets 90+ DPD'
  }
];

export const PRODUCT_PERFORMANCE: ProductPerformance[] = [
  {
    name: 'Two-Wheeler',
    key: 'two_wheeler',
    percentage: 22,
    aumAmount: '₹ 275 Cr',
    aumValue: 275,
    disbAmount: '₹ 42 Cr',
    disbValue: 42,
    customersCount: 16500,
    color: '#0284c7',
    iconName: 'Bike'
  },
  {
    name: 'MSME Loan',
    key: 'msme',
    percentage: 29,
    aumAmount: '₹ 362 Cr',
    aumValue: 362,
    disbAmount: '₹ 56 Cr',
    disbValue: 56,
    customersCount: 12400,
    color: '#2563eb',
    iconName: 'Building2'
  },
  {
    name: 'LAP',
    key: 'lap',
    percentage: 25,
    aumAmount: '₹ 312 Cr',
    aumValue: 312,
    disbAmount: '₹ 45 Cr',
    disbValue: 45,
    customersCount: 7800,
    color: '#6366f1',
    iconName: 'Home'
  },
  {
    name: 'Solar Loan',
    key: 'solar',
    percentage: 10,
    aumAmount: '₹ 125 Cr',
    aumValue: 125,
    disbAmount: '₹ 22 Cr',
    disbValue: 22,
    customersCount: 6800,
    color: '#10b981',
    iconName: 'Sun'
  },
  {
    name: 'Tractor Loan',
    key: 'tractor',
    percentage: 14,
    aumAmount: '₹ 174 Cr',
    aumValue: 174,
    disbAmount: '₹ 20 Cr',
    disbValue: 20,
    customersCount: 8818,
    color: '#f59e0b',
    iconName: 'Truck'
  }
];

export const BRANCH_PERFORMANCE: BranchPerformance[] = [
  { id: 1, name: 'Jaipur - VK1', region: 'North', zone: 'Zone 1', target: '₹ 35 Cr', targetValue: 35, disbursement: '₹ 39.8 Cr', disbValue: 39.8, achievement: 114, growth: '+ 18%', growthValue: 18, collection: '98%', collectionValue: 98 },
  { id: 2, name: 'Jaipur - Sanganer', region: 'North', zone: 'Zone 1', target: '₹ 24 Cr', targetValue: 24, disbursement: '₹ 26.3 Cr', disbValue: 26.3, achievement: 110, growth: '+ 12%', growthValue: 12, collection: '97%', collectionValue: 97 },
  { id: 3, name: 'Udaipur', region: 'South', zone: 'Zone 2', target: '₹ 18 Cr', targetValue: 18, disbursement: '₹ 19.6 Cr', disbValue: 19.6, achievement: 109, growth: '+ 9%', growthValue: 9, collection: '97%', collectionValue: 97 },
  { id: 4, name: 'Kota', region: 'East', zone: 'Zone 3', target: '₹ 14 Cr', targetValue: 14, disbursement: '₹ 15.6 Cr', disbValue: 15.6, achievement: 112, growth: '+ 14%', growthValue: 14, collection: '96%', collectionValue: 96 },
  { id: 5, name: 'Jodhpur', region: 'West', zone: 'Zone 4', target: '₹ 15 Cr', targetValue: 15, disbursement: '₹ 17.4 Cr', disbValue: 17.4, achievement: 116, growth: '+ 20%', growthValue: 20, collection: '94%', collectionValue: 94 },
  { id: 6, name: 'Ajmer', region: 'Central', zone: 'Zone 1', target: '₹ 12 Cr', targetValue: 12, disbursement: '₹ 13.1 Cr', disbValue: 13.1, achievement: 109, growth: '+ 11%', growthValue: 11, collection: '96.5%', collectionValue: 96.5 },
  { id: 7, name: 'Alwar', region: 'North', zone: 'Zone 1', target: '₹ 16 Cr', targetValue: 16, disbursement: '₹ 17.8 Cr', disbValue: 17.8, achievement: 111, growth: '+ 15%', growthValue: 15, collection: '97.2%', collectionValue: 97.2 },
  { id: 8, name: 'Bikaner', region: 'West', zone: 'Zone 4', target: '₹ 11 Cr', targetValue: 11, disbursement: '₹ 11.9 Cr', disbValue: 11.9, achievement: 108, growth: '+ 8%', growthValue: 8, collection: '95.8%', collectionValue: 95.8 },
  { id: 9, name: 'Bhilwara', region: 'South', zone: 'Zone 2', target: '₹ 13 Cr', targetValue: 13, disbursement: '₹ 14.2 Cr', disbValue: 14.2, achievement: 109, growth: '+ 10%', growthValue: 10, collection: '96.9%', collectionValue: 96.9 },
  { id: 10, name: 'Sikar', region: 'North', zone: 'Zone 1', target: '₹ 15 Cr', targetValue: 15, disbursement: '₹ 16.5 Cr', disbValue: 16.5, achievement: 110, growth: '+ 13%', growthValue: 13, collection: '97.1%', collectionValue: 97.1 },
  { id: 11, name: 'Indore (MP)', region: 'Central', zone: 'Zone 5', target: '₹ 22 Cr', targetValue: 22, disbursement: '₹ 25.4 Cr', disbValue: 25.4, achievement: 115, growth: '+ 22%', growthValue: 22, collection: '96.4%', collectionValue: 96.4 },
  { id: 12, name: 'Bhopal (MP)', region: 'Central', zone: 'Zone 5', target: '₹ 19 Cr', targetValue: 19, disbursement: '₹ 21.0 Cr', disbValue: 21.0, achievement: 110, growth: '+ 18%', growthValue: 18, collection: '95.9%', collectionValue: 95.9 },
  { id: 13, name: 'Ahmedabad (GJ)', region: 'West', zone: 'Zone 6', target: '₹ 26 Cr', targetValue: 26, disbursement: '₹ 29.1 Cr', disbValue: 29.1, achievement: 112, growth: '+ 19%', growthValue: 19, collection: '97.8%', collectionValue: 97.8 },
  { id: 14, name: 'Rajkot (GJ)', region: 'West', zone: 'Zone 6', target: '₹ 16 Cr', targetValue: 16, disbursement: '₹ 17.6 Cr', disbValue: 17.6, achievement: 110, growth: '+ 14%', growthValue: 14, collection: '96.5%', collectionValue: 96.5 },
  { id: 15, name: 'Ludhiana (PB)', region: 'North', zone: 'Zone 7', target: '₹ 17 Cr', targetValue: 17, disbursement: '₹ 18.9 Cr', disbValue: 18.9, achievement: 111, growth: '+ 15%', growthValue: 15, collection: '96.2%', collectionValue: 96.2 }
];

export const EMPLOYEE_PERFORMANCE: EmployeePerformance[] = [
  { id: 1, name: 'Neha Jain', role: 'SSO', disbursement: '₹ 3.9 Cr', target: '₹ 3.2 Cr', achievement: 122, rank: 1, type: 'top', team: 'Jaipur Cluster' },
  { id: 2, name: 'Amit Sharma', role: 'BM', disbursement: '₹ 12.4 Cr', target: '₹ 10 Cr', achievement: 124, rank: 2, type: 'top', team: 'Sanganer Branch' },
  { id: 3, name: 'Rakesh Meena', role: 'ASM', disbursement: '₹ 28.1 Cr', target: '₹ 25 Cr', achievement: 112, rank: 3, type: 'top', team: 'Marwar Zone' },
  { id: 4, name: 'Pooja Rathore', role: 'RSM', disbursement: '₹ 36.2 Cr', target: '₹ 40 Cr', achievement: 91, rank: 4, type: 'top', team: 'Mewar Zone' },
  { id: 5, name: 'Manish Gupta', role: 'ZAM', disbursement: '₹ 82.4 Cr', target: '₹ 80 Cr', achievement: 103, rank: 5, type: 'top', team: 'Rajasthan Central' },
  { id: 6, name: 'Sunil Choudhary', role: 'BM', disbursement: '₹ 11.2 Cr', target: '₹ 9.5 Cr', achievement: 118, rank: 6, type: 'top', team: 'Kota Branch' },
  { id: 7, name: 'Pankaj Joshi', role: 'RO', disbursement: '₹ 2.9 Cr', target: '₹ 2.4 Cr', achievement: 120, rank: 7, type: 'top', team: 'Udaipur Hub' },
  { id: 8, name: 'Anita Bhati', role: 'SSO', disbursement: '₹ 3.4 Cr', target: '₹ 3.0 Cr', achievement: 113, rank: 8, type: 'top', team: 'Jodhpur Hub' },
  { id: 9, name: 'Kavita Sharma', role: 'BM', disbursement: '₹ 9.8 Cr', target: '₹ 8.5 Cr', achievement: 115, rank: 9, type: 'top', team: 'Alwar Branch' },
  { id: 10, name: 'Sanjay Rawat', role: 'ASM', disbursement: '₹ 22.4 Cr', target: '₹ 20 Cr', achievement: 112, rank: 10, type: 'top', team: 'Ajmer Cluster' },
  { id: 11, name: 'Deepak Choudhary', role: 'SSO', disbursement: '₹ 1.8 Cr', target: '₹ 2.8 Cr', achievement: 64, rank: 18, type: 'bottom', team: 'Bharatpur Cluster' },
  { id: 12, name: 'Suresh Verma', role: 'BM', disbursement: '₹ 5.2 Cr', target: '₹ 8.5 Cr', achievement: 61, rank: 19, type: 'bottom', team: 'Dausa Branch' },
  { id: 13, name: 'Vikas Saini', role: 'RO', disbursement: '₹ 1.2 Cr', target: '₹ 2.1 Cr', achievement: 57, rank: 20, type: 'bottom', team: 'Tonk Branch' },
  { id: 14, name: 'Mahesh Sharma', role: 'RO', disbursement: '₹ 1.1 Cr', target: '₹ 2.0 Cr', achievement: 55, rank: 21, type: 'bottom', team: 'Nagaur Hub' },
  { id: 15, name: 'Gopal Lal', role: 'SSO', disbursement: '₹ 1.4 Cr', target: '₹ 2.5 Cr', achievement: 56, rank: 22, type: 'bottom', team: 'Churu Branch' }
];

export const WATCHLIST_ITEMS: WatchlistItem[] = [
  { id: 'w1', title: 'High Risk Cases', count: 19, severity: 'CRITICAL', trend: '+3 from yesterday', description: 'Credit score < 600 or multiple recent bureau inquiries' },
  { id: 'w2', title: 'SLA Breaches', count: 27, severity: 'HIGH', trend: '-5 this week', description: 'Underwriting pending beyond 48 hours TAT' },
  { id: 'w3', title: 'Pending Approvals', count: 13, severity: 'MEDIUM', trend: 'Normal flow', description: 'Sanctions pending Level 3 CEO / Board authority' },
  { id: 'w4', title: 'Legal Exceptions', count: 8, severity: 'HIGH', trend: '+1 new case', description: 'Property title search encumbrance flagged by panel lawyer' },
  { id: 'w5', title: 'Technical Deviations', count: 14, severity: 'MEDIUM', trend: 'Under review', description: 'Property valuation variance > 15% between valuers' },
  { id: 'w6', title: 'PDD Overdue', count: 31, severity: 'HIGH', trend: 'Follow-up sent', description: 'Post-Disbursement Documents uncollected past 30 days' },
  { id: 'w7', title: 'CCTV Dropout Incidents', count: 3, severity: 'MEDIUM', trend: 'Vendor assigned', description: 'Branch cash counter CCTV camera stream offline' }
];

export const GEOGRAPHIC_DATA: GeographicState[] = [
  { state: 'Rajasthan', amount: '₹ 482 Cr', share: 38.6, branches: 72, growth: '+16%' },
  { state: 'Madhya Pradesh', amount: '₹ 258 Cr', share: 20.7, branches: 38, growth: '+22%' },
  { state: 'Gujarat', amount: '₹ 202 Cr', share: 16.2, branches: 28, growth: '+19%' },
  { state: 'Punjab', amount: '₹ 145 Cr', share: 11.6, branches: 22, growth: '+14%' },
  { state: 'Haryana', amount: '₹ 98 Cr', share: 7.8, branches: 15, growth: '+18%' },
  { state: 'Delhi NCR', amount: '₹ 63 Cr', share: 5.1, branches: 10, growth: '+25%' }
];

export const PORTFOLIO_QUALITY: PortfolioBucket[] = [
  { label: 'Standard', percentage: 94.2, amount: '₹ 1,175 Cr', amountValue: 1175, color: '#10b981' },
  { label: 'DPD 1-30', percentage: 2.7, amount: '₹ 34 Cr', amountValue: 34, color: '#0ea5e9' },
  { label: 'DPD 31-60', percentage: 1.2, amount: '₹ 15 Cr', amountValue: 15, color: '#f59e0b' },
  { label: 'DPD 61-90', percentage: 0.8, amount: '₹ 10 Cr', amountValue: 10, color: '#f97316' },
  { label: 'NPA (90+ DPD)', percentage: 0.7, amount: '₹ 9 Cr', amountValue: 9, color: '#ef4444' }
];

export const LOAN_APPLICATIONS: LoanApplication[] = [
  { id: 'NAM-2026-8841', applicantName: 'Manoj Kumar Sharma', product: 'MSME Loan', amount: 1500000, disbursalTargetDate: '2026-10-08', branch: 'Jaipur - VK1', status: 'In Queue', riskGrade: 'A', cibilScore: 785, tatHours: 14, appliedDate: '2026-10-04', phone: '+91 98290 14820', pan: 'ABCPS1289K' },
  { id: 'NAM-2026-8842', applicantName: 'Sunita Devi Yadav', product: 'Two-Wheeler', amount: 85000, disbursalTargetDate: '2026-10-06', branch: 'Jaipur - Sanganer', status: 'Credit Review', riskGrade: 'B', cibilScore: 720, tatHours: 4, appliedDate: '2026-10-04', phone: '+91 94140 28192', pan: 'AYQPD9912M' },
  { id: 'NAM-2026-8843', applicantName: 'Kailash Chand Gurjar', product: 'Tractor Loan', amount: 650000, disbursalTargetDate: '2026-10-09', branch: 'Kota', status: 'CAM Generated', riskGrade: 'B', cibilScore: 742, tatHours: 22, appliedDate: '2026-10-03', phone: '+91 97845 33019', pan: 'BGKPG4418P' },
  { id: 'NAM-2026-8844', applicantName: 'Rameshwar Lal Soni', product: 'LAP', amount: 2800000, disbursalTargetDate: '2026-10-12', branch: 'Jodhpur', status: 'Sanctioned', riskGrade: 'A', cibilScore: 810, tatHours: 36, appliedDate: '2026-10-02', phone: '+91 98292 44910', pan: 'CRKPS7721L' },
  { id: 'NAM-2026-8845', applicantName: 'Vikram Singh Shekhawat', product: 'Solar Loan', amount: 320000, disbursalTargetDate: '2026-10-07', branch: 'Udaipur', status: 'Disbursed', riskGrade: 'A', cibilScore: 760, tatHours: 18, appliedDate: '2026-10-01', phone: '+91 94142 88201', pan: 'DYKPS6610N' },
  { id: 'NAM-2026-8846', applicantName: 'Bhanwar Singh Bhati', product: 'MSME Loan', amount: 900000, disbursalTargetDate: '2026-10-10', branch: 'Bikaner', status: 'Credit Review', riskGrade: 'C', cibilScore: 685, tatHours: 29, appliedDate: '2026-10-03', phone: '+91 98280 55190', pan: 'EFKPS3312Q' },
  { id: 'NAM-2026-8847', applicantName: 'Priya Meena', product: 'Two-Wheeler', amount: 92000, disbursalTargetDate: '2026-10-06', branch: 'Alwar', status: 'Sanctioned', riskGrade: 'A', cibilScore: 790, tatHours: 6, appliedDate: '2026-10-04', phone: '+91 97840 99120', pan: 'FGKPS8890R' },
  { id: 'NAM-2026-8848', applicantName: 'Harish Chandra Patidar', product: 'Tractor Loan', amount: 720000, disbursalTargetDate: '2026-10-11', branch: 'Indore (MP)', status: 'In Queue', riskGrade: 'B', cibilScore: 735, tatHours: 12, appliedDate: '2026-10-04', phone: '+91 98270 44211', pan: 'GHKPS1144S' },
  { id: 'NAM-2026-8849', applicantName: 'Dharmendra Rathore', product: 'MSME Loan', amount: 1850000, disbursalTargetDate: '2026-10-14', branch: 'Ajmer', status: 'CAM Generated', riskGrade: 'B', cibilScore: 740, tatHours: 26, appliedDate: '2026-10-02', phone: '+91 94143 77123', pan: 'HIKPS2255T' },
  { id: 'NAM-2026-8850', applicantName: 'Santosh Devi Kumawat', product: 'Solar Loan', amount: 280000, disbursalTargetDate: '2026-10-08', branch: 'Sikar', status: 'Disbursed', riskGrade: 'A', cibilScore: 775, tatHours: 16, appliedDate: '2026-10-01', phone: '+91 98295 88122', pan: 'IJKPS3366U' },
  { id: 'NAM-2026-8851', applicantName: 'Babulal Prajapat', product: 'Two-Wheeler', amount: 78000, disbursalTargetDate: '2026-10-07', branch: 'Bhilwara', status: 'Credit Review', riskGrade: 'B', cibilScore: 715, tatHours: 8, appliedDate: '2026-10-04', phone: '+91 97842 11988', pan: 'JKKPS4477V' },
  { id: 'NAM-2026-8852', applicantName: 'Girishbhai Patel', product: 'LAP', amount: 3500000, disbursalTargetDate: '2026-10-15', branch: 'Ahmedabad (GJ)', status: 'CAM Generated', riskGrade: 'A', cibilScore: 825, tatHours: 32, appliedDate: '2026-10-02', phone: '+91 98250 66332', pan: 'KLKPS5588W' },
  { id: 'NAM-2026-8853', applicantName: 'Manpreet Singh Gill', product: 'Tractor Loan', amount: 800000, disbursalTargetDate: '2026-10-12', branch: 'Ludhiana (PB)', status: 'Sanctioned', riskGrade: 'A', cibilScore: 765, tatHours: 20, appliedDate: '2026-10-03', phone: '+91 98140 77199', pan: 'LMKPS6699X' },
  { id: 'NAM-2026-8854', applicantName: 'Sanjay Jain', product: 'MSME Loan', amount: 2200000, disbursalTargetDate: '2026-10-16', branch: 'Bhopal (MP)', status: 'In Queue', riskGrade: 'B', cibilScore: 750, tatHours: 15, appliedDate: '2026-10-04', phone: '+91 98260 55221', pan: 'MNKPS7700Y' },
  { id: 'NAM-2026-8855', applicantName: 'Rekha Choudhary', product: 'Solar Loan', amount: 450000, disbursalTargetDate: '2026-10-09', branch: 'Jaipur - VK1', status: 'Disbursed', riskGrade: 'A', cibilScore: 795, tatHours: 14, appliedDate: '2026-10-01', phone: '+91 94140 33119', pan: 'NOKPS8811Z' },
  { id: 'NAM-2026-8856', applicantName: 'Deepak Agarwal', product: 'LAP', amount: 4200000, disbursalTargetDate: '2026-10-18', branch: 'Kota', status: 'Credit Review', riskGrade: 'C', cibilScore: 690, tatHours: 42, appliedDate: '2026-10-02', phone: '+91 98291 99220', pan: 'OPKPS9922A' }
];

export const CRM_LEADS: CrmLead[] = [
  { id: 'LD-10491', name: 'Rajendra Singh Sisodia', phone: '+91 98290 11200', city: 'Jaipur', source: 'DSA Partner', loanType: 'MSME Loan', requiredAmount: 1800000, assignedOfficer: 'Amit Sharma', stage: 'Login Initiated', leadScore: 92, createdDate: '2026-10-04' },
  { id: 'LD-10492', name: 'Meena Devi Gurjar', phone: '+91 94141 22331', city: 'Dausa', source: 'Branch Walk-in', loanType: 'Two-Wheeler', requiredAmount: 85000, assignedOfficer: 'Neha Jain', stage: 'Documents Collected', leadScore: 84, createdDate: '2026-10-04' },
  { id: 'LD-10493', name: 'Ramlal Jat', phone: '+91 97843 33442', city: 'Nagaur', source: 'Dealer Tie-up', loanType: 'Tractor Loan', requiredAmount: 700000, assignedOfficer: 'Suresh Verma', stage: 'Contacted', leadScore: 78, createdDate: '2026-10-04' },
  { id: 'LD-10494', name: 'Mukesh Khandelwal', phone: '+91 98282 44553', city: 'Jaipur', source: 'Digital / Web', loanType: 'LAP', requiredAmount: 3200000, assignedOfficer: 'Amit Sharma', stage: 'Login Initiated', leadScore: 95, createdDate: '2026-10-03' },
  { id: 'LD-10495', name: 'Govind Ram Meena', phone: '+91 94145 55664', city: 'Sawai Madhopur', source: 'Customer Referral', loanType: 'Solar Loan', requiredAmount: 350000, assignedOfficer: 'Vikas Saini', stage: 'Converted', leadScore: 98, createdDate: '2026-10-02' },
  { id: 'LD-10496', name: 'Ashok Kumar Saini', phone: '+91 98294 66775', city: 'Alwar', source: 'DSA Partner', loanType: 'MSME Loan', requiredAmount: 1200000, assignedOfficer: 'Kavita Sharma', stage: 'Documents Collected', leadScore: 88, createdDate: '2026-10-03' },
  { id: 'LD-10497', name: 'Suman Choudhary', phone: '+91 97849 77886', city: 'Jodhpur', source: 'Branch Walk-in', loanType: 'Two-Wheeler', requiredAmount: 90000, assignedOfficer: 'Anita Bhati', stage: 'Converted', leadScore: 96, createdDate: '2026-10-01' },
  { id: 'LD-10498', name: 'Pappu Lal Dangi', phone: '+91 94148 88997', city: 'Udaipur', source: 'Dealer Tie-up', loanType: 'Tractor Loan', requiredAmount: 620000, assignedOfficer: 'Pankaj Joshi', stage: 'Contacted', leadScore: 74, createdDate: '2026-10-04' },
  { id: 'LD-10499', name: 'Naveen Goyal', phone: '+91 98299 99008', city: 'Kota', source: 'Digital / Web', loanType: 'MSME Loan', requiredAmount: 2500000, assignedOfficer: 'Sunil Choudhary', stage: 'Login Initiated', leadScore: 91, createdDate: '2026-10-03' },
  { id: 'LD-10500', name: 'Tarachand Kumawat', phone: '+91 97841 11229', city: 'Sikar', source: 'DSA Partner', loanType: 'LAP', requiredAmount: 1800000, assignedOfficer: 'Santosh Kumar', stage: 'New Lead', leadScore: 68, createdDate: '2026-10-04' },
  { id: 'LD-10501', name: 'Kishorebhai Shah', phone: '+91 98251 22330', city: 'Ahmedabad', source: 'Digital / Web', loanType: 'MSME Loan', requiredAmount: 4000000, assignedOfficer: 'Girishbhai', stage: 'Documents Collected', leadScore: 94, createdDate: '2026-10-03' },
  { id: 'LD-10502', name: 'Hardeep Singh Brar', phone: '+91 98142 33441', city: 'Ludhiana', source: 'Dealer Tie-up', loanType: 'Tractor Loan', requiredAmount: 750000, assignedOfficer: 'Manpreet Singh', stage: 'Contacted', leadScore: 82, createdDate: '2026-10-04' },
  { id: 'LD-10503', name: 'Kusum Sharma', phone: '+91 98261 44552', city: 'Indore', source: 'Customer Referral', loanType: 'Solar Loan', requiredAmount: 400000, assignedOfficer: 'Sanjay Jain', stage: 'Converted', leadScore: 97, createdDate: '2026-10-02' },
  { id: 'LD-10504', name: 'Bhagwan Das Prajapati', phone: '+91 94149 55663', city: 'Bhilwara', source: 'Branch Walk-in', loanType: 'Two-Wheeler', requiredAmount: 75000, assignedOfficer: 'Babulal', stage: 'Documents Collected', leadScore: 86, createdDate: '2026-10-03' },
  { id: 'LD-10505', name: 'Ghanshyam Tiwari', phone: '+91 98293 66774', city: 'Bikaner', source: 'DSA Partner', loanType: 'MSME Loan', requiredAmount: 1400000, assignedOfficer: 'Bhanwar Singh', stage: 'New Lead', leadScore: 70, createdDate: '2026-10-04' },
  { id: 'LD-10506', name: 'Chaganlal Meghwal', phone: '+91 97847 77885', city: 'Barmer', source: 'Branch Walk-in', loanType: 'Solar Loan', requiredAmount: 250000, assignedOfficer: 'Rakesh Meena', stage: 'Contacted', leadScore: 76, createdDate: '2026-10-04' }
];

export const MSME_CASES: MsmeCase[] = [
  { id: 'MSME-401', businessName: 'Shree Krishna Agro Mills', promoterName: 'Manoj Sharma', businessVintage: '8 Years', annualTurnover: 24000000, loanAmount: 1800000, gstin: '08ABCDE1234F1Z5', collateralType: 'Commercial Godown (Jaipur)', status: 'CAM Preparation', branch: 'Jaipur - VK1' },
  { id: 'MSME-402', businessName: 'Mahaveer Textiles & Garments', promoterName: 'Rajesh Jain', businessVintage: '12 Years', annualTurnover: 38000000, loanAmount: 2500000, gstin: '08FGHIJ5678K1Z2', collateralType: 'Industrial Plot (Bhilwara)', status: 'Sanctioned', branch: 'Bhilwara' },
  { id: 'MSME-403', businessName: 'Marwar Marble Handicrafts', promoterName: 'Kailash Soni', businessVintage: '6 Years', annualTurnover: 14000000, loanAmount: 1200000, gstin: '08KLMNO9012P1Z9', collateralType: 'Residential House (Jodhpur)', status: 'Valuation Done', branch: 'Jodhpur' },
  { id: 'MSME-404', businessName: 'Chambal Engineering Works', promoterName: 'Sunil Verma', businessVintage: '5 Years', annualTurnover: 19000000, loanAmount: 1500000, gstin: '08PQRST3456U1Z6', collateralType: 'Factory Shed (Kota)', status: 'Financial Appraisal', branch: 'Kota' },
  { id: 'MSME-405', businessName: 'Udaipur Green Stone Crushers', promoterName: 'Bhanwar Rathore', businessVintage: '9 Years', annualTurnover: 42000000, loanAmount: 3000000, gstin: '08UVWXY7890Z1Z3', collateralType: 'Freehold Land (Udaipur)', status: 'Sanctioned', branch: 'Udaipur' },
  { id: 'MSME-406', businessName: 'Bikaner Sweets & Namkeen Hub', promoterName: 'Satyanarayan Bishnoi', businessVintage: '15 Years', annualTurnover: 55000000, loanAmount: 3500000, gstin: '08AABCB1122C1Z8', collateralType: 'Commercial Shop (Bikaner)', status: 'CAM Preparation', branch: 'Bikaner' },
  { id: 'MSME-407', businessName: 'Matsya Plastic Moulding', promoterName: 'Devendra Yadav', businessVintage: '4 Years', annualTurnover: 12000000, loanAmount: 900000, gstin: '08BBCDB3344D1Z1', collateralType: 'Residential Plot (Alwar)', status: 'Field Visit Pending', branch: 'Alwar' },
  { id: 'MSME-408', businessName: 'Shekhawati Furniture World', promoterName: 'Praveen Kumawat', businessVintage: '7 Years', annualTurnover: 16000000, loanAmount: 1400000, gstin: '08CCDEB5566E1Z4', collateralType: 'Showroom Premises (Sikar)', status: 'Valuation Done', branch: 'Sikar' },
  { id: 'MSME-409', businessName: 'Indore Auto Components', promoterName: 'Vikas Patidar', businessVintage: '11 Years', annualTurnover: 48000000, loanAmount: 2800000, gstin: '23DDEFB7788F1Z7', collateralType: 'Machinery & Land (Indore)', status: 'Sanctioned', branch: 'Indore (MP)' },
  { id: 'MSME-410', businessName: 'Malwa Organic Seeds & Fertilizer', promoterName: 'Harish Choudhary', businessVintage: '6 Years', annualTurnover: 22000000, loanAmount: 1600000, gstin: '23EEFGB9900G1Z0', collateralType: 'Warehouse (Bhopal)', status: 'Financial Appraisal', branch: 'Bhopal (MP)' },
  { id: 'MSME-411', businessName: 'Gujarat Packaging Solutions', promoterName: 'Chiragbhai Patel', businessVintage: '8 Years', annualTurnover: 35000000, loanAmount: 2400000, gstin: '24FFGHB1234H1Z5', collateralType: 'GIDC Unit (Ahmedabad)', status: 'CAM Preparation', branch: 'Ahmedabad (GJ)' },
  { id: 'MSME-412', businessName: 'Saurashtra Brass Industries', promoterName: 'Jayeshbhai Solanki', businessVintage: '10 Years', annualTurnover: 29000000, loanAmount: 2000000, gstin: '24GGHIB5678I1Z8', collateralType: 'Industrial Shed (Rajkot)', status: 'Sanctioned', branch: 'Rajkot (GJ)' },
  { id: 'MSME-413', businessName: 'Doaba Food Processing', promoterName: 'Gurpreet Singh', businessVintage: '7 Years', annualTurnover: 31000000, loanAmount: 2200000, gstin: '03HHIKB9012J1Z2', collateralType: 'Cold Storage (Ludhiana)', status: 'Valuation Done', branch: 'Ludhiana (PB)' },
  { id: 'MSME-414', businessName: 'Pushkar Handicraft Exports', promoterName: 'Gopal Saini', businessVintage: '5 Years', annualTurnover: 11000000, loanAmount: 850000, gstin: '08IIJKB3456K1Z9', collateralType: 'Residential House (Ajmer)', status: 'Field Visit Pending', branch: 'Ajmer' },
  { id: 'MSME-415', businessName: 'Dausa Dairies & Milk Chilling', promoterName: 'Ramkishore Gurjar', businessVintage: '9 Years', annualTurnover: 27000000, loanAmount: 1900000, gstin: '08JJKLB7890L1Z3', collateralType: 'Rural Commercial Plot (Dausa)', status: 'Sanctioned', branch: 'Jaipur - Sanganer' }
];

export const CUSTOMER_PROFILES: CustomerProfile[] = [
  { id: 'CUST-0891', name: 'Manoj Kumar Sharma', pan: 'ABCPS1289K', phone: '+91 98290 14820', city: 'Jaipur', branch: 'Jaipur - VK1', activeLoans: 2, totalBorrowed: 2200000, outstandingAmount: 1450000, creditScore: 785, kycStatus: 'Fully Verified', segment: 'Growth MSME' },
  { id: 'CUST-0892', name: 'Sunita Devi Yadav', pan: 'AYQPD9912M', phone: '+91 94140 28192', city: 'Jaipur', branch: 'Jaipur - Sanganer', activeLoans: 1, totalBorrowed: 85000, outstandingAmount: 64000, creditScore: 720, kycStatus: 'Fully Verified', segment: 'Rural Retail' },
  { id: 'CUST-0893', name: 'Kailash Chand Gurjar', pan: 'BGKPG4418P', phone: '+91 97845 33019', city: 'Kota', branch: 'Kota', activeLoans: 1, totalBorrowed: 650000, outstandingAmount: 580000, creditScore: 742, kycStatus: 'Fully Verified', segment: 'Agri Allied' },
  { id: 'CUST-0894', name: 'Rameshwar Lal Soni', pan: 'CRKPS7721L', phone: '+91 98292 44910', city: 'Jodhpur', branch: 'Jodhpur', activeLoans: 3, totalBorrowed: 4500000, outstandingAmount: 2800000, creditScore: 810, kycStatus: 'Fully Verified', segment: 'Prime' },
  { id: 'CUST-0895', name: 'Vikram Singh Shekhawat', pan: 'DYKPS6610N', phone: '+91 94142 88201', city: 'Udaipur', branch: 'Udaipur', activeLoans: 1, totalBorrowed: 320000, outstandingAmount: 290000, creditScore: 760, kycStatus: 'Fully Verified', segment: 'Rural Retail' },
  { id: 'CUST-0896', name: 'Bhanwar Singh Bhati', pan: 'EFKPS3312Q', phone: '+91 98280 55190', city: 'Bikaner', branch: 'Bikaner', activeLoans: 2, totalBorrowed: 1500000, outstandingAmount: 920000, creditScore: 685, kycStatus: 'Re-KYC Due', segment: 'Growth MSME' },
  { id: 'CUST-0897', name: 'Priya Meena', pan: 'FGKPS8890R', phone: '+91 97840 99120', city: 'Alwar', branch: 'Alwar', activeLoans: 1, totalBorrowed: 92000, outstandingAmount: 85000, creditScore: 790, kycStatus: 'Fully Verified', segment: 'Rural Retail' },
  { id: 'CUST-0898', name: 'Harish Chandra Patidar', pan: 'GHKPS1144S', phone: '+91 98270 44211', city: 'Indore', branch: 'Indore (MP)', activeLoans: 1, totalBorrowed: 720000, outstandingAmount: 690000, creditScore: 735, kycStatus: 'Fully Verified', segment: 'Agri Allied' },
  { id: 'CUST-0899', name: 'Dharmendra Rathore', pan: 'HIKPS2255T', phone: '+91 94143 77123', city: 'Ajmer', branch: 'Ajmer', activeLoans: 2, totalBorrowed: 2400000, outstandingAmount: 1850000, creditScore: 740, kycStatus: 'Fully Verified', segment: 'Growth MSME' },
  { id: 'CUST-0900', name: 'Santosh Devi Kumawat', pan: 'IJKPS3366U', phone: '+91 98295 88122', city: 'Sikar', branch: 'Sikar', activeLoans: 1, totalBorrowed: 280000, outstandingAmount: 240000, creditScore: 775, kycStatus: 'Fully Verified', segment: 'Rural Retail' },
  { id: 'CUST-0901', name: 'Babulal Prajapat', pan: 'JKKPS4477V', phone: '+91 97842 11988', city: 'Bhilwara', branch: 'Bhilwara', activeLoans: 1, totalBorrowed: 78000, outstandingAmount: 62000, creditScore: 715, kycStatus: 'Fully Verified', segment: 'Rural Retail' },
  { id: 'CUST-0902', name: 'Girishbhai Patel', pan: 'KLKPS5588W', phone: '+91 98250 66332', city: 'Ahmedabad', branch: 'Ahmedabad (GJ)', activeLoans: 2, totalBorrowed: 5000000, outstandingAmount: 3500000, creditScore: 825, kycStatus: 'Fully Verified', segment: 'Prime' },
  { id: 'CUST-0903', name: 'Manpreet Singh Gill', pan: 'LMKPS6699X', phone: '+91 98140 77199', city: 'Ludhiana', branch: 'Ludhiana (PB)', activeLoans: 1, totalBorrowed: 800000, outstandingAmount: 760000, creditScore: 765, kycStatus: 'Fully Verified', segment: 'Agri Allied' },
  { id: 'CUST-0904', name: 'Sanjay Jain', pan: 'MNKPS7700Y', phone: '+91 98260 55221', city: 'Bhopal', branch: 'Bhopal (MP)', activeLoans: 1, totalBorrowed: 2200000, outstandingAmount: 2150000, creditScore: 750, kycStatus: 'Fully Verified', segment: 'Growth MSME' },
  { id: 'CUST-0905', name: 'Deepak Agarwal', pan: 'OPKPS9922A', phone: '+91 98291 99220', city: 'Kota', branch: 'Kota', activeLoans: 1, totalBorrowed: 4200000, outstandingAmount: 4100000, creditScore: 690, kycStatus: 'Pending Verification', segment: 'Growth MSME' }
];

export const PRE_ELIGIBILITY_RECORDS: PreEligibilityRecord[] = [
  { id: 'PE-201', applicantName: 'Manoj Kumar Sharma', phone: '+91 98290 14820', monthlyIncome: 145000, existingEmi: 18000, foirPercentage: 38, maxEligibleAmount: 2200000, requestedAmount: 1500000, recommendation: 'Eligible - Fast Track', status: 'Qualified' },
  { id: 'PE-202', applicantName: 'Sunita Devi Yadav', phone: '+91 94140 28192', monthlyIncome: 28000, existingEmi: 0, foirPercentage: 22, maxEligibleAmount: 110000, requestedAmount: 85000, recommendation: 'Eligible - Fast Track', status: 'Qualified' },
  { id: 'PE-203', applicantName: 'Kailash Chand Gurjar', phone: '+91 97845 33019', monthlyIncome: 65000, existingEmi: 8000, foirPercentage: 36, maxEligibleAmount: 850000, requestedAmount: 650000, recommendation: 'Eligible - Standard', status: 'Qualified' },
  { id: 'PE-204', applicantName: 'Rameshwar Lal Soni', phone: '+91 98292 44910', monthlyIncome: 280000, existingEmi: 45000, foirPercentage: 42, maxEligibleAmount: 4200000, requestedAmount: 2800000, recommendation: 'Eligible - Fast Track', status: 'Qualified' },
  { id: 'PE-205', applicantName: 'Vikram Singh Shekhawat', phone: '+91 94142 88201', monthlyIncome: 48000, existingEmi: 4000, foirPercentage: 28, maxEligibleAmount: 450000, requestedAmount: 320000, recommendation: 'Eligible - Standard', status: 'Qualified' },
  { id: 'PE-206', applicantName: 'Bhanwar Singh Bhati', phone: '+91 98280 55190', monthlyIncome: 75000, existingEmi: 32000, foirPercentage: 58, maxEligibleAmount: 700000, requestedAmount: 900000, recommendation: 'Requires Co-Applicant', status: 'Conditional' },
  { id: 'PE-207', applicantName: 'Priya Meena', phone: '+91 97840 99120', monthlyIncome: 35000, existingEmi: 0, foirPercentage: 18, maxEligibleAmount: 140000, requestedAmount: 92000, recommendation: 'Eligible - Fast Track', status: 'Qualified' },
  { id: 'PE-208', applicantName: 'Harish Chandra Patidar', phone: '+91 98270 44211', monthlyIncome: 82000, existingEmi: 12000, foirPercentage: 34, maxEligibleAmount: 980000, requestedAmount: 720000, recommendation: 'Eligible - Standard', status: 'Qualified' },
  { id: 'PE-209', applicantName: 'Dharmendra Rathore', phone: '+91 94143 77123', monthlyIncome: 165000, existingEmi: 28000, foirPercentage: 44, maxEligibleAmount: 2400000, requestedAmount: 1850000, recommendation: 'Eligible - Fast Track', status: 'Qualified' },
  { id: 'PE-210', applicantName: 'Santosh Devi Kumawat', phone: '+91 98295 88122', monthlyIncome: 42000, existingEmi: 2000, foirPercentage: 24, maxEligibleAmount: 400000, requestedAmount: 280000, recommendation: 'Eligible - Standard', status: 'Qualified' },
  { id: 'PE-211', applicantName: 'Babulal Prajapat', phone: '+91 97842 11988', monthlyIncome: 25000, existingEmi: 0, foirPercentage: 25, maxEligibleAmount: 95000, requestedAmount: 78000, recommendation: 'Eligible - Fast Track', status: 'Qualified' },
  { id: 'PE-212', applicantName: 'Girishbhai Patel', phone: '+91 98250 66332', monthlyIncome: 340000, existingEmi: 55000, foirPercentage: 39, maxEligibleAmount: 5200000, requestedAmount: 3500000, recommendation: 'Eligible - Fast Track', status: 'Qualified' },
  { id: 'PE-213', applicantName: 'Manpreet Singh Gill', phone: '+91 98140 77199', monthlyIncome: 95000, existingEmi: 15000, foirPercentage: 35, maxEligibleAmount: 1100000, requestedAmount: 800000, recommendation: 'Eligible - Standard', status: 'Qualified' },
  { id: 'PE-214', applicantName: 'Sanjay Jain', phone: '+91 98260 55221', monthlyIncome: 195000, existingEmi: 38000, foirPercentage: 46, maxEligibleAmount: 2600000, requestedAmount: 2200000, recommendation: 'Eligible - Standard', status: 'Qualified' },
  { id: 'PE-215', applicantName: 'Deepak Agarwal', phone: '+91 98291 99220', monthlyIncome: 210000, existingEmi: 115000, foirPercentage: 66, maxEligibleAmount: 2800000, requestedAmount: 4200000, recommendation: 'High FOIR - Rejected', status: 'Disqualified' }
];

export const KYC_RECORDS: KycRecord[] = [
  { id: 'KYC-501', customerName: 'Manoj Kumar Sharma', pan: 'ABCPS1289K', documentType: 'Aadhaar + PAN', matchPercentage: 99.4, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-04' },
  { id: 'KYC-502', customerName: 'Sunita Devi Yadav', pan: 'AYQPD9912M', documentType: 'Aadhaar + PAN', matchPercentage: 98.8, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-04' },
  { id: 'KYC-503', customerName: 'Kailash Chand Gurjar', pan: 'BGKPG4418P', documentType: 'Aadhaar + PAN', matchPercentage: 97.5, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-03' },
  { id: 'KYC-504', customerName: 'Rameshwar Lal Soni', pan: 'CRKPS7721L', documentType: 'Aadhaar + PAN', matchPercentage: 100.0, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-02' },
  { id: 'KYC-505', customerName: 'Vikram Singh Shekhawat', pan: 'DYKPS6610N', documentType: 'Aadhaar + PAN', matchPercentage: 98.2, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-01' },
  { id: 'KYC-506', customerName: 'Bhanwar Singh Bhati', pan: 'EFKPS3312Q', documentType: 'Form 60 + Voter ID', matchPercentage: 86.4, biometricVerified: false, hunterMatch: true, status: 'Flagged Fraud Risk', verificationDate: '2026-10-03' },
  { id: 'KYC-507', customerName: 'Priya Meena', pan: 'FGKPS8890R', documentType: 'Aadhaar + PAN', matchPercentage: 99.1, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-04' },
  { id: 'KYC-508', customerName: 'Harish Chandra Patidar', pan: 'GHKPS1144S', documentType: 'Aadhaar + PAN', matchPercentage: 98.5, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-04' },
  { id: 'KYC-509', customerName: 'Dharmendra Rathore', pan: 'HIKPS2255T', documentType: 'Aadhaar + PAN', matchPercentage: 99.0, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-02' },
  { id: 'KYC-510', customerName: 'Santosh Devi Kumawat', pan: 'IJKPS3366U', documentType: 'Aadhaar + PAN', matchPercentage: 98.7, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-01' },
  { id: 'KYC-511', customerName: 'Babulal Prajapat', pan: 'JKKPS4477V', documentType: 'Aadhaar + PAN', matchPercentage: 97.9, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-04' },
  { id: 'KYC-512', customerName: 'Girishbhai Patel', pan: 'KLKPS5588W', documentType: 'Passport', matchPercentage: 99.8, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-02' },
  { id: 'KYC-513', customerName: 'Manpreet Singh Gill', pan: 'LMKPS6699X', documentType: 'Aadhaar + PAN', matchPercentage: 98.6, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-03' },
  { id: 'KYC-514', customerName: 'Sanjay Jain', pan: 'MNKPS7700Y', documentType: 'Aadhaar + PAN', matchPercentage: 99.2, biometricVerified: true, hunterMatch: false, status: 'Verified & Approved', verificationDate: '2026-10-04' },
  { id: 'KYC-515', customerName: 'Deepak Agarwal', pan: 'OPKPS9922A', documentType: 'Driving License', matchPercentage: 91.0, biometricVerified: false, hunterMatch: false, status: 'Manual Inspection', verificationDate: '2026-10-02' }
];

export const DOCUMENT_ITEMS: DocumentItem[] = [
  { id: 'DOC-101', docName: 'Aadhaar e-KYC XML verified', category: 'Identity Proof', customerName: 'Manoj Kumar Sharma', loanId: 'NAM-2026-8841', uploadDate: '2026-10-04', fileSize: '2.1 MB', status: 'Verified', verifiedBy: 'NSDL Auto-Bot' },
  { id: 'DOC-102', docName: 'Bank Statement 6M (HDFC eNACH)', category: 'Bank Statement', customerName: 'Manoj Kumar Sharma', loanId: 'NAM-2026-8841', uploadDate: '2026-10-04', fileSize: '4.8 MB', status: 'Verified', verifiedBy: 'Credit Officer Neha' },
  { id: 'DOC-103', docName: 'Voter ID & Income Affidavit', category: 'Identity Proof', customerName: 'Sunita Devi Yadav', loanId: 'NAM-2026-8842', uploadDate: '2026-10-04', fileSize: '1.4 MB', status: 'Verified', verifiedBy: 'BM Amit Sharma' },
  { id: 'DOC-104', docName: 'Tractor Quotation & Dealer Invoice', category: 'Vehicle RC', customerName: 'Kailash Chand Gurjar', loanId: 'NAM-2026-8843', uploadDate: '2026-10-03', fileSize: '3.2 MB', status: 'Verified', verifiedBy: 'Sunil Choudhary' },
  { id: 'DOC-105', docName: 'Property Title Search Deed 30Y', category: 'Property Title', customerName: 'Rameshwar Lal Soni', loanId: 'NAM-2026-8844', uploadDate: '2026-10-02', fileSize: '14.2 MB', status: 'Verified', verifiedBy: 'Adv. Suresh Verma' },
  { id: 'DOC-106', docName: 'Solar Panel Grid Tie Quotation', category: 'Income / ITR', customerName: 'Vikram Singh Shekhawat', loanId: 'NAM-2026-8845', uploadDate: '2026-10-01', fileSize: '2.8 MB', status: 'Verified', verifiedBy: 'Pankaj Joshi' },
  { id: 'DOC-107', docName: 'ITR V Acknowledgement FY25-26', category: 'Income / ITR', customerName: 'Bhanwar Singh Bhati', loanId: 'NAM-2026-8846', uploadDate: '2026-10-03', fileSize: '3.6 MB', status: 'Pending Review', verifiedBy: 'Underwriter Queue' },
  { id: 'DOC-108', docName: 'Driving License Copy', category: 'Identity Proof', customerName: 'Priya Meena', loanId: 'NAM-2026-8847', uploadDate: '2026-10-04', fileSize: '1.2 MB', status: 'Verified', verifiedBy: 'Kavita Sharma' },
  { id: 'DOC-109', docName: 'Khasra Khatauni Agri Land Jamabandi', category: 'Property Title', customerName: 'Harish Chandra Patidar', loanId: 'NAM-2026-8848', uploadDate: '2026-10-04', fileSize: '5.1 MB', status: 'Verified', verifiedBy: 'Patwari Desk' },
  { id: 'DOC-110', docName: 'GST 3B Returns 12 Months', category: 'Income / ITR', customerName: 'Dharmendra Rathore', loanId: 'NAM-2026-8849', uploadDate: '2026-10-02', fileSize: '6.4 MB', status: 'Verified', verifiedBy: 'CAM Specialist' },
  { id: 'DOC-111', docName: 'Electricity Bill & Rooftop Photo', category: 'Income / ITR', customerName: 'Santosh Devi Kumawat', loanId: 'NAM-2026-8850', uploadDate: '2026-10-01', fileSize: '4.2 MB', status: 'Verified', verifiedBy: 'Santosh Kumar' },
  { id: 'DOC-112', docName: 'Hero Splendor Pro Quotation', category: 'Vehicle RC', customerName: 'Babulal Prajapat', loanId: 'NAM-2026-8851', uploadDate: '2026-10-04', fileSize: '1.8 MB', status: 'Verified', verifiedBy: 'Babulal BM' },
  { id: 'DOC-113', docName: 'Commercial Property Valuation Memo', category: 'Property Title', customerName: 'Girishbhai Patel', loanId: 'NAM-2026-8852', uploadDate: '2026-10-02', fileSize: '8.9 MB', status: 'Verified', verifiedBy: 'Valuer Panel' },
  { id: 'DOC-114', docName: 'Tractor Chassis Impression & RC', category: 'Vehicle RC', customerName: 'Manpreet Singh Gill', loanId: 'NAM-2026-8853', uploadDate: '2026-10-03', fileSize: '3.7 MB', status: 'Verified', verifiedBy: 'Manpreet Singh' },
  { id: 'DOC-115', docName: 'Audited Balance Sheet & Profit Loss', category: 'Income / ITR', customerName: 'Sanjay Jain', loanId: 'NAM-2026-8854', uploadDate: '2026-10-04', fileSize: '9.2 MB', status: 'Verified', verifiedBy: 'Chartered Accountant' }
];

export const WORKFLOW_TASKS: WorkflowTask[] = [
  { id: 'TSK-101', title: 'Level-3 CAM Sanction Approval for ₹28L LAP', category: 'Credit Appraisal', priority: 'CRITICAL', dueDate: '2026-10-05', assignedTo: 'Rajiv Mehta (COO)', status: 'Pending', relatedId: 'NAM-2026-8844' },
  { id: 'TSK-102', title: 'Verify Hunter Fraud Alert for Bhanwar Singh Bhati', category: 'Credit Appraisal', priority: 'HIGH', dueDate: '2026-10-05', assignedTo: 'Risk Vigilance Team', status: 'In Progress', relatedId: 'NAM-2026-8846' },
  { id: 'TSK-103', title: 'Disburse Batch ₹4.2 Cr to Dealer Accounts', category: 'Disbursement', priority: 'HIGH', dueDate: '2026-10-05', assignedTo: 'Disbursal Desk', status: 'In Progress', relatedId: 'BATCH-089' },
  { id: 'TSK-104', title: 'Field Property Valuation in Jodhpur Outer Ring', category: 'Field Inspection', priority: 'MEDIUM', dueDate: '2026-10-06', assignedTo: 'Panel Valuer Rajesh', status: 'Pending', relatedId: 'NAM-2026-8844' },
  { id: 'TSK-105', title: 'Resolve CCTV Stream Offline in Jodhpur Branch', category: 'Field Inspection', priority: 'HIGH', dueDate: '2026-10-05', assignedTo: 'IT Infra Admin', status: 'In Progress', relatedId: 'CCTV-JOD-03' },
  { id: 'TSK-106', title: 'Collect PDD Original RC Book from Dealer', category: 'Disbursement', priority: 'HIGH', dueDate: '2026-10-07', assignedTo: 'RO Vikas Saini', status: 'Pending', relatedId: 'PDD-318' },
  { id: 'TSK-107', title: '30+ DPD Overdue Tele-calling Batch (18 Cases)', category: 'Collection Followup', priority: 'CRITICAL', dueDate: '2026-10-05', assignedTo: 'Collection Manager', status: 'In Progress', relatedId: 'COLL-30' },
  { id: 'TSK-108', title: 'Legal Search Certificate for Sikar Commercial Plot', category: 'Legal Search', priority: 'MEDIUM', dueDate: '2026-10-06', assignedTo: 'Advocate Sharma', status: 'In Progress', relatedId: 'LEGAL-108' },
  { id: 'TSK-109', title: 'NACH Mandate Rejection Rectification (9 Cases)', category: 'Disbursement', priority: 'MEDIUM', dueDate: '2026-10-06', assignedTo: 'Banking Ops Team', status: 'Pending', relatedId: 'NACH-FAIL-12' },
  { id: 'TSK-110', title: 'RBI Quarterly Fair Practices Review Submission', category: 'Credit Appraisal', priority: 'HIGH', dueDate: '2026-10-08', assignedTo: 'Compliance Officer', status: 'In Progress', relatedId: 'RBI-Q3-26' },
  { id: 'TSK-111', title: 'Review Micro-Enterprise Cashflow for MSME-401', category: 'Credit Appraisal', priority: 'MEDIUM', dueDate: '2026-10-05', assignedTo: 'Credit Underwriter Neha', status: 'Completed', relatedId: 'MSME-401' },
  { id: 'TSK-112', title: 'Physical Geo-tagging of Solar Roof in Udaipur', category: 'Field Inspection', priority: 'LOW', dueDate: '2026-10-07', assignedTo: 'Field RO Pankaj', status: 'Pending', relatedId: 'SOL-771' },
  { id: 'TSK-113', title: 'Approve Festive Commission Payout for Jaipur SSO', category: 'Credit Appraisal', priority: 'MEDIUM', dueDate: '2026-10-06', assignedTo: 'HR & Ops Head', status: 'In Progress', relatedId: 'INC-OCT-26' },
  { id: 'TSK-114', title: 'Title Deed Safe Deposit in Central Vault Jaipur', category: 'Disbursement', priority: 'MEDIUM', dueDate: '2026-10-07', assignedTo: 'Vault Custodian', status: 'Pending', relatedId: 'VAULT-892' },
  { id: 'TSK-115', title: 'Internal Audit Reconciliation for Dausa Branch', category: 'Credit Appraisal', priority: 'HIGH', dueDate: '2026-10-09', assignedTo: 'Lead Internal Auditor', status: 'Pending', relatedId: 'AUD-DAUSA' }
];

export const ASSET_ITEMS: AssetItem[] = [
  { id: 'AST-101', assetTag: 'NMD-LP-0881', assetType: 'Executive Laptop', branch: 'Head Office Jaipur', assignedUser: 'Jitendra Tanwar (CEO)', purchaseDate: '2025-11-10', condition: 'Optimal', status: 'Active' },
  { id: 'AST-102', assetTag: 'NMD-LP-0882', assetType: 'Executive Laptop', branch: 'Head Office Jaipur', assignedUser: 'Rajiv Mehta (COO)', purchaseDate: '2025-11-10', condition: 'Optimal', status: 'Active' },
  { id: 'AST-103', assetTag: 'NMD-BIO-0312', assetType: 'Biometric Scanner', branch: 'Jaipur - VK1', assignedUser: 'Branch Login Desk', purchaseDate: '2025-06-15', condition: 'Optimal', status: 'Active' },
  { id: 'AST-104', assetTag: 'NMD-PRN-0104', assetType: 'Printer / Scanner', branch: 'Jaipur - Sanganer', assignedUser: 'Disbursal Officer', purchaseDate: '2024-08-20', condition: 'Optimal', status: 'Active' },
  { id: 'AST-105', assetTag: 'NMD-CAM-0501', assetType: 'CCTV Camera', branch: 'Jodhpur Hub', assignedUser: 'Cash Counter 1', purchaseDate: '2024-03-12', condition: 'Offline', status: 'Under Service' },
  { id: 'AST-106', assetTag: 'NMD-TAB-0721', assetType: 'POS Tablet', branch: 'Kota Branch', assignedUser: 'Field Sourcing Officer', purchaseDate: '2025-09-01', condition: 'Optimal', status: 'Active' },
  { id: 'AST-107', assetTag: 'NMD-LP-0895', assetType: 'Executive Laptop', branch: 'Udaipur Hub', assignedUser: 'Branch Manager', purchaseDate: '2025-04-18', condition: 'Optimal', status: 'Active' },
  { id: 'AST-108', assetTag: 'NMD-BIO-0319', assetType: 'Biometric Scanner', branch: 'Alwar Branch', assignedUser: 'KYC Desk', purchaseDate: '2025-07-22', condition: 'Optimal', status: 'Active' },
  { id: 'AST-109', assetTag: 'NMD-CAM-0508', assetType: 'CCTV Camera', branch: 'Ajmer Hub', assignedUser: 'Main Vault Room', purchaseDate: '2024-10-05', condition: 'Optimal', status: 'Active' },
  { id: 'AST-110', assetTag: 'NMD-TAB-0734', assetType: 'POS Tablet', branch: 'Sikar Branch', assignedUser: 'Rural RO', purchaseDate: '2025-08-11', condition: 'Optimal', status: 'Active' },
  { id: 'AST-111', assetTag: 'NMD-LP-0912', assetType: 'Executive Laptop', branch: 'Indore (MP)', assignedUser: 'Zonal Credit Manager', purchaseDate: '2026-01-14', condition: 'Optimal', status: 'Active' },
  { id: 'AST-112', assetTag: 'NMD-PRN-0128', assetType: 'Printer / Scanner', branch: 'Ahmedabad (GJ)', assignedUser: 'Operations Clerk', purchaseDate: '2025-03-30', condition: 'Optimal', status: 'Active' },
  { id: 'AST-113', assetTag: 'NMD-CAM-0515', assetType: 'CCTV Camera', branch: 'Bhopal (MP)', assignedUser: 'Customer Lobby', purchaseDate: '2024-12-08', condition: 'Offline', status: 'Under Service' },
  { id: 'AST-114', assetTag: 'NMD-TAB-0749', assetType: 'POS Tablet', branch: 'Ludhiana (PB)', assignedUser: 'Tractor Field Executive', purchaseDate: '2026-02-20', condition: 'Optimal', status: 'Active' },
  { id: 'AST-115', assetTag: 'NMD-BIO-0330', assetType: 'Biometric Scanner', branch: 'Bhilwara', assignedUser: 'Disbursal Counter', purchaseDate: '2025-10-15', condition: 'Maintenance Required', status: 'Under Service' }
];

export const GOVERNANCE_ITEMS: GovernanceItem[] = [
  { id: 'GOV-301', category: 'RBI Master Circular', regulationRef: 'RBI/2026-27/04', title: 'Fair Lending Conduct & Key Fact Statement (KFS) Compliance', dueDate: '2026-10-15', ownerDepartment: 'Credit & Operations', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-302', category: 'Fair Practices Code', regulationRef: 'FPC/SEC-09', title: 'Annual Review of Interest Rate Model & Risk Gradation', dueDate: '2026-10-20', ownerDepartment: 'Asset Liability Committee', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-303', category: 'AML / CFT', regulationRef: 'PMLA-Rule-8', title: 'Suspicious Transaction Reports (STR) Review for Sep 2026', dueDate: '2026-10-10', ownerDepartment: 'Risk & Vigilance', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-304', category: 'Statutory Audit', regulationRef: 'Companies Act S.139', title: 'Statutory Auditor Half-Yearly Limited Review FY27', dueDate: '2026-10-31', ownerDepartment: 'Finance & Accounts', complianceStatus: 'Action Scheduled', riskLevel: 'Moderate' },
  { id: 'GOV-305', category: 'Customer Ombudsman', regulationRef: 'RBI/Ombudsman/24', title: 'Resolution of Customer Escalations within 30-Day SLA', dueDate: '2026-10-12', ownerDepartment: 'Grievance Redressal Cell', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-306', category: 'RBI Master Circular', regulationRef: 'NBFC-ScaleBased/18', title: 'Capital Adequacy Ratio (CRAR) Disclosure Maintenance > 15%', dueDate: '2026-10-25', ownerDepartment: 'Treasury & Finance', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-307', category: 'Fair Practices Code', regulationRef: 'FPC/Recovery/12', title: 'Training & Certification for In-House Collection Callers', dueDate: '2026-10-18', ownerDepartment: 'Collection & Legal', complianceStatus: 'Action Scheduled', riskLevel: 'Low' },
  { id: 'GOV-308', category: 'AML / CFT', regulationRef: 'CKYC-Upload-02', title: 'Central KYC (CKYCR) Daily Registry Sync Verification', dueDate: '2026-10-06', ownerDepartment: 'Central Ops Desk', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-309', category: 'Statutory Audit', regulationRef: 'SEBI/LODR-Reg-52', title: 'Debenture Trustee Periodic Asset Cover Certificate', dueDate: '2026-10-28', ownerDepartment: 'Finance & Accounts', complianceStatus: 'Action Scheduled', riskLevel: 'Moderate' },
  { id: 'GOV-310', category: 'RBI Master Circular', regulationRef: 'IT-Framework-NBFC', title: 'Cyber Security VAPT Audit Findings Rectification Report', dueDate: '2026-10-14', ownerDepartment: 'Information Technology', complianceStatus: 'Action Scheduled', riskLevel: 'High' },
  { id: 'GOV-311', category: 'Customer Ombudsman', regulationRef: 'Charter-Clause-3', title: 'Branch Grievance Register Physical Inspection', dueDate: '2026-10-22', ownerDepartment: 'Internal Audit', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-312', category: 'Fair Practices Code', regulationRef: 'FPC/Prepayment/05', title: 'Zero Foreclosure Penalty for Individual Floating Loans Audit', dueDate: '2026-10-16', ownerDepartment: 'Banking Ops', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-313', category: 'RBI Master Circular', regulationRef: 'Liquidity-LCR-09', title: 'Liquidity Coverage Ratio (LCR) Daily High-Quality Liquid Assets', dueDate: '2026-10-07', ownerDepartment: 'Treasury Desk', complianceStatus: '100% Compliant', riskLevel: 'Low' },
  { id: 'GOV-314', category: 'Statutory Audit', regulationRef: 'Internal-Audit-Cycle-2', title: 'Quarterly Risk-Based Internal Audit (RBIA) 25 Branches', dueDate: '2026-10-30', ownerDepartment: 'Internal Audit Head', complianceStatus: 'Pending Review', riskLevel: 'Moderate' },
  { id: 'GOV-315', category: 'AML / CFT', regulationRef: 'FIU-IND-GOV', title: 'Quarterly Cash Transaction Report (CTR) > ₹10 Lakhs', dueDate: '2026-10-15', ownerDepartment: 'Principal Officer Desk', complianceStatus: '100% Compliant', riskLevel: 'Low' }
];

export const MONTHLY_DISBURSEMENT_DATA = [
  { month: 'Nov', target: 145, actual: 142, projected: 142 },
  { month: 'Dec', target: 155, actual: 158, projected: 158 },
  { month: 'Jan', target: 160, actual: 163, projected: 163 },
  { month: 'Feb', target: 170, actual: 171, projected: 171 },
  { month: 'Mar', target: 180, actual: 184, projected: 184 },
  { month: 'Apr', target: 175, actual: 172, projected: 172 },
  { month: 'May', target: 185, actual: 179, projected: 179 },
  { month: 'Jun', target: 190, actual: 186, projected: 186 },
  { month: 'Jul', target: 200, actual: 188, projected: 195 },
  { month: 'Aug', target: 205, actual: 186, projected: 208 },
  { month: 'Sep', target: 210, actual: 186, projected: 216 },
  { month: 'Oct', target: 215, actual: 186, projected: 224 }
];

export const MONTHLY_COLLECTION_DATA = [
  { month: 'Apr', due: 125, collected: 120, efficiency: 96.0 },
  { month: 'May', due: 132, collected: 127, efficiency: 96.2 },
  { month: 'Jun', due: 140, collected: 135, efficiency: 96.4 },
  { month: 'Jul', due: 148, collected: 143, efficiency: 96.6 },
  { month: 'Aug', due: 154, collected: 148, efficiency: 96.1 },
  { month: 'Sep', due: 159, collected: 153, efficiency: 96.2 },
  { month: 'Oct', due: 164, collected: 158, efficiency: 96.4 }
];

export const CREDIT_COMMITTEE_CASES: CreditCommitteeCase[] = [
  { id: 'CC-091', applicantName: 'Rameshwar Lal Soni', businessOrPurpose: 'Jewellery Showroom Expansion', product: 'LAP', proposedAmount: 2800000, committeeLevel: 'Level 3 (CEO / Board)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (4/4)', votesApproved: 4, votesRequired: 3, underwriterNote: 'Clear 30-year search title; debt service coverage ratio 1.85x.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-092', applicantName: 'Manoj Kumar Sharma', businessOrPurpose: 'Flour Mill Automated Plant', product: 'MSME Loan', proposedAmount: 1500000, committeeLevel: 'Level 2 (Credit Head)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (3/3)', votesApproved: 3, votesRequired: 2, underwriterNote: 'Average monthly bank inflow ₹1.45 Lakhs via eNACH.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-093', applicantName: 'Girishbhai Patel', businessOrPurpose: 'Corrugated Box Manufacturing Unit', product: 'LAP', proposedAmount: 3500000, committeeLevel: 'Level 3 (CEO / Board)', meetingDate: '2026-10-06', quorumStatus: 'Scheduled', votesApproved: 0, votesRequired: 3, underwriterNote: 'GIDC Industrial plot valuation ₹65 Lakhs (LTV 54%).', riskRating: 'Low', status: 'Scheduled for Meeting' },
  { id: 'CC-094', applicantName: 'Deepak Agarwal', businessOrPurpose: 'Building Material Wholesale Trader', product: 'LAP', proposedAmount: 4200000, committeeLevel: 'Level 3 (CEO / Board)', meetingDate: '2026-10-06', quorumStatus: 'Scheduled', votesApproved: 1, votesRequired: 3, underwriterNote: 'High existing leverage (FOIR 66%); requires co-applicant guarantee.', riskRating: 'High', status: 'Referred for Clarification' },
  { id: 'CC-095', applicantName: 'Dharmendra Rathore', businessOrPurpose: 'Granite Processing Workshop', product: 'MSME Loan', proposedAmount: 1850000, committeeLevel: 'Level 2 (Credit Head)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (3/3)', votesApproved: 3, votesRequired: 2, underwriterNote: 'GST returns reflect ₹1.8 Cr turnover; zero defaults.', riskRating: 'Moderate', status: 'Approved with Covenants' },
  { id: 'CC-096', applicantName: 'Bhanwar Singh Bhati', businessOrPurpose: 'Agri Commodity Trading House', product: 'MSME Loan', proposedAmount: 900000, committeeLevel: 'Level 2 (Credit Head)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (3/3)', votesApproved: 0, votesRequired: 2, underwriterNote: 'Hunter dedupe fraud flag detected on voter card.', riskRating: 'High', status: 'Declined' },
  { id: 'CC-097', applicantName: 'Sanjay Jain', businessOrPurpose: 'Chemical Packaging Warehouse', product: 'MSME Loan', proposedAmount: 2200000, committeeLevel: 'Level 2 (Credit Head)', meetingDate: '2026-10-06', quorumStatus: 'Scheduled', votesApproved: 0, votesRequired: 2, underwriterNote: 'Balance sheet certified by CA; strong net working capital.', riskRating: 'Low', status: 'Scheduled for Meeting' },
  { id: 'CC-098', applicantName: 'Kailash Chand Gurjar', businessOrPurpose: 'Agricultural Mechanization Purchase', product: 'Tractor Loan', proposedAmount: 650000, committeeLevel: 'Level 1 (Branch)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (2/2)', votesApproved: 2, votesRequired: 2, underwriterNote: 'Khasra Jamabandi 18 Bighas irrigated land.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-099', applicantName: 'Harish Chandra Patidar', businessOrPurpose: 'Soybean Farming Harvester Loan', product: 'Tractor Loan', proposedAmount: 720000, committeeLevel: 'Level 1 (Branch)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (2/2)', votesApproved: 2, votesRequired: 2, underwriterNote: 'Dealer margin 20% deposited in escrow.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-100', applicantName: 'Manpreet Singh Gill', businessOrPurpose: 'Combined Harvester & Implements', product: 'Tractor Loan', proposedAmount: 800000, committeeLevel: 'Level 1 (Branch)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (2/2)', votesApproved: 2, votesRequired: 2, underwriterNote: 'Guarantor has CIBIL 790 with commercial dairy assets.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-101', applicantName: 'Vikram Singh Shekhawat', businessOrPurpose: 'Rooftop Solar Plant 25kW', product: 'Solar Loan', proposedAmount: 320000, committeeLevel: 'Level 1 (Branch)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (2/2)', votesApproved: 2, votesRequired: 2, underwriterNote: 'DISCOM net metering sanction letter verified.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-102', applicantName: 'Santosh Devi Kumawat', businessOrPurpose: 'Atta Chakki Solar Hybrid Power', product: 'Solar Loan', proposedAmount: 280000, committeeLevel: 'Level 1 (Branch)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (2/2)', votesApproved: 2, votesRequired: 2, underwriterNote: 'Power bill savings ₹9,000/month covers ₹8,200 EMI.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-103', applicantName: 'Rekha Choudhary', businessOrPurpose: 'Commercial Dairy Solar Cold Chiller', product: 'Solar Loan', proposedAmount: 450000, committeeLevel: 'Level 1 (Branch)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (2/2)', votesApproved: 2, votesRequired: 2, underwriterNote: 'Direct milk supply contract with Saras Dairy.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-104', applicantName: 'Sunita Devi Yadav', businessOrPurpose: 'Electric Two-Wheeler Commute', product: 'Two-Wheeler', proposedAmount: 85000, committeeLevel: 'Level 1 (Branch)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (2/2)', votesApproved: 2, votesRequired: 2, underwriterNote: 'Credit score 720; zero past 30+ DPD delays.', riskRating: 'Low', status: 'Approved with Covenants' },
  { id: 'CC-105', applicantName: 'Priya Meena', businessOrPurpose: 'Government Teacher Scooter Loan', product: 'Two-Wheeler', proposedAmount: 92000, committeeLevel: 'Level 1 (Branch)', meetingDate: '2026-10-05', quorumStatus: 'Quorum Present (2/2)', votesApproved: 2, votesRequired: 2, underwriterNote: 'Salary credit slip verified via bank statement.', riskRating: 'Low', status: 'Approved with Covenants' }
];

export const CAM_APPROVAL_ITEMS: CamApprovalItem[] = [
  { id: 'CAM-801', applicantName: 'Manoj Kumar Sharma', product: 'MSME Loan', requestedAmount: 1800000, assessedAmount: 1500000, dscrRatio: 1.72, ltvRatio: 52.0, annualIncome: 1740000, valuationAmount: 2900000, preparedBy: 'Neha Jain (Credit SSO)', approvalStatus: 'Ready for Sign-off', camScore: 84 },
  { id: 'CAM-802', applicantName: 'Rameshwar Lal Soni', product: 'LAP', requestedAmount: 3200000, assessedAmount: 2800000, dscrRatio: 1.95, ltvRatio: 48.5, annualIncome: 3360000, valuationAmount: 5800000, preparedBy: 'Anita Bhati (Credit Officer)', approvalStatus: 'Approved', camScore: 92 },
  { id: 'CAM-803', applicantName: 'Girishbhai Patel', product: 'LAP', requestedAmount: 4000000, assessedAmount: 3500000, dscrRatio: 1.82, ltvRatio: 54.0, annualIncome: 4100000, valuationAmount: 6500000, preparedBy: 'Girishbhai (Credit Zonal)', approvalStatus: 'Ready for Sign-off', camScore: 88 },
  { id: 'CAM-804', applicantName: 'Kailash Chand Gurjar', product: 'Tractor Loan', requestedAmount: 700000, assessedAmount: 650000, dscrRatio: 1.65, ltvRatio: 78.0, annualIncome: 780000, valuationAmount: 830000, preparedBy: 'Sunil Choudhary (BM)', approvalStatus: 'Disbursal Ready', camScore: 81 },
  { id: 'CAM-805', applicantName: 'Vikram Singh Shekhawat', product: 'Solar Loan', requestedAmount: 350000, assessedAmount: 320000, dscrRatio: 2.10, ltvRatio: 70.0, annualIncome: 580000, valuationAmount: 460000, preparedBy: 'Pankaj Joshi (RO)', approvalStatus: 'Approved', camScore: 89 },
  { id: 'CAM-806', applicantName: 'Dharmendra Rathore', product: 'MSME Loan', requestedAmount: 2000000, assessedAmount: 1850000, dscrRatio: 1.58, ltvRatio: 55.0, annualIncome: 1980000, valuationAmount: 3400000, preparedBy: 'Sanjay Rawat (ASM)', approvalStatus: 'Ready for Sign-off', camScore: 83 },
  { id: 'CAM-807', applicantName: 'Harish Chandra Patidar', product: 'Tractor Loan', requestedAmount: 780000, assessedAmount: 720000, dscrRatio: 1.70, ltvRatio: 80.0, annualIncome: 980000, valuationAmount: 900000, preparedBy: 'Vikas Patidar (Credit)', approvalStatus: 'Approved', camScore: 82 },
  { id: 'CAM-808', applicantName: 'Sanjay Jain', product: 'MSME Loan', requestedAmount: 2500000, assessedAmount: 2200000, dscrRatio: 1.88, ltvRatio: 51.0, annualIncome: 2340000, valuationAmount: 4300000, preparedBy: 'Manish Gupta (ZAM)', approvalStatus: 'Ready for Sign-off', camScore: 87 },
  { id: 'CAM-809', applicantName: 'Deepak Agarwal', product: 'LAP', requestedAmount: 4500000, assessedAmount: 3800000, dscrRatio: 1.25, ltvRatio: 64.0, annualIncome: 2520000, valuationAmount: 5900000, preparedBy: 'Credit Committee Desk', approvalStatus: 'Returned for Verification', camScore: 68 },
  { id: 'CAM-810', applicantName: 'Santosh Devi Kumawat', product: 'Solar Loan', requestedAmount: 300000, assessedAmount: 280000, dscrRatio: 2.05, ltvRatio: 68.0, annualIncome: 504000, valuationAmount: 410000, preparedBy: 'Praveen Kumawat (RO)', approvalStatus: 'Disbursal Ready', camScore: 86 },
  { id: 'CAM-811', applicantName: 'Sunita Devi Yadav', product: 'Two-Wheeler', requestedAmount: 90000, assessedAmount: 85000, dscrRatio: 2.40, ltvRatio: 85.0, annualIncome: 336000, valuationAmount: 100000, preparedBy: 'Rajesh Soni (BM)', approvalStatus: 'Approved', camScore: 85 },
  { id: 'CAM-812', applicantName: 'Priya Meena', product: 'Two-Wheeler', requestedAmount: 95000, assessedAmount: 92000, dscrRatio: 2.80, ltvRatio: 85.0, annualIncome: 420000, valuationAmount: 108000, preparedBy: 'Kavita Sharma (BM)', approvalStatus: 'Disbursal Ready', camScore: 91 },
  { id: 'CAM-813', applicantName: 'Manpreet Singh Gill', product: 'Tractor Loan', requestedAmount: 850000, assessedAmount: 800000, dscrRatio: 1.75, ltvRatio: 79.0, annualIncome: 1140000, valuationAmount: 1010000, preparedBy: 'Gurpreet Singh (Credit)', approvalStatus: 'Approved', camScore: 84 },
  { id: 'CAM-814', applicantName: 'Bhanwar Singh Bhati', product: 'MSME Loan', requestedAmount: 1200000, assessedAmount: 900000, dscrRatio: 1.30, ltvRatio: 58.0, annualIncome: 900000, valuationAmount: 1550000, preparedBy: 'Bhanwar Singh (Credit)', approvalStatus: 'Returned for Verification', camScore: 62 },
  { id: 'CAM-815', applicantName: 'Rekha Choudhary', product: 'Solar Loan', requestedAmount: 500000, assessedAmount: 450000, dscrRatio: 2.20, ltvRatio: 66.0, annualIncome: 840000, valuationAmount: 680000, preparedBy: 'Amit Sharma (BM)', approvalStatus: 'Approved', camScore: 90 }
];

export const DEVIATION_RECORDS: DeviationRecord[] = [
  { id: 'DEV-101', applicantName: 'Bhanwar Singh Bhati', loanId: 'NAM-2026-8846', deviationType: 'CIBIL Cutoff Waiver', requestedWaiver: 'CIBIL 685 against policy threshold of 700', mitigatingFactor: 'Strong banking turnover ₹90L and no default in last 18 months', approvalAuthority: 'Chief Credit Officer', waiverStatus: 'Pending Committee', createdDate: '2026-10-04' },
  { id: 'DEV-102', applicantName: 'Deepak Agarwal', loanId: 'NAM-2026-8856', deviationType: 'FOIR Exceeding 55%', requestedWaiver: 'FOIR 66% against policy threshold 55%', mitigatingFactor: 'High net worth liquid FD ₹15 Lakhs pledged with Namdev Finvest', approvalAuthority: 'MD & CEO', waiverStatus: 'Pending Committee', createdDate: '2026-10-04' },
  { id: 'DEV-103', applicantName: 'Kailash Chand Gurjar', loanId: 'NAM-2026-8843', deviationType: 'LTV Variance > 15%', requestedWaiver: 'Valuer 1 and Valuer 2 variance is 16.5%', mitigatingFactor: 'Lower conservative valuation considered for loan quantum calculation', approvalAuthority: 'Zonal Head', waiverStatus: 'Approved', createdDate: '2026-10-03' },
  { id: 'DEV-104', applicantName: 'Rameshwar Lal Soni', loanId: 'NAM-2026-8844', deviationType: 'Collateral Non-Standard', requestedWaiver: 'Gram Panchayat Patta conversion under progress', mitigatingFactor: 'Registered lease agreement and clear possession certificate on record', approvalAuthority: 'MD & CEO', waiverStatus: 'Approved', createdDate: '2026-10-02' },
  { id: 'DEV-105', applicantName: 'Sunita Devi Yadav', loanId: 'NAM-2026-8842', deviationType: 'Age Criteria Relaxation', requestedWaiver: 'Co-applicant age 61 against standard cutoff of 60', mitigatingFactor: 'Primary earning borrower is son aged 32 with steady milk sales', approvalAuthority: 'Branch Manager', waiverStatus: 'Approved', createdDate: '2026-10-04' },
  { id: 'DEV-106', applicantName: 'Girishbhai Patel', loanId: 'NAM-2026-8852', deviationType: 'LTV Variance > 15%', requestedWaiver: 'Commercial unit machinery component included in collateral base', mitigatingFactor: 'Hypothecation registered with ROC and comprehensive insurance in place', approvalAuthority: 'Chief Credit Officer', waiverStatus: 'Approved', createdDate: '2026-10-02' },
  { id: 'DEV-107', applicantName: 'Dharmendra Rathore', loanId: 'NAM-2026-8849', deviationType: 'Surrogate Inflow Assessment', requestedWaiver: 'Surrogate calculation of cash turnover on bank statements', mitigatingFactor: 'GST 3B tax payment receipts coincide with declared factory dispatch', approvalAuthority: 'Zonal Head', waiverStatus: 'Approved', createdDate: '2026-10-03' },
  { id: 'DEV-108', applicantName: 'Vikram Singh Shekhawat', loanId: 'NAM-2026-8845', deviationType: 'Collateral Non-Standard', requestedWaiver: 'Rooftop solar collateral without registered mortgage', mitigatingFactor: 'DISCOM energy credit tripartite escrow agreement signed', approvalAuthority: 'Chief Credit Officer', waiverStatus: 'Approved', createdDate: '2026-10-01' },
  { id: 'DEV-109', applicantName: 'Santosh Devi Kumawat', loanId: 'NAM-2026-8850', deviationType: 'Age Criteria Relaxation', requestedWaiver: 'Applicant age 59 years and 8 months', mitigatingFactor: 'Pension and commercial dairy income ensures uninterrupted repayment', approvalAuthority: 'Branch Manager', waiverStatus: 'Approved', createdDate: '2026-10-01' },
  { id: 'DEV-110', applicantName: 'Manpreet Singh Gill', loanId: 'NAM-2026-8853', deviationType: 'LTV Variance > 15%', requestedWaiver: 'Tractor implement attachment value included in principal', mitigatingFactor: 'Harvester implement backed by manufacturer buyback guarantee', approvalAuthority: 'Zonal Head', waiverStatus: 'Approved', createdDate: '2026-10-03' },
  { id: 'DEV-111', applicantName: 'Sanjay Jain', loanId: 'NAM-2026-8854', deviationType: 'FOIR Exceeding 55%', requestedWaiver: 'FOIR 58% on audited ITR basis', mitigatingFactor: 'Depreciation add-back brings true cash DSCR to comfortable 1.88x', approvalAuthority: 'Chief Credit Officer', waiverStatus: 'Approved', createdDate: '2026-10-04' },
  { id: 'DEV-112', applicantName: 'Manoj Kumar Sharma', loanId: 'NAM-2026-8841', deviationType: 'Surrogate Inflow Assessment', requestedWaiver: 'Mandi trading receipts verified via QR portal', mitigatingFactor: 'Electronic e-Way bills corroborating ₹2.4 Cr grain purchases', approvalAuthority: 'Zonal Head', waiverStatus: 'Approved', createdDate: '2026-10-04' },
  { id: 'DEV-113', applicantName: 'Harish Chandra Patidar', loanId: 'NAM-2026-8848', deviationType: 'CIBIL Cutoff Waiver', requestedWaiver: 'Single historical 30-day technical bounce on utility card in 2024', mitigatingFactor: 'Satisfactory closure certificate issued by issuing bank', approvalAuthority: 'Branch Manager', waiverStatus: 'Approved', createdDate: '2026-10-04' },
  { id: 'DEV-114', applicantName: 'Priya Meena', loanId: 'NAM-2026-8847', deviationType: 'Age Criteria Relaxation', requestedWaiver: 'Work experience in current school 11 months against 1-year norm', mitigatingFactor: 'Confirmed state government permanent education cadre posting', approvalAuthority: 'Branch Manager', waiverStatus: 'Approved', createdDate: '2026-10-04' },
  { id: 'DEV-115', applicantName: 'Rekha Choudhary', loanId: 'NAM-2026-8855', deviationType: 'Collateral Non-Standard', requestedWaiver: 'Solar equipment invoice financing on leased warehouse roof', mitigatingFactor: 'Landlord NOC and 10-year registered lease deed submitted', approvalAuthority: 'Chief Credit Officer', waiverStatus: 'Approved', createdDate: '2026-10-01' }
];

