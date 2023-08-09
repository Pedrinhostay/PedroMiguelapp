import Header from './components/Header/Header'
import "./globals.css"
import { About } from './components/About/About'
import { Techs } from './components/Tabs/Techs'
import { Project } from './components/Projects/Projects'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Techs/>
      <Project/>

      <Footer/>
    </>
  )
}

export default App
