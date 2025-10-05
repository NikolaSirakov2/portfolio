
function WorkingProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed discussions and research.",
      icon: "🔍",
      details: [
        "Initial consultation and requirements gathering",
        "Market research and competitor analysis",
        "Project scope definition and timeline planning",
        "Technology stack selection and architecture planning"
      ]
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Creating user-centered designs and interactive prototypes to visualize the final product before development begins.",
      icon: "🎨",
      details: [
        "User experience (UX) research and design",
        "Wireframing and user flow mapping",
        "Visual design and branding integration",
        "Interactive prototyping and user testing"
      ]
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "Building your application with clean, scalable code while maintaining high quality through continuous testing.",
      icon: "⚙️",
      details: [
        "Agile development with regular milestones",
        "Code reviews and quality assurance",
        "Automated testing and bug fixing",
        "Performance optimization and security implementation"
      ]
    },
    {
      number: "04",
      title: "Deployment & Launch",
      description: "Smooth deployment to production with comprehensive monitoring and support to ensure everything runs perfectly.",
      icon: "🚀",
      details: [
        "Production deployment and configuration",
        "Performance monitoring and analytics setup",
        "User training and documentation",
        "Post-launch support and maintenance planning"
      ]
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-blue-600 mb-4 tracking-tight font-['Inter',sans-serif] uppercase">Working Process</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My proven methodology ensures successful project delivery from concept to launch
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
              {/* Step Number and Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="absolute -top-2 -right-2 text-4xl">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-lg text-gray-300 mb-6">{step.description}</p>
                
                {/* Step Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block flex-shrink-0">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-20 bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why This Process Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Clear Communication</h4>
              <p className="text-gray-300">Regular updates and transparent communication throughout the entire project lifecycle.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Fast Delivery</h4>
              <p className="text-gray-300">Agile methodology ensures quick iterations and faster time-to-market for your product.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quality Focus</h4>
              <p className="text-gray-300">Rigorous testing and quality assurance ensure your product meets the highest standards.</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Typical Project Timeline</h3>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1-2</div>
                <p className="text-gray-300 font-medium">Weeks</p>
                <p className="text-sm text-gray-400">Discovery & Planning</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">2-3</div>
                <p className="text-gray-300 font-medium">Weeks</p>
                <p className="text-sm text-gray-400">Design & Prototyping</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4-8</div>
                <p className="text-gray-300 font-medium">Weeks</p>
                <p className="text-sm text-gray-400">Development & Testing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
                <p className="text-gray-300 font-medium">Week</p>
                <p className="text-sm text-gray-400">Deployment & Launch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkingProcess
