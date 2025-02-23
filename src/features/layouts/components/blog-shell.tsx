import { PropsWithChildren } from 'react'

import { Container, Flex, Text, TextLink } from '@/components'

export function BlogShell({ children }: PropsWithChildren) {
  return (
    <Container as="main" maxWidth="prose" minHeight="calc(100vh + 1px)" py={6} px={4}>
      {children}
      <Flex justifyContent="space-between" pt={8}>
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
        </Text>
        <Text color="fg.muted" fontSize="sm">
          © {new Date().getFullYear()}
        </Text>
      </Flex>
    </Container>
  )
}
