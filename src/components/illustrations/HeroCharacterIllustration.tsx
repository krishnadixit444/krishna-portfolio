import React, { useEffect, useRef } from 'react';

export const HeroCharacterIllustration: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[520px] mx-auto transition-transform duration-300 ease-out select-none"
    >
      <svg
        viewBox="0 0 640 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_18px_36px_rgba(30,27,24,0.06)]"
        role="img"
        aria-label="Illustrated portrait of Krishna Dixit surrounded by floating browser windows and automation ribbons"
      >
        {/* Soft background halo */}
        <circle cx="320" cy="336" r="228" fill="#F6F6ED" />

        {/* Left Floating Browser Window */}
        <g transform="translate(46 218) rotate(-7)">
          <rect
            x="0"
            y="0"
            width="138"
            height="98"
            rx="14"
            fill="#F6F6ED"
            stroke="#1E1B18"
            strokeWidth="3.5"
          />
          <line x1="0" y1="24" x2="138" y2="24" stroke="#1E1B18" strokeWidth="3" />
          <circle cx="16" cy="12" r="3.5" fill="#E33529" />
          <circle cx="29" cy="12" r="3.5" fill="#FFF500" stroke="#1E1B18" strokeWidth="1.5" />
          <circle cx="42" cy="12" r="3.5" fill="#AFD8FB" stroke="#1E1B18" strokeWidth="1.5" />
          <rect x="14" y="38" width="52" height="42" rx="8" fill="#AFD8FB" stroke="#1E1B18" strokeWidth="2.5" />
          <rect x="76" y="40" width="48" height="10" rx="5" fill="#E33529" />
          <rect x="76" y="57" width="38" height="8" rx="4" fill="#1E1B18" opacity="0.2" />
          <rect x="76" y="71" width="44" height="8" rx="4" fill="#1E1B18" opacity="0.2" />
        </g>

        {/* Right Floating Automation Node Card */}
        <g transform="translate(454 176) rotate(8)">
          <rect
            x="0"
            y="0"
            width="136"
            height="92"
            rx="16"
            fill="#F4CED3"
            stroke="#1E1B18"
            strokeWidth="3.5"
          />
          <rect x="14" y="14" width="44" height="18" rx="9" fill="#E33529" />
          <text
            x="23"
            y="26"
            fill="#F3F3E9"
            fontSize="10"
            fontWeight="800"
            fontFamily="JetBrains Mono, monospace"
          >
            SYNC
          </text>
          <path
            d="M20 58L42 46L66 64L92 42L116 54"
            stroke="#1E1B18"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="42" cy="46" r="5" fill="#FFF500" stroke="#1E1B18" strokeWidth="2.5" />
          <circle cx="92" cy="42" r="5" fill="#AFD8FB" stroke="#1E1B18" strokeWidth="2.5" />
        </g>

        {/* Floating Sun Yellow Trigger Orb */}
        <g transform="translate(494 352)">
          <circle cx="28" cy="28" r="28" fill="#FFF500" stroke="#1E1B18" strokeWidth="3.2" />
          <path
            d="M30 14L19 30H28L25 42L38 25H29L30 14Z"
            fill="#E33529"
            stroke="#1E1B18"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>

        {/* Main Illustrated Character (Krishna) — Hand-inked Studio Aesthetic */}
        <g>
          {/* Shoulders & Studio Jacket */}
          <path
            d="M150 584C158 468 214 402 320 402C426 402 482 468 490 584H150Z"
            fill="#FFFFFF"
            stroke="#1E1B18"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Jacket Collar & Accent Pocket */}
          <path
            d="M254 410L292 468L320 440L348 468L386 410"
            fill="#F4CED3"
            stroke="#1E1B18"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <rect
            x="356"
            y="488"
            width="58"
            height="42"
            rx="10"
            fill="#AFD8FB"
            stroke="#1E1B18"
            strokeWidth="3.2"
          />
          <line x1="368" y1="504" x2="402" y2="504" stroke="#1E1B18" strokeWidth="3" strokeLinecap="round" />
          <line x1="368" y1="516" x2="392" y2="516" stroke="#1E1B18" strokeWidth="3" strokeLinecap="round" />

          {/* Neck */}
          <path
            d="M292 346V412C292 426 348 426 348 412V346H292Z"
            fill="#F3C7AE"
            stroke="#1E1B18"
            strokeWidth="4"
          />

          {/* Ears */}
          <ellipse cx="238" cy="274" rx="15" ry="22" fill="#F3C7AE" stroke="#1E1B18" strokeWidth="4" />
          <ellipse cx="402" cy="274" rx="15" ry="22" fill="#F3C7AE" stroke="#1E1B18" strokeWidth="4" />

          {/* Face */}
          <path
            d="M242 224C242 170 278 144 320 144C362 144 398 170 398 224V286C398 334 364 368 320 368C276 368 242 334 242 286V224Z"
            fill="#F7D3BD"
            stroke="#1E1B18"
            strokeWidth="4.5"
          />

          {/* Expressive Hair (Playful Brush Strokes) */}
          <path
            d="M234 244C224 196 246 138 294 124C328 114 374 124 398 158C416 184 414 222 404 246C392 214 370 194 342 190C318 187 288 202 268 214C252 224 242 234 234 244Z"
            fill="#1E1B18"
          />
          <path
            d="M286 126C296 104 326 96 344 114M326 116C346 98 378 106 382 132"
            stroke="#1E1B18"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Signature Bold Frames / Glasses */}
          <rect
            x="257"
            y="244"
            width="52"
            height="36"
            rx="10"
            fill="#F3F3E9"
            fillOpacity="0.45"
            stroke="#1E1B18"
            strokeWidth="4"
          />
          <rect
            x="331"
            y="244"
            width="52"
            height="36"
            rx="10"
            fill="#F3F3E9"
            fillOpacity="0.45"
            stroke="#1E1B18"
            strokeWidth="4"
          />
          <line x1="309" y1="260" x2="331" y2="260" stroke="#1E1B18" strokeWidth="4" />

          {/* Eyes & Brows */}
          <circle cx="283" cy="262" r="4.8" fill="#1E1B18" />
          <circle cx="357" cy="262" r="4.8" fill="#1E1B18" />
          <path d="M266 232C276 226 290 226 298 231" stroke="#1E1B18" strokeWidth="4" strokeLinecap="round" />
          <path d="M342 231C350 226 364 226 374 232" stroke="#1E1B18" strokeWidth="4" strokeLinecap="round" />

          {/* Nose & Confident Smile */}
          <path d="M320 264C324 278 324 288 315 292" stroke="#1E1B18" strokeWidth="3.5" strokeLinecap="round" />
          <path
            d="M296 315C308 328 334 328 346 314"
            stroke="#1E1B18"
            strokeWidth="4.2"
            strokeLinecap="round"
          />

          {/* Cheek warmth */}
          <circle cx="268" cy="296" r="8" fill="#E33529" fillOpacity="0.18" />
          <circle cx="372" cy="296" r="8" fill="#E33529" fillOpacity="0.18" />

          {/* Playful Hand Holding Red Connector / Stylus Ribbon (Echoing Leash Motif!) */}
          <path
            d="M320 326C282 372 246 462 238 600"
            stroke="#E33529"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M320 326C358 370 368 418 336 436C312 450 296 420 318 386"
            stroke="#E33529"
            strokeWidth="7.5"
            strokeLinecap="round"
          />

          {/* Laptop / Builder Tablet in Foreground */}
          <g transform="translate(216 490)">
            <rect
              x="0"
              y="0"
              width="208"
              height="110"
              rx="16"
              fill="#F3F3E9"
              stroke="#1E1B18"
              strokeWidth="4.2"
            />
            <rect x="18" y="18" width="66" height="12" rx="6" fill="#E33529" />
            <rect x="18" y="42" width="172" height="10" rx="5" fill="#1E1B18" opacity="0.16" />
            <rect x="18" y="60" width="132" height="10" rx="5" fill="#1E1B18" opacity="0.16" />
            <circle cx="174" cy="82" r="11" fill="#FFF500" stroke="#1E1B18" strokeWidth="2.8" />
          </g>
        </g>

        {/* Expressive Ink Line Accents */}
        <path
          d="M120 164L132 146M106 184L124 176M518 444L538 438M508 468L524 474"
          stroke="#E33529"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
