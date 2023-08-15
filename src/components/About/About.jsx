import { useState } from "react"
import style from"./about.module.css"
import eu from "./eu.jpg"
import { FaCode } from "react-icons/fa"
export function About(){
    return(
        <section className={style.container}>
                <img src={eu} alt=""/>
                <div>
                    <h1>Sobre <span>Mim</span></h1>
                    <h3>Pedro Miguel Gomes de Lima</h3>
                    <p>
                    Tenho 19 anos, estudo programação há um ano e dentre as possíveis áreas
                     de atuação eu me identifiquei com o front end e em como eu poderia resolver os problemas cotidianos em frente dos (<FaCode/>).
                      Comecei meus estudos pelos 'algoritmos' pois,
                       na minha percepção de nada adiantaria o conhecimento sem o raciocínio lógico para resolução de problemas.
                        Logo após adquirir a base do conteúdo, procurei saber as possíveis linguagens usadas no front-end e acabei encontrando a triagem (HTML, CSS e JavaScript)
                         e com o passar do tempo me aprimorei no React e Node, hoje posso assegurar que possuo bases sólidas de todas as Tech's citadas acima.
                    </p>
                </div>
        </section>
    )
}