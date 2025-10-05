import Header from "./components/Header"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Portfolio from "./sections/Portfolio"
import WorkingProcess from "./sections/WorkingProcess"
import Pricing from "./sections/Pricing"
import Reviews from "./sections/Reviews"
import FAQ from "./sections/FAQ"
import Footer from "./components/Footer"
import { Sparkles } from "./components/ui/sparkles"

const App = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Global Background with gradient and sparkles */}
      <div className="fixed inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a03_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        
        {/* Sparkles effect */}
        <div className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]">
          <Sparkles
            density={1800}
            speed={1}
            color="#FFFFFF"
            className="absolute inset-0 h-full w-full"
          />
        </div>
        
        {/* Blue gradient overlay */}
        <div 
          className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, #206ce8 0%, transparent 70%)
            `,
            opacity: 0.6,
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <WorkingProcess />
        <Pricing />
        <Reviews />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App