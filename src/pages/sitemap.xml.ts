export const prerender = true;

const paths = [
  "/",
  "/projects/",
  "/projects/booking-api-source-review/",
  "/learning/",
  "/learning/guided-http-threadpool-learning/",
] as const;

export function GET() {
  const site = import.meta.env.SITE;

  if (!site) {
    throw new Error("A production site URL is required to generate the sitemap.");
  }

  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
      },
    },
  );
}
