/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spiritual: {
          saffron: "#FF9933",
          gold: "#FFD700",
          dark: "#1A1A1A",
          deep: "#0F0F0F",
          accent: "#C0A080",
        },
      },
      backgroundImage: {
        'spiritual-gradient': 'linear-gradient(to right, #1A1A1A, #2C2C2C)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700 0%, #B8860B 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
