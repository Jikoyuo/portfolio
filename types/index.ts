export type ProjectCategory = "deployed" | "undeployed";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  category: ProjectCategory;
  links: {
    demo?: string;
    repo?: string;
  };
}
