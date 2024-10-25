// src/config/index.ts

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN || "https://<your-project>.vercel.app";

export const config = {
  metadata: {
    name: "kaeru",
    title: "kaeru.bsky.social",
    subtitle: "a webbed site",
    description: "a webbed site",
    canonical: DOMAIN,
    rss: `${DOMAIN}/rss`,
  },
  sites: {
    github: "brickfrog",
  }
};
