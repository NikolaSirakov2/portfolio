import { useState, useRef } from 'react'
import { SectionAnimation, AnimatedElement } from '@/components/ui/section-animation'

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const faqRef = useRef<HTMLDivElement>(null!)

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
    <section id="faq" className="min-h-screen mx-auto relative overflow-x-hidden">
      {/* Blue glow effect to match pricing cards */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl"></div>
      <SectionAnimation 
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-6 relative z-10"
        useVerticalCut={true}
        verticalCutText="Frequently Asked Questions"
      >
        <AnimatedElement
          animationNum={1}
          timelineRef={faqRef}
          className="text-center mb-16"
        >
          <p className="text-xl text-gray-300">
            Find answers to common questions about my services and development process
          </p>
        </AnimatedElement>

        {/* FAQ Items */}
        <div ref={faqRef} className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedElement
              key={index}
              animationNum={2 + index}
              timelineRef={faqRef}
            >
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
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
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedElement>
          ))}
        </div>
      </SectionAnimation>
    </section>
  )
}

export default FAQ
