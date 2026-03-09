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
