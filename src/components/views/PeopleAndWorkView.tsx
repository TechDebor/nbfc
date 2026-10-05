import React, { useState } from 'react';
import {
  Users,
  Search,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  TrendingUp,
  DollarSign,
  Phone,
  Mail,
  ChevronRight,
  Filter,
  Calculator,
  UserCheck
} from 'lucide-react';

interface PeopleAndWorkViewProps {
  initialSubTab?: 'officers' | 'incentives' | 'attendance';
}

export const PeopleAndWorkView: React.FC<PeopleAndWorkViewProps> = ({
  initialSubTab = 'officers'
}) => {
  const [subTab, setSubTab] = useState<'officers' | 'incentives' | 'attendance'>(initialSubTab);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('ALL');

  // Incentive Calculator State
  const [disbursementAmount, setDisbursementAmount] = useState(45); // in Lakhs
  const [collectionEfficiency, setCollectionEfficiency] = useState(98.5); // %
  const [newLoginsCount, setNewLoginsCount] = useState(14); // files

  const officers = [
    {
      id: 'EMP-1042',
      name: 'Rajesh Meena',
      role: 'Senior Branch Sourcing Manager',
      branch: 'Jaipur Main',
      region: 'North Rajasthan',
      activeCases: 28,
      disbursedMTD: '₹ 84.5 L',
      collectionEff: '99.2%',
      targetAchieved: 112,
      phone: '+91 98290 14820',
      email: 'rajesh.meena@namdevfinvest.com',
      status: 'On Field'
    },
    {
      id: 'EMP-1088',
      name: 'Vikas Sharma',
      role: 'Branch Manager & Credit Reviewer',
      branch: 'Jodhpur Branch',
      region: 'West Rajasthan',
      activeCases: 34,
      disbursedMTD: '₹ 92.0 L',
      collectionEff: '98.7%',
      targetAchieved: 105,
      phone: '+91 98291 55210',
      email: 'vikas.sharma@namdevfinvest.com',
      status: 'In Branch'
    },
    {
      id: 'EMP-1115',
      name: 'Sunita Devi',
      role: 'Assistant Sourcing Officer - MSME',
      branch: 'Udaipur City',
      region: 'South Rajasthan',
      activeCases: 19,
      disbursedMTD: '₹ 56.0 L',
      collectionEff: '97.9%',
      targetAchieved: 94,
      phone: '+91 98292 33140',
      email: 'sunita.devi@namdevfinvest.com',
      status: 'Customer Visit'
    },
    {
      id: 'EMP-1150',
      name: 'Mahendra Rathore',
      role: 'Senior Field Recovery Officer',
      branch: 'Kota Junction',
      region: 'East Rajasthan',
      activeCases: 42,
      disbursedMTD: '₹ 68.0 L',
      collectionEff: '99.5%',
      targetAchieved: 118,
      phone: '+91 98293 88190',
      email: 'mahendra.r@namdevfinvest.com',
      status: 'On Field'
    },
    {
      id: 'EMP-1204',
      name: 'Pooja Verma',
      role: 'Credit Appraisal Executive',
      branch: 'Alwar Central',
      region: 'NCR Perimeter',
      activeCases: 25,
      disbursedMTD: '₹ 72.4 L',
      collectionEff: '98.4%',
      targetAchieved: 101,
      phone: '+91 98294 66120',
      email: 'pooja.verma@namdevfinvest.com',
      status: 'In Branch'
    },
    {
      id: 'EMP-1229',
      name: 'Arun Choudhary',
      role: 'Sourcing Officer - Two Wheeler & Solar',
      branch: 'Bikaner Hub',
      region: 'North Rajasthan',
      activeCases: 22,
      disbursedMTD: '₹ 49.0 L',
      collectionEff: '96.8%',
      targetAchieved: 91,
      phone: '+91 98295 11980',
      email: 'arun.c@namdevfinvest.com',
      status: 'On Field'
    }
  ];

  const filteredOfficers = officers.filter(o => {
    const matchesSearch =
      o.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranch === 'ALL' || o.branch === selectedBranch;
    return matchesSearch && matchesBranch;
  });

  // Calculate incentive
  const baseIncentive = disbursementAmount * 450; // ₹450 per Lakh
  const collectionBonusMultiplier = collectionEfficiency >= 98 ? 1.25 : collectionEfficiency >= 95 ? 1.0 : 0.7;
  const loginBonus = newLoginsCount * 300;
  const totalIncentive = Math.round((baseIncentive * collectionBonusMultiplier) + loginBonus);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">People & Work Management</h2>
              <p className="text-xs text-slate-500 font-medium">Branch manpower, field sales officers roster, incentive calculation & geo-attendance</p>
            </div>
          </div>
        </div>

        {/* Sub-Tabs Selector */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-bold">
          <button
            onClick={() => setSubTab('officers')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'officers' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Branch Officers ({officers.length})
          </button>
          <button
            onClick={() => setSubTab('incentives')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'incentives' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Incentive Calculator
          </button>
          <button
            onClick={() => setSubTab('attendance')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'attendance' ? 'bg-white text-blue-700 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Geo-Attendance & Beat
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: BRANCH OFFICERS DIRECTORY */}
      {subTab === 'officers' && (
        <div className="space-y-4">
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Total Field Sales Workforce</span>
              <div className="text-xl font-black text-slate-900 mt-1 tabular-nums">482 Officers</div>
              <span className="text-[10px] text-emerald-600 font-bold">Across 105+ active branches</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Avg. Target Achievement</span>
              <div className="text-xl font-black text-blue-700 mt-1 tabular-nums">103.5%</div>
              <span className="text-[10px] text-emerald-600 font-bold">Q2 Disbursals on pace</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Active On-Field Today</span>
              <div className="text-xl font-black text-emerald-700 mt-1 tabular-nums">446 Officers</div>
              <span className="text-[10px] text-slate-500">92.5% morning punch-in</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Monthly Disbursal per Officer</span>
              <div className="text-xl font-black text-purple-700 mt-1 tabular-nums">₹ 38.4 Lakhs</div>
              <span className="text-[10px] text-slate-500">Industry leading productivity</span>
            </div>
          </div>

          {/* Search & Branch Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search officer by name, ID, branch or role..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-bold text-[11px]">Branch:</span>
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold focus:outline-none"
              >
                <option value="ALL">All Branches (105)</option>
                <option value="Jaipur Main">Jaipur Main</option>
                <option value="Jodhpur Branch">Jodhpur Branch</option>
                <option value="Udaipur City">Udaipur City</option>
                <option value="Kota Junction">Kota Junction</option>
                <option value="Alwar Central">Alwar Central</option>
                <option value="Bikaner Hub">Bikaner Hub</option>
              </select>
            </div>
          </div>

          {/* Officers Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                    <th className="py-2.5 px-4">Officer Name & ID</th>
                    <th className="py-2.5 px-3">Role / Designation</th>
                    <th className="py-2.5 px-3">Branch & Region</th>
                    <th className="py-2.5 px-3 text-center">Active Cases</th>
                    <th className="py-2.5 px-3 text-right">MTD Disbursal</th>
                    <th className="py-2.5 px-3 text-center">0+ DPD Eff.</th>
                    <th className="py-2.5 px-3 text-center">Target %</th>
                    <th className="py-2.5 px-3">Current Status</th>
                    <th className="py-2.5 pr-4 text-right">Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredOfficers.map((off) => (
                    <tr key={off.id} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">{off.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">{off.id}</div>
                      </td>
                      <td className="py-3 px-3 text-slate-700 font-semibold">{off.role}</td>
                      <td className="py-3 px-3">
                        <div className="font-bold text-slate-900">{off.branch}</div>
                        <div className="text-[10px] text-slate-400">{off.region}</div>
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-slate-800">{off.activeCases}</td>
                      <td className="py-3 px-3 text-right font-black text-slate-900 tabular-nums">{off.disbursedMTD}</td>
                      <td className="py-3 px-3 text-center font-bold text-emerald-700">{off.collectionEff}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                          off.targetAchieved >= 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {off.targetAchieved}%
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          off.status === 'On Field' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                          off.status === 'In Branch' ? 'bg-slate-100 text-slate-700' : 'bg-purple-50 text-purple-700'
                        }`}>
                          {off.status}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={`tel:${off.phone}`}
                            className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                            title={`Call ${off.phone}`}
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>
                          <a
                            href={`mailto:${off.email}`}
                            className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                            title={`Email ${off.email}`}
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: INCENTIVE CALCULATOR */}
      {subTab === 'incentives' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-slate-200 shadow-2xs space-y-5 text-xs">
            <div className="flex items-center gap-2 border-b pb-3">
              <Calculator className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="text-sm font-extrabold text-slate-900">Field Sourcing Incentive Matrix Simulator</h3>
                <p className="text-[11px] text-slate-500">Calculate monthly incentive payouts based on volume and collection quality</p>
              </div>
            </div>

            {/* Slider 1: Monthly Disbursed Amount */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-bold text-slate-700">
                <span>Monthly Disbursed Loan Volume</span>
                <span className="text-sm font-black text-blue-700">₹ {disbursementAmount} Lakhs</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={disbursementAmount}
                onChange={(e) => setDisbursementAmount(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>₹10 L (Threshold)</span>
                <span>₹75 L (Target)</span>
                <span>₹150 L (Super Achiever)</span>
              </div>
            </div>

            {/* Slider 2: Collection Efficiency */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-bold text-slate-700">
                <span>0+ DPD Portfolio Collection Efficiency</span>
                <span className="text-sm font-black text-emerald-700">{collectionEfficiency}%</span>
              </div>
              <input
                type="range"
                min="90"
                max="100"
                step="0.5"
                value={collectionEfficiency}
                onChange={(e) => setCollectionEfficiency(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>90% (Penalty zone)</span>
                <span>95% (Base multiplier 1.0x)</span>
                <span>98%+ (Super multiplier 1.25x)</span>
              </div>
            </div>

            {/* Slider 3: New Logins Count */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between font-bold text-slate-700">
                <span>New Sourcing Applications Logged</span>
                <span className="text-sm font-black text-purple-700">{newLoginsCount} Files</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={newLoginsCount}
                onChange={(e) => setNewLoginsCount(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-600 space-y-1">
              <div className="font-bold text-slate-800">Incentive Policy Rules:</div>
              <div>• Base rate: ₹450 per Lakh of retail loans disbursed.</div>
              <div>• Collection multiplier: 1.25x if portfolio collection is ≥ 98%; 1.0x if ≥ 95%; 0.7x if &lt; 95%.</div>
              <div>• Sourcing login bonus: ₹300 per complete document login.</div>
            </div>
          </div>

          {/* Payout Calculation Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-[#142352] to-slate-900 text-white p-6 rounded-xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Projected Payout</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-extrabold">
                  {collectionEfficiency >= 98 ? 'Tier 1 Bonus' : 'Standard Tier'}
                </span>
              </div>

              <div className="mt-4">
                <div className="text-[11px] text-blue-200">Total Net Incentive Payable</div>
                <div className="text-3xl font-black text-white mt-1 tabular-nums">
                  ₹ {totalIncentive.toLocaleString('en-IN')}
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 font-semibold">
                  Disbursed Volume: ₹{disbursementAmount}L @ {collectionEfficiency}% collection
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-blue-200">
                  <span>Base Volume Incentive:</span>
                  <span className="font-bold text-white">₹ {(baseIncentive).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-blue-200">
                  <span>Collection Quality Multiplier:</span>
                  <span className="font-bold text-emerald-300">{collectionBonusMultiplier}x</span>
                </div>
                <div className="flex justify-between text-blue-200">
                  <span>Login Pipeline Bonus:</span>
                  <span className="font-bold text-white">₹ {(loginBonus).toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => alert(`Incentive statement of ₹${totalIncentive.toLocaleString('en-IN')} dispatched to HR payroll!`)}
              className="mt-6 w-full py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-lg transition-all text-xs cursor-pointer shadow-md"
            >
              Export Monthly Incentive Payroll Batch
            </button>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: GEO-ATTENDANCE & BEAT PLAN */}
      {subTab === 'attendance' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-4 text-xs">
          <div className="flex items-center justify-between border-b pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">Today's Geo-Tagged Field Attendance & Visits</h3>
              <p className="text-[11px] text-slate-500">Live GPS punch-ins from field sales agents across 105 Rajasthan, MP & Gujarat branches</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-700">GPS Sync Active</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {officers.slice(0, 3).map((off) => (
              <div key={off.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">{off.name}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Punched In 09:12 AM
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{off.branch} - Sector 4 Market Beat</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  Target Today: 4 customer verification visits | 2 completed
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
