import { BareLink, Heading, LogoIcon, LogoLink, Stack } from '@/components'
import { BlogShell } from '@/features/layouts'

export default function NotFound() {
  return (
    <BlogShell>
      <Stack>
        <LogoLink>
          <LogoIcon />
        </LogoLink>
        <Heading size="4xl">Not Found</Heading>
        <BareLink href="/">Return Home</BareLink>
      </Stack>
    </BlogShell>
  )
}
