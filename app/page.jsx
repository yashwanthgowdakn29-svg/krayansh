import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import { services } from '../src/data/services';

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Krayansh',
  url: 'https://krayansh.com',
  logo: 'https://krayansh.com/tab-logo.png',
  email: 'info@krayansh.com',
  telephone: '+91-9886581294',
  sameAs: [
    'https://www.instagram.com/krayansh.global',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 34, 6E Main Road, 2nd Phase, Bovipalya, Nagapura, Mahalakshmipuram Layout',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560086',
    addressCountry: 'IN',
  },
  knowsAbout: services.map((service) => service.title),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Krayansh',
  url: 'https://krayansh.com',
  inLanguage: 'en-IN',
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}
