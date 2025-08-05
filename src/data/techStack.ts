export interface TechItem {
  name: string;
  icon: string;
  alt: string;
  description?: string;
}

export const techStack: TechItem[] = [
  {
    name: "React",
    icon: "/assets/devicon_react.svg",
    alt: "React.js",
  },
  {
    name: "TypeScript",
    icon: "/assets/devicon_typescript.svg",
    alt: "TypeScript",
  },
  {
    name: "Git",
    icon: "/assets/devicon_git.svg",
    alt: "Git",
  },
  {
    name: "Figma",
    icon: "/assets/devicon_figma.svg",
    alt: "Figma",
  },
  {
    name: "Cursor",
    icon: "/assets/devicon_cursor.svg",
    alt: "Cursor",
  },
];
