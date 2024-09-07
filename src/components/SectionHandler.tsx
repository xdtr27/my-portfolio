import { FolderDot } from "lucide-react";
import styles from "./SectionHandler.module.css";
import { projects } from "../utils/projects";
import { Card } from "./Card";
export function SectionHandler() {
  return (
    <section>
      <nav className={styles.links}>
        <ul>
          <li>
            <FolderDot /> Projetos
          </li>
        </ul>
      </nav>
      <div className={styles.cards}>
        {projects.map(project => <Card title={project.title} img={project.img}/>)}
      </div>
    </section>
  );
}
