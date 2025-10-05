"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { useRef } from "react";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for small projects and MVPs looking to get started with web development",
    yearlyPrice: 25000,
    buttonText: "Contact Me",
    buttonVariant: "outline" as const,
    includes: [
      "Free includes:",
      "Up to 5 pages/screens",
      "Basic responsive design",
      "Contact form integration",
      "Basic SEO optimization",
      "1 revision round",
      "2 weeks delivery",
      "30 days support",
    ],
  },
  {
    name: "Professional",
    description:
      "Best value for growing businesses that need more advanced features",
    yearlyPrice: 50000,
    buttonText: "Contact Me",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Up to 15 pages/screens",
      "Custom responsive design",
      "Advanced functionality",
      "CMS integration",
      "Advanced SEO optimization",
      "3 revision rounds",
      "4 weeks delivery",
      "90 days support",
      "Analytics setup",
    ],
  },
  {
    name: "Premium",
    description:
      "Comprehensive plan with advanced features for complex projects and businesses",
    yearlyPrice: 100000,
    buttonText: "Contact Me",
    buttonVariant: "outline" as const,
    includes: [
      "Everything in Professional, plus:",
      "Unlimited pages/screens",
      "Custom design system",
      "Complex integrations",
      "Custom CMS development",
      "Advanced security features",
      "Unlimited revisions",
      "8 weeks delivery",
      "6 months support",
      "Performance optimization",
      "Team training",
    ],
  },
];


export default function PricingSection6() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };


  return (
    <div
      className="min-h-screen mx-auto relative overflow-x-hidden"
      ref={pricingRef}
    >

      <article className="text-center mb-6 pt-32 max-w-3xl mx-auto space-y-2 relative z-50">
        <h2 className="text-5xl font-black text-blue-300 mb-4 tracking-tight font-['Inter',sans-serif] uppercase shadow-blue-500/50 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0, // First element
            }}
          >
            PRICE PACKAGES
          </VerticalCutReveal>
        </h2>
      </article>


      <div className="grid md:grid-cols-3 max-w-5xl gap-4 py-6 mx-auto ">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative text-white border-neutral-800 flex flex-col h-full ${
                plan.popular
                  ? "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_300px_0px_#0900ff] z-20"
                  : "bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 z-10"
              }`}
            >
              <CardHeader className="text-left flex-grow">
                <div className="flex justify-between">
                  <h3 className="text-3xl mb-2">{plan.name}</h3>
                </div>
                <p className="text-sm text-gray-300 mb-4 flex-grow">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col h-full">
                <div className="space-y-3 pt-4 border-t border-neutral-700 flex-grow">
                  <h4 className="font-medium text-base mb-3">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="h-2.5 w-2.5 bg-neutral-500 rounded-full grid place-content-center"></span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 flex-shrink-0">
                  <button
                    className="w-full p-4 text-xl rounded-xl bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-800 border border-blue-500 text-white hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
}
