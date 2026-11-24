import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { impactData } from '../data/impactData';
import { OrbGraphic } from './illustrations/OrbGraphic';
import { observeReveal } from '../utils/scrollReveal';

export const ImpactSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const activeStat = impactData[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + impactData.length) % impactData.length);
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % impactData.length);
  };

  useEffect(() => {
    return observeReveal(sectionRef.current, '.impact-reveal', { stagger: 0.1 });
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative bg-[#AFD8FB] pt-10 pb-24 sm:pb-32 overflow-hidden"
    >
      {/* Top Pink -> Cream Curved Arena Backdrop (Mirrors Don't Board Me Care-Pet Transition) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[140px] bg-[#F4CED3]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[130vw] h-[720px] sm:h-[820px] rounded-[100%] bg-[#F6F6ED]"
      />

      {/* Flanking Signature Cream Orbs */}
      <div aria-hidden="true" className="hidden md:block pointer-events-none absolute top-28 -left-16 z-10">
        <OrbGraphic variant="cream" className="w-56 h-56 drop-shadow-sm" />
      </div>
      <div aria-hidden="true" className="hidden md:block pointer-events-none absolute top-16 -right-12 z-10">
        <OrbGraphic variant="cream" className="w-52 h-52 drop-shadow-sm" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14">
        {/* Centered Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 impact-reveal">
          <div className="inline-flex flex-col items-center gap-1.5 mb-4">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.06em] text-[#E33529]">
              Verified Engineering Proof &amp; Metrics
            </span>
            <ArrowDown className="w-4 h-4 text-[#E33529]" />
          </div>

          <h2 className="display-hero text-[clamp(3.2rem,8.4vw,7.8rem)] text-[#E33529]">
            BUILT TO SHIP &amp; MOVE REAL METRICS!
          </h2>
        </div>

        {/* Interactive Horizontal Ruler Track (Mirrors Testimonials Ruler!) */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-12 impact-reveal">
          <div className="text-center font-display text-lg sm:text-xl tracking-wider text-[#E33529] mb-5">
            VERIFIED OUTCOMES
          </div>

          <div className="relative">
            {/* Horizontal Red Track Line */}
            <div className="hidden sm:block absolute top-[9px] left-6 right-6 h-[1.5px] bg-[#E33529]/60" />

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 relative z-10">
              {impactData.map((item, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={item.num}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'ring-2 ring-[#E33529] bg-[#F6F6ED] scale-110'
                          : 'bg-transparent'
                      }`}
                    >
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isActive
                            ? 'bg-[#E33529]'
                            : 'bg-[#E33529]/50 group-hover:bg-[#E33529]'
                        }`}
                      />
                    </span>

                    <span
                      className={`mt-2.5 font-mono text-[11px] font-bold transition-colors ${
                        isActive ? 'text-[#E33529]' : 'text-[#E33529]/65'
                      }`}
                    >
                      {item.num}
                    </span>
                    <span
                      className={`font-sans font-bold text-[11px] uppercase tracking-wider transition-colors ${
                        isActive ? 'text-[#E33529]' : 'text-[#E33529]/65 group-hover:text-[#E33529]'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Oversized Editorial Metric & Headline Spotlight */}
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 sm:gap-8 impact-reveal">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous verified metric"
            className="shrink-0 w-11 h-11 rounded-full bg-[#F3F3E9] border border-[#E33529]/30 text-[#E33529] flex items-center justify-center hover:bg-[#E33529] hover:text-[#F3F3E9] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div key={activeStat.num} className="text-center space-y-4 animate-in fade-in duration-300">
            <div className="display-hero text-[clamp(3.6rem,8vw,6.8rem)] text-[#E33529]">
              {activeStat.metric}
            </div>

            <p className="display-section text-[clamp(1.6rem,3.3vw,3.1rem)] text-[#E33529] leading-[0.95] max-w-3xl mx-auto">
              &ldquo;{activeStat.headline}&rdquo;
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="font-mono text-xs font-semibold text-[#693413] bg-[#F3F3E9] px-4 py-1.5 rounded-full border border-[#693413]/15">
                {activeStat.detail}
              </span>

              <Link
                to={`/work/${activeStat.projectSlug}`}
                className="inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wider text-[#E33529] hover:underline"
              >
                <span>Inspect Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next verified metric"
            className="shrink-0 w-11 h-11 rounded-full bg-[#F3F3E9] border border-[#E33529]/30 text-[#E33529] flex items-center justify-center hover:bg-[#E33529] hover:text-[#F3F3E9] transition-colors cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
