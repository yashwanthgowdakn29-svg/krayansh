import { services } from '../src/data/services';

export default function sitemap() {
  const lastModified = new Date();
  const staticRoutes = ['', '/privacy-policy', '/terms-and-conditions'];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `https://krayansh.com${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services/') ? 0.8 : 0.4,
  }));
}
