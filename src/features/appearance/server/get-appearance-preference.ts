'use server'

import { cookies as getCookies } from 'next/headers'

import { appearanceCookieName } from '@/features/appearance/constants'

const initial = 'dark'

export async function getAppearancePreference() {
  const cookies = await getCookies()
  return cookies.get(appearanceCookieName)?.value ?? initial
}
