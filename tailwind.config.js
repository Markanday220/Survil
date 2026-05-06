/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35', // Orange from logo
        secondary: '#FFFFFF', // White from logo
        dark: '#000000', // Pure black like logo background
        'dark-secondary': '#0A0A0A',
        'dark-tertiary': '#1A1A1A',
        'accent-blue': '#00D9FF',
        'accent-purple': '#9D4EDD',
        'light-bg': '#F8F9FA',
        'light-secondary': '#FFFFFF',
        'light-tertiary': '#E9ECEF',
        'gray-text': '#495057',
        'gray-light': '#6C757D',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(28,100%,74%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.1) 0px, transparent 50%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
