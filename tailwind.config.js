/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          cyan: '#00f5ff',
          purple: '#a855f7',
        },
        neon: {
          cyan: '#00f5ff',
          purple: '#a855f7',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(0, 0, 0, 0.08), 0 8px 16px -6px rgba(0, 0, 0, 0.04)',
        'soft-dark': '0 4px 24px -4px rgba(0, 0, 0, 0.3), 0 8px 16px -6px rgba(0, 0, 0, 0.2)',
        'glow-cyan': '0 0 20px rgba(0, 245, 255, 0.4), 0 0 40px rgba(0, 245, 255, 0.2)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
        'glow-cyan-hover': '0 0 30px rgba(0, 245, 255, 0.5), 0 0 60px rgba(0, 245, 255, 0.25)',
        'glow-purple-hover': '0 0 30px rgba(168, 85, 247, 0.5), 0 0 60px rgba(168, 85, 247, 0.25)',
      },
      transitionDuration: {
        '500': '500ms',
      },
      backdropBlur: {
        xl: '24px',
      },
    },
  },
  plugins: [],
}
