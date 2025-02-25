import { useState } from "react"
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import "./Tabs.css"

export function Techs(){
    const [tableState, setTableState] = useState(1);

    const tableTab = (index) =>{
        setTableState(index)
    }

    return(
        <>
        <h1 className="heading">Tecnologias</h1>
        <section className="container">
            <div className="tabsHead">
                <div 
                className={tableState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => tableTab(1)}>
                    <FaHtml5/>
                </div>
                <div 
                className={tableState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={()=> tableTab(2)}>
                    <FaCss3/>
                </div>
                <div 
                className={tableState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={()=> tableTab(3)}>
                    <FaJs/>
                </div>
                <div 
                className={tableState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={()=> tableTab(4)}>
                    <FaReact/>
                </div>
                <div 
                className={tableState === 5 ? "tabs active-tabs" : "tabs"}
                onClick={()=> tableTab(5)}>
                    <FaNodeJs/>
                </div>
            </div>
            <div className="tabsBody">
                <div className={tableState === 1 ? "content active-content" : "content"}>
                    <h3>Html</h3>
                    <p>Criada pelo britânico Tim Berners-Lee, o acrônimo HTML significa HiperText Markup Language, traduzindo ao português: Linguagem de Marcação de Hipertexto.  O HTML é o componente básico da web, ele permite inserir o conteúdo e estabelecer a estrutura básica de um website. Portanto, ele serve para dar significado e organizar as informações de uma página na web. Sem isso, o navegador não saberia exibir textos como elementos ou carregar imagens e outros conteúdos.</p>
                </div>
                <div className={tableState === 2 ? "content active-content" : "content"}>
                    <h3>css</h3>
                    <p>CSS é a sigla para o termo em inglês Cascading Style Sheets que, traduzido para o português, significa Folha de Estilo em Cascatas. O CSS é fácil de aprender e entender e é facilmente utilizado com as linguagens de marcação HTML ou XHTML. </p>
                </div>
                <div className={tableState === 3 ? "content active-content" : "content"}>
                    <h3>js</h3>
                    <p>JavaScript é uma linguagem de programação que permite a você criar conteúdo que se atualiza dinamicamente, controlar múltimídias, imagens animadas, e tudo o mais que há de intessante. Ok, não tudo, mas é maravilhoso o que você pode efetuar com algumas linhas de código JavaScript.</p>
                </div>
                <div className={tableState === 4 ? "content active-content" : "content"}>
                    <h3>react</h3>
                    <p>React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros.</p>
                </div>
                <div className={tableState === 5 ? "content active-content" : "content"}>
                    <h3>Node</h3>
                    <p>Como um tempo de execução JavaScript assíncrono orientado a eventos, o Node.js foi projetado para criar aplicativos de rede escalonáveis. No exemplo de {"hello world"} a seguir, muitas conexões podem ser tratadas simultaneamente. A cada conexão, o retorno de chamada é acionado, mas se não houver trabalho a ser feito, o Node.js irá dormir.</p>
                </div>
            </div>
        </section>
        </>
    )
}