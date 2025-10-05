
function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-blue-600 mb-4 tracking-tight font-['Inter',sans-serif] uppercase">ABOUT ME</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/nik_working_on desk.png"
                alt="Working on desk"
                className="w-3/4 max-w-md h-auto rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-lg text-gray-300 mb-6">
              For the past 3 years, I've been helping entrepreneurs and small businesses achieve better online presence and more clients through modern websites, landing pages, and AI automation.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Over the years, I've worked on <strong className="text-white">20+ projects</strong>, collaborating with both <strong className="text-white">individual founders</strong> and <strong className="text-white">corporate teams</strong>.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              I also gained experience in <strong className="text-white">corporate environments</strong>, which taught me to work efficiently, strategically, and with a strong focus on <strong className="text-white">results</strong>.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              I believe in building solutions that drive real growth, maintaining clear communication, and creating long-term success for my clients.
            </p>

            {/* CTA Button */}
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
