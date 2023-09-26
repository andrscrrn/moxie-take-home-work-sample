import React, { ReactNode } from 'react'

interface CardProps {
  className?: string
  children?: ReactNode
}

export const Card = ({ className = '', children }: CardProps) => {
  return (
    <div
      className={`p-4 bg-white rounded-xl border border-zinc-200 flex-col justify-center items-start gap-6 inline-flex ${className}`}
    >
      {children}
    </div>
  )
}
