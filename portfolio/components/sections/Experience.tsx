import { SectionFade } from '@/components/ui/SectionFade';
import { experiences } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import type { Experience } from '@/types';

const badgeColors: Record<string, string> = {
  blue: 'bg-blue-500 text-white border border-blue-400',
  red: 'bg-red-500 text-white border border-red-400',
  green: 'bg-emerald-500 text-white border border-emerald-400',
  orange: 'text-white',
  purple: 'text-white',
};

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parseDate(str: string): Date {
  if (str.trim() === 'Present') return new Date(2026, 2, 1); // Mar 2026
  const [mon, year] = str.trim().split(' ');
  return new Date(parseInt(year), MONTHS[mon], 1);
}

function calcTenure(roles: Experience[]): string {
  const starts = roles.map(r => parseDate(r.dates.split('–')[0]));
  const ends   = roles.map(r => parseDate(r.dates.split('–')[1]));
  const from = new Date(Math.min(...starts.map(d => d.getTime())));
  const to   = new Date(Math.max(...ends.map(d => d.getTime())));
  const months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts = [];
  if (yrs) parts.push(`${yrs} yr${yrs > 1 ? 's' : ''}`);
  if (mos) parts.push(`${mos} mo${mos > 1 ? 's' : ''}`);
  return parts.join(' ') || '< 1 mo';
}

// Group consecutive experiences by company, preserving order
function groupByCompany(exps: Experience[]) {
  const groups: { company: string; badge: string; badgeColor: string; roles: Experience[] }[] = [];
  for (const exp of exps) {
    const last = groups[groups.length - 1];
    if (last && last.company === exp.company) {
      last.roles.push(exp);
    } else {
      groups.push({ company: exp.company, badge: exp.badge, badgeColor: exp.badgeColor, roles: [exp] });
    }
  }
  return groups;
}

export function Experience() {
  const groups = groupByCompany(experiences);

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionFade>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              Experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Career Timeline</h2>
          </div>
        </SectionFade>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="flex flex-col gap-10">
            {groups.map((group, gi) => (
              <SectionFade key={group.company} delay={gi * 0.08}>
                <div className="flex gap-6 sm:gap-10">
                  {/* Badge — one per company */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold tracking-wide ${badgeColors[group.badgeColor]}`}
                      style={
                        group.badgeColor === 'orange' ? { backgroundColor: '#3aa5dc', borderColor: '#3aa5dc' } :
                        group.badgeColor === 'purple' ? { backgroundColor: '#E8541A', borderColor: '#E8541A' } :
                        undefined
                      }
                    >
                      {group.badge}
                    </div>
                  </div>

                  {/* Company group */}
                  <div className="flex-1 pb-10 border-b border-border last:border-0">
                    {/* Company name + tenure */}
                    <div className="mb-4">
                      <p className="text-sm text-accent font-semibold leading-tight">{group.company}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{calcTenure(group.roles)}</p>
                    </div>

                    {/* Roles */}
                    <div className="flex flex-col gap-6">
                      {group.roles.map((exp) => (
                        <div key={exp.id}>
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                            <h3 className="font-semibold text-base leading-snug">{exp.title}</h3>
                            <span className="inline-flex self-start items-center px-2.5 py-1 rounded text-xs font-medium bg-muted text-muted-foreground border border-border whitespace-nowrap">
                              {exp.dates}
                            </span>
                          </div>
                          {exp.description && (
                            <p className="text-sm text-muted-foreground max-w-2xl">{exp.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionFade>
            ))}
          </div>
        </div>

        <SectionFade delay={0.2}>
          <div className="mt-10 pt-8 border-t border-border">
            <a
              href="https://www.linkedin.com/in/ryan-r-scott/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              View Full Resume on LinkedIn
              <ExternalLink size={14} />
            </a>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
