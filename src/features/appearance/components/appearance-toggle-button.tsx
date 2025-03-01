import { LuMoonStar, LuSun } from 'react-icons/lu'
import { match } from 'ts-pattern'

import { Icon, IconButton, IconButtonProps } from '@/components'
import { appearanceCookieName, AppearanceValue, appearanceValue } from '@/features/appearance/constants'

interface AppearanceToggleButtonProps extends IconButtonProps {
  initial: AppearanceValue
}

export function AppearanceToggleButton({ initial }: AppearanceToggleButtonProps) {
  const value = match(initial)
    .with(appearanceValue.dark, () => appearanceValue.light)
    .with(appearanceValue.light, () => appearanceValue.dark)
    .exhaustive()

  const icon = match(initial)
    .with(appearanceValue.dark, () => <LuSun />)
    .with(appearanceValue.light, () => <LuMoonStar />)
    .exhaustive()

  return (
    <>
      <input type="hidden" name={appearanceCookieName} value={value} />
      <IconButton type="submit" variant="ghost" size="xs">
        <Icon>{icon}</Icon>
      </IconButton>
    </>
  )
}
