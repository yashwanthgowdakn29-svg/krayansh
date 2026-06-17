import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, serviceCategories, services } from '../../../src/data/services';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: `${service.description} Explore Krayansh ${service.title.toLowerCase()} services in Bengaluru, India.`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      type: 'website',
      url: `/services/${service.slug}`,
      title: `${service.title} | Krayansh`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const relatedServices = services
    .filter((item) => item.category === service.category && item.slug !== service.slug)
    .slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Krayansh',
      url: 'https://krayansh.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    url: `https://krayansh.com/services/${service.slug}`,
  };

  return (
    <main className="seo-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="seo-page-inner">
        <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#services">Services</Link>
          <span>/</span>
          <span aria-current="page">{service.title}</span>
        </nav>

        <header className="seo-hero">
          <p className="seo-eyebrow">{serviceCategories[service.category].label}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <Link className="seo-primary-link" href="/#contact">Discuss Your Project</Link>
        </header>

        <section className="seo-content-section" aria-labelledby="capabilities-title">
          <div>
            <p className="seo-eyebrow">Capabilities</p>
            <h2 id="capabilities-title">What We Deliver</h2>
          </div>
          <ul className="seo-benefit-grid">
            {service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
          </ul>
        </section>

        <section className="seo-related" aria-labelledby="related-title">
          <h2 id="related-title">Related Services</h2>
          <div className="seo-related-grid">
            {relatedServices.map((related) => (
              <Link href={`/services/${related.slug}`} key={related.slug}>
                <h3>{related.title}</h3>
                <p>{related.description}</p>
                <span>Learn more -&gt;</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
