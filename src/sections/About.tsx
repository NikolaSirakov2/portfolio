import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer with years of experience creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="/nik_working_on desk.png"
                alt="Working on desk"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Hi, I'm Nikol</h3>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate developer and designer with over 5 years of experience in creating 
              exceptional digital experiences. I specialize in modern web technologies and love 
              turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              My journey started with a curiosity about how things work, and it has evolved into 
              a career dedicated to crafting user-centered designs and robust applications that 
              make a real difference.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Frontend Development</h4>
                <p className="text-gray-600 text-sm">React, TypeScript, Next.js, Tailwind CSS</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Backend Development</h4>
                <p className="text-gray-600 text-sm">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Mobile Development</h4>
                <p className="text-gray-600 text-sm">React Native, Expo, iOS, Android</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Design & UX</h4>
                <p className="text-gray-600 text-sm">Figma, Adobe Creative Suite, User Research</p>
              </div>
            </div>

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
