import React from 'react'

import { cn } from '@/utils/cn'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = ({ className, label, ...props }: InputProps) => {
  const inputElement = (
    <input
      className={cn(
        'w-full p-3 bg-white rounded-xl border border-zinc-400 justify-between items-start inline-flex',
        className,
      )}
      {...props}
    />
  )
  if (label) {
    return (
      <label className="flex flex-col w-full">
        <span className="text-[#60606C] text-sm font-semibold leading-snug">
          {label}
        </span>
        {inputElement}
      </label>
    )
  }
  return inputElement
}
