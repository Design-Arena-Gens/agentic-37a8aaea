import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f6ff',
          100: '#efeeff',
          200: '#ddd8ff',
          300: '#c1b5ff',
          400: '#a18aff',
          500: '#7c56ff',
          600: '#6937ff',
          700: '#5a26f0',
          800: '#4b20c5',
          900: '#3e1e99'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
