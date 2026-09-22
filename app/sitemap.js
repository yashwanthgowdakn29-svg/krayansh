import { services } from '../src/data/services';

const pageRoutes = ['', '/about', '/services', '/solutions', '/industries', '/insights', '/careers', '/contact'];
const legalRoutes = ['/privacy-policy', '/terms-and-conditions'];

export default function sitemap() {
  const lastModified = new Date();
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  const priorityFor = (route) => {
    if (route === '') return 1;
    if (legalRoutes.includes(route)) return 0.4;
    if (route.startsWith('/services/')) return 0.8;
    return 0.9;
  };

  return [...pageRoutes, ...serviceRoutes, ...legalRoutes].map((route) => ({
    url: `https://krayansh.com${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: priorityFor(route),
  }));
}
