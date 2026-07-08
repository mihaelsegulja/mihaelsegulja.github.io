export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectProps {
  name: string;
  description: string;
  tech: string[];
  type: string;
  media?: string[];
  links: ProjectLink[];
}

export interface TechStackProps {
  name: string;
  icon?: string;
}