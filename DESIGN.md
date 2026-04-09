# Design System Documentation: High-End Editorial News & Media

## 1. Overview & Creative North Star
### Creative North Star: "The Digital Curator"
This design system is built to move news from a commoditized feed to a curated, high-stakes experience. It rejects the "flat" web. Instead, it treats the interface as a physical editorial space—sophisticated, layered, and authoritative.

We break the "template" look through **Intentional Asymmetry** and **Tonal Depth**. By leaning into the sleek, high-tech aesthetics of premium industrial design, we ensure that every article feels like a marquee event. The system relies on the tension between a rigid, high-tech grid and organic, fluid SVG transitions that soften the edges of the digital experience.

---

## 2. Colors & Surface Logic
The palette is rooted in deep onyx and cold steel, providing a high-contrast environment that makes editorial photography and typography pop.

### The "No-Line" Rule
**Borders are a failure of hierarchy.** In this design system, you are prohibited from using 1px solid lines to separate sections. Boundaries must be defined through:
- **Tonal Shifts:** Moving from `surface` (#131313) to `surface-container-low` (#1C1B1B).
- **Whitespace:** Using the spacing scale to create psychological distance.
- **Surface Nesting:** Treating the UI as stacked sheets of glass.

### Surface Hierarchy & Nesting
Use the `surface-container` tiers to create "nested" depth. 
- **Base Layer:** `surface` (#131313) for the main page background.
- **Section Layer:** `surface-container-low` (#1C1B1B) for large content blocks.
- **Component Layer:** `surface-container-high` (#2A2A2A) for cards or interactive elements.
- **Interaction Layer:** `surface-container-highest` (#353534) for hover states and active overlays.

### The "Glass & Gradient" Rule
To avoid a "flat" dark mode, use Glassmorphism for floating elements (like Navigation Bars or Quick-Read Modals). 
- **Values:** Use `surface-variant` at 60% opacity with a `backdrop-filter: blur(12px)`.
- **Signature Textures:** Apply subtle linear gradients to main CTAs—transitioning from `primary` (#AFC6FF) to `primary-container` (#528DFF) at a 135-degree angle—to provide a high-tech "glow" rather than a flat fill.

---

## 3. Typography
The system uses a high-contrast pairing of a sophisticated serif for storytelling and a precision sans-serif for information.

- **Display & Headlines (Newsreader):** This is the editorial voice. It should feel large, bold, and slightly "tight" in letter-spacing (-0.02em). Use `display-lg` for breaking news to command immediate attention.
- **Titles & UI (Inter):** The "workhorse" for navigation, metadata, and labels. It provides a modern, high-tech counterpoint to the traditional serif.
- **Hierarchy of Intent:** 
    - Use `headline-lg` for article titles.
    - Use `label-md` (Uppercase, +0.05em tracking) for categories like "TECH" or "WORLD NEWS" to evoke a sense of precision.

---

## 4. Elevation & Depth
Depth is achieved through "Tonal Layering" rather than traditional structural lines.

### The Layering Principle
Think of the UI as a series of physical layers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift. This "negative elevation" is more sophisticated than standard shadows.

### Ambient Shadows
When an element must "float" (e.g., a "View Article" modal), use the following:
- **Blur:** 40px to 60px.
- **Opacity:** 6% - 10%.
- **Tint:** Use a dark blue-tinted shadow (derived from `on-secondary-container`) instead of pure black to maintain the "Steel Blue" atmosphere.

### The "Ghost Border" Fallback
If a border is absolutely necessary for accessibility, use the `outline-variant` token at 15% opacity. **Never use 100% opaque borders.**

---

## 5. Components

### High-Contrast Buttons
- **Primary ('View Article'):** Use `primary` (#AFC6FF) with `on-primary` (#002D6C) text. The contrast must be aggressive. 
- **Shape:** Use `rounded-none` or `rounded-sm` (0.125rem) to maintain a sharp, high-tech editorial look.
- **Interaction:** On hover, the button should expand slightly with a subtle `surface-tint` outer glow.

### Editorial Cards
- **Structure:** Strictly no dividers. Separate the image, headline, and metadata using 16px and 24px vertical gaps.
- **Transitions:** Use smooth SVG bezier curve masks at the bottom of hero cards to transition into the next content section.

### Input Fields
- **Style:** Underlined only, or "Ghost Border" boxes. 
- **States:** The label should use `label-md` and sit above the field. On focus, the line should transition from `outline` to `primary` with a 300ms ease-in-out.

### Chips (Category Tags)
- **Visuals:** Use `secondary-container` with `on-secondary-container` text. 
- **Shape:** `rounded-full` to provide a soft contrast to the sharp-edged buttons and images.

---

## 6. Do's and Don'ts

### Do:
- **Do** use the SVG bezier curves to create "liquid" transitions between major page sections (e.g., between a Hero and a News Grid).
- **Do** use `on-surface-variant` for secondary text to ensure the hierarchy is clear without making the page look "busy."
- **Do** embrace intentional asymmetry—try offsetting a headline to the left while the image sits slightly right.

### Don't:
- **Don't** use 1px solid borders for any reason other than an extremely subtle "Ghost Border."
- **Don't** use standard "Drop Shadows" from a UI kit. Shadows must be ambient, large, and tinted.
- **Don't** use pure white (#FFFFFF) for body text. Use `on-surface` (#E5E2E1) to reduce eye strain in this dark-themed environment.
- **Don't** use "default" spacing. If an element feels "stuck" to another, double the padding. This is a premium experience; give the content room to breathe.

---

## 7. Section Transitions (The Signature)
The defining feature of this system is the **Bezier Curve Transition**. 
- Between a `surface-container-low` section and a `surface` section, use an SVG path with a `cubic-bezier(0.4, 0, 0.2, 1)` curve. 
- This removes the "blocky" feel of traditional websites and mimics the high-end industrial aesthetic of the inspiration source.