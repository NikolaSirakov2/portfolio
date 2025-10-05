
import { useRef } from 'react'
import { SectionAnimation, AnimatedElement } from '@/components/ui/section-animation'

function About() {
  const aboutRef = useRef<HTMLDivElement>(null!)

  return (
    <section id="about" className="py-20">
      <SectionAnimation 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        useVerticalCut={true}
        verticalCutText="ABOUT ME"
      >
        <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedElement
            animationNum={1}
            timelineRef={aboutRef}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="/presentation.png"
                alt="Working on desk"
                className="w-3/4 max-w-md h-auto rounded-lg shadow-2xl mx-auto shadow-blue-500/30 drop-shadow-[0_0_30px_rgba(59,130,246,0.1)]"
              />
            </div>
          </AnimatedElement>

          {/* Content */}
          <AnimatedElement
            animationNum={2}
            timelineRef={aboutRef}
            className="order-1 lg:order-2"
          >
            <p className="text-lg text-gray-300 mb-6">
              For the past 3 years, I've been helping entrepreneurs and small businesses achieve better online presence and more clients through modern websites, landing pages, and AI automation.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Over the years, I've worked on <strong className="text-white">20+ projects</strong>, collaborating with both <strong className="text-white">individual founders</strong> and <strong className="text-white">corporate teams</strong>.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              I believe in building solutions that drive real growth, maintaining clear communication, and creating long-term success for my clients.
            </p>

            {/* CTA Button */}
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Let's Work Together
            </button>
          </AnimatedElement>
        </div>
      </SectionAnimation>
    </section>
  )
}

export default About
