import { redirect, RedirectType } from 'next/navigation'

import { Button, Field, Heading, Input, LogoIcon, LogoLink, Stack } from '@/components'
import { authenticate } from '@/lib/auth/authenticate'
import { authorize } from '@/lib/auth/authorize'

export default async function AuthPage() {
  const authorized = await authorize()
  if (authorized) {
    return redirect('/admin', RedirectType.replace)
  }

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
