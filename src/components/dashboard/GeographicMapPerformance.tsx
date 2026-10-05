import React from 'react';
import { GEOGRAPHIC_DATA } from '../../data/mockData';
import { MapPin, Globe } from 'lucide-react';

export const GeographicMapPerformance: React.FC = () => {
  const states = GEOGRAPHIC_DATA;

  return (
    <div className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Geographic Business Performance</h3>
          <p className="text-[11px] text-slate-500 font-medium">State-wise lending penetration & market share</p>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-blue-600" />
          <span>5 Key States</span>
        </div>
      </div>

      {/* Map visual + State List */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-1">
        {/* Simplified Vector Map Illustration of Western/North-West India */}
        <div className="w-32 h-32 shrink-0 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center justify-center p-2 relative overflow-hidden group">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-500 fill-current opacity-80 group-hover:scale-105 transition-transform">
            {/* North-West Indian States Silhouette (Rajasthan, MP, Gujarat, Punjab, Haryana) */}
            <path
              d="M30 15 L50 10 L60 20 L55 35 L75 40 L80 60 L60 65 L45 80 L35 70 L20 60 L25 40 L15 30 Z"
              fill="#93c5fd"
              stroke="#2563eb"
              strokeWidth="2"
            />
            {/* Center Hotspot (Rajasthan / Jaipur HQ) */}
            <circle cx="45" cy="40" r="5" fill="#dc2626" />
            <circle cx="45" cy="40" r="8" fill="#dc2626" opacity="0.3" className="animate-ping" />
          </svg>
          <div className="absolute bottom-1 right-2 text-[9px] font-bold text-slate-500">
            Jaipur HQ
          </div>
        </div>

        {/* State Performance Breakdown */}
        <div className="flex-1 w-full space-y-1.5 text-xs">
          {states.map((st) => (
            <div key={st.state} className="space-y-0.5">
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="font-semibold text-slate-800">{st.state}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-900 tabular-nums">{st.amount}</span>
                  <span className="text-slate-400 font-semibold tabular-nums w-10 text-right">
                    {st.share}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
                  style={{ width: `${st.share * 2}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
        <span>Rajasthan Core Share: 38.6%</span>
        <span className="text-blue-700 font-semibold cursor-pointer hover:underline">
          View Pin-Code Heatmap
        </span>
      </div>
    </div>
  );
};
