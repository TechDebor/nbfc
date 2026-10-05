import React from 'react';
import { Network, Users, Building, ShieldCheck, ChevronRight } from 'lucide-react';

export const HierarchyMonitorView: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
        <h2 className="text-base font-bold text-slate-900 tracking-tight">Organization & Operational Hierarchy</h2>
        <p className="text-xs text-slate-500 font-medium">Namdev Finvest executive reporting tree & branch governance</p>
      </div>

      {/* Interactive Tree View */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-2xs space-y-6">
        {/* Tier 1: CEO */}
        <div className="flex justify-center">
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-900 to-[#0f294a] text-white shadow-md text-center w-72 border border-blue-800">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-300">Managing Director & CEO</span>
            <div className="font-extrabold text-sm mt-0.5">Jitendra Tanwar</div>
            <div className="text-[11px] text-blue-200">Executive Leadership & Strategic Direction</div>
          </div>
        </div>

        <div className="w-px h-6 bg-slate-300 mx-auto" />

        {/* Tier 2: COO */}
        <div className="flex justify-center">
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-slate-900 text-center w-64 shadow-xs">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600">Chief Operating Officer</span>
            <div className="font-extrabold text-sm text-slate-900 mt-0.5">Rajiv Mehta</div>
            <div className="text-[11px] text-slate-500">Lending Operations, Credit & Risk</div>
          </div>
        </div>

        <div className="w-px h-6 bg-slate-300 mx-auto" />

        {/* Tier 3: Zonal Leadership */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">North & Jaipur Zone</span>
            <div className="font-bold text-xs text-slate-900 mt-0.5">Manish Gupta (ZAM)</div>
            <div className="text-[11px] text-emerald-700 font-semibold mt-1">₹82.4 Cr Disb · 36 Branches</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Mewar & MP Zone</span>
            <div className="font-bold text-xs text-slate-900 mt-0.5">Pooja Rathore (RSM)</div>
            <div className="text-[11px] text-blue-700 font-semibold mt-1">₹36.2 Cr Disb · 28 Branches</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400">Marwar & Gujarat Zone</span>
            <div className="font-bold text-xs text-slate-900 mt-0.5">Rakesh Meena (ASM)</div>
            <div className="text-[11px] text-blue-700 font-semibold mt-1">₹28.1 Cr Disb · 25 Branches</div>
          </div>
        </div>

        {/* Tier 4: Branch Metrics Grid */}
        <div className="pt-4 border-t border-slate-100">
          <h4 className="text-xs font-bold text-slate-800 mb-3">Branch Managers (Top Performing Hubs)</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="p-2.5 rounded-lg border border-slate-200 bg-white">
              <div className="font-bold text-slate-900">Jaipur - VK1</div>
              <div className="text-[11px] text-slate-500">BM: Amit Sharma</div>
              <div className="text-[11px] font-extrabold text-emerald-700 mt-0.5">₹39.8 Cr (114% Ach)</div>
            </div>
            <div className="p-2.5 rounded-lg border border-slate-200 bg-white">
              <div className="font-bold text-slate-900">Jaipur - Sanganer</div>
              <div className="text-[11px] text-slate-500">BM: Rajesh Soni</div>
              <div className="text-[11px] font-extrabold text-emerald-700 mt-0.5">₹26.3 Cr (110% Ach)</div>
            </div>
            <div className="p-2.5 rounded-lg border border-slate-200 bg-white">
              <div className="font-bold text-slate-900">Udaipur Hub</div>
              <div className="text-[11px] text-slate-500">BM: Mahendra Rathore</div>
              <div className="text-[11px] font-extrabold text-emerald-700 mt-0.5">₹19.6 Cr (109% Ach)</div>
            </div>
            <div className="p-2.5 rounded-lg border border-slate-200 bg-white">
              <div className="font-bold text-slate-900">Kota Chambal</div>
              <div className="text-[11px] text-slate-500">BM: Sunil Meena</div>
              <div className="text-[11px] font-extrabold text-emerald-700 mt-0.5">₹15.6 Cr (112% Ach)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
