import React from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'large'
  label: string
}

export const Button = ({
  size = 'small',
  label,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        `rounded-2xl bg-violet px-9 py-4 text-white hover:bg-dark-violet`,
        'duration-250 transition-colors ease-in-out',
        {
          'px-5 py-3': size === 'small',
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
