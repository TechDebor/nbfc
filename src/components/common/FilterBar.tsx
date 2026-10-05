import React from 'react';
import { FilterState, TimePeriod } from '../../types/nbfc';
import { ChevronDown, RefreshCw } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onReset: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onReset
}) => {
  const periods: { id: TimePeriod; label: string }[] = [
    { id: 'today', label: 'Today' },
    { id: 'mtd', label: 'MTD' },
    { id: 'qtd', label: 'QTD' },
    { id: 'ytd', label: 'YTD' },
    { id: 'fy2627', label: 'FY 2026-27' }
  ];

  const products = ['All Products', 'Two-Wheeler', 'MSME Loan', 'LAP', 'Solar Loan', 'Tractor Loan'];
  const regions = ['All Regions', 'North', 'South', 'East', 'West', 'Central'];
  const states = ['All States', 'Rajasthan', 'Madhya Pradesh', 'Gujarat', 'Punjab', 'Haryana'];
  const branches = ['All Branches', 'Jaipur - VK1', 'Jaipur - Sanganer', 'Udaipur', 'Kota', 'Jodhpur', 'Ajmer', 'Alwar'];
  const departments = ['All Departments', 'Sales & Sourcing', 'Credit Underwriting', 'Operations', 'Collections', 'Risk & Vigilance'];
  const comparisons = ['Previous Month', 'Previous Quarter', 'Same Month Last Year', 'Budget Baseline'];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-2 px-1 border-b border-slate-200/80 bg-white/50 backdrop-blur-xs">
      {/* Left: Time Period Buttons */}
      <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-lg border border-slate-200/80">
        {periods.map(period => {
          const isActive = filters.period === period.id;
          return (
            <button
              key={period.id}
              onClick={() => onFilterChange({ period: period.id })}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                isActive
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {period.label}
            </button>
          );
        })}
      </div>

      {/* Middle/Right: Dropdown Selectors */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Products Dropdown */}
        <div className="relative">
          <select
            value={filters.product}
            onChange={(e) => onFilterChange({ product: e.target.value })}
            className="appearance-none pl-3 pr-7 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer shadow-2xs"
          >
            {products.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Regions Dropdown */}
        <div className="relative">
          <select
            value={filters.region}
            onChange={(e) => onFilterChange({ region: e.target.value })}
            className="appearance-none pl-3 pr-7 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer shadow-2xs"
          >
            {regions.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* States Dropdown */}
        <div className="relative">
          <select
            value={filters.state}
            onChange={(e) => onFilterChange({ state: e.target.value })}
            className="appearance-none pl-3 pr-7 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer shadow-2xs"
          >
            {states.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Branches Dropdown */}
        <div className="relative">
          <select
            value={filters.branch}
            onChange={(e) => onFilterChange({ branch: e.target.value })}
            className="appearance-none pl-3 pr-7 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer shadow-2xs"
          >
            {branches.map(b => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Departments Dropdown */}
        <div className="relative">
          <select
            value={filters.department}
            onChange={(e) => onFilterChange({ department: e.target.value })}
            className="appearance-none pl-3 pr-7 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer shadow-2xs"
          >
            {departments.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Compare With Label & Dropdown */}
        <div className="flex items-center gap-1.5 pl-2 border-l border-slate-200">
          <span className="text-xs text-slate-400 font-medium">Compare With</span>
          <div className="relative">
            <select
              value={filters.compareWith}
              onChange={(e) => onFilterChange({ compareWith: e.target.value })}
              className="appearance-none pl-3 pr-7 py-1 text-xs font-semibold bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer shadow-2xs"
            >
              {comparisons.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Reset Filter Button */}
        <button
          onClick={onReset}
          title="Reset Filters"
          className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
