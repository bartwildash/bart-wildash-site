# Bart Wildash - Personal Site

A fast, minimal personal website built with Astro, featuring a bento grid layout for projects and a clean, breathable design inspired by Flexoki, LoveFrom, and 37signals.

## Features

- **Project List Layout**: Clean, retro-style list with inline badges
- **Dark Mode**: Toggle between Flexoki light and dark themes
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
│   │   ├── ProjectList.astro
│   │   ├── ProjectListItem.astro
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

## Deployment on Cloudflare Pages

1. Push this repository to GitHub
2. Connect to Cloudflare Pages (or use Wrangler CLI)
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Set custom domain: `bart.wildash.com`

### Using Wrangler CLI

```bash
npx wrangler pages deploy dist --project-name=bart-wildash-site
```

### Environment Variables

- **PLAUSIBLE_DOMAIN**: `bart.wildash.com` (already configured in Layout.astro)

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
