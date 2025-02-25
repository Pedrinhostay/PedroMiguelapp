
import style from"./header.module.css"
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";

export default function Header(){

 
    return(
        <header className={style.header} id="top">
            <div className={style.title}>
            <h1>Olá, me chamo Pedro Miguel</h1>
            <h3>Sou Desenvolvedor Front end</h3>
            <p>
            Gostaria de atuar na área de desenvolvimento de sistemas integrados, criando experiências digitais intuitivas e funcionais. Desenvolver websites, Micro-SaaS e projetos autorais voltados para auxiliar pessoas, combinar design estratégico e tecnologia para oferecer soluções eficientes e impactantes.
          </p>
          <div className={style.links}>
            <HeaderIcons
            github="https://github.com/Pedrinhostay"
            linkedin="https://www.linkedin.com/in/pedromiguelg/"
            />
        </div>
        </div>
        </header>
    )
}