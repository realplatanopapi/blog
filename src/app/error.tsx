'use client'

import { BareLink, Heading, LogoIcon, LogoLink, Stack } from '@/components'
import { BlogShell } from '@/features/layouts'

export default function Error() {
  return (
    <BlogShell>
      <Stack>
        <LogoLink>
          <LogoIcon />
        </LogoLink>
        <Heading size="4xl">An error occurred</Heading>
        <BareLink href="/">Return Home</BareLink>
      </Stack>
    </BlogShell>
  )
}
