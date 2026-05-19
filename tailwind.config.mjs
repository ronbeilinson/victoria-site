/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF8',
        ink: '#0D0D0B',
        'ink-mid': '#4A4A48',
        'ink-light': '#8A8A88',
        rule: '#E2E2E0',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        ultra: '0.38em',
      },
    },
  },
  plugins: [],
};
