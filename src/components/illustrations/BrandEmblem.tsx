import React from 'react';

interface BrandEmblemProps {
  className?: string;
  color?: string;
}

export const BrandEmblem: React.FC<BrandEmblemProps> = ({
  className = 'w-11 h-8',
  color = '#E33529',
}) => (
  <svg
    viewBox="0 0 68 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Playful kinetic paper-plane / builder mark */}
    <path
      d="M7 29.5C15.5 23.5 25.5 14 40 8.5L60.5 6.5L51.5 22.5C57.5 24 62 27.5 63 31.5C55 29.5 46 31.5 39 36.5C30.5 42.5 20.5 41.5 11.5 36.5C8.8 35 6.8 32.5 7 29.5Z"
      fill={color}
    />
    <circle cx="48" cy="14.5" r="2.6" fill="#F3F3E9" />
    <path
      d="M2.5 35.5C6.5 33.5 9.5 33 13 34M5 40.5C9.5 38.5 13 38 17.5 39"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
  </svg>
);

export const BrandLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <a
    href="#top"
    onClick={onClick}
    className="group inline-flex items-center gap-2.5 select-none focus:outline-none"
    aria-label="Krishna Dixit Home"
  >
    <BrandEmblem className="w-11 h-8 transition-transform duration-300 ease-expressive group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]" />
    <span className="font-display text-[17px] leading-[0.82] tracking-[-0.02em] text-[#E33529] uppercase text-left">
      KRISHNA
      <br />
      DIXIT
    </span>
  </a>
);
