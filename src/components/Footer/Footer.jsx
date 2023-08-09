import { FaArrowAltCircleUp } from "react-icons/fa";
import style from"./footer.module.css"
export function Footer(){
    return(
        <footer className={style.footer}>
            <div>
            <h2>By Pedro Miguel</h2>
            <a href="#top" className={style.top}><FaArrowAltCircleUp/></a>
            </div>
        </footer>
    )
}