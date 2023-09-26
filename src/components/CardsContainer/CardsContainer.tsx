import React, { ReactNode } from 'react'

interface CardsContainer {
  className?: string
  children?: ReactNode
}

export const CardsContainer = ({ children }: CardsContainer) => {
  return <div className="flex w-[1200px] gap-7 mx-auto mt-16">{children}</div>
}
