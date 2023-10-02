import React, { forwardRef } from 'react'

import { cn } from '../../utils/cn'

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string
  errorMessage?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, errorMessage, ...props }: TextAreaProps, ref) => {
    const textareaElement = (
      <div className="flex flex-col">
        <textarea
          className={cn(
            'inline-flex min-h-[94px] w-full items-start justify-between rounded-xl border border-zinc-400 bg-white p-3',
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
          {textareaElement}
        </label>
      )
    }
    return textareaElement
  },
)

TextArea.displayName = 'TextArea'
