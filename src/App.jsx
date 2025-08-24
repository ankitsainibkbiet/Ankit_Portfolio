import Header from "./Components/Header"
import Container from "./Components/Container"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Work from "./Components/Work"
import Skills from "./Components/Skills"
import Highlights from "./Components/Highlights"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Container>
        <About />
        <Work />
        <Skills />
        <Highlights />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default App
