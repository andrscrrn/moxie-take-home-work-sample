import React from 'react'

import { cn } from '../../utils/cn'

interface BottomBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomBar = ({
  children,
  className,
  ...props
}: BottomBarProps) => {
  return (
    <div
      className={cn(
        'flex h-20 w-full items-center justify-center bg-white px-4 lg:justify-end',
        'shadow-[0_4px_15px_0_rgba(56,19,60,0.25)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
