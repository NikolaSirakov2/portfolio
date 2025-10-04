import Header from "./components/Header"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Clients from "./sections/Clients"
import Portfolio from "./sections/Portfolio"
import WorkingProcess from "./sections/WorkingProcess"
import Pricing from "./sections/Pricing"
import FAQ from "./sections/FAQ"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Clients />
      <Portfolio />
      <WorkingProcess />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  )
}

export default App