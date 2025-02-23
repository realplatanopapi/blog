import { PropsWithChildren } from 'react'

import { Container } from '@/components'

export function BlogShell({ children }: PropsWithChildren) {
  return (
    <Container as="main" maxWidth="prose" minHeight="calc(100vh + 1px)" py={6} px={4}>
      {children}
    </Container>
  )
}
