import Reveal from '../../src/components/Reveal';
import { CtaBand, FactStrip, InfoCard, PageHero, SectionHead } from '../../src/components/site/Blocks';
import { serviceCategories, services } from '../../src/data/services';

export const metadata = {
  title: 'Services',
  description: 'End-to-end technology services from Krayansh: web and mobile development, cloud, AI, cybersecurity, enterprise software, PCB design, IoT, embedded systems and more.',
  alternates: { canonical: '/services' },
};

const groups = Object.entries(serviceCategories).map(([key, category]) => ({
  key,
  label: category.label,
  items: services.filter((service) => service.category === key),
}));

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Innovate. Integrate. Elevate."
        title={<>Powerful Technology.<br /><span className="kg-hl">Purposeful</span> Solutions.</>}
        lead="We deliver scalable, secure and innovative technology services that help businesses streamline operations, accelerate growth and stay ahead in a digital-first world."
        actions={[
          { href: '#all-services', label: 'Explore Our Services' },
          { href: '/contact', label: 'Speak to an Expert', ghost: true },
        ]}
      />

      <FactStrip />

      <section className="kg-section" id="all-services">
        <div className="kg-wrap">
          <SectionHead
            split
            kicker="Our Services"
            title={<>End-to-End Technology Solutions<br />Designed for Your Success</>}
            text="From strategy to execution, we offer a comprehensive range of services to help you innovate, optimise and scale with confidence."
          />

          {groups.map((group) => (
            <div key={group.key} className="kg-service-group">
              <Reveal className="kg-group-title">
                <h3>{group.label}</h3>
                <span>{group.items.length} services</span>
              </Reveal>
              <div className="kg-cards">
                {group.items.map((service, index) => (
                  <InfoCard
                    key={service.slug}
                    icon={service.icon}
                    title={service.title}
                    text={service.description}
                    href={`/services/${service.slug}`}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        text="Tell us the problem you are trying to solve and we will point you at the right starting place."
        action={{ href: '/contact', label: 'Talk to Our Team' }}
      />
    </main>
  );
}
