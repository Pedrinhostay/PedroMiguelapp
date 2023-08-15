import { FaGithub, FaGlobe } from "react-icons/fa"
import style from "./Card.module.css"
export function Card({text, paragraph, img, github, globe}){
    return(
        <div className={style.card}>
                <img src={img} alt="" className={style.img}/>
            <div className={style.description}>
            <h2>{text}</h2>
            <p>{paragraph}</p>
            <div className={style.repositories}>
                <a href={github} target="_blank"><FaGithub/></a>
                <a href={globe} target="_blank"><FaGlobe/></a>
            </div>
            </div>
        </div>
    )
}