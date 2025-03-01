import { cx } from 'classix'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@/components'
import { getAppearancePreference } from '@/features/appearance/server'
import { fontBody, fontMono } from '@/theme/font'

export const metadata: Metadata = {
  title: 'Coquito.io',
  description: 'A blog about the human side of software engineering.',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const appearance = await getAppearancePreference()

  return (
    <html lang="en" className={cx(fontBody.variable, fontMono.variable)} suppressHydrationWarning>
      <head>
        <link rel="shortcuticon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider forcedTheme={appearance}>{children}</ThemeProvider>
      </body>
    </html>
  )
}

export const dynamic = 'force-dynamic'
