import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        violet: '#8A1D96',
        'dark-violet': '#601469',
        gray: '#F4F4F6',
        'dark-gray': '#BEBEC9',
      },
    },
  },
  plugins: [],
}
export default config
