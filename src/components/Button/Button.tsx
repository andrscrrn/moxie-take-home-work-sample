import React from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large'
  label: string
}

export const Button = ({
  size = 'medium',
  label,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `bg-violet hover:bg-dark-violet text-white rounded-2xl py-4 px-9`,
        'transition-colors ease-in-out duration-250',
        {
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
