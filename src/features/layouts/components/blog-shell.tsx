import { PropsWithChildren } from 'react'

import { Box, Container, Text, TextLink } from '@/components'

export function BlogShell({ children }: PropsWithChildren) {
  return (
    <Container as="main" maxWidth="prose" minHeight="calc(100vh + 1px)" py={6} px={4}>
      {children}
      <Box pt={6}>
        <Text color="fg.muted" fontSize="sm">
          <TextLink
            color="inherit"
            href={{
              pathname: '/',
            }}
            variant="plain"
          >
            coquito.io
          </TextLink>{' '}
          © {new Date().getFullYear()}
        </Text>
      </Box>
    </Container>
  )
}
