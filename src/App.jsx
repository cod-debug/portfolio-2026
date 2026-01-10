import About from "./components/about/About"
import Banner from "./components/banner/Banner"
import Contact from "./components/contact/Contact"
import Header from "./components/Header"
import Separator from "./components/Separator"
import Skills from "./components/skills/Skills"

function App() {

  return (
    <main>
      <Header />
      <Banner />
      <Separator />
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Contact />
    </main>
  )
}

export default App
