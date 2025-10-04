import React from 'react'

function Clients() {
  const clients = [
    {
      name: "Tech Startup Inc.",
      industry: "Technology",
      project: "Mobile App Development",
      testimonial: "Nikol delivered an exceptional mobile app that exceeded our expectations. The attention to detail and user experience was outstanding.",
      logo: "🚀"
    },
    {
      name: "E-commerce Solutions",
      industry: "Retail",
      project: "E-commerce Platform",
      testimonial: "Working with Nikol was a game-changer for our business. The platform he built increased our sales by 40%.",
      logo: "🛒"
    },
    {
      name: "Healthcare Plus",
      industry: "Healthcare",
      project: "Patient Management System",
      testimonial: "The system Nikol developed streamlined our operations and improved patient care significantly.",
      logo: "🏥"
    },
    {
      name: "FinanceFlow",
      industry: "Fintech",
      project: "Financial Dashboard",
      testimonial: "Nikol's expertise in fintech development helped us create a secure and user-friendly financial platform.",
      logo: "💰"
    },
    {
      name: "EduTech Academy",
      industry: "Education",
      project: "Learning Management System",
      testimonial: "The LMS Nikol built transformed how we deliver education to our students worldwide.",
      logo: "🎓"
    },
    {
      name: "Green Energy Co.",
      industry: "Energy",
      project: "Energy Monitoring App",
      testimonial: "Nikol's innovative approach helped us create a cutting-edge energy monitoring solution.",
      logo: "🌱"
    }
  ]

  return (
    <section id="clients" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Who Are My Clients</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I work with forward-thinking companies across various industries to bring their digital visions to life
          </p>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{client.logo}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{client.name}</h3>
              <p className="text-blue-400 font-medium mb-3">{client.industry}</p>
              <p className="text-gray-300 mb-4">{client.project}</p>
              <blockquote className="text-gray-300 italic">
                "{client.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Industries I Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💻</div>
              <p className="font-semibold text-white">Technology</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏥</div>
              <p className="font-semibold text-white">Healthcare</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <p className="font-semibold text-white">Fintech</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎓</div>
              <p className="font-semibold text-white">Education</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🛒</div>
              <p className="font-semibold text-white">E-commerce</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌱</div>
              <p className="font-semibold text-white">Green Energy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏢</div>
              <p className="font-semibold text-white">Enterprise</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <p className="font-semibold text-white">Creative</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">30+</div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
