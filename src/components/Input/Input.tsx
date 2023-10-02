import React, { forwardRef } from 'react'

import { cn } from '../../utils/cn'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, errorMessage, ...props }: InputProps, ref) => {
    const inputElement = (
      <div className="flex flex-col">
        <input
          className={cn(
            'inline-flex w-full items-start justify-between rounded-xl border border-zinc-400 bg-white p-3',
            'invalid:border-red-500',
            className,
          )}
          ref={ref}
          {...props}
        />
        {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
      </div>
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
  },
)

Input.displayName = 'Input'
