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
                    <p> Tenho 19 anos, estudo programação desde os 18, 
                        quando comecei a procurar sobre as areas de atuação eu me identifiquei com o FRONT END, 
                        em como eu poderia resolver problemas do dia a dia em frente dos (<FaCode/>).
                        Comecei pelo mais dificil "algoritmos", na minha cabeça não adiantaria de nada eu estudar programação 
                        se eu não tivesse o raciocinio lógico para resolver os problemas.
                        Depois que passei da base procurei saber quais linguagens usar no FRONT END 
                        e acabei encontrando a triagem (Html, Css e Javascript), depois de um tempo resolvi me aprimorar em react e node,
                        hoje eu posso falar que tenho bases solidas de todas as techs citadas.</p>
                </div>
        </section>
    )
}