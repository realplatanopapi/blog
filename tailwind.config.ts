import presetNextAdmin from '@premieroctet/next-admin/preset'
import { Config } from 'tailwindcss'

const tailwindConfig: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@premieroctet/next-admin/dist/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  presets: [presetNextAdmin],
}

export default tailwindConfig
