import { Linkedin, Github, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-24 bg-card">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 Ryan R. Scott | All Rights Reserved
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/ryan-r-scott/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/rysco78"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="tel:+12144581906"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Phone"
          >
            <Phone size={18} />
          </a>
          <a
            href="mailto:ryan.r.scott@outlook.com"
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
