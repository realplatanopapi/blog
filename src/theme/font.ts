import { Space_Grotesk as FontBody } from 'next/font/google'
import { Space_Mono as FontMono } from 'next/font/google'

export const fontBody = FontBody({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'block',
  weight: ['400', '600', '700'],
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'block',
  style: ['italic', 'normal'],
  weight: ['400', '700'],
})
