import React, { useState } from 'react';
import { ASSET_ITEMS } from '../../data/mockData';
import { AssetItem } from '../../types/nbfc';
import {
  Building,
  Laptop,
  Search,
  Monitor,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Video,
  FileText,
  Plus,
  X,
  Phone,
  Calendar,
  Layers
} from 'lucide-react';

interface AssetsAdminViewProps {
  initialSubTab?: 'hardware' | 'cctv' | 'leases';
}

export const AssetsAdminView: React.FC<AssetsAdminViewProps> = ({
  initialSubTab = 'hardware'
}) => {
  const [subTab, setSubTab] = useState<'hardware' | 'cctv' | 'leases'>(initialSubTab);
  const [assets, setAssets] = useState<AssetItem[]>(ASSET_ITEMS);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Form State
  const [newTag, setNewTag] = useState('');
  const [newType, setNewType] = useState<AssetItem['assetType']>('Executive Laptop');
  const [newBranch, setNewBranch] = useState('Jaipur Main');
  const [newUser, setNewUser] = useState('');

  const cctvFeeds = [
    { branch: 'Jaipur Main Branch', cameras: 8, status: 'Online (100%)', storageDays: '90 Days', lastCheck: '2 mins ago', ip: '192.168.10.2' },
    { branch: 'Jodhpur City Hub', cameras: 6, status: 'Online (100%)', storageDays: '90 Days', lastCheck: '5 mins ago', ip: '192.168.12.2' },
    { branch: 'Udaipur Sector 4', cameras: 6, status: 'Online (100%)', storageDays: '90 Days', lastCheck: '1 min ago', ip: '192.168.14.2' },
    { branch: 'Kota Junction', cameras: 4, status: 'Camera #3 Weak Signal', storageDays: '84 Days', lastCheck: '10 mins ago', ip: '192.168.16.2' },
    { branch: 'Alwar Central', cameras: 5, status: 'Online (100%)', storageDays: '90 Days', lastCheck: 'Just now', ip: '192.168.18.2' }
  ];

  const branchLeases = [
    { branch: 'Jaipur Main HQ & Branch', area: '4,500 sq ft', landlord: 'Sharma Estates', monthlyRent: '₹ 1,45,000', expiryDate: '2028-09-30', phone: '+91 98290 88990' },
    { branch: 'Jodhpur City Branch', area: '2,800 sq ft', landlord: 'Rathore Properties', monthlyRent: '₹ 82,000', expiryDate: '2027-04-15', phone: '+91 98291 77660' },
    { branch: 'Udaipur City Center', area: '2,200 sq ft', landlord: 'Mewar Commercials', monthlyRent: '₹ 65,000', expiryDate: '2026-12-31', phone: '+91 98292 44330' },
    { branch: 'Kota Junction Hub', area: '2,000 sq ft', landlord: 'Hadoti Complex', monthlyRent: '₹ 58,000', expiryDate: '2027-11-20', phone: '+91 98293 22110' }
  ];

  const filtered = assets.filter(a => {
    const matchesSearch =
      a.assetTag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.assignedUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.assetType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'ALL' || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddRequisition = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.trim()) return;

    const generatedTag = newTag || `NMD-HW-${Math.floor(1000 + Math.random() * 9000)}`;
    const newItem: AssetItem = {
       id: `AST-${Date.now()}`,
       assetTag: generatedTag,
       assetType: newType,
       branch: newBranch,
       assignedUser: newUser.trim(),
       status: 'Active',
       purchaseDate: new Date().toISOString().split('T')[0],
       condition: 'Optimal'
    };

    setAssets(prev => [newItem, ...prev]);
    setIsModalOpen(false);
    setNewTag('');
    setNewUser('');
    setNotification(`Hardware requisition for ${newItem.assignedUser} (${generatedTag}) approved and dispatched!`);
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="space-y-4">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-16 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-xl animate-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-blue-200 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">Branch Infrastructure & IT Assets Admin</h2>
              <p className="text-xs text-slate-500 font-medium">105+ branch hardware inventory, 24/7 CCTV surveillance feeds, and real estate leases</p>
            </div>
          </div>
        </div>

        {/* Sub-Tabs Switcher */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-bold">
          <button
            onClick={() => setSubTab('hardware')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'hardware' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Hardware & IT ({assets.length})
          </button>
          <button
            onClick={() => setSubTab('cctv')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'cctv' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            CCTV & Surveillance
          </button>
          <button
            onClick={() => setSubTab('leases')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              subTab === 'leases' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Branch Leases & Facilities
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: HARDWARE & IT ASSETS */}
      {subTab === 'hardware' && (
        <div className="space-y-4">
          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Total Tracked Assets</span>
              <div className="text-xl font-black text-slate-900 mt-1 tabular-nums">1,248 Units</div>
              <span className="text-[10px] text-emerald-600 font-bold">QR Barcode Tagged</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Biometric Field Tablets</span>
              <div className="text-xl font-black text-blue-700 mt-1 tabular-nums">480 Active</div>
              <span className="text-[10px] text-slate-500">Aadhaar eKYC Enabled</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Laptops / Desktops</span>
              <div className="text-xl font-black text-purple-700 mt-1 tabular-nums">385 Units</div>
              <span className="text-[10px] text-slate-500">BitLocker Encrypted</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Pending AMC Servicing</span>
              <div className="text-xl font-black text-amber-600 mt-1 tabular-nums">12 Units</div>
              <span className="text-[10px] text-slate-500">Under warranty repair</span>
            </div>
          </div>

          {/* Search, Filter & Add Requisition */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search asset tag, branch, user..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {['ALL', 'Active', 'Under Service'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold cursor-pointer transition-colors ${
                      statusFilter === st
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Working Add Requisition Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-sm transition-all cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>+ Hardware Requisition</span>
              </button>
            </div>
          </div>

          {/* Asset Items Table */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                    <th className="py-2.5 px-4">Asset Tag</th>
                    <th className="py-2.5 px-3">Device Type</th>
                    <th className="py-2.5 px-3">Branch Location</th>
                    <th className="py-2.5 px-3">Assigned Officer</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                    <th className="py-2.5 px-3 text-center">Last Audit</th>
                    <th className="py-2.5 pr-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3 px-4 font-mono font-bold text-blue-700">{item.assetTag}</td>
                      <td className="py-3 px-3 font-semibold text-slate-900">{item.assetType}</td>
                      <td className="py-3 px-3 text-slate-600">{item.branch}</td>
                      <td className="py-3 px-3 font-bold text-slate-800">{item.assignedUser}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.status === 'Active'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center font-mono text-[11px] text-slate-500">{item.purchaseDate}</td>
                      <td className="py-3 pr-4 text-right">
                        <button
                          onClick={() => {
                            setNotification(`Audit tag checked for ${item.assetTag}`);
                            setTimeout(() => setNotification(null), 3000);
                          }}
                          className="px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 cursor-pointer"
                        >
                          Audit Scan
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

      {/* SUB-TAB 2: CCTV & SURVEILLANCE */}
      {subTab === 'cctv' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">CCTV Monitored Branches</span>
              <div className="text-xl font-black text-emerald-700 mt-1 tabular-nums">105 / 105 Branches</div>
              <span className="text-[10px] text-emerald-600 font-bold">100% Cash Counter & Vault Coverage</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Recording Retention Compliance</span>
              <div className="text-xl font-black text-blue-700 mt-1 tabular-nums">90 Days Cloud Backup</div>
              <span className="text-[10px] text-slate-500">RBI Security Standard Met</span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              <span className="text-slate-500 font-medium">Security Incidents Reported</span>
              <div className="text-xl font-black text-slate-900 mt-1 tabular-nums">0 High Risk</div>
              <span className="text-[10px] text-emerald-600 font-bold">All perimeter sensors armed</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
            <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800">
              Live Branch Surveillance & Camera Feed Status
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                    <th className="py-2.5 px-4">Branch Location</th>
                    <th className="py-2.5 px-3">Active Cameras</th>
                    <th className="py-2.5 px-3">Vault DVR IP</th>
                    <th className="py-2.5 px-3">Storage Health</th>
                    <th className="py-2.5 px-3 text-center">Status</th>
                    <th className="py-2.5 px-3 text-center">Last Heartbeat</th>
                    <th className="py-2.5 pr-4 text-right">Stream</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {cctvFeeds.map((feed) => (
                    <tr key={feed.branch} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">{feed.branch}</td>
                      <td className="py-3 px-3 text-slate-700">{feed.cameras} IP Cameras</td>
                      <td className="py-3 px-3 font-mono text-[11px] text-slate-500">{feed.ip}</td>
                      <td className="py-3 px-3 text-slate-800 font-semibold">{feed.storageDays}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          feed.status.includes('Online') ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {feed.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center text-slate-500">{feed.lastCheck}</td>
                      <td className="py-3 pr-4 text-right">
                        <button
                          onClick={() => {
                            setNotification(`Connecting secure live video stream to ${feed.branch}...`);
                            setTimeout(() => setNotification(null), 3000);
                          }}
                          className="px-2.5 py-1 text-[11px] font-bold bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-md transition-colors cursor-pointer"
                        >
                          View Feed
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

      {/* SUB-TAB 3: BRANCH LEASES */}
      {subTab === 'leases' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
          <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs text-slate-800">
            Branch Premises Lease & Rent Agreement Repository
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                  <th className="py-2.5 px-4">Branch Premises</th>
                  <th className="py-2.5 px-3">Carpet Area</th>
                  <th className="py-2.5 px-3">Landlord Name</th>
                  <th className="py-2.5 px-3 text-right">Monthly Rent</th>
                  <th className="py-2.5 px-3 text-center">Lease Expiry</th>
                  <th className="py-2.5 pr-4 text-right">Landlord Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {branchLeases.map((l) => (
                  <tr key={l.branch} className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">{l.branch}</td>
                    <td className="py-3 px-3 text-slate-600">{l.area}</td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{l.landlord}</td>
                    <td className="py-3 px-3 text-right font-black text-slate-900">{l.monthlyRent}</td>
                    <td className="py-3 px-3 text-center font-mono text-[11px] text-slate-600">{l.expiryDate}</td>
                    <td className="py-3 pr-4 text-right">
                      <a
                        href={`tel:${l.phone}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-white border border-slate-200 text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* FULLY FUNCTIONAL MODAL: + Hardware Requisition */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 bg-gradient-to-r from-blue-900 to-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm">New Hardware Requisition</h3>
                <p className="text-[11px] text-blue-200">Request laptop, biometric POS or printer for branch</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-white/70 hover:text-white rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddRequisition} className="p-5 space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Device Hardware Type
                </label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value as AssetItem['assetType'])}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none"
                >
                  <option value="Executive Laptop">Executive Laptop (Field Sales)</option>
                  <option value="Biometric Scanner">Biometric Scanner (Aadhaar eKYC)</option>
                  <option value="Printer / Scanner">Printer / Scanner (Branch Ops)</option>
                  <option value="POS Tablet">POS Tablet (Dealer Sourcing)</option>
                  <option value="CCTV Camera">CCTV Camera (Branch Vault)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Branch Destination
                </label>
                <select
                  value={newBranch}
                  onChange={(e) => setNewBranch(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none"
                >
                  <option value="Jaipur Main">Jaipur Main</option>
                  <option value="Jodhpur Branch">Jodhpur Branch</option>
                  <option value="Udaipur City">Udaipur City</option>
                  <option value="Kota Junction">Kota Junction</option>
                  <option value="Alwar Central">Alwar Central</option>
                  <option value="Bikaner Hub">Bikaner Hub</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Assignee Officer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newUser}
                  onChange={(e) => setNewUser(e.target.value)}
                  placeholder="e.g. Ramesh Chandra (Field Executive)"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Asset Tag (Optional)
                </label>
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Auto-generated if blank (e.g. NMD-HW-2901)"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3.5 py-1.5 border border-slate-300 rounded-lg font-bold text-slate-700 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold cursor-pointer"
                >
                  Submit Requisition
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
