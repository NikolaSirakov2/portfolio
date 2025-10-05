
function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-blue-300 mb-4 tracking-tight font-['Inter',sans-serif] uppercase shadow-blue-500/50 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">ABOUT ME</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/presentation.png"
                alt="Working on desk"
                className="w-3/4 max-w-md h-auto rounded-lg shadow-2xl mx-auto shadow-blue-500/30 drop-shadow-[0_0_30px_rgba(59,130,246,0.1)]"
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
