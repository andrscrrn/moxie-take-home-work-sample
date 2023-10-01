import React from 'react'

import { cn } from '../../utils/cn'

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export const TextArea = ({ className, label, ...props }: TextAreaProps) => {
  const textareaElement = (
    <textarea
      className={cn(
        'inline-flex min-h-[94px] w-full items-start justify-between rounded-xl border border-zinc-400 bg-white p-3',
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
        {textareaElement}
      </label>
    )
  }
  return textareaElement
}
