import React, { ReactNode } from 'react'

import { cn } from '../../utils/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        ' inline-flex flex-col items-start rounded-xl border border-zinc-200 bg-white',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
