import { SectionFade } from '@/components/ui/SectionFade';
import { certifications } from '@/lib/data';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionFade>
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              Credentials
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-3">
              Certifications
            </h2>
          </div>
        </SectionFade>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <SectionFade key={cert.name} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 text-center h-full">
                <div className="w-28 h-28 flex items-center justify-center flex-shrink-0">
                  <img
                    src={cert.badge}
                    alt={`${cert.name} badge`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-sm leading-snug">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </SectionFade>
          ))}
        </div>
      </div>
    </section>
  );
}
