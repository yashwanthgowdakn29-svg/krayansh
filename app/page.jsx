import Image from 'next/image';
import Link from 'next/link';
import aboutVisual from '../src/assets/aboutbanner.webp';
import heroVisual from '../src/assets/krayansh-premium-hero.png';
import Reveal from '../src/components/Reveal';
import Icon from '../src/components/site/Icon';
import { CtaBand, FactStrip, InfoCard, SectionHead } from '../src/components/site/Blocks';
import { services } from '../src/data/services';
import { approach, contact, solutionAreas, values } from '../src/data/site';

const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Krayansh',
  url: 'https://krayansh.com',
  logo: 'https://krayansh.com/tab-logo.png',
  email: contact.email,
  telephone: '+91-9886581294',
  sameAs: [contact.instagram],
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

      <main className="kg-home">
        <section className="kg-home-hero">
          <div className="kg-home-hero-grid" aria-hidden="true" />
          <div className="kg-wrap kg-home-hero-inner">
            <Reveal className="kg-home-hero-copy">
              <p className="kg-home-status"><i /> Technology, engineered in Bengaluru</p>
              <h1>Complex ideas.<br />Engineered into<br /><em>clear advantage.</em></h1>
              <p className="kg-home-lead">
                We bring software, AI, connected systems and product engineering together to build technology that performs in the real world.
              </p>
              <div className="kg-home-actions">
                <Link href="/services" className="kg-btn">Explore Our Services <Icon name="arrow" /></Link>
                <Link href="/contact" className="kg-home-text-link">Start a conversation <Icon name="arrow" /></Link>
              </div>
              <div className="kg-home-disciplines" aria-label="Core capabilities">
                <span>Software</span><i /><span>AI &amp; Data</span><i /><span>IoT</span><i /><span>Embedded</span>
              </div>
            </Reveal>

            <Reveal className="kg-home-visual" delay={0.12}>
              <div className="kg-home-visual-frame">
                <Image
                  src={heroVisual}
                  alt="Abstract connected technology system representing Krayansh engineering"
                  fill
                  priority
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="kg-home-visual-shade" />
                <div className="kg-home-visual-index"><span>01</span><small>KR / SYSTEMS</small></div>
                <div className="kg-home-visual-note"><i /><span>Integrated engineering</span><strong>Silicon to cloud</strong></div>
              </div>
              <div className="kg-home-orbit" aria-hidden="true"><i /><i /><i /></div>
            </Reveal>
          </div>
          <div className="kg-home-hero-foot">
            <div className="kg-wrap"><span>Digital platforms</span><span>Intelligent systems</span><span>Connected products</span></div>
          </div>
        </section>

        <FactStrip />

        <section className="kg-section kg-home-services">
          <div className="kg-wrap">
            <SectionHead
              split
              kicker="Our Services"
              title={<>Solutions That Drive<br />Digital Transformation</>}
              text="From strategy to execution, we deliver end-to-end technology solutions that help businesses innovate, optimise and scale with confidence."
              action={{ href: '/services', label: 'View All Services' }}
            />
            <div className="kg-home-service-grid">
              {services.slice(0, 6).map((service, index) => (
                <Reveal as="article" className="kg-home-service" key={service.slug} delay={index * 0.05}>
                  <Link href={`/services/${service.slug}`}>
                    <span className="kg-home-service-num">0{index + 1}</span>
                    <span className="kg-home-service-icon"><Icon name={service.icon} /></span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="kg-home-service-link">Explore capability <Icon name="arrow" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="kg-section kg-section-white kg-home-values">
          <div className="kg-wrap">
            <SectionHead
              center
              kicker="The Krayansh Advantage"
              title="Built on Values. Driven by Impact."
              text="We go beyond technology to build trust, drive innovation and deliver outcomes that help businesses thrive in a digital-first world."
            />
            <div className="kg-cards">
              {values.map((value, index) => (
                <InfoCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  text={value.text}
                  variant="kg-value"
                  delay={index * 0.05}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="kg-section">
          <div className="kg-wrap kg-split">
            <Reveal>
              <p className="kg-kicker">One Connected Team</p>
              <h2>Software and hardware, engineered under one roof.</h2>
              <p className="kg-body">
                Decisions made across the design, application, cloud and device layers produce a product
                that is coherent from the inside out — and far fewer of the seams that cause failures later.
              </p>
              <ul className="kg-bullets">
                {solutionAreas.map((area) => (
                  <li key={area.id}><Icon name="check" /> {area.title}: {area.summary}</li>
                ))}
              </ul>
              <Link href="/solutions" className="kg-link kg-head-action">Explore our solutions <Icon name="arrow" /></Link>
            </Reveal>
            <Reveal className="kg-split-media" delay={0.12}>
              <Image src={aboutVisual} alt="Krayansh engineering team collaborating in Bengaluru" placeholder="blur" sizes="(max-width: 1024px) 100vw, 55vw" />
              <div className="kg-split-caption">
                <strong>Silicon to cloud</strong>
                <span>One accountable delivery team, Bengaluru</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="kg-section kg-section-white">
          <div className="kg-wrap">
            <SectionHead
              center
              kicker="Our Approach"
              title="Rigour in the process. Momentum in the work."
              text="A practical, visible way of working keeps the project aligned and gives your team confidence at every stage."
            />
            <div className="kg-steps">
              {approach.map((step, index) => (
                <Reveal className="kg-step" key={step.step} delay={index * 0.08}>
                  <span className="kg-step-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </>
  );
}
