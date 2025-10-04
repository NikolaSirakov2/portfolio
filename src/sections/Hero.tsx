import { useState, useEffect } from 'react'

const words = [
  "Designs",
  "Concepts",
  "AI Models",
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
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Shaping <span className="text-blue-400">{words[currentWordIndex]}</span>
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  into Real Projects
                </h1>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  that Deliver Results
                </h1>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/nik_working_on desk.png"
                alt="Nikol working on desk"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero