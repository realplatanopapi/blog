import { Box, BoxProps } from '@/components'
import { setAppearancePreference } from '@/features/appearance/server'

interface AppearanceFormProps extends BoxProps {}

export async function AppearanceForm({ children, ...props }: AppearanceFormProps) {
  return (
    <Box asChild {...props}>
      <form action={setAppearancePreference}>{children}</form>
    </Box>
  )
}
