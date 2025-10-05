import { AnimatedReviewCards } from "../components/ui/animated-review-card"
import { VerticalCutReveal } from "../components/ui/vertical-cut-reveal"

const initialReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces",
    text: "Working with Nik was an absolute pleasure! His attention to detail and creative vision brought our project to life in ways we never imagined. The final result exceeded all our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    text: "Professional, responsive, and incredibly talented. Nik delivered our website on time and within budget. The user experience is seamless and the design is modern and engaging.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    text: "Nik's expertise in both design and development is impressive. He understood our brand perfectly and created a website that truly represents who we are. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces",
    text: "The collaboration process was smooth and efficient. Nik's communication throughout the project was excellent, and he was always available to answer questions and make adjustments.",
    rating: 4,
  },
  {
    id: 5,
    name: "Lisa Wang",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=faces",
    text: "Our website traffic has increased significantly since the launch. The performance optimization and SEO work Nik did has made a real difference for our business.",
    rating: 5,
  },
]

const Reviews = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <article className="text-center mb-16 pt-32 max-w-3xl mx-auto space-y-2 relative z-50">
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
                delay: 0,
              }}
            >
              CLIENT REVIEWS
            </VerticalCutReveal>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </article>

        {/* Review Cards Container */}
        <div className="relative overflow-hidden">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mx-auto max-w-4xl">
            <AnimatedReviewCards
              reviews={initialReviews.slice(0, 3)}
              theme="elegant"
              autoRotate={true}
              rotateInterval={5000}
              interactionType="drag"
              showBorderBeam={true}
              classNames={{
                container: "h-[400px] w-full",
                card: "bg-white/5 backdrop-blur-sm border border-white/20",
                cardContent: "bg-gradient-to-br from-white/10 to-white/5",
                name: "text-white",
                text: "text-gray-200",
                rating: "text-yellow-400",
                activeStarColor: "text-yellow-400 fill-current",
                inactiveStarColor: "text-gray-400",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
