import { useState } from 'react'

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small projects and MVPs",
      monthlyPrice: 2500,
      yearlyPrice: 25000,
      features: [
        "Up to 5 pages/screens",
        "Basic responsive design",
        "Contact form integration",
        "Basic SEO optimization",
        "1 revision round",
        "2 weeks delivery",
        "30 days support"
      ],
      popular: false,
      cta: "Contact Me"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      features: [
        "Up to 15 pages/screens",
        "Custom responsive design",
        "Advanced functionality",
        "CMS integration",
        "Advanced SEO optimization",
        "3 revision rounds",
        "4 weeks delivery",
        "90 days support",
        "Analytics setup"
      ],
      popular: false,
      cta: "Contact Me"
    },
    {
      name: "Enterprise",
      description: "For large-scale applications",
      monthlyPrice: 10000,
      yearlyPrice: 100000,
      features: [
        "Unlimited pages/screens",
        "Custom design system",
        "Complex integrations",
        "Custom CMS development",
        "Advanced security features",
        "Unlimited revisions",
        "8 weeks delivery",
        "6 months support",
        "Performance optimization",
        "Team training"
      ],
      popular: false,
      cta: "Contact Me"
    }
  ]

  const additionalServices = [
    {
      name: "Mobile App Development",
      price: "Starting at $8,000",
      description: "Native iOS and Android applications"
    },
    {
      name: "E-commerce Integration",
      price: "Starting at $3,000",
      description: "Online store setup and payment processing"
    },
    {
      name: "API Development",
      price: "Starting at $2,000",
      description: "Custom backend APIs and integrations"
    },
    {
      name: "Maintenance & Support",
      price: "Starting at $500/month",
      description: "Ongoing updates and technical support"
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-blue-600 mb-4 tracking-tight font-['Inter',sans-serif] uppercase shadow-blue-500/50 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">Price Packages</h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-700 rounded-lg shadow-lg p-8 relative ${
                plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}
            >
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-300 ml-2">
                    /{billingCycle === 'monthly' ? 'project' : 'year'}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors bg-blue-500 text-white hover:bg-blue-700 hover:mouse-pointer`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-blue-600 font-bold mb-2">{service.price}</p>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h4 className="font-semibold text-gray-900 mb-2">What's included in the support period?</h4>
              <p className="text-gray-600">Support includes bug fixes, minor updates, and technical assistance via email and video calls.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Can I upgrade my plan later?</h4>
              <p className="text-gray-600">Yes, you can upgrade your plan at any time. We'll adjust the pricing accordingly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h4>
              <p className="text-gray-600">Absolutely! For unique requirements, we provide custom quotes tailored to your specific needs.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8">Let's discuss your project and find the perfect solution for your needs</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
