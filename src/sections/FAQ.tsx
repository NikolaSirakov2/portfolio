import React, { useState } from 'react'

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex applications can take 8-12 weeks. I provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "What technologies do you work with?",
      answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, Python, and various databases. For mobile development, I use React Native and Expo. I also work with popular CMS platforms, e-commerce solutions, and cloud services like AWS and Vercel."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! All my projects include a support period (30 days to 6 months depending on the plan). I also offer ongoing maintenance packages for regular updates, security patches, and feature additions. This ensures your application stays secure and up-to-date."
    },
    {
      question: "Can you work with my existing team?",
      answer: "Absolutely! I'm experienced in collaborating with in-house teams, agencies, and other freelancers. I can integrate seamlessly into your existing workflow and provide expertise in specific areas where you need additional support."
    },
    {
      question: "What's your process for handling revisions?",
      answer: "I include revision rounds in all my packages. During the design phase, we work together to refine the concept. During development, I provide regular updates and incorporate feedback. The number of revision rounds depends on your chosen package, and I'm always open to discussing additional revisions if needed."
    },
    {
      question: "Do you offer hosting and domain setup?",
      answer: "Yes, I can help with hosting setup, domain configuration, and deployment. I work with reliable hosting providers and can recommend the best options for your specific needs. I also handle SSL certificates, CDN setup, and performance optimization."
    },
    {
      question: "What if I need changes after the project is complete?",
      answer: "I offer post-launch support and maintenance packages. For minor changes, I can handle them during the support period. For larger updates or new features, we can discuss additional work at competitive rates. I'm committed to long-term partnerships with my clients."
    },
    {
      question: "How do you ensure the quality of your work?",
      answer: "Quality is my top priority. I follow industry best practices, conduct thorough testing, and use modern development tools. All code is clean, well-documented, and follows security standards. I also provide comprehensive testing reports and ensure cross-browser and device compatibility."
    },
    {
      question: "What's included in your project deliverables?",
      answer: "You'll receive the complete source code, documentation, deployment instructions, and any design assets. I also provide training materials, user guides, and technical documentation. For web projects, you'll get the live website, and for mobile apps, you'll receive the app files ready for app store submission."
    },
    {
      question: "How do you handle project communication?",
      answer: "I maintain clear and regular communication throughout the project. We'll have scheduled check-ins, and I'm always available via email, Slack, or video calls for urgent matters. I provide detailed progress reports and keep you informed of any challenges or opportunities that arise."
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about my services and development process
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            I'm here to help! Feel free to reach out with any questions about your project or my services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule a Call
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Send an Email
            </button>
          </div>
        </div>

        {/* Quick Contact Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
            <p className="text-gray-600 text-sm">hello@nikol.dev</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
            <p className="text-gray-600 text-sm">Remote Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
