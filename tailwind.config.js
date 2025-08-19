module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
        instrument: ['Instrument Sans', 'sans-serif'],
      },
      
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'image-reveal': {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        
      },
      animation: {
      'fade-in-fast': 'fade-in 1s ease-out forwards',
      'fade-in': 'fade-in 2s ease-out forwards',
      'fade-in-slow': 'fade-in 4s ease-out forwards',
      'fade-in-delay': 'fade-in 2s ease-out forwards 0.5s',
      'fade-in-delay-long': 'fade-in 2s ease-out forwards 1.2s',
      'image-reveal': 'image-reveal 1.8s ease-out forwards',
    },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

