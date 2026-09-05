# Production-Ready Component Library & Homepage

## 📦 What's Included

A complete, production-ready UI component library and homepage built with **React**, **Tailwind CSS**, and **Framer Motion**, featuring a premium metallic gold + peacock blue-green design system.

---

## 🎨 Design System

### Color Palette

```
Navy Background:     #0B0F1A (primary background)
Offwhite Text:       #EDEDED (primary text)
Metallic Gold:       #C9A84C (brand primary)
Gold Light:          #E6C200, #FFF3B0 (accents)
Gold Dark:           #A67C00 (shadows)

Peacock Deep:        #0F3D3E (dark teal)
Peacock Blue:        #0A6E6E (medium teal)
Peacock Green:       #14B8A6 (bright teal)
Peacock Light:       #1ECDB0 (light teal)
```

### Gradients

**Metallic Gold** (Primary):
```css
linear-gradient(135deg, #C9A84C 0%, #E6C200 25%, #FFF3B0 50%, #C9A84C 75%, #A67C00 100%)
```

**Peacock** (Accent):
```css
linear-gradient(135deg, #0F3D3E, #0A6E6E, #14B8A6)
```

---

## 🧩 Component Library

### UI Components

#### Button
Primary, secondary, outline, and ghost variants with smooth animations.

```jsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="lg" className="shine">
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `disabled`: boolean
- All standard button attributes

---

#### Cards
**FeatureCard** - Glassmorphic card with icon and hover effects
**GlassCard** - Generic glass container

```jsx
import { FeatureCard, GlassCard } from '@/components/ui/Card';

<FeatureCard
  icon={Code2}
  title="Full-Stack Development"
  description="Master modern web and mobile development"
  gradient="gold"
  index={0}
/>
```

---

#### AnimatedCounter
Animated number counter that triggers on scroll.

```jsx
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

<AnimatedCounter end={500} suffix="+" label="Students" delay={0} />
```

---

#### SectionLabel
Premium section label with icon.

```jsx
import { SectionLabel } from '@/components/ui/SectionLabel';

<SectionLabel label="Core Features" icon={Zap} />
```

---

#### Terminal
Code block component with terminal styling.

```jsx
import { Terminal } from '@/components/ui/Terminal';

<Terminal title="Installation" code="npm install @sastrava/ui" />
```

---

### Layout Components

#### Navbar
Sticky navigation with mobile menu support.

```jsx
import { Navbar } from '@/components/layout/Navbar';

<Navbar />
```

Features:
- Auto-blur on scroll
- Mobile responsive menu
- Metallic gold branding
- Smooth animations

---

#### Footer
Professional footer with social links and organized sections.

```jsx
import { Footer } from '@/components/layout/Footer';

<Footer />
```

---

### Section Components

#### HeroSection
Hero section with animated background and CTA buttons.

```jsx
import { HeroSection } from '@/components/sections/HeroSection';

<HeroSection />
```

Features:
- Animated gradient background
- Floating elements
- Scroll indicator
- Stats cards preview

---

#### FeaturesSection
Feature grid with glassmorphic cards.

```jsx
import { FeaturesSection } from '@/components/sections/FeaturesSection';

<FeaturesSection />
```

---

#### ServicesSection
Services/products grid with hover animations.

```jsx
import { ServicesSection } from '@/components/sections/ServicesSection';

<ServicesSection />
```

---

#### StatsSection
Animated statistics with counters.

```jsx
import { StatsSection } from '@/components/sections/StatsSection';

<StatsSection />
```

---

#### TestimonialsSection
Social proof with testimonial cards.

```jsx
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

<TestimonialsSection />
```

---

#### CTASection
Full-width call-to-action section with gradient background.

```jsx
import { CTASection } from '@/components/sections/CTASection';

<CTASection />
```

---

## 🎬 Animations

All animations use **Framer Motion** for smooth, performant animations.

### Available Animation Patterns

1. **Fade & Slide**
   ```jsx
   initial={{ opacity: 0, y: 40 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.6 }}
   ```

2. **Hover Scale**
   ```jsx
   whileHover={{ scale: 1.05, y: -8 }}
   transition={{ duration: 0.3 }}
   ```

3. **Floating**
   ```jsx
   animate={{ y: [0, 12, 0] }}
   transition={{ duration: 4, repeat: Infinity }}
   ```

4. **Shimmer Effect**
   ```jsx
   className="shine" // For buttons
   ```

5. **Stagger**
   ```jsx
   variants={{
     hidden: { opacity: 0 },
     visible: {
       opacity: 1,
       transition: { staggerChildren: 0.1 }
     }
   }}
   ```

---

## 🎯 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      gold: {
        light: '#YOUR_COLOR',
        DEFAULT: '#YOUR_COLOR',
        dark: '#YOUR_COLOR',
      },
      peacock: {
        deep: '#YOUR_COLOR',
        blue: '#YOUR_COLOR',
        green: '#YOUR_COLOR',
      },
    },
  },
},
```

### Modifying Gradients

Update gradient definitions in `tailwind.config.js`:

```js
backgroundImage: {
  'gradient-gold': 'linear-gradient(YOUR_GRADIENT)',
  'gradient-peacock': 'linear-gradient(YOUR_GRADIENT)',
},
```

### Customizing Animations

Adjust animation speeds and properties in `tailwind.config.js`:

```js
keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-16px)' }, // Change this
  },
},
animation: {
  float: 'float 6s ease-in-out infinite', // Change duration
},
```

### Typography

Update font sizes in `tailwind.config.js`:

```js
fontSize: {
  display: ['4rem', { lineHeight: '1.1' }],
  h1: ['3.5rem', { lineHeight: '1.2' }],
  // Add your custom sizes
},
```

---

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Auto-responsive grid */}
</div>
```

---

## ⚡ Performance Optimizations

1. **Lazy Loading**: All images and components use `whileInView`
2. **CSS-in-JS**: Minimal inline styles, maximized Tailwind classes
3. **Animation Optimization**: GPU-accelerated transforms
4. **Code Splitting**: Route-based code splitting with React Router
5. **Image Optimization**: Use next-gen formats and proper sizing

---

## 🚀 Usage Examples

### Building a Custom Page

```jsx
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection, FeaturesSection, CTASection } from '@/components/sections';

export const CustomPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};
```

### Creating Custom Sections

```jsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SectionLabel } from '@/components/ui/SectionLabel';

export const MyCustomSection = () => {
  return (
    <section className="py-section bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionLabel label="My Section" icon={MyIcon} />
          <h2 className="text-h1 text-offwhite">Heading</h2>
          <Button variant="primary">CTA</Button>
        </motion.div>
      </div>
    </section>
  );
};
```

---

## 🎨 Advanced Styling

### Glass Effect
```jsx
className="glass rounded-2xl backdrop-blur-glass border border-white/10"
```

### Glow Effect
```jsx
className="shadow-glow-gold hover:shadow-glow-gold-lg"
```

### Text Gradient
```jsx
className="text-transparent bg-gradient-gold bg-clip-text"
```

---

## 📚 File Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── AnimatedCounter.jsx
│   │   ├── SectionLabel.jsx
│   │   ├── Terminal.jsx
│   │   └── index.js
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── HeroSection.jsx
│       ├── FeaturesSection.jsx
│       ├── ServicesSection.jsx
│       ├── StatsSection.jsx
│       ├── TestimonialsSection.jsx
│       ├── CTASection.jsx
│       └── index.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 📝 Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels on icons
- ✅ Keyboard navigation support
- ✅ Color contrast compliance
- ✅ Focus states on interactive elements
- ✅ Proper heading hierarchy

---

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 📦 Dependencies

- **react**: ^19.2.5
- **framer-motion**: ^12.38.0
- **tailwindcss**: ^3.x
- **lucide-react**: ^1.8.0
- **react-router-dom**: ^7.14.2

---

## 🎓 Best Practices

1. **Use Tailwind Classes**: Prefer `className` over inline styles
2. **Animation Performance**: Use `transform` and `opacity` for animations
3. **Responsive First**: Design mobile-first, then enhance for larger screens
4. **Reusable Components**: Keep components small and composable
5. **Type Safety**: Use PropTypes or TypeScript for better DX
6. **Accessibility**: Always include alt text, labels, and aria attributes

---

## 🤝 Contributing

To add new components:

1. Create component in appropriate folder
2. Export from `index.js`
3. Add usage documentation
4. Ensure responsive design
5. Include animations and hover states

---

## 📄 License

MIT License - feel free to use in your projects!

---

**Ready to build amazing interfaces?** Start with the components and customize them for your brand! 🚀
