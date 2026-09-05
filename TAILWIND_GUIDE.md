# Tailwind CSS Configuration Guide

This guide explains the custom Tailwind configuration for the SASTRAVA component library.

## Color System

### Extended Colors

The following colors are added to Tailwind's color palette:

```javascript
colors: {
  navy: {
    950: '#0B0F1A',    // Primary background
    900: '#0D0F1D',
    800: '#0F1225',
  },
  gold: {
    light: '#FFF3B0',
    DEFAULT: '#E6C200',
    mid: '#C9A84C',
    dark: '#A67C00',
  },
  peacock: {
    deep: '#0F3D3E',
    blue: '#0A6E6E',
    green: '#14B8A6',
    light: '#1ECDB0',
  },
  offwhite: '#EDEDED',
}
```

### Usage

```jsx
// Background
<div className="bg-navy-950">

// Text
<p className="text-offwhite text-gold-DEFAULT">

// Borders
<div className="border border-gold-DEFAULT/20">

// Hover effects
<button className="hover:bg-peacock-blue">
```

## Gradients

### Pre-defined Gradients

```javascript
backgroundImage: {
  'gradient-gold': 'linear-gradient(135deg, #C9A84C 0%, #E6C200 25%, #FFF3B0 50%, #C9A84C 75%, #A67C00 100%)',
  'gradient-peacock': 'linear-gradient(135deg, #0F3D3E, #0A6E6E, #14B8A6)',
  'gradient-hero': 'linear-gradient(135deg, #0F3D3E 0%, #0A6E6E 50%, #14B8A6 100%)',
}
```

### Usage

```jsx
// Primary button with gradient
<button className="bg-gradient-gold text-navy-950">

// Hero background
<section className="bg-gradient-hero">

// Custom gradient
<div className="bg-gradient-to-r from-gold-DEFAULT to-peacock-green">
```

## Shadow System

### Glow Effects

```javascript
boxShadow: {
  'glow-gold': '0 0 20px rgba(201, 168, 76, 0.4)',
  'glow-gold-lg': '0 0 30px rgba(201, 168, 76, 0.6)',
  'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3)',
  'glow-teal-lg': '0 0 30px rgba(20, 184, 166, 0.5)',
  'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
  'elevation': '0 8px 32px rgba(0, 0, 0, 0.3)',
}
```

### Usage

```jsx
// Gold glow on button
<button className="shadow-glow-gold hover:shadow-glow-gold-lg">

// Teal glow on card
<div className="shadow-glow-teal">

// Elevation shadow
<div className="shadow-elevation">
```

## Animations

### Keyframe Animations

```javascript
keyframes: {
  shimmer: {
    '0%': { backgroundPosition: '-1000px 0' },
    '100%': { backgroundPosition: '1000px 0' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-12px)' },
  },
  glow: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.8' },
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
}

animation: {
  shimmer: 'shimmer 4s infinite',
  float: 'float 4s ease-in-out infinite',
  glow: 'glow 3s ease-in-out infinite',
  'gradient-flow': 'gradientFlow 8s ease infinite',
  'slide-in': 'slideIn 0.8s ease-out forwards',
}
```

### Usage

```jsx
// Floating element
<div className="animate-float">

// Shimmer effect
<button className="shine"> {/* Uses shimmer animation */}

// Glow effect
<div className="animate-glow">

// Gradient animation
<section className="animate-gradient-flow">
```

## Typography

### Custom Font Sizes

```javascript
fontSize: {
  display: ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
  h1: ['3rem', { lineHeight: '1.2', fontWeight: '800' }],
  h2: ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }],
  h3: ['1.75rem', { lineHeight: '1.4', fontWeight: '700' }],
  body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
}
```

### Usage

```jsx
// Display heading
<h1 className="text-display">Build the Future</h1>

// Heading 1
<h1 className="text-h1">Main Title</h1>

// Heading 2
<h2 className="text-h2">Section Title</h2>

// Body text
<p className="text-body">Regular paragraph text</p>
```

## Spacing

### Custom Spacing

```javascript
spacing: {
  'section': '80px',
  'section-sm': '40px',
}
```

### Usage

```jsx
// Large section padding
<section className="py-section">

// Small section padding
<section className="py-section-sm">

// Standard Tailwind spacing still works
<div className="px-6 py-12">
```

## Utilities

### Glass Effect

Pre-configured glassmorphism utility:

```jsx
<div className="glass">
  {/* Applies glass styling: bg-white/10 backdrop-blur border border-white/20 rounded-2xl */}
</div>

<div className="glass-dark">
  {/* Darker variant: bg-black/20 backdrop-blur */}
</div>
```

### Text Glow

```jsx
<p className="text-glow-gold">Gold glow text</p>
<p className="text-glow-teal">Teal glow text</p>
```

## Plugins

### Custom Utilities

The Tailwind config includes a custom plugin that adds:

- `.glass` - Glassmorphism effect
- `.glass-dark` - Dark glassmorphism
- `.text-glow-gold` - Gold text glow
- `.text-glow-teal` - Teal text glow
- `.shine::before` - Shimmer effect for buttons
- `.shine-fast::before` - Faster shimmer

## Backdrop Blur

```javascript
backdropBlur: {
  glass: '12px',
}
```

### Usage

```jsx
<div className="backdrop-blur-glass">
  Frosted glass effect
</div>
```

## Responsive Design

All utilities respect Tailwind's responsive prefixes:

```jsx
<div className="
  grid grid-cols-1        // Mobile: 1 column
  md:grid-cols-2          // Tablet: 2 columns
  lg:grid-cols-3          // Desktop: 3 columns
">
  {/* Content */}
</div>
```

## CSS Layers

The config uses Tailwind's `@layer` to organize styles:

```css
@layer base {
  /* Base HTML element styles */
}

@layer components {
  /* Reusable component classes */
}

@layer utilities {
  /* Single-purpose utility classes */
}
```

## Global Styles

Additional styles are defined in `index.css`:

- **Noise texture**: Subtle grain overlay (optional)
- **Scrollbar styling**: Gradient scrollbar with peacock colors
- **Selection color**: Gold background with navy text
- **Smooth scrolling**: Enabled globally

## Dark Mode

The entire design system is built for dark mode. No light mode support is currently configured.

To add light mode support:

```javascript
darkMode: 'class', // or 'media'

theme: {
  extend: {
    colors: {
      // Define light mode colors
    }
  }
}
```

## Performance Tips

1. **Purge unused styles**: Tailwind automatically removes unused CSS in production
2. **Use arbitrary values sparingly**: `className="h-[722px]"` works but increases bundle size
3. **Group animations**: Reuse animation utilities instead of creating unique ones
4. **Leverage utilities**: Use Tailwind utilities first before custom CSS

## Troubleshooting

### Colors not appearing?

Check that the color name matches exactly:
- ✅ `bg-gold-DEFAULT`
- ❌ `bg-gold` (doesn't exist)

### Gradient not working?

Gradient colors need to be defined in `backgroundImage`:
```jsx
// ✅ Correct
<div className="bg-gradient-gold">

// ❌ Wrong (use gradient utility, not color)
<div className="bg-gradient-to-r from-gold to-peacock">
```

### Animation not smooth?

Ensure animation uses GPU-accelerated properties:
- ✅ `transform`, `opacity`
- ❌ `left`, `top`, `width`, `height`

---

For more Tailwind CSS documentation, visit: [tailwindcss.com](https://tailwindcss.com)
