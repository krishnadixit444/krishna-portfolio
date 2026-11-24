import React, { useEffect, useRef } from 'react';
import { OrbGraphic } from './illustrations/OrbGraphic';
import { observeReveal } from '../utils/scrollReveal';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeReveal(sectionRef.current, '.about-reveal', { stagger: 0.12 });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#F3F3E9] pt-12 pb-28 sm:pb-36 overflow-hidden"
    >
      {/* Organic Pink & Cream Bridge Spheres leading into Services (#F4CED3) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 left-1/2 -translate-x-1/2 w-[150vw] sm:w-[125vw] h-[340px] sm:h-[420px] rounded-[100%] bg-[#F4CED3]"
      />
      <div aria-hidden="true" className="hidden md:block pointer-events-none absolute right-[12%] bottom-10 z-10">
        <div className="w-56 h-56 rounded-full bg-[#F0B5BE] opacity-90" />
      </div>
      <div aria-hidden="true" className="hidden lg:block pointer-events-none absolute right-[24%] -bottom-8 z-10">
        <OrbGraphic variant="cream" className="w-44 h-44" />
      </div>

      <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left-Weighted Conversational Statement (Mirrors Don't Board Me Intro) */}
          <div className="lg:col-span-7 space-y-6 about-reveal">
            <span className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#E33529]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E33529]" />
              About Me · Business Mind &times; Builder Execution
            </span>

            <h2 className="display-section text-[clamp(2.8rem,5.4vw,5.2rem)] text-[#E33529]">
              I DON&apos;T JUST BUILD WEBSITES. I BUILD SYSTEMS THAT SOLVE REAL BUSINESS PROBLEMS.
            </h2>

            <p className="font-sans font-medium text-base sm:text-xl text-[#1E1B18]/85 leading-relaxed max-w-2xl">
              Most business minds don&apos;t know how to ship software. Most developers don&apos;t think about how businesses actually make money. I work right in the middle — turning operational bottlenecks into clean websites, custom CRMs, and automated workflows.
            </p>
          </div>

          {/* Right: Compact Playful Studio Facts + 3 Principles */}
          <div className="lg:col-span-5 space-y-5 about-reveal">
            <div className="rounded-3xl bg-[#F6F6ED] border-2 border-[#1E1B18]/10 p-6 sm:p-7 shadow-soft space-y-5">
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#1E1B18]/10">
                <div>
                  <div className="font-display text-2xl text-[#E33529] leading-none">
                    KRISHNA DIXIT
                  </div>
                  <div className="font-sans font-semibold text-xs text-[#693413] mt-1">
                    MBA (Management Science) · IIPS DAVV, Indore
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FFF500] border border-[#1E1B18]/15 font-mono text-[11px] font-bold text-[#1E1B18]">
                  IM-2K26-58
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                {[
                  {
                    num: '01',
                    title: 'Decoupled Architecture',
                    desc: 'Modular pipelines and clean relational schemas that scale without cascading failures.',
                  },
                  {
                    num: '02',
                    title: 'Zero-Friction UX',
                    desc: 'From passwordless client portals to playful web storytelling people enjoy using.',
                  },
                  {
                    num: '03',
                    title: 'Real Data, Real Output',
                    desc: 'Production CRMs, live Vercel deployments, and autonomous GraphQL crawlers—zero fluff.',
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.num}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F3F3E9] border border-[#1E1B18]/8"
                  >
                    <span className="font-display text-xl text-[#E33529] leading-none pt-0.5">
                      {pillar.num}
                    </span>
                    <div>
                      <div className="font-sans font-bold text-sm text-[#1E1B18]">
                        {pillar.title}
                      </div>
                      <p className="font-sans text-xs text-[#1E1B18]/75 mt-0.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
