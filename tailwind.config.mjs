/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./node_modules/@premieroctet/next-admin/dist/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  presets: [require('@premieroctet/next-admin/preset')],
}

export default tailwindConfig
