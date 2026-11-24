import React from 'react';

interface OrbGraphicProps {
  variant?: 'cream' | 'sun' | 'pink';
  className?: string;
}

export const OrbGraphic: React.FC<OrbGraphicProps> = ({
  variant = 'cream',
  className = 'w-24 h-24',
}) => {
  const fill = variant === 'sun' ? '#FFF500' : variant === 'pink' ? '#F0B5BE' : '#F6F6ED';
  const seam = variant === 'sun' ? '#D6C400' : variant === 'pink' ? '#E39AA6' : '#FFFFFF';

  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="78" fill={fill} />
      <path
        d="M18 46C56 64 102 64 142 46"
        stroke={seam}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M32 128C54 88 54 44 34 14"
        stroke={seam}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M128 144C102 106 102 58 126 16"
        stroke={seam}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
};

export const FooterSceneIllustration: React.FC = () => (
  <svg
    viewBox="0 0 340 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-[300px] h-auto mx-auto"
    aria-hidden="true"
  >
    {/* Playful Desk Setup & Builder Silhouette */}
    <ellipse cx="170" cy="212" rx="134" ry="14" fill="#E33529" fillOpacity="0.1" />
    {/* Monitor */}
    <rect x="78" y="34" width="184" height="122" rx="18" fill="#F6F6ED" stroke="#1E1B18" strokeWidth="4" />
    <rect x="94" y="50" width="152" height="86" rx="10" fill="#AFD8FB" stroke="#1E1B18" strokeWidth="3" />
    <path d="M112 96L138 74L164 98L198 68L226 88" stroke="#E33529" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="198" cy="68" r="6" fill="#FFF500" stroke="#1E1B18" strokeWidth="2.5" />
    {/* Monitor Stand */}
    <rect x="152" y="156" width="36" height="28" fill="#F4CED3" stroke="#1E1B18" strokeWidth="3.5" />
    <rect x="122" y="182" width="96" height="14" rx="7" fill="#E33529" stroke="#1E1B18" strokeWidth="3.5" />
    {/* Coffee Mug */}
    <rect x="26" y="144" width="34" height="44" rx="8" fill="#FFF500" stroke="#1E1B18" strokeWidth="3.5" />
    <path d="M60 154H68C73 154 76 158 76 163C76 168 73 172 68 172H60" stroke="#1E1B18" strokeWidth="3.5" />
    <path d="M38 134C38 126 44 122 44 114M50 134C50 126 56 122 56 114" stroke="#E33529" strokeWidth="3" strokeLinecap="round" />
    {/* Floating Code Pill */}
    <g transform="translate(248 112) rotate(8)">
      <rect width="74" height="40" rx="12" fill="#F4CED3" stroke="#1E1B18" strokeWidth="3.2" />
      <text x="14" y="25" fill="#E33529" fontSize="14" fontWeight="800" fontFamily="JetBrains Mono, monospace">
        &lt;/&gt;
      </text>
    </g>
  </svg>
);
