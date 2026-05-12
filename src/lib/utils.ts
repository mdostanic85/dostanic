import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Conditional class-merging helper used by shadcn-style components.
 * Combines `clsx` (truthy filtering, array/object inputs) with
 * `tailwind-merge` (last-write-wins for conflicting Tailwind utilities).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
