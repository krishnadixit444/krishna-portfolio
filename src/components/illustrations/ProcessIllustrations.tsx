import React from 'react';

export const ProcessCardIllustration: React.FC<{ stepNum: string }> = ({ stepNum }) => {
  switch (stepNum) {
    case '01.':
      return (
        <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
          {/* Character mapping business goals with a red pen & chat bubbles */}
          <circle cx="248" cy="48" r="22" fill="#FFFFFF" stroke="#693413" strokeWidth="2.4" />
          <circle cx="248" cy="48" r="6" fill="#E33529" />
          <path d="M214 66L230 56" stroke="#693413" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M54 220C58 158 96 126 146 126C196 126 226 160 232 220H54Z"
            fill="#8DBBE6"
            stroke="#1E1B18"
            strokeWidth="3"
          />
          <circle cx="138" cy="88" r="34" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="3" />
          <path d="M104 82C102 56 126 42 150 46C168 49 178 66 174 84C158 68 124 68 104 82Z" fill="#1E1B18" />
          <circle cx="130" cy="90" r="3" fill="#1E1B18" />
          <circle cx="152" cy="90" r="3" fill="#1E1B18" />
          {/* Clipboard & Red Pen */}
          <rect x="202" y="112" width="76" height="92" rx="8" fill="#693413" opacity="0.2" />
          <rect x="208" y="106" width="76" height="92" rx="8" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="3" />
          <line x1="222" y1="130" x2="268" y2="130" stroke="#1E1B18" strokeWidth="3" strokeLinecap="round" />
          <line x1="222" y1="148" x2="258" y2="148" stroke="#1E1B18" strokeWidth="3" strokeLinecap="round" />
          <path d="M168 164L204 134" stroke="#E33529" strokeWidth="7" strokeLinecap="round" />
        </svg>
      );

    case '02.':
      return (
        <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
          {/* Two connected architectural blueprint screens */}
          <g transform="translate(64 28) rotate(-8)">
            <rect width="102" height="148" rx="12" fill="#F6F6ED" stroke="#2B6786" strokeWidth="4" />
            <rect x="16" y="24" width="70" height="44" rx="8" fill="#AFD8FB" />
            <circle cx="51" cy="46" r="14" fill="#E33529" />
            <rect x="16" y="84" width="70" height="10" rx="5" fill="#693413" opacity="0.25" />
            <rect x="16" y="104" width="50" height="10" rx="5" fill="#693413" opacity="0.25" />
          </g>
          <g transform="translate(166 56) rotate(7)">
            <rect width="102" height="148" rx="12" fill="#F6F6ED" stroke="#2B6786" strokeWidth="4" />
            <rect x="16" y="22" width="70" height="18" rx="6" fill="#E33529" />
            <rect x="16" y="54" width="70" height="44" rx="8" fill="#F4CED3" />
            <circle cx="51" cy="76" r="10" fill="#FFF500" stroke="#1E1B18" strokeWidth="2.5" />
            <rect x="16" y="110" width="58" height="10" rx="5" fill="#693413" opacity="0.25" />
          </g>
          <path d="M138 118C156 106 174 110 186 124" stroke="#E33529" strokeWidth="4" strokeDasharray="6 6" strokeLinecap="round" />
        </svg>
      );

    case '03.':
      return (
        <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
          {/* Builder holding / assembling modular product blocks */}
          <path
            d="M52 220C58 156 104 128 160 128C216 128 262 156 268 220H52Z"
            fill="#8DBBE6"
            stroke="#1E1B18"
            strokeWidth="3"
          />
          <circle cx="160" cy="82" r="34" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="3" />
          <path d="M126 84C122 54 146 38 172 44C194 48 202 70 194 90C180 72 144 70 126 84Z" fill="#1E1B18" />
          {/* Modular Code Block cradled in arms */}
          <rect x="102" y="138" width="116" height="62" rx="14" fill="#693413" stroke="#1E1B18" strokeWidth="3" />
          <rect x="116" y="154" width="40" height="10" rx="5" fill="#FFF500" />
          <rect x="116" y="172" width="84" height="10" rx="5" fill="#AFD8FB" />
          <circle cx="200" cy="159" r="7" fill="#E33529" />
        </svg>
      );

    case '04.':
    default:
      return (
        <svg viewBox="0 0 320 220" fill="none" className="w-full h-full">
          {/* Launch & Growth Rocket / Metric Ship */}
          <path d="M56 178C104 146 154 140 202 108L254 58" stroke="#E33529" strokeWidth="5" strokeDasharray="8 8" strokeLinecap="round" />
          <g transform="translate(182 34) rotate(12)">
            <path d="M40 8C64 26 76 58 70 96L40 112L10 96C4 58 16 26 40 8Z" fill="#693413" stroke="#1E1B18" strokeWidth="3.5" />
            <circle cx="40" cy="54" r="14" fill="#FFF500" stroke="#1E1B18" strokeWidth="3" />
            <path d="M10 78L-6 96L14 100" fill="#E33529" stroke="#1E1B18" strokeWidth="3" strokeLinejoin="round" />
            <path d="M70 78L86 96L66 100" fill="#E33529" stroke="#1E1B18" strokeWidth="3" strokeLinejoin="round" />
          </g>
          <rect x="44" y="156" width="106" height="44" rx="12" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="3" />
          <path d="M62 178L76 190L100 166" stroke="#E33529" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="110" y="173" width="26" height="10" rx="5" fill="#1E1B18" opacity="0.25" />
        </svg>
      );
  }
};
