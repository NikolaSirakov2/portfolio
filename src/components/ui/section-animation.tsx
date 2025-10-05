"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { VerticalCutReveal } from "./vertical-cut-reveal"
import { cn } from "@/lib/utils"

interface SectionAnimationProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  useVerticalCut?: boolean
  verticalCutText?: string
  immediate?: boolean
}

export function SectionAnimation({
  children,
  className,
  staggerDelay = 0.2,
  useVerticalCut = false,
  verticalCutText,
  immediate = false
}: SectionAnimationProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * staggerDelay,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  return (
    <div ref={sectionRef} className={cn("relative", className)}>
      {useVerticalCut && verticalCutText && (
        <ScrollAnimatedElement
          animationNum={0}
          timelineRef={sectionRef}
          customVariants={revealVariants}
          className="text-center mb-8"
          immediate={immediate}
        >
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
              {verticalCutText}
            </VerticalCutReveal>
          </h2>
        </ScrollAnimatedElement>
      )}
      
      <div className="relative">
        {children}
      </div>
    </div>
  )
}

interface AnimatedElementProps {
  children: React.ReactNode
  animationNum: number
  timelineRef?: React.RefObject<HTMLDivElement | null>
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  staggerDelay?: number
  immediate?: boolean
}

export function AnimatedElement({
  children,
  animationNum,
  timelineRef,
  className,
  as: Component = "div",
  staggerDelay = 0.2,
  immediate = false
}: AnimatedElementProps) {
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * staggerDelay,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  return (
    <ScrollAnimatedElement
      as={Component}
      animationNum={animationNum}
      timelineRef={timelineRef}
      customVariants={revealVariants}
      className={className}
      immediate={immediate}
    >
      {children}
    </ScrollAnimatedElement>
  )
}

// New component for scroll-triggered animations
interface ScrollAnimatedElementProps {
  children: React.ReactNode
  animationNum: number
  timelineRef?: React.RefObject<HTMLDivElement | null>
  customVariants?: any
  className?: string
  as?: keyof React.JSX.IntrinsicElements
  immediate?: boolean
}

function ScrollAnimatedElement({
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
  as: Component = "div",
  immediate = false
}: ScrollAnimatedElementProps) {
  const ref = useRef(null)
  
  const isInView = useInView(ref, {
    root: timelineRef?.current as any || undefined,
    margin: "-100px",
    once: true, // Only animate once when scrolled into view
  })

  const defaultVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      y: 20,
      opacity: 0,
    },
  }

  const variants = customVariants || defaultVariants

  const MotionComponent = Component === 'div' ? motion.div : motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={(immediate || isInView) ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
    >
      {children}
    </MotionComponent>
  )
}
