import React from 'react'

interface BottomBarProps {
  children: React.ReactNode
}

export const BottomBar = ({ children }: BottomBarProps) => {
  return (
    <div className="flex fixed bottom-0 h-[88px] w-full bg-white shadow-[0_4px_15px_0_rgba(56,19,60,0.25)] justify-center items-center">
      <div className="flex w-[1200px] flex-row-reverse">{children}</div>
    </div>
  )
}
