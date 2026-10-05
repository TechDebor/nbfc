import React from 'react';

interface NamdevLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  showText?: boolean;
  variant?: 'horizontal' | 'badge' | 'icon-only';
}

export const NamdevEmblem: React.FC<{ sizeClassName?: string }> = ({
  sizeClassName = 'w-9 h-9'
}) => {
  return (
    <div className={`relative ${sizeClassName} shrink-0 select-none overflow-hidden rounded-xl shadow-xs`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Deep Navy/Purple Squircle Frame (as in official icon asset) */}
        <rect width="200" height="200" rx="44" fill="#322b8c" />

        {/* Inner Crisp White Rounded Card */}
        <rect x="6" y="6" width="188" height="188" rx="38" fill="#ffffff" />

        {/* 1. TOP-LEFT (BLUE #322b8c) & TOP-RIGHT (RED #de2127) */}
        {/* Top-Left Quadrant Block */}
        <path
          d="M 52 46 L 93 46 L 93 94 L 52 94 Z"
          fill="#322b8c"
        />

        {/* Top-Right Quadrant Block */}
        <path
          d="M 107 46 L 164 46 L 164 94 L 107 94 Z"
          fill="#de2127"
        />

        {/* Bottom-Right Quadrant Block */}
        <path
          d="M 107 106 L 148 106 L 148 164 L 107 164 Z"
          fill="#322b8c"
        />

        {/* Bottom-Left Quadrant Block */}
        <path
          d="M 36 106 L 93 106 L 93 154 L 36 154 Z"
          fill="#de2127"
        />

        {/* EXTENDED ARMS & DUAL CURVED CORNER HOOKS */}
        {/* TOP EDGE ARMS: Blue arm sweeping horizontally along top above Red quadrant */}
        <path
          d="M 52 32 L 158 32 C 168 32, 174 27, 174 22 C 174 29, 168 40, 156 40 L 52 40 Z"
          fill="#322b8c"
        />
        {/* Top-Right Red horn tip */}
        <path
          d="M 164 46 C 175 46, 178 40, 178 36 C 182 45, 176 56, 164 56 Z"
          fill="#de2127"
        />

        {/* RIGHT EDGE ARMS: Red arm sweeping vertically down along right outside Blue quadrant */}
        <path
          d="M 160 46 L 160 160 C 160 170, 166 175, 174 175 C 166 175, 152 168, 152 156 L 152 46 Z"
          fill="#de2127"
        />
        {/* Bottom-Right Blue horn tip */}
        <path
          d="M 148 160 C 148 174, 154 178, 158 178 C 149 181, 138 175, 138 160 Z"
          fill="#322b8c"
        />

        {/* BOTTOM EDGE ARMS: Blue arm sweeping horizontally left along bottom under Red quadrant */}
        <path
          d="M 148 168 L 42 168 C 32 168, 26 173, 26 178 C 26 171, 32 160, 44 160 L 148 160 Z"
          fill="#322b8c"
        />
        {/* Bottom-Left Red horn tip */}
        <path
          d="M 36 154 C 25 154, 22 160, 22 164 C 18 155, 24 144, 36 144 Z"
          fill="#de2127"
        />

        {/* LEFT EDGE ARMS: Red arm sweeping vertically up along left outside Blue quadrant */}
        <path
          d="M 40 154 L 40 40 C 40 30, 34 25, 26 25 C 34 25, 48 32, 48 44 L 48 154 Z"
          fill="#de2127"
        />
        {/* Top-Left Blue horn tip */}
        <path
          d="M 52 40 C 52 26, 46 22, 42 22 C 51 19, 62 25, 62 40 Z"
          fill="#322b8c"
        />

        {/* Outer Accent Hook Claws (Exact match to reference) */}
        {/* Top-Left Outer Red Hook */}
        <path
          d="M 36 106 L 36 40 C 36 26, 30 25, 26 25 C 29 28, 32 34, 32 44 L 32 106 Z"
          fill="#de2127"
        />
        {/* Top-Right Outer Blue Horn */}
        <path
          d="M 158 32 C 168 32, 172 26, 174 21 C 171 27, 166 32, 154 32 Z"
          fill="#322b8c"
        />
        {/* Bottom-Right Outer Red Hook */}
        <path
          d="M 164 94 L 164 160 C 164 174, 170 175, 174 175 C 171 172, 168 166, 168 156 L 168 94 Z"
          fill="#de2127"
        />
        {/* Bottom-Left Outer Blue Horn */}
        <path
          d="M 42 168 C 32 168, 28 174, 26 179 C 29 173, 34 168, 46 168 Z"
          fill="#322b8c"
        />

        {/* WHITE CHANNELS RADIATING FROM CENTRAL DISC */}
        {/* Upward then Rightward Channel */}
        <path
          d="M 93 100 L 93 54 C 93 49, 97 46, 102 46 L 164 46 L 164 54 L 101 54 L 101 100 Z"
          fill="#ffffff"
        />
        {/* Rightward then Downward Channel */}
        <path
          d="M 100 93 L 146 93 C 151 93, 154 97, 154 102 L 154 164 L 146 164 L 146 101 L 100 101 Z"
          fill="#ffffff"
        />
        {/* Downward then Leftward Channel */}
        <path
          d="M 107 100 L 107 146 C 107 151, 103 154, 98 154 L 36 154 L 36 146 L 99 146 L 99 100 Z"
          fill="#ffffff"
        />
        {/* Leftward then Upward Channel */}
        <path
          d="M 100 107 L 54 107 C 49 107, 46 103, 46 98 L 46 36 L 54 36 L 54 99 L 100 99 Z"
          fill="#ffffff"
        />

        {/* Central Pure White Hub Disc */}
        <circle cx="100" cy="100" r="26" fill="#ffffff" />
      </svg>
    </div>
  );
};

export const NamdevBadgeLogo: React.FC<{ width?: number }> = ({ width = 140 }) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl shadow-xs border border-slate-200 bg-white p-2 select-none">
      <NamdevEmblem sizeClassName="w-16 h-16" />
      <div className="text-center mt-2">
        <div className="text-xs font-black tracking-tight text-[#322b8c]">
          NAMDEV <span className="text-[#de2127]">FINVEST</span>
        </div>
        <div className="text-[9px] font-semibold text-slate-500">
          Private Limited
        </div>
      </div>
    </div>
  );
};

export const NamdevLogo: React.FC<NamdevLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  showText = true,
  variant = 'horizontal'
}) => {
  const iconSizes = {
    xs: 'w-6 h-6',
    sm: 'w-7.5 h-7.5',
    md: 'w-9.5 h-9.5',
    lg: 'w-11 h-11',
    xl: 'w-14 h-14'
  };

  const titleSizes = {
    xs: 'text-[11px]',
    sm: 'text-xs',
    md: 'text-sm font-bold',
    lg: 'text-base font-extrabold',
    xl: 'text-lg font-black'
  };

  const subtitleSizes = {
    xs: 'text-[7.5px]',
    sm: 'text-[8.5px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
    xl: 'text-xs'
  };

  if (variant === 'badge') {
    return <NamdevBadgeLogo />;
  }

  if (variant === 'icon-only') {
    return <NamdevEmblem sizeClassName={iconSizes[size]} />;
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Authentic High-Resolution SVG Emblem matching uploaded photo */}
      <NamdevEmblem sizeClassName={iconSizes[size]} />

      {/* Brand Wordmark & Typography */}
      {showText && (
        <div className="flex flex-col leading-tight select-none">
          <div className={`flex items-center tracking-tight text-slate-900 ${titleSizes[size]} uppercase`}>
            <span className="text-[#322b8c] font-black mr-1 tracking-tight">NAMDEV</span>
            <span className="text-[#de2127] font-black mr-1 tracking-tight">FINVEST</span>
            <span className="text-slate-400 font-bold text-[9px] tracking-normal">PVT. LTD.</span>
          </div>
          {showSubtitle && (
            <span className={`text-slate-500 font-medium tracking-tight ${subtitleSizes[size]}`}>
              Namdev Finvest Private Limited
            </span>
          )}
        </div>
      )}
    </div>
  );
};
