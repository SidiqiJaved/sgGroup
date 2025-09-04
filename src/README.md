# Sidiqi Global Group - Corporate Website

Ultra-minimal, crystal-clean corporate website for Sidiqi Global Group. A single-page holding company site with links to ventures SG2 Technologies and Sidiqi.ai.

## Features

- 🎨 **Ultra-minimal design** - Clean, professional corporate aesthetic
- 📱 **Fully responsive** - Mobile-first design that works on all devices
- ⚡ **Fast & lightweight** - Optimized for performance
- ♿ **Accessible** - WCAG AA compliant with proper focus states and aria labels
- 🎯 **SEO optimized** - Proper meta tags and semantic HTML
- 🔧 **Easy to maintain** - Clean, modular component structure

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Sticky navigation header
│   ├── LinkTile.tsx    # Business venture cards
│   └── Footer.tsx      # Site footer
├── styles/
│   └── globals.css     # Global styles and brand colors
├── App.tsx             # Main app component
└── main.tsx           # React entry point
```

## Brand Colors

- **Primary Blue**: `#026296`
- **Light Blue**: `#5DA4CA`
- **Neutral Dark**: `#0C0C0C`
- **Neutral Grey**: `#4C4C4D`
- **White**: `#FFFFFF`

## Typography

- **Headings**: Outfit (SemiBold/Bold)
- **Body**: Inter (Regular/Medium)

## Customization

### Adding New Ventures

To add a new business venture, update the `LinkTile` components in `src/App.tsx`:

```tsx
<LinkTile
  title="Your New Venture"
  description="Brief description of the venture."
  url="https://yourventure.com"
/>
```

### Updating Brand Colors

Brand colors are defined in `src/styles/globals.css` as CSS custom properties and in `tailwind.config.js`.

### Logo Replacement

Replace `/public/logo.svg` with your actual logo file.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use the built-in GitHub Actions workflow

## Accessibility

- Proper semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- Skip to content link for screen readers

## Performance

- Minimal JavaScript bundle
- Optimized CSS with Tailwind's purge
- Lazy-loaded components where appropriate
- Fast Vite build system

## License

Private - All rights reserved to Sidiqi Global Group