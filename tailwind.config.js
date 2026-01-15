/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
        },
        lavender: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
        },
        coral: {
          DEFAULT: '#FB7185',
          light: '#FCA5B1',
          dark: '#E95793',
        },
        mint: {
          DEFAULT: '#2DD4BF',
          light: '#5EEAD4',
          dark: '#14B8A6',
        },
        paper: {
          bg: '#E8DCC8',
          white: '#F5EDE0',
          cream: '#EDE3D3',
          warm: '#F9F3E8',
          darker: '#D9C9B3',
        },
        text: {
          main: '#2D2621',
          muted: '#6B6760',
          light: '#8B7765',
        },
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        script: ['Pacifico', 'cursive'],
        handwriting: ['Caveat', 'cursive'],
        bold: ['Righteous', 'cursive'],
      },
      boxShadow: {
        'paper': '0 1px 3px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06), 0 16px 48px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 1px 2px rgba(255,255,255,0.5)',
        'paper-xl': '0 2px 8px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.12), 0 8px 32px rgba(0,0,0,0.1), 0 16px 64px rgba(0,0,0,0.08), inset 0 0 0 2px rgba(255,255,255,0.4), inset 0 2px 4px rgba(255,255,255,0.6)',
        'card': '0 4px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(139,119,101,.1), inset 0 1px 0 rgba(255,255,255,0.5)',
        'card-hover': '0 12px 32px rgba(0,0,0,0.18), 0 8px 16px rgba(0,0,0,0.12), inset 0 2px 0 rgba(255,255,255,0.6)',
        'torn-top': '0 -2px 8px rgba(0,0,0,0.15)',
        'torn-bottom': '0 2px 8px rgba(0,0,0,0.15)',
        'image-overlay': '0 4px 20px rgba(0,0,0,0.3), inset 0 -60px 80px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'paper-texture': "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(139, 119, 101, 0.03) 1px, rgba(139, 119, 101, 0.03) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(139, 119, 101, 0.03) 1px, rgba(139, 119, 101, 0.03) 2px)",
        'paper-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.18'/%3E%3C/svg%3E\")",
        'paper-fibers': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fiberFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='6' seed='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fiberFilter)' opacity='0.08'/%3E%3C/svg%3E\")",
        'subtle-gradient': 'radial-gradient(ellipse at 30% 40%, rgba(243, 232, 255, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(251, 113, 133, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(45, 212, 191, 0.1) 0%, transparent 70%)',
        'image-gradient-overlay': 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'paper-flutter': 'paperFlutter 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        paperFlutter: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-2px) rotate(0.5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(-5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(5deg)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderWidth: {
        '3': '3px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}