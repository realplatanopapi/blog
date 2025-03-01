'use client'

import { useState } from 'react'
import { LuMoonStar, LuSun } from 'react-icons/lu'

import { Icon, IconButton, IconButtonProps } from '@/components'
import { appearanceCookieName, AppearanceValue, appearanceValue } from '@/features/appearance/constants'

interface AppearanceToggleButtonProps extends IconButtonProps {
  initial: AppearanceValue
}

export function AppearanceToggleButton({ initial }: AppearanceToggleButtonProps) {
  const [appearance, setAppearance] = useState<AppearanceValue>(initial)

  return (
    <>
      <input type="hidden" name={appearanceCookieName} value={appearance} />
      <IconButton
        type="submit"
        variant="ghost"
        size="xs"
        onClick={() => {
          setAppearance(appearance === appearanceValue.dark ? appearanceValue.light : appearanceValue.dark)
        }}
      >
        <Icon>{appearance === appearanceValue.dark ? <LuSun /> : <LuMoonStar />}</Icon>
      </IconButton>
    </>
  )
}
