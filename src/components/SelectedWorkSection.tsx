import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectCategory } from '../types';
import { observeReveal } from '../utils/scrollReveal';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'CRM & Digital Products',
  'AI & Autonomous Scrapers',
  'Web Applications',
  'Browser Tools & Systems',
];

export const SelectedWorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const sectionRef = useRef<HTMLElement>(null);

  const visibleProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    return observeReveal(sectionRef.current, '.work-story-card', { stagger: 0.08 });
  }, [selectedCategory]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-[#F3F3E9] py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b-2 border-[#E33529]/20 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-[0.08em] text-[#E33529] mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E33529]" />
              Selected Work · {projectsData.length} Verified Systems
            </span>
            <h2 className="display-hero text-[clamp(3.6rem,8.8vw,8.2rem)] text-[#E33529]">
              SELECTED WORK
            </h2>
          </div>

          <p className="font-sans font-medium text-sm sm:text-base text-[#1E1B18]/80 max-w-md leading-relaxed">
            Production CRMs, autonomous GraphQL scrapers, WebGL web platforms, and operational architectures. Open any project for its full editorial case study.
          </p>
        </div>

        {/* Playful Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            const count =
              category === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-sans font-bold text-xs uppercase tracking-[0.04em] whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border-2 ${
                  active
                    ? 'bg-[#E33529] text-[#F3F3E9] border-[#E33529] scale-[0.98]'
                    : 'bg-[#F6F6ED] text-[#1E1B18] border-[#1E1B18]/12 hover:border-[#E33529] hover:text-[#E33529]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    active ? 'bg-[#FFF500] text-[#1E1B18]' : 'bg-[#F3F3E9] text-[#1E1B18]/70'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Alternating Full-Width Editorial Project Stories */}
        <div className="space-y-10 sm:space-y-14">
          {visibleProjects.map((project, idx) => {
            const imageRight = idx % 2 === 0;
            const { theme } = project;

            return (
              <article
                key={project.id}
                style={{ backgroundColor: theme.bg }}
                className="work-story-card group relative rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 border-2 border-[#1E1B18]/10 shadow-soft overflow-hidden transition-transform duration-500 ease-expressive hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      imageRight ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span
                        style={{ backgroundColor: theme.surface, color: theme.accent }}
                        className="px-3.5 py-1 rounded-full font-mono text-xs font-bold border border-[#1E1B18]/10"
                      >
                        {project.index} · {project.status}
                      </span>
                      <span
                        style={{ color: theme.text }}
                        className="font-sans font-bold text-xs uppercase tracking-[0.06em] opacity-80"
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      style={{ color: theme.accent }}
                      className="display-section text-[clamp(2.6rem,4.6vw,4.6rem)]"
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{ color: theme.text }}
                      className="font-sans font-bold text-sm sm:text-base leading-snug"
                    >
                      {project.subtitle}
                    </p>

                    <p
                      style={{ color: theme.muted }}
                      className="font-sans text-sm sm:text-[15px] leading-relaxed"
                    >
                      {project.shortDesc}
                    </p>

                    {/* Verified Highlight Metric */}
                    <div
                      style={{ backgroundColor: theme.surface, color: theme.text }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-[#1E1B18]/10 font-mono text-xs font-bold"
                    >
                      <span
                        style={{ backgroundColor: theme.accent }}
                        className="w-2 h-2 rounded-full shrink-0"
                      />
                      <span>{project.highlightMetric}</span>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          style={{ backgroundColor: theme.surface, color: theme.text }}
                          className="px-3 py-1 rounded-full font-sans font-semibold text-[11px] border border-[#1E1B18]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        to={`/work/${project.slug}`}
                        style={{ backgroundColor: theme.accent }}
                        className="dbm-pill text-[#F6F6ED] px-7 py-3 text-xl shadow-sm"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ backgroundColor: theme.surface, color: theme.text }}
                          className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full font-sans font-bold text-xs uppercase tracking-wider border border-[#1E1B18]/15 hover:scale-95 transition-transform"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Large Visual / Screenshot Column */}
                  <div
                    className={`lg:col-span-7 ${
                      imageRight ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <Link
                      to={`/work/${project.slug}`}
                      className="block relative rounded-[24px] overflow-hidden border-2 border-[#1E1B18]/15 bg-[#F6F6ED] shadow-card aspect-[16/10]"
                    >
                      <img
                        src={project.heroImage}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-expressive group-hover:scale-[1.03]"
                      />
                      <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-[#F6F6ED]/95 backdrop-blur-sm border border-[#1E1B18]/15 font-sans font-bold text-xs uppercase tracking-wider text-[#1E1B18] flex items-center gap-1.5 shadow-sm">
                        <span>Open Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#E33529]" />
                      </div>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
