import { Folder } from "lucide-react";
import styles from "./Card.module.css";

type CardProps = {
    title: string;
    img: string;
}

export const Card = ({title, img}: CardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <img src={img} alt={`Imagem do projeto ${title}`} />
      </div>
      <div className={styles.cardTitle}>
        <Folder />
        <h2>{title}</h2>
      </div>
    </div>
  );
};
