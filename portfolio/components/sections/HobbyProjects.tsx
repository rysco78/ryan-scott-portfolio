'use client';

import { useState, useEffect } from 'react';
import { X, Github, ExternalLink, BookOpen } from 'lucide-react';
import { SectionFade } from '@/components/ui/SectionFade';
import { Tag } from '@/components/ui/Tag';
import { hobbyProjects } from '@/lib/data';
import type { HobbyProject } from '@/types';

function ProjectModal({ project, onClose }: { project: HobbyProject; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-start justify-between gap-4 rounded-t-2xl">
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-1">
              Hobby Project
            </p>
            <h3 className="font-serif text-2xl leading-tight">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground mt-0.5"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 flex flex-col gap-6">
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">{project.detail}</p>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-col gap-2">
              {project.techStack.map(({ layer, tech }) => (
                <div key={layer} className="flex gap-3 text-sm">
                  <span className="w-36 flex-shrink-0 text-muted-foreground">{layer}</span>
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/60 bg-muted hover:bg-accent/10 text-sm font-medium transition-all duration-200 hover:text-accent"
            >
              <Github size={15} />
              View on GitHub
            </a>
            {project.readmeUrl && (
              <a
                href={project.readmeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent/60 bg-muted hover:bg-accent/10 text-sm font-medium transition-all duration-200 hover:text-accent"
              >
                <BookOpen size={15} />
                README
              </a>
            )}
            {project.prodUrl && (
              <a
                href={project.prodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/15 hover:bg-accent/25 border border-accent/30 text-sm font-medium text-accent transition-all duration-200"
              >
                <ExternalLink size={15} />
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HobbyProjects() {
  const [selected, setSelected] = useState<HobbyProject | null>(null);

  return (
    <section id="hobby-projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionFade>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              Built with Claude Code
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-3">
              Hobby Projects
            </h2>
            <p className="text-base text-muted-foreground">
              Personal builds I use to stay sharp — shipped entirely with Claude Code.
            </p>
          </div>
        </SectionFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbyProjects.map((project, i) => (
            <SectionFade key={project.id} delay={i * 0.08}>
              <div className="group flex flex-col h-full p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5">
                <h3 className="font-serif text-xl mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelected(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent/15 hover:bg-accent/25 border border-accent/30 text-sm font-medium text-accent transition-all duration-200"
                  >
                    Details
                    <ExternalLink size={13} />
                  </button>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
