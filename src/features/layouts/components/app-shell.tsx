import { PropsWithChildren } from 'react'

import { Container } from '@/components'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <Container maxWidth="prose" py={6} px={4}>
      {children}
    </Container>
  )
}
