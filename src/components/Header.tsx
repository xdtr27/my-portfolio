import styles from "./Header.module.css";
import avatarImg from "../assets/image/me.png";

export function Header() {
  return (
    <header className={styles.header}>
      {/* <div className={styles.imgCapa}></div> */}
      <div className={styles.avatarImg}>
        <img src={avatarImg} alt="Imagem de avatar" />
      </div>
    </header>
  );
}
