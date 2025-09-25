'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -50px' }

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>,
) {
  const shouldReduceMotion = useReducedMotion()
  const isInStaggerGroup = useContext(FadeInStaggerContext)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Force animation after component mounts to ensure content loads
    const timer = setTimeout(() => {
      if (!hasAnimated) {
        setHasAnimated(true)
      }
    }, 200)

    return () => clearTimeout(timer)
  }, [hasAnimated])

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
            // Force animation if it hasn't triggered yet
            animate: hasAnimated ? 'visible' : undefined,
          })}
      {...props}
    />
  )
}

export function FadeInStagger({
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  )
}
