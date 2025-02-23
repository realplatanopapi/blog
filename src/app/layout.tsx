import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@/components'

export const metadata: Metadata = {
  title: 'Coquito.io',
  description: 'A blog about the human side of software engineering.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
