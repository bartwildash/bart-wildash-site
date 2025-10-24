import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Bart Wildash - Project Updates',
    description: 'Updates on systems, gadgets, and experiments',
    site: context.site ?? 'https://bart.wildash.com',
    items: [
      // This is a stub - actual updates would be added here
      {
        title: 'Project updates feed',
        pubDate: new Date(),
        description: 'Subscribe to get updates on all projects',
        link: '/',
      },
    ],
    customData: `<language>en-GB</language>`,
  });
}
