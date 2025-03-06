'use client'

import { BareLink, Heading, LogoIcon, LogoLink, Stack } from '@/components'
import { Shell } from '@/features/layouts'

export default function Error() {
  return (
    <Shell>
      <Stack>
        <LogoLink>
          <LogoIcon />
        </LogoLink>
        <Heading size="4xl">An error occurred</Heading>
        <BareLink href="/">Return Home</BareLink>
      </Stack>
    </Shell>
  )
}
