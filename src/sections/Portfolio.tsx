import { useState } from 'react'

function Portfolio() {
  const [activeFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-commerce Mobile App",
      category: "mobile",
      image: "/api/placeholder/400/300",
      description: "A full-featured e-commerce mobile application with real-time inventory management and secure payment processing.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Healthcare Dashboard",
      category: "web",
      image: "/api/placeholder/400/300",
      description: "Comprehensive patient management system with appointment scheduling and medical record tracking.",
      technologies: ["React", "TypeScript", "PostgreSQL", "Chart.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Fintech Analytics Platform",
      category: "web",
      image: "/api/placeholder/400/300",
      description: "Advanced financial analytics dashboard with real-time data visualization and reporting capabilities.",
      technologies: ["Next.js", "Python", "D3.js", "AWS"],
      link: "#"
    },
    {
      id: 4,
      title: "Learning Management System",
      category: "web",
      image: "/api/placeholder/400/300",
      description: "Interactive online learning platform with video streaming, quizzes, and progress tracking.",
      technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      link: "#"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "mobile",
      image: "/api/placeholder/400/300",
      description: "On-demand food delivery application with real-time tracking and multiple payment options.",
      technologies: ["React Native", "Firebase", "Google Maps", "PayPal"],
      link: "#"
    },
    {
      id: 6,
      title: "Energy Monitoring System",
      category: "iot",
      image: "/api/placeholder/400/300",
      description: "IoT-based energy monitoring solution with predictive analytics and automated reporting.",
      technologies: ["React", "Python", "MQTT", "TensorFlow"],
      link: "#"
    }
  ]

  // const categories = [
  //   { id: 'all', name: 'All Projects' },
  //   { id: 'web', name: 'Web Applications' },
  //   { id: 'mobile', name: 'Mobile Apps' },
  //   { id: 'iot', name: 'IoT Solutions' }
  // ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-blue-600 mb-4 tracking-tight font-['Inter',sans-serif] uppercase shadow-blue-500/50 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my recent projects and see how I've helped businesses achieve their digital goals
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-700/50">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    View Project
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
