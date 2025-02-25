import { Button, Field, Heading, Input, LogoIcon, LogoLink, Stack } from '@/components'
import { authenticate } from '@/lib/auth/authenticate'

export default function AuthPage() {
  return (
    <Stack gap={6}>
      <LogoLink>
        <LogoIcon />
      </LogoLink>
      <Heading as="h1" textAlign="center" size="3xl">
        Login
      </Heading>
      <Stack asChild>
        <form action={authenticate}>
          <Field>
            <Input autoFocus type="text" name="username" placeholder="cooltown" required />
          </Field>
          <Field>
            <Input autoFocus type="password" name="password" required />
          </Field>
          <Button type="submit">Login</Button>
        </form>
      </Stack>
    </Stack>
  )
}
