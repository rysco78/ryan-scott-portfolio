export interface Experience {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  company: string;
  dates: string;
  description: string;
}

export interface Project {
  number: string;
  title: string;
  narrative: string;
  status: 'In Market' | 'Launched' | 'Legacy' | 'In Development';
  tags: string[];
}

export interface Competency {
  label: string;
  descriptor: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
  badge: string;
}

export interface HobbyProject {
  id: string;
  name: string;
  description: string;
  tags: string[];
  detail: string;
  techStack: { layer: string; tech: string }[];
  githubUrl: string;
  prodUrl?: string;
}
