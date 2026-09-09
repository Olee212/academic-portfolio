import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefix site-root paths so GitHub Pages works under /academic-portfolio. */
export function withBase(path: string) {
  if (
    !path ||
    path.startsWith('http') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#')
  ) {
    return path
  }
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}
