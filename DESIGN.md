---
name: Biophilic Tech
colors:
  surface: '#fafaf4'
  surface-dim: '#dadad5'
  surface-bright: '#fafaf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f4ee'
  surface-container: '#eeeee9'
  surface-container-high: '#e8e8e3'
  surface-container-highest: '#e3e3de'
  on-surface: '#1a1c19'
  on-surface-variant: '#42493e'
  inverse-surface: '#2f312e'
  inverse-on-surface: '#f1f1ec'
  outline: '#72796e'
  outline-variant: '#c2c9bb'
  surface-tint: '#3b6934'
  primary: '#154212'
  on-primary: '#ffffff'
  primary-container: '#2d5a27'
  on-primary-container: '#9dd090'
  inverse-primary: '#a1d494'
  secondary: '#50606f'
  on-secondary: '#ffffff'
  secondary-container: '#d1e1f4'
  on-secondary-container: '#556474'
  tertiary: '#37393a'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e5051'
  on-tertiary-container: '#c2c2c3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcf0ae'
  primary-fixed-dim: '#a1d494'
  on-primary-fixed: '#002201'
  on-primary-fixed-variant: '#23501e'
  secondary-fixed: '#d4e4f6'
  secondary-fixed-dim: '#b8c8da'
  on-secondary-fixed: '#0d1d2a'
  on-secondary-fixed-variant: '#394857'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fafaf4'
  on-background: '#1a1c19'
  surface-variant: '#e3e3de'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
This design system bridges the gap between high-performance technology and the restorative calm of the natural world. It targets professionals in sustainability, environmental tech, and wellness-focused enterprise sectors. The aesthetic is "Biophilic Tech"—a fusion of organic vitality and digital precision.

The emotional response should be one of "focused serenity." It avoids the coldness of traditional tech by integrating high-fidelity topographical line-art and soft-focus botanical imagery. The visual language utilizes **Glassmorphism** to create a sense of air and depth, suggesting that the software is a transparent lens through which the user interacts with a lush, living ecosystem.

## Colors
The palette is grounded in the "Forest Green" primary, used for core actions and brand emphasis. "Slate Gray" serves as the secondary color, providing a sophisticated, stony contrast for secondary UI elements and data visualization. The canvas is "Misty White," which acts as a bright, breathable background.

- **Forest Green (#2D5A27):** Vitality, growth, and primary interaction points.
- **Slate Gray (#708090):** Structural elements, inactive states, and professional balance.
- **Misty White (#F5F5F5):** The base surface, providing a clean environment for glass layers.
- **Translucency:** Key to this system is the use of 60-80% opacity versions of Misty White to create frosted glass effects.

## Typography
The typography strategy utilizes a trio of modern sans-serifs to establish hierarchy and technical clarity. 

**Manrope** is used for headlines to provide a warm, refined, and balanced appearance. **Hanken Grotesk** serves as the primary body face, offering exceptional readability with a contemporary edge. For technical data, labels, and small UI details, **Geist** provides a mono-spaced influence that reinforces the "Tech" aspect of the Biophilic aesthetic. All type should be rendered with high contrast against glass modules to ensure accessibility.

## Layout & Spacing
The design system employs a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The layout philosophy emphasizes "negative space as oxygen," ensuring no component feels cramped.

Large margins (64px on desktop) create a frame-like effect, allowing the topographical background art to breathe. Spacing follows an 8px base unit. Components should be grouped into logical "ecosystems" using generous padding within frosted glass containers to maintain the light, airy feel of the aesthetic.

## Elevation & Depth
Depth is not communicated through heavy shadows, but through **Glassmorphism** and layering. 

1.  **The Base:** Misty White background with 0.5px Slate Gray topographical line-art.
2.  **Mid-Ground:** Soft-focus greenery images used sparingly behind glass modules to create a sense of looking through a terrarium.
3.  **Active Surface:** Frosted glass modules (`backdrop-filter: blur(12px)`) with a 1px "Misty White" border at 40% opacity to simulate a glass edge.
4.  **Shadows:** Shadows are "Ambient"—ultra-diffused (20px-40px blur) with a low-opacity Forest Green tint (`rgba(45, 90, 39, 0.08)`) to suggest the object is hovering over a natural surface.

## Shapes
The shape language is "Organic Precision." While the aesthetic is biophilic, the components must feel engineered and reliable. We use a **Rounded (0.5rem)** base for most components. 

Large containers and cards use `rounded-xl` (1.5rem) to mimic the softened corners found in nature, such as river stones. Icons should follow an organic stroke but be set on a precise geometric grid, ensuring they feel both natural and high-tech.

## Components
- **Buttons:** Primary buttons use a solid Forest Green with Misty White text. Secondary buttons are frosted glass with a 1px border. All buttons have a subtle 2px inner-glow to suggest a polished glass edge.
- **Frosted Modules (Cards):** These are the core of the system. They must feature a background blur, a semi-transparent white fill, and the signature "stone-diffused" green shadow.
- **Input Fields:** Minimalist with a bottom-only border in Slate Gray. On focus, the border transitions to Forest Green with a very soft green outer glow.
- **Topographical Overlays:** Subtle, high-fidelity line-art should be used as a texture inside headers or specific "hero" chips to reinforce the tech-nature connection.
- **Icons:** Linear, 2px stroke width, featuring "leaf-tip" terminals—subtle curves at the ends of lines to make them feel less mechanical and more organic.
- **Selection Controls:** Checkboxes and radios use a "Seed" metaphor; when active, they fill with Forest Green and appear to "grow" slightly via a scale animation.