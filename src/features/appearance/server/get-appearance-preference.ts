'use server'

import { cookies as getCookies } from 'next/headers'

import { appearanceCookieName, AppearanceValue, appearanceValue } from '@/features/appearance/constants'

const initial: AppearanceValue = appearanceValue.dark

export async function getAppearancePreference(): Promise<AppearanceValue> {
  const cookies = await getCookies()

  const value = cookies.get(appearanceCookieName)?.value
  if (value === appearanceValue.dark) {
    return appearanceValue.dark
  }

  if (value === appearanceValue.light) {
    return appearanceValue.light
  }

  return initial
}
