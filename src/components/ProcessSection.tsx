import React, { useState, useEffect, useRef } from 'react';
import { processData } from '../data/processData';
import { ProcessCardIllustration } from './illustrations/ProcessIllustrations';
import { observeReveal } from '../utils/scrollReveal';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeReveal(sectionRef.current, '.process-card-reveal', { stagger: 0.1, y: 40 });
  }, []);

  const nodeCoords = [
    { top: '64%', left: '6%' },
    { top: '14%', left: '16%' },
    { top: '14%', right: '16%' },
    { top: '64%', right: '6%' },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#F4CED3] pt-20 sm:pt-28 pb-24 sm:pb-32 overflow-hidden"
    >
      {/* Top Circular Stage ("HOW I WORK?") */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        <div className="relative mx-auto max-w-[1160px] rounded-[48px] sm:rounded-full bg-[#F3C3CB] px-6 py-16 sm:py-24 text-center mb-14 sm:mb-20">
          {/* Interactive Perimeter Nodes 1..4 */}
          {processData.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                style={nodeCoords[idx] as React.CSSProperties}
                aria-label={`Highlight step ${idx + 1}: ${step.title}`}
                className={`hidden md:flex absolute w-10 h-10 rounded-full items-center justify-center font-sans font-bold text-sm transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#FFF500] text-[#1E1B18] border-[#1E1B18] scale-125 shadow-md'
                    : 'bg-[#EDE2E2] text-[#E33529] border-[#E33529]/20 hover:bg-[#FFF500]'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}

          <span className="font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#E33529] block mb-3">
            4-Stage Execution Journey
          </span>

          <h2 className="display-hero text-[clamp(3.6rem,9vw,8rem)] text-[#E33529] mb-6">
            HOW I WORK?
          </h2>

          <p className="font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.04em] text-[#E33529] max-w-md mx-auto leading-relaxed">
            {processData[activeStep].num} {processData[activeStep].title} — {processData[activeStep].summary}
          </p>

          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={scrollToContact}
              className="dbm-pill bg-[#E33529] hover:bg-[#B9261C] text-[#F3F3E9] px-7 py-3 text-xl cursor-pointer shadow-sm"
            >
              <span>Start A Project</span>
              <span className="w-2 h-2 rounded-full bg-[#F3F3E9]" />
            </button>
          </div>
        </div>

        {/* 4 Overlapping Tabbed Process Cards (Mirrors Don't Board Me Folder Cards!) */}
        <div className="process-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-stretch">
          {processData.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                className={`process-card-reveal relative flex flex-col justify-between bg-[#F3F3F3] rounded-[8px] shadow-card border border-[#693413]/10 transition-all duration-500 ease-expressive cursor-pointer ${
                  idx > 0 ? 'lg:-ml-4' : ''
                } ${
                  isActive
                    ? 'lg:-translate-y-4 z-20 ring-2 ring-[#E33529]'
                    : 'hover:-translate-y-2 z-10'
                }`}
              >
                {/* Signature Folder Tab on Card 01 */}
                {idx === 0 && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#F3F3F3] px-4 py-1 rounded-t-[6px] border-t border-x border-[#693413]/10 font-sans font-bold text-[10px] uppercase tracking-[0.08em] text-[#693413]">
                    PROCESS
                  </div>
                )}

                {/* Top Editorial Copy Block */}
                <div className="p-6 sm:p-7 text-center space-y-3">
                  <h3 className="display-card text-[clamp(2.2rem,3vw,3rem)] text-[#693413]">
                    {step.title}
                  </h3>

                  <div className="display-card text-4xl sm:text-5xl text-[#693413]">
                    {step.num}
                  </div>

                  <p className="font-sans font-semibold text-[11px] sm:text-xs uppercase tracking-[0.03em] text-[#854720] leading-relaxed min-h-[54px]">
                    {step.detail}
                  </p>
                </div>

                {/* Bottom Lilac Illustration Panel */}
                <div
                  style={{ backgroundColor: step.panelBg }}
                  className="mx-2 mb-2 rounded-[6px] h-[200px] sm:h-[220px] p-4 flex items-center justify-center overflow-hidden"
                >
                  <ProcessCardIllustration stepNum={step.num} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
