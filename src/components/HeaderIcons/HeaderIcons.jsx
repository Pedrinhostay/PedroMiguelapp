import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import style from"./headerIcons.module.css";
export  function HeaderIcons(props){
    return(
        <>
            <a href={props.github} target="_blank"><FaGithub/></a>
            <a href={props.linkedin} target="_blank"><FaLinkedin/></a>
        </>
            
    )
}