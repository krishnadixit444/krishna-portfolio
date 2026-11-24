import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { BrandEmblem, BrandLogo } from './illustrations/BrandEmblem';

const NAV_ITEMS = [
  { label: 'Home', target: 'top' },
  { label: 'About', target: 'about' },
  { label: 'What I Do', target: 'services' },
  { label: 'Selected Work', target: 'work' },
  { label: 'Process', target: 'process' },
  { label: 'Contact', target: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 140);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    const scrollToEl = () => {
      if (target === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToEl, 120);
    } else {
      scrollToEl();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#F3F3E9]/92 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border-b border-[#E33529]/15 lg:border-b-0'
            : 'bg-transparent'
        } pointer-events-none`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-[68px] flex items-center justify-between">
          {/* Desktop Left: Brand Logo */}
          <div className="hidden lg:flex items-center pointer-events-auto">
            <BrandLogo onClick={() => handleNavClick('top')} />
          </div>

          {/* Mobile Left: MENU Trigger */}
          <div className="flex lg:hidden items-center pointer-events-auto">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="font-sans font-bold text-xs uppercase tracking-[0.06em] text-[#E33529] px-3 py-2 rounded-full bg-[#F3F3E9]/85 backdrop-blur-md"
              aria-label="Open navigation menu"
            >
              MENU
            </button>
          </div>

          {/* Mobile Center: Emblem */}
          <div className="flex lg:hidden items-center pointer-events-auto">
            <button
              type="button"
              onClick={() => handleNavClick('top')}
              aria-label="Krishna Dixit Home"
              className="p-1"
            >
              <BrandEmblem className="w-10 h-7" />
            </button>
          </div>

          {/* Desktop Center: Expandable Signature Navigation */}
          <nav
            aria-label="Primary"
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
            className="hidden lg:flex items-center justify-center pointer-events-auto"
          >
            <div
              className={`relative flex items-center justify-center rounded-full transition-all duration-500 ease-expressive ${
                isScrolled && !navHovered
                  ? 'px-5 py-2.5 bg-[#F3F3E9]/85 backdrop-blur-md border border-[#E33529]/15 shadow-sm'
                  : 'px-6 py-2 bg-[#F3F3E9]/90 backdrop-blur-md border border-[#E33529]/15 shadow-sm'
              }`}
            >
              {isScrolled && !navHovered ? (
                <button
                  type="button"
                  onClick={() => setNavHovered(true)}
                  aria-label="Show navigation links"
                  className="flex flex-col gap-[5px] py-1 px-2 cursor-pointer"
                >
                  <span className="block w-7 h-[2px] bg-[#E33529] rounded-full" />
                  <span className="block w-7 h-[2px] bg-[#E33529] rounded-full" />
                </button>
              ) : (
                <ul className="flex items-center gap-7">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.target}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.target)}
                        className="font-sans font-semibold text-[13px] uppercase tracking-[0.03em] text-[#E33529] hover:text-[#1E1B18] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          {/* Desktop Right: Signature Top-Edge Folder-Tab CTA */}
          <div className="hidden lg:flex items-start self-start pointer-events-auto">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="group bg-[#E33529] hover:bg-[#B9261C] text-[#F3F3E9] px-7 pt-4 pb-3.5 rounded-b-[20px] font-sans font-bold text-[13px] uppercase tracking-[0.05em] shadow-md transition-all duration-300 ease-expressive hover:pt-5 cursor-pointer flex items-center gap-2"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Right: CONTACT Shortcut */}
          <div className="flex lg:hidden items-center pointer-events-auto">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="font-sans font-bold text-xs uppercase tracking-[0.06em] text-[#E33529] px-3 py-2 rounded-full bg-[#F3F3E9]/85 backdrop-blur-md"
            >
              CONTACT
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Editorial Drawer (#F6F6ED) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#F6F6ED] flex flex-col justify-between p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between">
            <BrandLogo onClick={() => handleNavClick('top')} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-[0.06em] text-[#E33529] px-3.5 py-2 rounded-full border border-[#E33529]/30"
            >
              <span>CLOSE</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="my-auto">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item, idx) => (
                <li key={item.target}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.target)}
                    className="group flex items-baseline gap-4 text-left w-full py-1"
                  >
                    <span className="font-mono text-xs font-bold text-[#E33529]/60">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-5xl sm:text-6xl text-[#E33529] group-hover:text-[#1E1B18] transition-colors uppercase leading-[0.88]">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-[#E33529]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans font-semibold text-[#E33529] uppercase">
            <a href="mailto:krishn4dixit@gmail.com" className="hover:underline">
              krishn4dixit@gmail.com
            </a>
            <a
              href="https://github.com/krishnadixit444"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/krishnadixit444 ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
};
