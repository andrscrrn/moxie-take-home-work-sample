import React from 'react'

import { cn } from '@/utils/cn'

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export const TextArea = ({ className, label, ...props }: TextAreaProps) => {
  const textareaElement = (
    <textarea
      className={cn(
        'w-full min-h-[94px] p-3 bg-white rounded-xl border border-zinc-400 justify-between items-start inline-flex',
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
        {textareaElement}
      </label>
    )
  }
  return textareaElement
}
