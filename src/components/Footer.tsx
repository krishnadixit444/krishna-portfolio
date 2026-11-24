import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { BrandLogo } from './illustrations/BrandEmblem';
import { FooterSceneIllustration } from './illustrations/OrbGraphic';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const tick = () => {
      setIstTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
        }) + ' IST'
      );
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  const jumpTo = (target: string) => {
    const go = () => {
      if (target === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(go, 120);
    } else {
      go();
    }
  };

  const isHome = location.pathname === '/';

  return (
    <footer className="relative bg-[#F3F3E9] text-[#E33529] overflow-hidden">
      {/* Curved Top Transition from Sail (#AFD8FB on Homepage) */}
      <div className={isHome ? 'bg-[#AFD8FB]' : 'bg-[#F3F3E9]'}>
        <div className="bg-[#F3F3E9] rounded-t-[48px] sm:rounded-t-[84px] pt-16 sm:pt-24 pb-12 px-4 sm:px-8 text-center border-t border-[#E33529]/15">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#E33529]">
              Business Strategy Meets Software Execution
            </p>
            <h2 className="display-hero text-[clamp(2.8rem,7.2vw,6.8rem)] text-[#E33529]">
              BUILT TO MOVE REAL IDEAS FORWARD.
            </h2>

            <div className="pt-2">
              <FooterSceneIllustration />
            </div>

            <a
              href="https://github.com/krishnadixit444"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-line inline-block font-display text-3xl sm:text-4xl text-[#E33529]"
            >
              @KRISHNADIXIT444
            </a>
          </div>
        </div>
      </div>

      {/* Crisp Red-Ruled Editorial Footer (Matches Don't Board Me Footer) */}
      <div className="border-t border-[#E33529]/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Brand & Location */}
            <div className="md:col-span-5 space-y-5">
              <BrandLogo onClick={() => jumpTo('top')} />
              <div className="font-sans font-semibold text-xs uppercase tracking-[0.04em] leading-relaxed">
                INDORE, MADHYA PRADESH, INDIA
                <br />
                IIPS, DEVI AHILYA VISHWAVIDYALAYA
              </div>
              <div>
                <a
                  href="mailto:krishn4dixit@gmail.com"
                  className="hover-line font-sans font-bold text-xs uppercase tracking-[0.04em]"
                >
                  KRISHN4DIXIT@GMAIL.COM
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-3 space-y-2">
              <div className="font-sans font-bold text-[11px] uppercase tracking-[0.08em] opacity-60 mb-3">
                Navigation
              </div>
              <ul className="space-y-1.5 font-sans font-semibold text-xs uppercase tracking-[0.04em]">
                {[
                  { label: 'Home', target: 'top' },
                  { label: 'About', target: 'about' },
                  { label: 'What I Do', target: 'services' },
                  { label: 'Selected Work', target: 'work' },
                  { label: 'Process', target: 'process' },
                  { label: 'Contact', target: 'contact' },
                ].map((link) => (
                  <li key={link.target}>
                    <button
                      type="button"
                      onClick={() => jumpTo(link.target)}
                      className="hover:underline cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* External & Action Column */}
            <div className="md:col-span-4 flex flex-col justify-between gap-6">
              <div className="space-y-2">
                <div className="font-sans font-bold text-[11px] uppercase tracking-[0.08em] opacity-60 mb-3">
                  Profiles &amp; Live Links
                </div>
                <ul className="space-y-1.5 font-sans font-semibold text-xs uppercase tracking-[0.04em]">
                  <li>
                    <a
                      href="https://github.com/krishnadixit444"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub ↗
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sanctuary-campus-living.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Sanctuary Living ↗
                    </a>
                  </li>
                  <li>
                    <a href="mailto:krishn4dixit@gmail.com" className="hover:underline">
                      Email Krishna
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => jumpTo('top')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E33529] font-sans font-bold text-xs uppercase tracking-wider hover:bg-[#E33529] hover:text-[#F3F3E9] transition-colors cursor-pointer"
                >
                  <span>Back To Top</span>
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div className="border-t border-[#E33529]/50">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans font-semibold text-[11px] uppercase tracking-[0.04em]">
            <span>© {new Date().getFullYear()} KRISHNA DIXIT. ALL RIGHTS RESERVED.</span>
            <span className="font-mono">{istTime || 'INDORE · IST'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
