'use client'

import { useEffect, useState, useRef, ReactNode } from 'react'

interface FadeInViewProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export function FadeInView({ 
  children, 
  delay = 0, 
  duration = 600,
  direction = 'up',
  className = ''
}: FadeInViewProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(30px)'
        case 'down':
          return 'translateY(-30px)'
        case 'left':
          return 'translateX(30px)'
        case 'right':
          return 'translateX(-30px)'
        default:
          return 'none'
      }
    }
    return 'none'
  }

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      {children}
    </div>
  )
}