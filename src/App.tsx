import { Suspense, lazy } from "react"
import Header from "./components/Header"
import Hero from "./sections/Hero"
import Footer from "./components/Footer"
import { Sparkles } from "./components/ui/sparkles"

// Lazy load sections for better performance
const About = lazy(() => import("./sections/About"))
const Portfolio = lazy(() => import("./sections/Portfolio"))
const WorkingProcess = lazy(() => import("./sections/WorkingProcess"))
const Pricing = lazy(() => import("./sections/Pricing"))
const Reviews = lazy(() => import("./sections/Reviews"))
const FAQ = lazy(() => import("./sections/FAQ"))

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
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
          <WorkingProcess />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div></div>}>
          <FAQ />
        </Suspense>
        <Footer />
      </div>
    </div>
  )
}

export default App