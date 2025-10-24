# Bart Wildash - Personal Site

A fast, minimal personal website built with Astro, featuring a bento grid layout for projects and a clean, breathable design inspired by Flexoki, LoveFrom, and 37signals.

## Features

- **Bento Grid Layout**: Projects dynamically sized based on maturity, impact, and effort scores
- **iOS-like Design**: Frosted glass header, soft shadows, large titles, 20px rounded corners
- **Flexoki Palette**: Thin, pale, breathable colours with plenty of white space
- **Performance**: Under 200 KB JS on first load, optimized for speed
- **Accessibility**: WCAG AA contrast, visible focus rings, 44px hit targets
- **Responsive**: Works beautifully on mobile, tablet, and desktop
- **RSS Feeds**: Available for writing and project updates

## Design Tokens

- **Ink**: #0B0B0F (primary text)
- **Pewter**: #F2F4F7 (backgrounds)
- **Card**: #FFFFFF (card backgrounds)
- **Sand**: #DCD5C7 (accents)
- **Flexoki accents**: Blue, Purple, Cyan, Green, Yellow for badges

## Project Structure

```
/
├── public/
│   └── logo.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── BentoGrid.astro
│   │   ├── ProjectCard.astro
│   │   ├── WritingList.astro
│   │   ├── CaseStudies.astro
│   │   └── Contact.astro
│   ├── data/
│   │   └── projects.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── writing.astro
│   │   ├── contact.astro
│   │   ├── rss.xml.ts
│   │   └── projects-rss.xml.ts
│   └── styles/
│       └── global.css
└── package.json
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Astro and configure build settings
4. Set custom domain: `bart.wildash.com`
5. Deploy

### Environment Variables

- **PLAUSIBLE_DOMAIN**: `bart.wildash.com` (already configured in Layout.astro)

## Project Sizing Logic

Projects are automatically sized in the bento grid based on:
- **Maturity** (1-5): How complete the project is
- **Impact** (1-5): Expected reach and importance
- **Effort** (1-5): Resources invested

**Score calculation**: `0.5 × maturity + 0.3 × impact + 0.2 × effort`

**Size mapping**:
- **XL** (12 cols × 2 rows): score >= 4.2
- **L** (6 cols × 2 rows): score 3.5-4.19
- **M** (4 cols × 1 row): score 2.6-3.49
- **S** (3 cols × 1 row): score <= 2.59

## RSS Feeds

- Writing: `/rss.xml`
- Project Updates: `/projects-rss.xml`

## Accessibility

- WCAG AA contrast ratios
- Visible focus rings on all interactive elements
- Minimum 44px hit targets for buttons and links
- Respects `prefers-reduced-motion`
- Semantic HTML throughout

## License

All rights reserved © 2025 Bart Wildash
