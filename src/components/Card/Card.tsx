import React, { ReactNode } from 'react'

import { cn } from '../../utils/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        ' bg-white rounded-xl border border-zinc-200 flex-col items-start inline-flex',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
