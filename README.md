# Inverter Man of India - Website Migration Project

This project contains the modernized website for "Inverter Man of India" (Kunwer Sachdev), migrated from WordPress to Astro 5.0.

## Directory Structure

### 📁 [website/](./website/)
The core production project built with **Astro 5.0**.
- **src/content/blog**: Modernized editorial content (42+ articles).
- **src/pages**: Modern high-fidelity UI routes for Home, News, and Blog.
- **src/layouts**: Shared BaseLayout with global SEO and header/footer configurations.

### 📁 [migration/](./migration/)
Contains the technical infrastructure used during the legacy-to-modern transition.
- **scripts**: Python tools for XML-to-Markdown conversion and image downloading.
- **data**: Original WordPress `.xml` exports and migration packages.

### 📁 [backup/](./backup/)
Local backups of the original WordPress assets and posts used for verification.

## Technology Stack
- **Framework**: Astro 5.x (Hybrid Rendering)
- **Styling**: TailwindCSS & Vanilla CSS for custom animations.
- **Design System**: Onyx Editorial (Serif-focused, high-contrast, premium aesthetic).

## Getting Started

1. `cd website`
2. `npm install`
3. `npm run dev`
