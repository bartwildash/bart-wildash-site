import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Bart Wildash - Writing',
    description: 'Thoughts on building systems, hardware, and experiments',
    site: context.site ?? 'https://bart.wildash.com',
    items: [
      {
        title: 'Building systems that care',
        pubDate: new Date('2025-01-15'),
        link: '/writing/building-systems-that-care',
      },
      {
        title: 'Why local-first matters',
        pubDate: new Date('2025-01-08'),
        link: '/writing/why-local-first-matters',
      },
      {
        title: 'Hardware is hard, but worth it',
        pubDate: new Date('2024-12-20'),
        link: '/writing/hardware-is-hard',
      },
    ],
    customData: `<language>en-GB</language>`,
  });
}
