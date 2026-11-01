export default async function sitemap() {
  const routes = ["", "/about", "/Resume", "/blog", "/ai-examples"].map(
    (route) => ({
      url: `${process.env.SITE_URL}${route}`,
      lastModified: new Date().toISOString(),
    }),
  );

  return [...routes];
}
