/// Project Images
import toDoListImage from '../assets/projectsImages/1.jpeg'




type Project = {
  id: 1;
  title: string;
  img: string;
  description: string;
  technologies: string[];
  deployLink: string;
  githubLink: string;
};

export const projects: Project[] = [
  {
    id: 1,
    img: toDoListImage,
    title: "To do List",
    description: "Aplicativo para organizar tarefas",
    technologies: ["React", "TypeScript", "CSS Modules"],
    deployLink: "https://to-do-react-41zjm9kaz-xdtr27s-projects.vercel.app/",
    githubLink: "https://github.com/xdtr27/to-do-react",
  },
  {
    id: 1,
    img: toDoListImage,
    title: "To do List",
    description: "Aplicativo para organizar tarefas",
    technologies: ["React", "TypeScript", "CSS Modules"],
    deployLink: "https://to-do-react-41zjm9kaz-xdtr27s-projects.vercel.app/",
    githubLink: "https://github.com/xdtr27/to-do-react",
  },
  {
    id: 1,
    img: toDoListImage,
    title: "To do List",
    description: "Aplicativo para organizar tarefas",
    technologies: ["React", "TypeScript", "CSS Modules"],
    deployLink: "https://to-do-react-41zjm9kaz-xdtr27s-projects.vercel.app/",
    githubLink: "https://github.com/xdtr27/to-do-react",
  },
  {
    id: 1,
    img: toDoListImage,
    title: "To do List",
    description: "Aplicativo para organizar tarefas",
    technologies: ["React", "TypeScript", "CSS Modules"],
    deployLink: "https://to-do-react-41zjm9kaz-xdtr27s-projects.vercel.app/",
    githubLink: "https://github.com/xdtr27/to-do-react",
  },
];
