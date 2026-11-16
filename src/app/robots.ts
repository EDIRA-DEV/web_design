import type { MetadataRoute } from 'next';

const AI_AND_SEARCH_AGENTS = [
  '*',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'PerplexityBot',
  'Google-Extended',
  'Googlebot',
  'Applebot-Extended',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: AI_AND_SEARCH_AGENTS.map((userAgent) => ({
      userAgent,
      allow: '/',
      disallow: ['/c/', '/card/'],
    })),
    sitemap: 'https://edira.dev/sitemap.xml',
  };
}
