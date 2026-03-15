import { SectionFade } from '@/components/ui/SectionFade';
import { Mail, Linkedin, Github, MapPin, Phone, Disc3 } from 'lucide-react';

const contactLinks = [
  {
    label: '(214) 458-1906',
    href: 'tel:+12144581906',
    icon: Phone,
  },
  {
    label: 'ryan.r.scott@outlook.com',
    href: 'mailto:ryan.r.scott@outlook.com',
    icon: Mail,
  },
  {
    label: 'linkedin.com/in/ryan-r-scott',
    href: 'https://www.linkedin.com/in/ryan-r-scott/',
    icon: Linkedin,
  },
  {
    label: 'github.com/rysco78',
    href: 'https://github.com/rysco78',
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionFade>
          <div>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Let&apos;s Talk Product (Or Vinyl)</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
              Open to connections, advisory roles, and strategic conversations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/40 bg-card hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <span className="text-sm font-medium group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}

              <a
                href="https://vinyl.ryanrscott.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/40 bg-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                  <Disc3 size={18} className="text-accent" />
                </div>
                <span className="text-sm font-medium group-hover:text-accent transition-colors">
                  Ryan&apos;s Record Collection
                </span>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">Dallas, Texas</span>
              </div>
            </div>
          </div>
        </SectionFade>
      </div>
    </section>
  );
}
