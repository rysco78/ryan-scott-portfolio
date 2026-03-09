import { SectionFade } from '@/components/ui/SectionFade';
import { StatusBadge } from '@/components/ui/Badge';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionFade>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-3">
              Work That Moved the Needle
            </h2>
          </div>
        </SectionFade>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <SectionFade key={project.number} delay={i * 0.06}>
              <div className="group relative p-6 md:p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5">
                {/* Number */}
                <span className="absolute top-6 right-6 md:top-8 md:right-8 font-serif text-5xl md:text-6xl font-bold text-border group-hover:text-accent/20 transition-colors select-none leading-none">
                  {project.number}
                </span>

                <div className="pr-12 md:pr-20">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-serif text-xl md:text-2xl">{project.title}</h3>
                    <StatusBadge status={project.status} />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    {project.narrative}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
