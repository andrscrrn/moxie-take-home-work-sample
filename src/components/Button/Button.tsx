import React from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `bg-black text-white rounded-2xl py-4 px-9`,
        {
          'bg-violet': primary,
          'py-3 px-5': size === 'medium',
        },
        className,
      )}
      type="button"
      {...props}
    >
      {label}
    </button>
  )
}
