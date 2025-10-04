
function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Nikol</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A passionate developer and designer creating exceptional digital experiences. 
              I specialize in modern web technologies and mobile applications that make a real difference.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View My Work
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <p className="text-gray-600 text-sm">Projects</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">30+</div>
                <p className="text-gray-600 text-sm">Clients</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <p className="text-gray-600 text-sm">Years</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero