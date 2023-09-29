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
        'flex fixed bottom-0 h-[88px] w-full bg-white justify-center items-center',
        'shadow-[0_4px_15px_0_rgba(56,19,60,0.25)]',
        className,
      )}
    >
      <div className="flex w-[1200px] flex-row-reverse">{children}</div>
    </div>
  )
}
