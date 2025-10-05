import { useState, useEffect } from 'react'

const words = [
  "Designs",
  "Concepts",
  "AI Models",
]

const advantages = [
  {
    icon: "▶",
    title: "End-to-End Service",
    description: "From idea to launch, I handle everything—design, development, hosting setup, and optimizations."
  },
  {
    icon: "▶",
    title: "Personal Approach",
    description: "You work directly with me, so communication is clear, fast, and tailored to your project."
  },
  {
    icon: "▶",
    title: "AI Integration",
    description: "Beyond websites, I can automate workflows and build AI agents to save time and boost efficiency."
  }
]

function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])
  return (
    <section id="home" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1 className="text-5xl font-black text-blue-600 mb-4 tracking-tight font-['Inter',sans-serif] uppercase shadow-blue-500/50 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                  Shaping <span className="text-white">{words[currentWordIndex]}</span>
                </h1>
                <h1 className="text-5xl font-black text-blue-600 mb-4 tracking-tight font-['Inter',sans-serif] uppercase shadow-blue-500/50 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                  into Real Projects
                </h1>
                <h1 className="text-5xl font-black text-blue-600 mb-4 tracking-tight font-['Inter',sans-serif] uppercase shadow-blue-500/50 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                  that Deliver Results
                </h1>
              </div>
              
              {/* Advantages */}
              <div className="mt-4 space-y-4 max-w-md">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-green-400 text-xl flex-shrink-0 mt-1 font-bold">
                      {advantage.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-1">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Contact Me Button */}
              <div className="mt-6 ml-4">
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 cursor-pointer">
                  Contact Me
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative pt-8">
              <img
                src="/nik_working_on desk.png"
                alt="Nikol working on desk"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero