import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Maximize2,
  X,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const projectIndex = projectsData.findIndex((p) => p.slug === slug || p.id === slug);
  const project = projectIndex >= 0 ? projectsData[projectIndex] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setLightboxImg(null);
  }, [slug]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!project) {
    return (
      <main className="min-h-[75vh] bg-[#F3F3E9] pt-36 pb-24 px-4 text-center flex flex-col items-center justify-center">
        <h1 className="display-hero text-6xl sm:text-8xl text-[#E33529] mb-4">
          CASE STUDY NOT FOUND
        </h1>
        <p className="font-sans text-base text-[#1E1B18]/75 mb-8 max-w-md">
          The project you&apos;re looking for isn&apos;t in the archive. Let&apos;s head back to Selected Work.
        </p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="dbm-pill bg-[#E33529] text-[#F3F3E9] px-8 py-3 text-xl cursor-pointer"
        >
          Back To Portfolio
        </button>
      </main>
    );
  }

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];
  const { theme } = project;

  return (
    <main className="bg-[#F3F3E9] min-h-screen pt-24 sm:pt-28">
      {/* Editorial Hero Header on Project's Signature Pastel Canvas */}
      <section
        style={{ backgroundColor: theme.bg }}
        className="pt-8 pb-16 sm:pb-24 rounded-b-[48px] sm:rounded-b-[72px] border-b-2 border-[#1E1B18]/10"
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
          {/* Back Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6F6ED] border border-[#1E1B18]/15 font-sans font-bold text-xs uppercase tracking-wider text-[#1E1B18] hover:scale-95 transition-transform"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Projects</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <span
                style={{ backgroundColor: theme.surface, color: theme.accent }}
                className="px-3.5 py-1.5 rounded-full font-mono text-xs font-bold border border-[#1E1B18]/10"
              >
                {project.index} · {project.status}
              </span>
              <span
                style={{ backgroundColor: theme.surface, color: theme.text }}
                className="px-3.5 py-1.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider border border-[#1E1B18]/10"
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Giant Editorial Headline & Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1
                style={{ color: theme.accent }}
                className="display-hero text-[clamp(3.2rem,8.4vw,7.8rem)]"
              >
                {project.title}
              </h1>
              <p
                style={{ color: theme.text }}
                className="font-sans font-bold text-lg sm:text-2xl leading-snug max-w-2xl"
              >
                {project.subtitle}
              </p>
            </div>

            <div className="lg:col-span-4 space-y-3 bg-[#F6F6ED] p-5 rounded-3xl border border-[#1E1B18]/12">
              <div className="flex justify-between text-xs font-sans border-b border-[#1E1B18]/10 pb-2">
                <span className="font-bold uppercase opacity-60">Role</span>
                <span className="font-bold text-[#1E1B18]">{project.role}</span>
              </div>
              <div className="flex justify-between text-xs font-sans border-b border-[#1E1B18]/10 pb-2">
                <span className="font-bold uppercase opacity-60">Year</span>
                <span className="font-mono font-bold text-[#1E1B18]">{project.year}</span>
              </div>
              <div className="text-xs font-mono font-bold text-[#E33529] pt-1">
                {project.highlightMetric}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: theme.accent }}
                className="dbm-pill text-[#F6F6ED] px-7 py-3 text-xl"
              >
                <span>Visit Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dbm-pill bg-[#F6F6ED] text-[#1E1B18] border border-[#1E1B18]/20 px-7 py-3 text-xl"
              >
                <Github className="w-4 h-4" />
                <span>{project.id === 'soshals-crm' ? 'GitHub Profile' : 'View Repository'}</span>
              </a>
            )}
          </div>

          {/* Hero Cover Visual */}
          <button
            type="button"
            onClick={() => setLightboxImg(project.heroImage)}
            className="group relative block w-full rounded-[28px] sm:rounded-[36px] overflow-hidden border-2 border-[#1E1B18]/15 bg-[#F6F6ED] shadow-soft aspect-[16/9] cursor-zoom-in text-left"
          >
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-expressive group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#F6F6ED]/95 border border-[#1E1B18]/15 font-sans font-bold text-xs uppercase tracking-wider text-[#1E1B18] inline-flex items-center gap-2 shadow-sm">
              <Maximize2 className="w-3.5 h-3.5 text-[#E33529]" /> Expand Screenshot
            </span>
          </button>
        </div>
      </section>

      {/* Overview, Problem & Solution */}
      <section className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#E33529] block mb-2">
              01 · Overview
            </span>
            <h2 className="display-section text-4xl sm:text-5xl text-[#E33529]">
              WHY IT WAS BUILT
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="font-sans font-medium text-lg sm:text-xl text-[#1E1B18] leading-relaxed">
              {project.shortDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl bg-[#F4CED3]/55 border-2 border-[#E33529]/20 p-6 sm:p-7 space-y-2.5">
                <div className="font-display text-2xl text-[#E33529]">THE PROBLEM</div>
                <p className="font-sans text-sm sm:text-[15px] text-[#693413] leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-3xl bg-[#AFD8FB]/45 border-2 border-[#2B6786]/20 p-6 sm:p-7 space-y-2.5">
                <div className="font-display text-2xl text-[#2B6786]">THE SOLUTION</div>
                <p className="font-sans text-sm sm:text-[15px] text-[#124E6D] leading-relaxed">
                  {project.solutionSummary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Screenshots Gallery */}
        {project.galleryImages.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-[#1E1B18]/12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#E33529] block mb-1">
                  02 · Visual Gallery
                </span>
                <h2 className="display-section text-4xl sm:text-5xl text-[#1E1B18]">
                  PRODUCT SCREENS &amp; ARTIFACTS
                </h2>
              </div>
              <span className="font-mono text-xs text-[#1E1B18]/65">
                Click any frame to inspect fullscreen
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setLightboxImg(img)}
                  className="group relative rounded-[24px] overflow-hidden border-2 border-[#1E1B18]/12 bg-[#F6F6ED] aspect-[16/10] cursor-zoom-in shadow-sm text-left"
                >
                  <img
                    src={img}
                    alt={`${project.title} screen ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#F6F6ED]/90 font-mono text-[11px] font-bold text-[#1E1B18] border border-[#1E1B18]/10">
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Architecture, Tech Stack & What Was Built */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-[#1E1B18]/12">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#E33529] block mb-1">
                03 · Architecture &amp; Stack
              </span>
              <h2 className="display-section text-4xl sm:text-5xl text-[#1E1B18]">
                HOW IT WAS ENGINEERED
              </h2>
            </div>

            <div className="rounded-3xl bg-[#F6F6ED] border border-[#1E1B18]/12 p-6 space-y-4">
              <div className="font-sans font-bold text-xs uppercase tracking-wider text-[#693413]">
                Core Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-full bg-[#F3F3E9] border border-[#1E1B18]/12 font-sans font-semibold text-xs text-[#1E1B18]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.apiIntegrations && project.apiIntegrations.length > 0 && (
                <div className="pt-4 border-t border-[#1E1B18]/10 space-y-3">
                  <div className="font-sans font-bold text-xs uppercase tracking-wider text-[#2B6786]">
                    Connected APIs &amp; Data Providers
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.apiIntegrations.map((api) => (
                      <span
                        key={api}
                        className="px-3 py-1 rounded-full bg-[#AFD8FB]/45 border border-[#2B6786]/20 font-mono text-[11px] font-semibold text-[#124E6D]"
                      >
                        {api}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {project.architectureSnippet && (
              <div className="rounded-3xl bg-[#1E1B18] text-[#F3F3E9] p-6 space-y-3 overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#FFF500]">
                  <span>{project.architectureSnippet.title}</span>
                  <span className="uppercase">{project.architectureSnippet.language}</span>
                </div>
                <pre className="text-xs font-mono overflow-x-auto leading-relaxed text-[#AFD8FB]">
                  <code>{project.architectureSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="font-sans font-bold text-xs uppercase tracking-wider text-[#693413]">
              Implementation Breakdown
            </div>
            <div className="space-y-3">
              {project.builtDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F6F6ED] border border-[#1E1B18]/10"
                >
                  <span className="font-display text-3xl text-[#E33529] leading-none shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="font-sans text-sm sm:text-[15px] text-[#1E1B18]/90 leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features, Challenges & Verified Results */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#1E1B18]/12">
          <div className="lg:col-span-6 rounded-3xl bg-[#F6F6ED] border border-[#1E1B18]/12 p-6 sm:p-8 space-y-5">
            <h3 className="display-section text-3xl sm:text-4xl text-[#693413]">
              KEY CAPABILITIES
            </h3>
            <ul className="space-y-3">
              {project.keyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3 font-sans text-sm sm:text-[15px] text-[#1E1B18]">
                  <CheckCircle2 className="w-5 h-5 text-[#E33529] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-3xl bg-[#EAD9EC]/75 border border-[#693413]/15 p-6 sm:p-8 space-y-4">
              <h3 className="display-section text-3xl sm:text-4xl text-[#693413]">
                VERIFIED RESULTS
              </h3>
              <ul className="space-y-2.5">
                {project.results.map((res) => (
                  <li key={res} className="flex items-start gap-3 font-sans font-medium text-sm sm:text-[15px] text-[#693413]">
                    <span className="w-2 h-2 rounded-full bg-[#E33529] mt-2 shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-[#F6F6ED] border border-[#1E1B18]/12 p-6 sm:p-8 space-y-3">
              <h3 className="display-section text-2xl sm:text-3xl text-[#2B6786]">
                ENGINEERING CHALLENGES SOLVED
              </h3>
              <ul className="space-y-2">
                {project.challenges.map((c) => (
                  <li key={c} className="font-sans text-xs sm:text-sm text-[#1E1B18]/80 leading-relaxed">
                    • {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Next Project Navigation Card */}
        <div className="pt-8">
          <Link
            to={`/work/${nextProject.slug}`}
            style={{ backgroundColor: nextProject.theme.bg }}
            className="group block rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 border-2 border-[#1E1B18]/12 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <span
                  style={{ color: nextProject.theme.text }}
                  className="font-sans font-bold text-xs uppercase tracking-[0.08em]"
                >
                  Next Case Study · {nextProject.index}
                </span>
                <h3
                  style={{ color: nextProject.theme.accent }}
                  className="display-hero text-[clamp(2.6rem,6vw,5.4rem)]"
                >
                  {nextProject.title}
                </h3>
                <p
                  style={{ color: nextProject.theme.muted }}
                  className="font-sans font-medium text-sm sm:text-base max-w-xl"
                >
                  {nextProject.subtitle}
                </p>
              </div>

              <div
                style={{ backgroundColor: nextProject.theme.accent }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full text-[#F6F6ED] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-12deg]"
              >
                <ArrowRight className="w-7 h-7" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[120] bg-[#1E1B18]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-6xl w-full rounded-3xl overflow-hidden bg-[#F6F6ED] border-2 border-[#F3F3E9]/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg}
              alt="Expanded project preview"
              className="w-full h-auto max-h-[86vh] object-contain"
            />
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#E33529] text-[#F3F3E9] flex items-center justify-center hover:bg-[#B9261C] cursor-pointer shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
