
import { useRef } from 'react'
import { SectionAnimation, AnimatedElement } from '@/components/ui/section-animation'

function WorkingProcess() {
  const processRef = useRef<HTMLDivElement>(null!)

  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.",
      icon: "🔍"
    },
    {
      number: "02",
      title: "Planning & Proposal",
      description: "Creating a comprehensive project plan and detailed proposal that outlines the roadmap to success.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Design & Development",
      description: "Building your application with clean, scalable code while maintaining high quality through continuous testing.",
      icon: "⚙️"
    },
    {
      number: "04",
      title: "Review & Feedback",
      description: "Collaborative review process to ensure the solution meets your expectations and requirements.",
      icon: "👥"
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "Smooth deployment to production with comprehensive monitoring and support to ensure everything runs perfectly.",
      icon: "🚀"
    }
  ]

  return (
    <section id="process" className="py-20">
      <SectionAnimation 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        useVerticalCut={true}
        verticalCutText="How We'll Work Together"
      >
        <AnimatedElement
          animationNum={1}
          timelineRef={processRef}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My process is designed to save you time, ensure clear communication, and deliver solutions that truly work.
          </p>
        </AnimatedElement>

        {/* Process Steps */}
        <div ref={processRef} className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <AnimatedElement
              key={index}
              animationNum={2 + index}
              timelineRef={processRef}
              className="flex-1 max-w-xs"
            >
              <div className="text-center">
                {/* Step Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto">
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full items-center">
                  {/* Circular arrow with blue background */}
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-2 border-blue-500 shadow-lg hover:scale-110 transition-transform duration-200">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </AnimatedElement>
          ))}
        </div>
      </SectionAnimation>
    </section>
  )
}

export default WorkingProcess
