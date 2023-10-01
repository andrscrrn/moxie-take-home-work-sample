import React from 'react'

import { cn } from '../../utils/cn'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = ({ className, label, ...props }: InputProps) => {
  const inputElement = (
    <input
      className={cn(
        'inline-flex w-full items-start justify-between rounded-xl border border-zinc-400 bg-white p-3',
        className,
      )}
      {...props}
    />
  )
  if (label) {
    return (
      <label className="flex w-full flex-col">
        <span className="text-sm font-semibold leading-snug text-[#60606C]">
          {label}
        </span>
        {inputElement}
      </label>
    )
  }
  return inputElement
}
