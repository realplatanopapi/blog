'use server'

import { cookies as getCookies } from 'next/headers'

import { appearanceCookieName } from '@/features/appearance/constants'

export async function setAppearancePreference(preference: 'light' | 'dark') {
  const cookieStore = await getCookies()
  cookieStore.set(appearanceCookieName, preference)
}
