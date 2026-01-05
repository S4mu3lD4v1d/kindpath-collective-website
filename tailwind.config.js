/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1100px',
      },
    },
    extend: {
      colors: {
        primary: 'rgb(var(--kp-forest-rgb) / <alpha-value>)',
        'primary-dark': 'rgb(var(--kp-slate-rgb) / <alpha-value>)',
        amber: 'rgb(var(--kp-amber-rgb) / <alpha-value>)',
        sand: 'rgb(var(--kp-sand-rgb) / <alpha-value>)',
        slate: 'rgb(var(--kp-slate-rgb) / <alpha-value>)',
        forest: 'rgb(var(--kp-forest-rgb) / <alpha-value>)',
        river: 'rgb(var(--kp-river-rgb) / <alpha-value>)',
        ochre: 'rgb(var(--kp-ochre-rgb) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 24px rgb(var(--kp-forest-rgb) / 0.08)',
      },
    },
  },
  plugins: [],
}
