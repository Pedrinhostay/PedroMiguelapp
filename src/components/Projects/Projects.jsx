import { Card } from "./Card";
import style from"./project.module.css"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
export function Project(){
    return(
        <section className={style.cardContainer}>
            <h1 className="heading">Projetos</h1>
            <div className={style.content}>
                <Card 
                text="ecommerce"
                paragraph="esse projeto consiste em uma loja de dropshipping"
                img={img1}
                />
                <Card 
                text="Finanças"
                paragraph="esse projeto consiste em controle de fluxo, para verificar suas despezas e deixar salvo."
                img={img2}
                github="https://github.com/Pedrinhostay/app-financeiro"
                />
                <Card 
                text="Viagens App"
                paragraph="esse projeto consiste em uma consulta no Api para ver os melhores pacotes para onde voce quer ir."
                img={img3}
                />
                <Card 
                text="Academia"
                paragraph="esse projeto consiste em um site institucional para a academia bluefit."
                img={img4}
                />
                <Card 
                text="Jogo DM"
                paragraph="esse projeto consiste em um jogo baseado no anime demon slayer."
                img={img5}
                />
            </div>
        </section>
    )
}