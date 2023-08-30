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
                paragraph="Um cliente está alinhando comigo, 
                sobre a montagem da loja dele, 
                ele quer sistemas de pagamento, 
                acessibilidade, login, recompensa e hospedagem.
                "
                globe="https://buscaai2-0.vercel.app/"
                github="https://github.com/Pedrinhostay/buscaai2.0"
                img={img1}
                />
                <Card 
                text="Finanças"
                paragraph="Quando fazemos anotações do nossos gastos financeiros no caderno corremos o risco de perdemos, certo?
                Esse aplicativo veio para solucionar seu problema com controle de fluxo,
                 voce pode armazenar sua entrada mensal/diaria e as suas despesas e ficaram anotados para voce."
                img={img2}
                github="https://github.com/Pedrinhostay/app-financeiro"
                globe="https://app-financeiro-six.vercel.app/"
                />
                <Card 
                text="Viagens App"
                paragraph="Imagina viajar para todo o lugar do mundo com preços baixos?
                 aqui na Orcon você tem lugares maravilhosos com o preço que cabe no seu bolso.
                  Venha Conferir!"
                img={img3}
                />
                <Card 
                text="Academia"
                paragraph="Este site foi criado com o pensamento de ser institucional,
                 para informar sobre horarios de aulas, valores e local.
                Mas estou fazendo melhorias para ter algumas funcionalidades especificas como vender mensalidades e ter sistemas de login."
                img={img4}
                github="https://github.com/Pedrinhostay/Academy"
                />
                <Card 
                text="Jogo DM"
                paragraph="Estou elaborando um jogo que consiste em um jogo de batalha, terá dois tipos de personagens (cavalheiros/onis) e eles batalharam entre si."
                img={img5}
                />
            </div>
        </section>
    )
}