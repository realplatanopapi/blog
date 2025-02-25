import { getIronSession } from 'iron-session'
import { isEmpty } from 'lodash-es'
import { cookies as getCookies } from 'next/headers'
import { redirect, RedirectType } from 'next/navigation'

import { privateConfig } from '@/config/private-config'
import { SessionData } from '@/lib/auth/session-data'
import { sessionOptions } from '@/lib/auth/session-options'

export async function authenticate(formData: FormData) {
  'use server'

  if (isEmpty(privateConfig.ADMIN_USERNAME) || isEmpty(privateConfig.ADMIN_PASSWORD)) {
    console.error('Admin credentials are not set')
    return redirect('/auth?error=unauthorized', RedirectType.replace)
  }

  const cookies = await getCookies()
  const session = await getIronSession<SessionData>(cookies, sessionOptions)

  const username = formData.get('username')!
  const password = formData.get('password')!

  if (privateConfig.ADMIN_USERNAME === username && privateConfig.ADMIN_PASSWORD === password) {
    session.username = username
    await session.save()
    return redirect('/admin', RedirectType.replace)
  }

  return redirect('/auth?error=unauthorized', RedirectType.replace)
}
