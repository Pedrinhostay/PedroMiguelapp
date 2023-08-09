
import { FaCode, FaDownload } from "react-icons/fa";
import style from"./header.module.css"
import { HeaderIcons } from "../HeaderIcons/HeaderIcons";
import { useState } from "react";
export default function Header(){
    const [button , setButton] = useState(0)

    function contact(){
        style.top = "-400px"
    }
    return(
        <header className={style.header} id="top">
            <div className={style.title}>
            <h1>Olá, me chamo Pedro Miguel</h1>
            <h3>Sou Desenvolvedor Front end React</h3>
            <p>
                "Empoderar pessoas por meio da tecnologia,
                tornando o mundo mais acessível e
            <br /> 
                possibilitando a todos alcançar seu pleno potencial."
          </p>
          <div className={style.links}>
            <HeaderIcons
            github="https://github.com/Pedrinhostay"
            linkedin="https://www.linkedin.com/in/pedromiguelg/"
            />
        </div>
        <a className={style.contact} href="/src/curriculo.pdf" target="_blank">Download CV <FaDownload/></a>
        </div>
            <FaCode className={style.code}/>
        </header>
    )
}