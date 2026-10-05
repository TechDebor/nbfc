import React, { useState } from 'react';
import { CRM_LEADS } from '../../data/mockData';
import { CrmLead } from '../../types/nbfc';
import {
  Search,
  Plus,
  PhoneCall,
  UserPlus,
  Star,
  X,
  CheckCircle2,
  Building,
  User,
  Phone,
  MapPin,
  IndianRupee,
  Layers,
  Sparkles,
  ChevronRight,
  ArrowRightCircle
} from 'lucide-react';

interface CrmLeadsViewProps {
  onConvertLead?: (lead: CrmLead) => void;
}

export const CrmLeadsView: React.FC<CrmLeadsViewProps> = ({ onConvertLead }) => {
  const [leads, setLeads] = useState<CrmLead[]>(CRM_LEADS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState('ALL');
  const [selectedSource, setSelectedSource] = useState('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Form state for new sourcing lead
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Jaipur',
    source: 'Branch Walk-in' as CrmLead['source'],
    loanType: 'MSME Loan',
    requiredAmount: 250000,
    assignedOfficer: 'Rajesh Meena',
    stage: 'New Lead' as CrmLead['stage'],
    leadScore: 78,
    notes: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const officers = [
    'Rajesh Meena',
    'Vikas Sharma',
    'Sunita Devi',
    'Mahendra Rathore',
    'Pooja Verma',
    'Arun Choudhary',
    'Deepak Singhal'
  ];

  const cities = [
    'Jaipur',
    'Jodhpur',
    'Udaipur',
    'Kota',
    'Alwar',
    'Bikaner',
    'Sikar',
    'Ajmer',
    'Bhilwara',
    'Sri Ganganagar'
  ];

  const loanTypes = [
    'MSME Loan',
    'Two-Wheeler Loan',
    'Solar Loan',
    'E-Rickshaw Loan',
    'Tractor Loan',
    'LAP'
  ];

  const sources: CrmLead['source'][] = [
    'Branch Walk-in',
    'DSA Partner',
    'Dealer Tie-up',
    'Digital / Web',
    'Customer Referral'
  ];

  const stages: CrmLead['stage'][] = [
    'New Lead',
    'Contacted',
    'Documents Collected',
    'Login Initiated',
    'Converted',
    'Lost'
  ];

  const filtered = leads.filter(l => {
    const matchesSearch =
      l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.assignedOfficer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.loanType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.phone.includes(searchTerm);

    const matchesStage = selectedStage === 'ALL' || l.stage === selectedStage;
    const matchesSource = selectedSource === 'ALL' || l.source === selectedSource;

    return matchesSearch && matchesStage && matchesSource;
  });

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'New Lead': return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Contacted': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Documents Collected': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Login Initiated': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Converted': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Lost': return 'bg-rose-50 text-rose-700 border-rose-200';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Customer name is required';
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim().replace(/\s+/g, ''))) {
      errors.phone = 'Valid 10-digit Indian mobile number required';
    }
    if (!formData.requiredAmount || formData.requiredAmount < 10000) {
      errors.requiredAmount = 'Minimum loan amount is ₹10,000';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newId = `LD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newLead: CrmLead = {
      id: newId,
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      city: formData.city,
      source: formData.source,
      loanType: formData.loanType,
      requiredAmount: Number(formData.requiredAmount),
      assignedOfficer: formData.assignedOfficer,
      stage: formData.stage,
      leadScore: Number(formData.leadScore),
      createdDate: new Date().toISOString().split('T')[0]
    };

    setLeads(prev => [newLead, ...prev]);
    setIsModalOpen(false);
    setSuccessToast(`Lead ${newId} (${newLead.name}) created and assigned to ${newLead.assignedOfficer}!`);
    setTimeout(() => setSuccessToast(null), 4000);

    // Reset form
    setFormData({
      name: '',
      phone: '',
      city: 'Jaipur',
      source: 'Branch Walk-in',
      loanType: 'MSME Loan',
      requiredAmount: 250000,
      assignedOfficer: 'Rajesh Meena',
      stage: 'New Lead',
      leadScore: 78,
      notes: ''
    });
    setFormErrors({});
  };

  const handleAdvanceStage = (leadId: string) => {
    setLeads(prev => prev.map(lead => {
      if (lead.id !== leadId) return lead;
      const order: CrmLead['stage'][] = ['New Lead', 'Contacted', 'Documents Collected', 'Login Initiated', 'Converted'];
      const currentIndex = order.indexOf(lead.stage);
      if (currentIndex >= 0 && currentIndex < order.length - 1) {
        const nextStage = order[currentIndex + 1];
        setSuccessToast(`Lead ${lead.id} advanced to "${nextStage}"!`);
        setTimeout(() => setSuccessToast(null), 3500);
        return { ...lead, stage: nextStage };
      }
      return lead;
    }));
  };

  return (
    <div className="space-y-4">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-16 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-xl animate-in slide-in-from-top-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight">CRM & Sourcing Pipeline</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
              {leads.length} Active Leads
            </span>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Field sales agent inquiries, dealer sourcing channels and application conversion funnel
          </p>
        </div>

        {/* WORKABLE +Add Sourcing Lead Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer self-start sm:self-auto hover:shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Sourcing Lead</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs text-xs">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search lead by name, phone, city, officer..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 font-medium"
          />
        </div>

        {/* Source Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-400">Source:</span>
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
            className="px-2.5 py-1 bg-slate-50 border border-slate-200 rounded-md font-semibold text-slate-700 text-xs focus:outline-none"
          >
            <option value="ALL">All Sources</option>
            {sources.map(src => (
              <option key={src} value={src}>{src}</option>
            ))}
          </select>
        </div>

        {/* Stage Filter Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto w-full lg:w-auto pt-1 lg:pt-0">
          {['ALL', 'New Lead', 'Contacted', 'Documents Collected', 'Login Initiated', 'Converted'].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStage(st)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold cursor-pointer transition-colors whitespace-nowrap ${
                selectedStage === st
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                <th className="py-2.5 px-4">Lead ID</th>
                <th className="py-2.5 px-3">Customer Name</th>
                <th className="py-2.5 px-3">City / Branch</th>
                <th className="py-2.5 px-3">Sourcing Channel</th>
                <th className="py-2.5 px-3">Loan Vertical</th>
                <th className="py-2.5 px-3 text-right">Required Amount</th>
                <th className="py-2.5 px-3 text-center">Score</th>
                <th className="py-2.5 px-3">Assigned Officer</th>
                <th className="py-2.5 px-3 text-center">Pipeline Stage</th>
                <th className="py-2.5 pr-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="py-3 px-4 font-mono font-bold text-blue-700">{lead.id}</td>
                  <td className="py-3 px-3">
                    <div className="font-bold text-slate-900">{lead.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{lead.phone}</div>
                  </td>
                  <td className="py-3 px-3 text-slate-600">{lead.city}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                      {lead.source}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-semibold text-slate-800">{lead.loanType}</td>
                  <td className="py-3 px-3 text-right font-extrabold text-slate-900 tabular-nums">
                    ₹{(lead.requiredAmount / 100000).toFixed(2)} L
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-700 tabular-nums">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
                      {lead.leadScore}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-slate-700 font-semibold">{lead.assignedOfficer}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${getStageColor(lead.stage)}`}>
                      {lead.stage}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      {lead.stage !== 'Converted' && (
                        <button
                          onClick={() => handleAdvanceStage(lead.id)}
                          title="Advance to next pipeline stage"
                          className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-600 hover:text-white rounded-md transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-3 h-3" />
                          <span>Advance</span>
                        </button>
                      )}
                      {lead.stage === 'Login Initiated' && onConvertLead && (
                        <button
                          onClick={() => onConvertLead(lead)}
                          title="Convert to Underwriting Login"
                          className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-bold bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors cursor-pointer"
                        >
                          <ArrowRightCircle className="w-3 h-3" />
                          <span>Convert</span>
                        </button>
                      )}
                      <a
                        href={`tel:${lead.phone}`}
                        className="inline-flex items-center gap-1 p-1 text-slate-500 hover:text-blue-700 hover:bg-slate-100 rounded-md transition-colors"
                        title={`Call ${lead.name} (${lead.phone})`}
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="p-8 text-center text-slate-500 text-xs">
            No leads match your filter parameters.
          </div>
        )}
      </div>

      {/* FULLY FUNCTIONAL MODAL: + Add Sourcing Lead */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-blue-900 via-[#0f294a] to-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600/40 border border-blue-400/40 flex items-center justify-center text-white">
                  <UserPlus className="w-4 h-4 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold tracking-tight">Add New Sourcing Lead</h3>
                  <p className="text-[11px] text-blue-200 font-medium">
                    Register a new customer inquiry and dispatch to branch sourcing officer
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Customer Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar Sharma"
                      className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.name ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                      }`}
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-[10px] text-red-500 font-medium mt-1">{formErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 ${
                        formErrors.phone ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-[10px] text-red-500 font-medium mt-1">{formErrors.phone}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Loan Product & Required Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Loan Vertical / Product <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none focus:border-blue-500"
                  >
                    {loanTypes.map(lt => (
                      <option key={lt} value={lt}>{lt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Required Loan Amount (₹) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <IndianRupee className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="number"
                      step={5000}
                      value={formData.requiredAmount}
                      onChange={(e) => setFormData({ ...formData, requiredAmount: Number(e.target.value) })}
                      className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-lg font-bold text-slate-900 focus:outline-none focus:ring-2 ${
                        formErrors.requiredAmount ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:ring-blue-200 focus:border-blue-500'
                      }`}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500 font-semibold">
                    = ₹{(formData.requiredAmount / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
              </div>

              {/* Row 3: City / Branch & Sourcing Channel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    City / Branch
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none focus:border-blue-500"
                    >
                      {cities.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Sourcing Channel
                  </label>
                  <select
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value as CrmLead['source'] })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none focus:border-blue-500"
                  >
                    {sources.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Assigned Officer & Initial Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Assign Field Sourcing Officer
                  </label>
                  <select
                    value={formData.assignedOfficer}
                    onChange={(e) => setFormData({ ...formData, assignedOfficer: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none focus:border-blue-500"
                  >
                    {officers.map(off => (
                      <option key={off} value={off}>{off}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Initial Pipeline Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value as CrmLead['stage'] })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-semibold focus:outline-none focus:border-blue-500"
                  >
                    {stages.map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Lead Score & Notes */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold text-slate-700">
                    Lead Quality Score ({formData.leadScore}/100)
                  </label>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${
                    formData.leadScore >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {formData.leadScore >= 75 ? 'High Conversion Potential' : 'Moderate Priority'}
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="95"
                  value={formData.leadScore}
                  onChange={(e) => setFormData({ ...formData, leadScore: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Sourcing Remarks / Business Profile
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Existing kirana shop in market, good cash flows, needs inventory expansion loan."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-blue-500 text-xs"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-sm transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create & Dispatch Lead</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
