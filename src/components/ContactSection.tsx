import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Check, Copy, Github, Mail, Send } from 'lucide-react';
import { OrbGraphic } from './illustrations/OrbGraphic';
import { observeReveal } from '../utils/scrollReveal';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    scope: 'Website & Interactive Experience',
    message: '',
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return observeReveal(sectionRef.current, '.contact-reveal', { stagger: 0.1 });
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('krishn4dixit@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    const mailtoUrl = `mailto:krishn4dixit@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formState.scope} — ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nProject Area: ${formState.scope}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const engagements = [
    {
      badge: null,
      title: 'WEBSITES & LANDING PAGES',
      focus: 'CUSTOM WEB',
      desc: 'Expressive sites, interactive product launches & editorial web apps.',
      action: () => setFormState((s) => ({ ...s, scope: 'Website & Interactive Experience' })),
    },
    {
      badge: null,
      title: 'AI & AUTOMATION WORKFLOWS',
      focus: 'SYSTEMS',
      desc: 'Scrapers, API pipelines, lead-gen rosters & automated sync engines.',
      action: () => setFormState((s) => ({ ...s, scope: 'AI & Business Automation Pipeline' })),
    },
    {
      badge: 'FLAGSHIP',
      title: 'CRMS & DIGITAL PRODUCTS',
      focus: 'FULL-STACK',
      desc: 'Next.js + Supabase platforms, client portals & internal tools.',
      action: () => setFormState((s) => ({ ...s, scope: 'CRM & Full-Stack Digital Product' })),
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#AFD8FB] pt-12 sm:pt-16 pb-24 sm:pb-32 overflow-hidden"
    >
      {/* Floating Playful Sun Yellow Orbs (Echoing Book Consultation Balls) */}
      <div aria-hidden="true" className="hidden md:block pointer-events-none absolute top-14 left-[8%]">
        <OrbGraphic variant="sun" className="w-16 h-16" />
      </div>
      <div aria-hidden="true" className="hidden md:block pointer-events-none absolute top-44 right-[10%]">
        <OrbGraphic variant="sun" className="w-20 h-20" />
      </div>
      <div aria-hidden="true" className="hidden lg:block pointer-events-none absolute top-72 left-[18%]">
        <OrbGraphic variant="sun" className="w-12 h-12" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Centered Giant Deep Cerulean Headline */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 contact-reveal">
          <h2 className="display-hero text-[clamp(3.6rem,9vw,8.4rem)] text-[#2B6786]">
            GOT SOMETHING INTERESTING IN MIND?
          </h2>

          <div className="mt-4 flex flex-col items-center gap-4">
            <a
              href="mailto:krishn4dixit@gmail.com"
              className="hover-line font-display text-[clamp(1.8rem,3.6vw,3.4rem)] text-[#2B6786] tracking-tight"
            >
              KRISHN4DIXIT@GMAIL.COM
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="dbm-pill bg-[#2B6786] hover:bg-[#124E6D] text-[#F6F6ED] px-6 py-2.5 text-lg cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
              </button>

              <a
                href="https://github.com/krishnadixit444"
                target="_blank"
                rel="noopener noreferrer"
                className="dbm-pill bg-[#F6F6ED] text-[#2B6786] border-2 border-[#2B6786]/25 px-6 py-2.5 text-lg"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

            <ArrowDown className="w-5 h-5 text-[#2B6786] mt-2" />
          </div>
        </div>

        {/* 4-Column Collaboration Cards Grid (Mirrors Don't Board Me Cost Grid!) */}
        <div className="mb-14 sm:mb-20 contact-reveal">
          <h3 className="display-section text-[clamp(2.4rem,4.6vw,4.4rem)] text-[#2B6786] text-center mb-8">
            LET&apos;S BUILD IT TOGETHER
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((card) => (
              <div
                key={card.title}
                className="relative flex flex-col justify-between bg-[#F6F6ED] rounded-[12px] p-6 sm:p-7 min-h-[310px] border border-[#2B6786]/15 shadow-sm"
              >
                {card.badge && (
                  <span className="absolute -top-3 right-4 px-3 py-1 rounded-md bg-[#2B6786] text-[#F6F6ED] font-sans font-bold text-[10px] uppercase tracking-wider">
                    {card.badge}
                  </span>
                )}

                <div className="text-center font-sans font-bold text-xs uppercase tracking-[0.04em] text-[#2B6786]">
                  {card.title}
                </div>

                <div className="text-center my-6">
                  <div className="display-section text-5xl sm:text-6xl text-[#2B6786]">
                    {card.focus}
                  </div>
                  <p className="font-sans font-medium text-xs text-[#2B6786]/80 mt-3 max-w-[220px] mx-auto leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <a
                  href="#project-brief-form"
                  onClick={card.action}
                  className="dbm-pill w-full bg-[#2B6786] hover:bg-[#124E6D] text-[#F6F6ED] py-2.5 text-lg"
                >
                  <span>Select Scope</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6F6ED]" />
                </a>
              </div>
            ))}

            {/* 4th Solid Deep Cerulean Card with Rotating Arrow */}
            <Link
              to="/work/soshals-crm"
              className="group relative flex flex-col justify-between bg-[#2B6786] hover:bg-[#124E6D] rounded-[12px] p-7 min-h-[310px] text-[#F6F6ED] transition-colors shadow-sm"
            >
              <div className="text-center font-sans font-bold text-xs uppercase tracking-[0.06em]">
                FLAGSHIP CASE STUDY
              </div>

              <div className="my-auto flex flex-col items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-[#5B93B0]/50 flex items-center justify-center transition-transform duration-500 ease-expressive group-hover:-rotate-45 group-hover:scale-105">
                  <ArrowRight className="w-7 h-7 text-[#F6F6ED]" />
                </div>
                <span className="display-section text-2xl tracking-wide text-center">
                  SOSHALS CREATOR CRM
                </span>
              </div>

              <div className="text-center font-mono text-[11px] opacity-80">
                10,650+ Steps · Live System
              </div>
            </Link>
          </div>
        </div>

        {/* Clean Interactive Project Brief Form */}
        <div
          id="project-brief-form"
          className="max-w-3xl mx-auto rounded-[28px] bg-[#F6F6ED] border-2 border-[#2B6786]/20 p-6 sm:p-10 shadow-soft contact-reveal"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 mb-6 border-b border-[#2B6786]/15">
            <div>
              <h3 className="display-section text-3xl sm:text-4xl text-[#2B6786]">
                SEND A DIRECT BRIEF
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#2B6786]/80 mt-1">
                Opens your email client pre-addressed to krishn4dixit@gmail.com.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AFD8FB]/50 text-[#124E6D] font-mono text-[11px] font-bold self-start sm:self-auto">
              <Mail className="w-3.5 h-3.5" /> Indore · IST (GMT+5:30)
            </span>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#2B6786] text-[#F6F6ED] flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="display-section text-3xl text-[#2B6786]">
                EMAIL DRAFT PREPARED!
              </h4>
              <p className="font-sans text-sm text-[#2B6786]/80 max-w-md mx-auto">
                Your inquiry has been formatted for <strong>krishn4dixit@gmail.com</strong>. Looking forward to connecting.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="dbm-pill bg-[#2B6786] text-[#F6F6ED] px-6 py-2.5 text-lg cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans font-bold text-xs uppercase tracking-wider text-[#2B6786] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Rohan Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#F3F3E9] border border-[#2B6786]/25 text-sm font-sans text-[#1E1B18] focus:outline-none focus:border-[#2B6786]"
                  />
                </div>
                <div>
                  <label className="block font-sans font-bold text-xs uppercase tracking-wider text-[#2B6786] mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F3F3E9] border border-[#2B6786]/25 text-sm font-sans text-[#1E1B18] focus:outline-none focus:border-[#2B6786]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans font-bold text-xs uppercase tracking-wider text-[#2B6786] mb-1.5">
                  What Are We Building?
                </label>
                <select
                  value={formState.scope}
                  onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F3F3E9] border border-[#2B6786]/25 text-sm font-sans text-[#1E1B18] focus:outline-none focus:border-[#2B6786] cursor-pointer"
                >
                  <option value="Website & Interactive Experience">Website &amp; Interactive Experience</option>
                  <option value="AI & Business Automation Pipeline">AI &amp; Business Automation Pipeline</option>
                  <option value="CRM & Full-Stack Digital Product">CRM &amp; Full-Stack Digital Product</option>
                  <option value="Data Scraping & Lead Generation System">Data Scraping &amp; Lead Generation System</option>
                  <option value="Product / Founder's Office Collaboration">Product / Founder&apos;s Office Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block font-sans font-bold text-xs uppercase tracking-wider text-[#2B6786] mb-1.5">
                  Project Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me what you're building, the problem to solve, and your ideal timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F3F3E9] border border-[#2B6786]/25 text-sm font-sans text-[#1E1B18] focus:outline-none focus:border-[#2B6786] resize-none"
                />
              </div>

              <button
                type="submit"
                className="dbm-pill w-full bg-[#2B6786] hover:bg-[#124E6D] text-[#F6F6ED] py-3.5 text-xl cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
