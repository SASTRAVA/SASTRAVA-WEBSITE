// SASTRAVA Brand Colors
export const colors = {
  navy: '#0D2B45',
  teal: '#0E7C7B',
  'teal-light': '#15a39a',
  'peacock': '#14B8A6',
  'peacock-dark': '#0F3D3E',
  gold: '#C9A84C',
  'gold-light': '#dfc068',
  offwhite: '#F0EDE6',
  surface: '#1a3a52',
  'surface-2': '#243d55',
};

// ─── PEACOCK GRADIENTS (Premium Design System) ───
export const gradients = {
  // Primary gradient for hero / CTA / highlights
  peacockPrimary: 'linear-gradient(135deg, #0F3D3E, #0A6E6E, #14B8A6)',
  
  // Hero background gradient
  heroPeacock: 'linear-gradient(135deg, rgba(13,43,69,1) 0%, rgba(14,124,123,0.4) 50%, rgba(20,184,166,0.2) 100%)',
  
  // Button with peacock glow
  buttonGold: 'linear-gradient(135deg, #C9A84C, #E6C200)',
  
  // Glass overlay (frosted glass effect)
  glassOverlay: `linear-gradient(
    120deg,
    rgba(255,255,255,0.15) 0%,
    rgba(255,255,255,0.05) 40%,
    rgba(255,255,255,0.0) 60%
  )`,
};

// ─── GLASSMORPHISM EFFECTS ───
export const glass = {
  // Base glass card style
  card: {
    background: 'rgba(10, 110, 110, 0.15)',
    backdropFilter: 'blur(14px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '16px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
  },
  
  // Navbar frosted glass
  navbar: {
    backdropFilter: 'blur(10px)',
    background: 'rgba(10, 20, 40, 0.7)',
    border: '1px solid rgba(201,168,76,0.15)',
  },
};

// ─── GLOW EFFECTS (Peacock Style) ───
export const glows = {
  // Teal peacock glow
  peacockGlow: 'box-shadow: 0 0 20px rgba(20, 184, 166, 0.35)',
  
  // Gold button glow
  goldGlow: {
    boxShadow: `
      0 0 15px rgba(201,168,76,0.5),
      0 0 30px rgba(20,184,166,0.2)
    `,
  },
  
  // Strong teal glow for stats
  statGlow: 'text-shadow: 0 0 20px rgba(20, 184, 166, 0.4)',
  
  // Hover card glow
  cardHoverGlow: '0 15px 40px rgba(20,184,166,0.25)',
};

// Tailwind-compatible color mapping
export const colorMap = {
  // Background colors
  'bg-navy': { backgroundColor: colors.navy },
  'bg-teal': { backgroundColor: colors.teal },
  'bg-teal-light': { backgroundColor: colors['teal-light'] },
  'bg-gold': { backgroundColor: colors.gold },
  'bg-offwhite': { backgroundColor: colors.offwhite },
  'bg-surface': { backgroundColor: colors.surface },
  
  // Text colors
  'text-navy': { color: colors.navy },
  'text-teal': { color: colors.teal },
  'text-gold': { color: colors.gold },
  'text-offwhite': { color: colors.offwhite },
  
  // Border colors
  'border-teal': { borderColor: colors.teal },
  'border-gold': { borderColor: colors.gold },
};

// Utility function to get color by name
export const getColor = (colorName) => colors[colorName] || colorName;
