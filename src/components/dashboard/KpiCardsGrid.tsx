import React from 'react';
import { KpiMetric } from '../../types/nbfc';
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface KpiCardsGridProps {
  metrics: KpiMetric[];
  onCardClick?: (metric: KpiMetric) => void;
}

export const KpiCardsGrid: React.FC<KpiCardsGridProps> = ({
  metrics,
  onCardClick
}) => {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-3 sm:gap-3.5">
      {metrics.map((metric) => {
        const isUp = metric.trend === 'up';
        const isPositiveTone = metric.isPositive;

        // Calculate SVG sparkline points
        const minVal = Math.min(...metric.sparkline);
        const maxVal = Math.max(...metric.sparkline);
        const range = maxVal - minVal || 1;
        const width = 64;
        const height = 20;
        const points = metric.sparkline
          .map((v, i) => {
            const x = (i / (metric.sparkline.length - 1)) * width;
            const y = height - ((v - minVal) / range) * (height - 6) - 3;
            return `${x},${y}`;
          })
          .join(' ');

        // Color themes matching Namdev Finvest executive palette
        const strokeColors: Record<string, string> = {
          green: '#10b981',
          red: '#ef4444',
          blue: '#2563eb',
          amber: '#f59e0b',
          slate: '#64748b'
        };

        const strokeColor = strokeColors[metric.color] || '#2563eb';

        return (
          <div
            key={metric.id}
            onClick={() => onCardClick?.(metric)}
            className="group relative bg-white border border-slate-200/90 hover:border-blue-500 rounded-xl p-3 sm:p-3.5 shadow-2xs hover:shadow-md transition-all duration-150 cursor-pointer flex flex-col justify-between min-w-0 h-full min-h-[118px]"
          >
            {/* Top Row: Title & Indicator Dot */}
            <div className="flex items-start justify-between gap-1.5 min-w-0 mb-1">
              <span
                className="text-[11px] sm:text-xs font-bold text-slate-500 group-hover:text-blue-700 truncate tracking-tight"
                title={metric.title}
              >
                {t(`kpi.${metric.id}`, metric.title)}
              </span>
              <span
                className={`w-2 h-2 rounded-full shrink-0 mt-0.5 ${
                  isPositiveTone ? 'bg-emerald-500' : 'bg-amber-500'
                } group-hover:scale-125 transition-transform`}
              />
            </div>

            {/* Middle: Prominent Value (Never wraps or collides) */}
            <div className="my-1 min-w-0">
              <div className="text-base sm:text-lg xl:text-[19px] font-black text-slate-900 tracking-tight leading-tight truncate tabular-nums">
                {metric.value}
              </div>
            </div>

            {/* Bottom Row: Change Percentage & Sparkline (Clean layout, non-colliding) */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 min-w-0 mt-auto">
              {/* Change Pill */}
              <div className="flex items-center gap-0.5 min-w-0 shrink-0">
                <span
                  className={`inline-flex items-center text-[10px] sm:text-[11px] font-extrabold px-1.5 py-0.5 rounded ${
                    isPositiveTone
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-rose-50 text-rose-700'
                  }`}
                >
                  {isUp ? (
                    <ArrowUpRight className="w-3 h-3 shrink-0 mr-0.5" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 shrink-0 mr-0.5" />
                  )}
                  <span>{metric.change}</span>
                </span>
              </div>

              {/* Sparkline Curve */}
              <div className="w-14 sm:w-16 h-5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-end">
                <svg
                  viewBox={`0 0 ${width} ${height}`}
                  className="w-full h-full overflow-visible"
                >
                  <polyline
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={points}
                  />
                  {/* Glowing Endpoint Dot */}
                  {metric.sparkline.length > 0 && (
                    <circle
                      cx={width}
                      cy={
                        height -
                        ((metric.sparkline[metric.sparkline.length - 1] - minVal) / range) * (height - 6) -
                        3
                      }
                      r="2.5"
                      fill={strokeColor}
                    />
                  )}
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
