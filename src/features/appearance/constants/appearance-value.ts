export const appearanceValue = {
  light: 'light',
  dark: 'dark',
} as const

export type AppearanceValue = (typeof appearanceValue)[keyof typeof appearanceValue]
