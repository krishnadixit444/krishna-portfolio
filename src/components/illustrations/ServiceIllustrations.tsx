import React from 'react';

export const ServiceStageIllustration: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  switch (serviceId) {
    case 'websites':
      return (
        <svg viewBox="0 0 360 360" fill="none" className="w-full h-full">
          {/* Playful Browser Composition */}
          <rect x="44" y="68" width="272" height="204" rx="22" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="4.5" />
          <line x1="44" y1="110" x2="316" y2="110" stroke="#1E1B18" strokeWidth="4" />
          <circle cx="72" cy="89" r="6" fill="#E33529" />
          <circle cx="94" cy="89" r="6" fill="#FFF500" stroke="#1E1B18" strokeWidth="2" />
          <circle cx="116" cy="89" r="6" fill="#AFD8FB" stroke="#1E1B18" strokeWidth="2" />
          <rect x="68" y="132" width="124" height="114" rx="14" fill="#AFD8FB" stroke="#1E1B18" strokeWidth="3.5" />
          <rect x="208" y="132" width="84" height="46" rx="10" fill="#E33529" stroke="#1E1B18" strokeWidth="3.5" />
          <rect x="208" y="192" width="84" height="18" rx="9" fill="#1E1B18" opacity="0.2" />
          <rect x="208" y="220" width="62" height="18" rx="9" fill="#1E1B18" opacity="0.2" />
          {/* Oversized Cursor */}
          <path
            d="M254 226L266 298L285 278L310 296L318 284L293 266L316 254L254 226Z"
            fill="#FFF500"
            stroke="#1E1B18"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'automation':
      return (
        <svg viewBox="0 0 360 360" fill="none" className="w-full h-full">
          {/* Interconnected Workflow Engine */}
          <path
            d="M92 128C152 94 216 100 264 146C296 178 292 232 246 258C194 288 122 272 90 226"
            stroke="#E33529"
            strokeWidth="6"
            strokeDasharray="10 10"
            strokeLinecap="round"
          />
          <rect x="50" y="94" width="96" height="68" rx="16" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="4" />
          <circle cx="98" cy="128" r="16" fill="#FFF500" stroke="#1E1B18" strokeWidth="3" />
          <rect x="212" y="114" width="102" height="72" rx="16" fill="#AFD8FB" stroke="#1E1B18" strokeWidth="4" />
          <path d="M262 132L247 154H261L257 170L275 147H261L262 132Z" fill="#E33529" stroke="#1E1B18" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="116" y="214" width="128" height="70" rx="18" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="4" />
          <path d="M144 249L164 265L214 229" stroke="#E33529" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'crm-products':
      return (
        <svg viewBox="0 0 360 360" fill="none" className="w-full h-full">
          {/* Tactile CRM Matrix Board */}
          <rect x="46" y="70" width="268" height="218" rx="22" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="4.5" />
          <rect x="68" y="96" width="94" height="28" rx="14" fill="#E33529" />
          <rect x="174" y="96" width="118" height="28" rx="14" fill="#E6DFE7" stroke="#1E1B18" strokeWidth="2.5" />
          {[0, 1, 2].map((row) => (
            <g key={row} transform={`translate(68 ${142 + row * 44})`}>
              <rect width="224" height="34" rx="10" fill="#FFFFFF" stroke="#1E1B18" strokeWidth="2.5" />
              <circle cx="20" cy="17" r="8" fill={row === 0 ? '#FFF500' : row === 1 ? '#AFD8FB' : '#F4CED3'} stroke="#1E1B18" strokeWidth="2" />
              <rect x="38" y="12" width="96" height="10" rx="5" fill="#1E1B18" opacity="0.22" />
              <rect x="156" y="9" width="54" height="16" rx="8" fill={row === 1 ? '#AFD8FB' : '#E33529'} />
            </g>
          ))}
        </svg>
      );

    case 'data-leadgen':
      return (
        <svg viewBox="0 0 360 360" fill="none" className="w-full h-full">
          {/* GraphQL Radar & Verified Roster */}
          <circle cx="152" cy="154" r="78" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="4.5" />
          <circle cx="152" cy="154" r="46" fill="#AFD8FB" stroke="#1E1B18" strokeWidth="3" />
          <circle cx="152" cy="154" r="14" fill="#E33529" />
          <path d="M210 212L284 286" stroke="#1E1B18" strokeWidth="14" strokeLinecap="round" />
          <path d="M210 212L284 286" stroke="#E33529" strokeWidth="7" strokeLinecap="round" />
          {/* Graph Nodes */}
          <circle cx="268" cy="96" r="24" fill="#FFF500" stroke="#1E1B18" strokeWidth="3.5" />
          <circle cx="88" cy="272" r="22" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="3.5" />
          <line x1="216" y1="120" x2="246" y2="106" stroke="#1E1B18" strokeWidth="3.5" />
          <line x1="118" y1="224" x2="98" y2="252" stroke="#1E1B18" strokeWidth="3.5" />
        </svg>
      );

    case 'creator-tech':
    default:
      return (
        <svg viewBox="0 0 360 360" fill="none" className="w-full h-full">
          {/* Creator Card + Live Reach */}
          <rect x="64" y="64" width="186" height="226" rx="22" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="4.5" />
          <circle cx="157" cy="134" r="36" fill="#F4CED3" stroke="#1E1B18" strokeWidth="3.5" />
          <circle cx="157" cy="126" r="14" fill="#1E1B18" />
          <path d="M132 162C136 146 178 146 182 162" fill="#E33529" />
          <rect x="94" y="190" width="126" height="14" rx="7" fill="#1E1B18" opacity="0.2" />
          <rect x="114" y="216" width="86" height="12" rx="6" fill="#1E1B18" opacity="0.14" />
          <rect x="98" y="244" width="118" height="26" rx="13" fill="#E33529" />
          {/* Floating Reach Badge */}
          <g transform="translate(206 164) rotate(7)">
            <rect width="108" height="82" rx="18" fill="#FFF500" stroke="#1E1B18" strokeWidth="4" />
            <path d="M20 56L42 36L60 48L88 22" stroke="#E33529" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      );
  }
};

export const ServiceNodeIcon: React.FC<{ serviceId: string; active?: boolean }> = ({
  serviceId,
  active,
}) => {
  const stroke = '#1E1B18';
  const accent = active ? '#E33529' : '#693413';

  switch (serviceId) {
    case 'websites':
      return (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <rect x="8" y="10" width="32" height="26" rx="5" fill="#F6F6ED" stroke={stroke} strokeWidth="2.5" />
          <line x1="8" y1="18" x2="40" y2="18" stroke={stroke} strokeWidth="2.2" />
          <circle cx="14" cy="14" r="1.8" fill={accent} />
          <rect x="14" y="23" width="12" height="8" rx="2" fill="#AFD8FB" stroke={stroke} strokeWidth="1.8" />
        </svg>
      );
    case 'automation':
      return (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <path d="M26 8L15 25H24L21 40L34 22H25L26 8Z" fill={accent} stroke={stroke} strokeWidth="2.4" strokeLinejoin="round" />
        </svg>
      );
    case 'crm-products':
      return (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <rect x="9" y="10" width="30" height="28" rx="5" fill="#F6F6ED" stroke={stroke} strokeWidth="2.5" />
          <rect x="14" y="16" width="20" height="5" rx="2.5" fill={accent} />
          <rect x="14" y="25" width="14" height="4" rx="2" fill={stroke} opacity="0.35" />
          <rect x="14" y="31" width="20" height="4" rx="2" fill="#AFD8FB" />
        </svg>
      );
    case 'data-leadgen':
      return (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <circle cx="21" cy="21" r="10" fill="#AFD8FB" stroke={stroke} strokeWidth="2.5" />
          <line x1="28.5" y1="28.5" x2="38" y2="38" stroke={accent} strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
          <circle cx="24" cy="18" r="7" fill={accent} stroke={stroke} strokeWidth="2.4" />
          <path d="M12 37C13 30 35 30 36 37" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" />
        </svg>
      );
  }
};
