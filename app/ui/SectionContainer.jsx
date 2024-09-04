import React from 'react'

export const SectionContainer = ({children, className = null}) => {
  return (
    <section className={`max-w-[1440px] mx-auto px-4 md:px-8 pt-12 md:pt-20 ${className}`}>
      {children}
    </section>
  )
}
