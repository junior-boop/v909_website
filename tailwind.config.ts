import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily : {
        anton : ['var(--font-anton)', ...fontFamily.mono],
        italiana : ['var(--font-italiana)', ...fontFamily.serif] 
      },
      colors : {
        "principal": '#FF4242'
      }
    }
    
  },
  plugins: [],
}
export default config
