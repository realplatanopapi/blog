import '@/styles/global.css'

import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@/components'

export const metadata: Metadata = {
  title: 'Blog',
  description: '',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
