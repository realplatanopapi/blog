import { PropsWithChildren } from 'react'

import { Container, Flex, TextLink } from '@/components'
import { AppearanceForm, AppearanceToggleButton } from '@/features/appearance/components'
import { getAppearancePreference } from '@/features/appearance/server'

export async function Shell({ children }: PropsWithChildren) {
  const appearance = await getAppearancePreference()

  return (
    <Container
      as="main"
      display="flex"
      flexDirection="column"
      maxWidth="prose"
      minHeight="calc(100vh + 1px)"
      py={6}
      px={4}
    >
      <Flex flex="1 0 100%" flexDirection="column">
        {children}
      </Flex>
      <Flex flex="0 0 auto" justifyContent="space-between" pt={8}>
        <AppearanceForm>
          <AppearanceToggleButton initial={appearance} />
        </AppearanceForm>
        <Flex gap={2}>
          <TextLink
            color="fg.muted"
            fontSize="sm"
            href={{
              pathname: '/',
            }}
            variant="plain"
          >
            coquito.io © {new Date().getFullYear()}
          </TextLink>
        </Flex>
      </Flex>
    </Container>
  )
}
