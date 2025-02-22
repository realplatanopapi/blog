'use client'

import { ChakraProvider } from '@chakra-ui/react'

import { system } from '@/theme/system'

import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'

export function ThemeProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
