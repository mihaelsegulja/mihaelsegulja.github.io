export type Tab = "projects" | "about" | "home";

export interface ProjectProps {
  name: string;
  description: string;
  url: string;
  tech: string[];
  type: string;
  media?: string[];
  demo?: string;
}

export interface TechStackProps {
  name: string;
  icon?: string;
}