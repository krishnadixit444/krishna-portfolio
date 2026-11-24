import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, ArrowUpRight, Github, Mail, Sparkles } from 'lucide-react';
import { HeroCharacterIllustration } from './illustrations/HeroCharacterIllustration';

export const HeroSection: React.FC = () => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-stagger', {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power3.out',
        clearProps: 'transform',
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative bg-[#F3F3E9] pt-24 sm:pt-28 pb-10 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        {/* DESKTOP EDITORIAL POSTER COMPOSITION (Matches Don't Board Me Hero Framing) */}
        <div className="hidden lg:block relative min-h-[650px]">
          {/* Centered Character Illustration */}
          <div className="relative z-10 flex justify-center pt-6 hero-stagger">
            <HeroCharacterIllustration />
          </div>

          {/* Left Oversized Headline Block */}
          <div className="absolute top-6 left-0 z-20 max-w-[32%] pointer-events-none hero-stagger">
            <h1 className="display-hero text-[clamp(3.8rem,5.4vw,5.6rem)] text-[#E33529]">
              BUILDING
              <br />
              DIGITAL
              <br />
              THINGS THAT
            </h1>
          </div>

          {/* Right Oversized Headline Block + Micro Intro */}
          <div className="absolute top-20 right-0 z-20 text-right max-w-[32%] hero-stagger">
            <p className="font-sans font-semibold text-xs uppercase tracking-[0.04em] text-[#E33529] leading-snug mb-3 ml-auto max-w-[260px]">
              KRISHNA DIXIT
              <br />
              DEVELOPER · AUTOMATION BUILDER · DIGITAL PRODUCT CREATOR
            </p>
            <div className="display-hero text-[clamp(3.8rem,5.4vw,5.6rem)] text-[#E33529]">
              MAKE
              <br />
              BUSINESSES
              <br />
              MOVE.
            </div>
          </div>

          {/* Bottom-Left: Circular Action Icons + Intro Copy + CTA */}
          <div className="absolute bottom-4 left-0 z-20 max-w-[320px] space-y-5 hero-stagger">
            <p className="font-sans font-medium text-sm sm:text-[15px] text-[#1E1B18]/85 leading-relaxed">
              I build high-converting websites, business systems, automation workflows, CRMs, and data-driven digital products.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo('work')}
                className="dbm-pill bg-[#E33529] hover:bg-[#B9261C] text-[#F3F3E9] px-7 py-3 text-xl tracking-wide cursor-pointer shadow-sm"
              >
                <span>Explore Work</span>
                <span className="w-2 h-2 rounded-full bg-[#FFF500]" />
              </button>

              <a
                href="https://github.com/krishnadixit444"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-full bg-[#E33529] text-[#F3F3E9] flex items-center justify-center hover:scale-95 hover:bg-[#B9261C] transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="mailto:krishn4dixit@gmail.com"
                aria-label="Email Krishna Dixit"
                className="w-11 h-11 rounded-full bg-[#E33529] text-[#F3F3E9] flex items-center justify-center hover:scale-95 hover:bg-[#B9261C] transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom-Right: Playful Scroll Cue */}
          <div className="absolute bottom-6 right-0 z-20 flex flex-col items-end gap-2 hero-stagger">
            <button
              type="button"
              onClick={() => scrollTo('about')}
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border-2 border-[#E33529]/30 bg-[#F6F6ED] text-[#E33529] font-sans font-bold text-xs uppercase tracking-wider hover:border-[#E33529] transition-colors cursor-pointer"
            >
              <span>Scroll To Explore</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>

        {/* MOBILE / TABLET COMPOSITION (Intentionally Stacked, Never Squished) */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-6 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6F6ED] border border-[#E33529]/25 text-[#E33529] font-sans font-bold text-[11px] uppercase tracking-[0.06em] hero-stagger">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Krishna Dixit · Builder &amp; Product Creator</span>
          </div>

          <h1 className="display-hero text-[clamp(3.3rem,14vw,5.4rem)] text-[#E33529] hero-stagger">
            BUILDING DIGITAL THINGS THAT MAKE BUSINESSES MOVE.
          </h1>

          <div className="w-full max-w-[380px] sm:max-w-[460px] hero-stagger">
            <HeroCharacterIllustration />
          </div>

          <p className="font-sans font-medium text-sm sm:text-base text-[#1E1B18]/85 max-w-md leading-relaxed hero-stagger">
            I build websites, business systems, automation workflows, CRMs, and data-driven digital products.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 hero-stagger">
            <button
              type="button"
              onClick={() => scrollTo('work')}
              className="dbm-pill bg-[#E33529] text-[#F3F3E9] px-7 py-3 text-xl cursor-pointer"
            >
              <span>Explore Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="https://github.com/krishnadixit444"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full bg-[#E33529] text-[#F3F3E9] flex items-center justify-center"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="mailto:krishn4dixit@gmail.com"
              aria-label="Email"
              className="w-11 h-11 rounded-full bg-[#E33529] text-[#F3F3E9] flex items-center justify-center"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
