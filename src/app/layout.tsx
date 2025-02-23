import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import { ThemeProvider } from '@/components'
import { AppShell } from '@/features/layouts/components/app-shell'

export const metadata: Metadata = {
  title: 'Blog',
  description: '',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  )
}
