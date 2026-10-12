import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#1F5F2A',
          'green-dark': '#163F1E',
          'green-light': '#2F7D3E',
          charcoal: '#1E2F2F',
          white: '#FBFCFA',
          gray: '#EAF2E4',
          muted: '#3D5645',
          line: '#C9D3C5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      letterSpacing: {
        'widest': '0.1em',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
