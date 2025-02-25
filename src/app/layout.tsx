import { cx } from 'classix'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@/components'
import { fontBody, fontMono } from '@/theme/font'

export const metadata: Metadata = {
  title: 'Coquito.io',
  description: 'A blog about the human side of software engineering.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cx(fontBody.variable, fontMono.variable)} suppressHydrationWarning>
      <head>
        <link rel="shortcuticon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
