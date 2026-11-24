import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceNodeIcon, ServiceStageIllustration } from './illustrations/ServiceIllustrations';
import { OrbGraphic } from './illustrations/OrbGraphic';
import { observeReveal } from '../utils/scrollReveal';

export const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const activeService = servicesData[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % servicesData.length);
  };

  useEffect(() => {
    return observeReveal(sectionRef.current, '.services-header-anim');
  }, []);

  // Radial positions for the 5 circular nodes around the giant pink ring on desktop
  const nodePositions = [
    { top: '7%', left: '16%' },
    { top: '2%', right: '16%' },
    { top: '44%', right: '-3%' },
    { bottom: '8%', right: '14%' },
    { bottom: '8%', left: '14%' },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#F4CED3] pt-10 sm:pt-16 pb-20 sm:pb-28 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Giant Centered Headline + Floating Sun Orb */}
        <div className="text-center relative mb-10 sm:mb-14 services-header-anim">
          <div className="inline-block relative">
            <h2 className="display-hero text-[clamp(4rem,10.5vw,9.6rem)] text-[#E33529]">
              WHAT I DO
            </h2>
            <div className="hidden sm:block absolute -top-3 -right-8 pointer-events-none">
              <OrbGraphic variant="sun" className="w-11 h-11 shadow-sm" />
            </div>
          </div>

          <div className="mt-3 flex flex-col items-center gap-2">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#E33529]">
              Click Any Ring Node Or Arrow To Switch Disciplines
            </span>
            <ArrowDown className="w-5 h-5 text-[#E33529]" />
          </div>
        </div>

        {/* Giant Nested Pink Circular Wheel (Mirrors Don't Board Me Services Stage) */}
        <div className="relative mx-auto max-w-[1160px] rounded-[48px] sm:rounded-full bg-[#F3C3CB] px-6 py-12 sm:px-12 sm:py-16 lg:py-20 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-4 text-center lg:text-left order-2 lg:order-1 space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="display-section text-5xl sm:text-6xl text-[#E33529]">
                  {activeService.num}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F6F6ED] text-[#693413] font-sans font-bold text-[11px] uppercase tracking-wider">
                  {activeIndex + 1} / {servicesData.length}
                </span>
              </div>

              <h3 className="display-section text-[clamp(2.2rem,3.6vw,3.4rem)] text-[#E33529]">
                {activeService.title}
              </h3>

              <p className="font-sans font-medium text-sm sm:text-base text-[#693413] leading-relaxed">
                {activeService.description}
              </p>

              <ul className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                {activeService.deliverables.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-[#F6F6ED]/90 text-[#693413] font-sans font-semibold text-xs border border-[#693413]/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Circular Stage + Perimeter Interactive Nodes */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative flex items-center justify-center">
              <div className="relative w-[290px] h-[290px] sm:w-[390px] sm:h-[390px] rounded-full bg-[#F6D2D8] flex items-center justify-center p-8 sm:p-11 shadow-card transition-all duration-500">
                <div
                  key={activeService.id}
                  className="w-full h-full animate-in fade-in zoom-in-95 duration-300"
                >
                  <ServiceStageIllustration serviceId={activeService.id} />
                </div>

                {/* Desktop Arc Nodes */}
                {servicesData.map((srv, idx) => {
                  const isActive = idx === activeIndex;
                  const pos = nodePositions[idx];
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      style={pos as React.CSSProperties}
                      title={srv.title}
                      aria-label={`Select service ${srv.num}: ${srv.title}`}
                      className={`hidden sm:flex absolute w-16 h-16 rounded-full items-center justify-center transition-all duration-300 ease-expressive cursor-pointer border-2 ${
                        isActive
                          ? 'bg-[#FFF500] border-[#1E1B18] scale-110 shadow-md'
                          : 'bg-[#EDE2E2] border-[#1E1B18]/15 hover:bg-[#FFF500]/80 hover:scale-105'
                      }`}
                    >
                      <ServiceNodeIcon serviceId={srv.id} active={isActive} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Controls & CTA Column */}
            <div className="lg:col-span-3 order-3 flex flex-col items-center lg:items-end justify-center gap-5">
              <Link
                to={`/work/${activeService.relatedProjectSlug}`}
                className="dbm-pill bg-[#E33529] hover:bg-[#B9261C] text-[#F3F3E9] px-7 py-3 text-xl shadow-sm"
              >
                <span>See Example</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous service"
                  className="w-12 h-12 rounded-full bg-[#F6F6ED] border border-[#E33529]/30 text-[#E33529] flex items-center justify-center hover:bg-[#E33529] hover:text-[#F3F3E9] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next service"
                  className="w-12 h-12 rounded-full bg-[#F6F6ED] border border-[#E33529]/30 text-[#E33529] flex items-center justify-center hover:bg-[#E33529] hover:text-[#F3F3E9] transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Quick Selector Pills */}
              <div className="flex sm:hidden flex-wrap justify-center gap-2 pt-2">
                {servicesData.map((srv, idx) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3 py-1.5 rounded-full font-mono text-xs font-bold border transition-colors ${
                      idx === activeIndex
                        ? 'bg-[#FFF500] text-[#1E1B18] border-[#1E1B18]'
                        : 'bg-[#F6F6ED] text-[#693413] border-[#693413]/20'
                    }`}
                  >
                    {srv.num} · {srv.shortTitle}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
