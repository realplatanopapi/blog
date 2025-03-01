'use server'

import { cookies as getCookies } from 'next/headers'

import { appearanceCookieName, AppearanceValue } from '@/features/appearance/constants'

export async function setAppearancePreference(formData: FormData) {
  const preference = formData.get(appearanceCookieName) as AppearanceValue

  const cookieStore = await getCookies()
  cookieStore.set(appearanceCookieName, preference)
}
