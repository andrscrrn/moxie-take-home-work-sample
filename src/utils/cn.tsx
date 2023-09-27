import { twMerge } from 'tailwind-merge'
import { clsx, ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]): string {
  const classes = clsx(...inputs)
  return twMerge(classes)
}
