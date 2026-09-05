/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Navy background
        navy: {
          950: '#0B0F1A',
          900: '#0D0F1D',
          800: '#0F1225',
        },
        // Gold brand colors
        gold: {
          light: '#FFF3B0',
          DEFAULT: '#E6C200',
          mid: '#C9A84C',
          dark: '#A67C00',
        },
        // Peacock palette
        peacock: {
          deep: '#0F3D3E',
          blue: '#0A6E6E',
          green: '#14B8A6',
          light: '#1ECDB0',
        },
        // Neutral
        offwhite: '#EDEDED',
        slate: {
          50: '#F5F5F5',
          400: '#A1A1A1',
        },
      },
      backgroundImage: {
        'gradient-gold': `linear-gradient(135deg, #C9A84C 0%, #E6C200 25%, #FFF3B0 50%, #C9A84C 75%, #A67C00 100%)`,
        'gradient-gold-shimmer': `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
        'gradient-peacock': 'linear-gradient(135deg, #0F3D3E 0%, #0A6E6E 50%, #14B8A6 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0F3D3E 0%, #0A6E6E 40%, #14B8A6 100%)',
        'gradient-peacock-animated': `linear-gradient(90deg, #0F3D3E, #0A6E6E, #14B8A6, #0A6E6E, #0F3D3E)`,
        'gloss-overlay': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
      },
      backgroundSize: {
        'shine': '200% 100%',
        'glow-animate': '200% 200%',
        '300%': '300%',
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(201, 168, 76, 0.35)',
        'glow-gold-lg': '0 0 40px rgba(201, 168, 76, 0.5)',
        'glow-gold-xl': '0 0 60px rgba(201, 168, 76, 0.65)',
        'glow-teal': '0 0 25px rgba(20, 184, 166, 0.25)',
        'glow-teal-lg': '0 0 40px rgba(20, 184, 166, 0.4)',
        'glow-teal-xl': '0 0 60px rgba(20, 184, 166, 0.5)',
        'glow-peacock': '0 0 25px rgba(20, 184, 166, 0.35)',
        'glow-peacock-lg': '0 0 40px rgba(20, 184, 166, 0.5)',
        'glow-peacock-xl': '0 0 60px rgba(20, 184, 166, 0.6)',
        'shadow-elevation-lg': '0 20px 50px rgba(0, 0, 0, 0.4)',
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'inner-glow-gold': 'inset 0 0 20px rgba(201, 168, 76, 0.1)',
        'elevation': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'elevation-lg': '0 20px 50px rgba(0, 0, 0, 0.4)',
      },
      backdropBlur: {
        glass: '12px',
        'glass-md': '8px',
        'glass-lg': '16px',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        shine: {
          '0%': { backgroundPosition: '-1000px 0' },
          '50%': { backgroundPosition: '500px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glowIntense: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(201, 168, 76, 0.35)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 168, 76, 0.55)' },
        },
        gradientFlow: {
          '0%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '0% center' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        sweep: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 4s infinite',
        shine: 'shine 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'glow-intense': 'glowIntense 3s ease-in-out infinite',
        'gradient-flow': 'gradientFlow 8s ease infinite',
        'slide-in': 'slideIn 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        sweep: 'sweep 2s ease-in-out infinite',
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '800' }],
        h2: ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['1.75rem', { lineHeight: '1.4', fontWeight: '700' }],
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        'section': '80px',
        'section-sm': '40px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // Glass morphism effects
        '.glass': {
          '@apply bg-white/10 backdrop-blur-glass border border-white/20 rounded-2xl': {},
        },
        '.glass-dark': {
          '@apply bg-black/20 backdrop-blur-glass border border-white/10 rounded-2xl': {},
        },
        '.glass-gold': {
          '@apply bg-gradient-gold/5 backdrop-blur-glass border border-gold-DEFAULT/20 rounded-2xl': {},
        },
        '.glass-peacock': {
          '@apply bg-peacock-green/5 backdrop-blur-glass border border-peacock-light/20 rounded-2xl': {},
        },

        // Glow text effects
        '.text-glow-gold': {
          textShadow: '0 0 20px rgba(201, 168, 76, 0.4)',
        },
        '.text-glow-teal': {
          textShadow: '0 0 15px rgba(20, 184, 166, 0.3)',
        },

        // Shine effect overlay (for buttons)
        '.shine': {
          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shine 3s infinite',
        },

        // Premium gloss overlay
        '.gloss': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
            pointerEvents: 'none',
            borderRadius: 'inherit',
          },
        },

        // Glow border effects
        '.glow-border-gold': {
          borderColor: 'rgba(201, 168, 76, 0.3)',
          boxShadow: 'inset 0 0 15px rgba(201, 168, 76, 0.1), 0 0 20px rgba(201, 168, 76, 0.2)',
        },
        '.glow-border-teal': {
          borderColor: 'rgba(20, 184, 166, 0.3)',
          boxShadow: 'inset 0 0 15px rgba(20, 184, 166, 0.1), 0 0 20px rgba(20, 184, 166, 0.15)',
        },

        // Noise texture utility
        '.noise': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat',
        },

        // Premium elevation
        '.card-premium': {
          '@apply bg-navy-900/50 backdrop-blur-glass border border-gold-DEFAULT/10 shadow-elevation rounded-2xl': {},
        },
      });
    },
  ],
};

