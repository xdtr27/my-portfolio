import styles from "./Main.module.css";
import {SectionHandler} from "./SectionHandler";

export default function Main() {
  return (
    <main className={styles.main}>
      <h1>Alexandre de Souza</h1>
      <div className={styles.description}>
        <div className={styles.descriptionText}>
          <p>
            Sou Desenvolvedor Web Júnior, estudando e trabalhando com
            desenvolvimento web desde 2022. Tenho experiência com{" "}
            <strong>React</strong>,<strong>TypeScript</strong>, além de
            conhecimentos em <strong>Node.js</strong> <br />e{" "}
            <strong>Express</strong> para back-end. Atualmente, atuo como
            freelancer desde o final de 2023, construindo aplicações web e
            buscando sempre aprimorar minhas habilidades.
          </p>
          <p>
            Estou em busca da minha primeira oportunidade de estágio ou efetiva
            na área de desenvolvimento, onde eu possa aplicar meus
            conhecimentos, aprender com profissionais mais experientes e{" "}
            <strong>crescer como desenvolvedor</strong>.
          </p>
        </div>
        <ul className={styles.descriptionList}>
          <li>Desenvolvimento de aplicações performáticas utilizando React</li>
          <li>Desenvolvimento de APIs utilizando Node &#40;Express&#41;</li>
          <li>Desenvolvimento de Landing Pages responsivas</li>
        </ul>
      </div>
      <SectionHandler />
    </main>
  );
}
