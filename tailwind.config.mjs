/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EDE8DF',
        'paper-mat': '#F3EFE8',
        ink: '#211E18',
        'ink-mid': '#4F4A40',
        'ink-light': '#8C857A',
        rule: '#C9C2B4',
        accent: '#5E6E8E',
      },
      fontFamily: {
        script: ['Pinyon Script', 'Snell Roundhand', 'cursive'],
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
