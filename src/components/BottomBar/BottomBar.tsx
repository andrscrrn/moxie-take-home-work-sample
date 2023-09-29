import React from 'react'

import { cn } from '@/utils/cn'

interface BottomBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomBar = ({
  children,
  className,
  ...props
}: BottomBarProps) => {
  return (
    <div
      className={cn(
        'flex fixed bottom-0 left-0 h-[88px] w-full bg-white justify-center lg:justify-end items-center px-4',
        'shadow-[0_4px_15px_0_rgba(56,19,60,0.25)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
