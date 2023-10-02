import React, { forwardRef } from 'react'
import { cn } from '../../utils/cn'

interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, errorMessage, ...props }: CheckboxProps, ref) => {
    return (
      <label className="flex flex-row gap-4">
        <div className="inline-flex h-6 w-6 items-center justify-center p-0.5">
          <input
            type="checkbox"
            className="relative h-5 w-5 rounded-[3px] border-2 border-neutral-300"
            ref={ref}
            {...props}
          />
        </div>
        <div
          className={cn('text-gray-600 text-sm font-normal leading-normal', {
            'text-red-500': errorMessage,
          })}
        >
          {label}
        </div>
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
