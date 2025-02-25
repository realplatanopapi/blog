import { getIronSession } from 'iron-session'
import { cookies as getCookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { SessionData } from '@/lib/auth/session-data'
import { sessionOptions } from '@/lib/auth/session-options'

export async function authorize() {
  const cookies = await getCookies()
  const sessionData = await getIronSession<SessionData>(cookies, sessionOptions)

  if (!sessionData.username) {
    return null
  }

  return sessionData.username
}

export async function authorizeOrRedirect() {
  const authorized = await authorize()
  if (!authorized) {
    return redirect('/auth')
  }

  return authorized
}
