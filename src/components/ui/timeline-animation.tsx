"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum?: number
  timelineRef?: React.RefObject<HTMLDivElement | null>
  customVariants?: any
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export function TimelineContent({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  as: Component = "div",
  ...props
}: TimelineContentProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    root: timelineRef,
    margin: "-100px",
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
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
