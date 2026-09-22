import Link from 'next/link';
import Reveal from '../../src/components/Reveal';
import Icon from '../../src/components/site/Icon';
import { CtaBand, PageHero, SectionHead } from '../../src/components/site/Blocks';
import { getServiceBySlug } from '../../src/data/services';
import { solutionAreas, techStacks } from '../../src/data/site';

export const metadata = {
  title: 'Solutions',
  description: 'Krayansh solution areas: digital platforms, intelligent systems, connected technology and product engineering, each backed by a full delivery team.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions that deliver. Results that matter."
        title={<>Our Solutions,<br /><span className="kg-hl">Real Impact</span></>}
        lead="Explore how we help businesses overcome complex challenges with technology solutions that connect the application, cloud and device layers into one working system."
        actions={[
          { href: '#digital-platforms', label: 'Explore Our Solutions' },
          { href: '/contact', label: 'Talk to Our Experts', ghost: true },
        ]}
      />

      <section className="kg-section">
        <div className="kg-wrap">
          <SectionHead
            split
            kicker="Solution Areas"
            title={<>Four ways we put<br />technology to work</>}
            text="Each area is a complete capability, not a single skill. Bring us one of them, or a challenge that spans all four."
          />

          {solutionAreas.map((area) => (
            <Reveal className="kg-solution" id={area.id} key={area.id}>
              <div>
                <span className="kg-solution-mark"><Icon name={area.icon} /></span>
                <h2>{area.title}</h2>
                <p>{area.summary}</p>
                <div className="kg-solution-services">
                  {area.services.map((slug) => {
                    const service = getServiceBySlug(slug);
                    if (!service) return null;
                    return (
                      <Link href={`/services/${slug}`} key={slug}>
                        <Icon name={service.icon} /> {service.shortTitle}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="kg-solution-panel">
                <p className="kg-kicker">What it includes</p>
                <ul className="kg-bullets">
                  {area.points.map((point) => (
                    <li key={point}><Icon name="check" /> {point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="kg-section kg-section-dark">
        <div className="kg-wrap">
          <SectionHead
            center
            kicker="Built With"
            title="The technologies behind the work"
            text="Tooling we use day to day across the software and hardware practices."
          />
          <div className="kg-tech">
            {techStacks.map((stack, index) => (
              <Reveal className="kg-card kg-tech-card" key={stack.title} delay={index * 0.05}>
                <div className="kg-tech-head">
                  <span className="kg-card-icon"><Icon name={stack.icon} /></span>
                  <h3>{stack.title}</h3>
                </div>
                <div className="kg-chips">
                  {stack.items.map((item) => <span className="kg-chip" key={item}>{item}</span>)}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a challenge that spans more than one area?"
        text="Those are the projects we are built for. Tell us what you are trying to ship."
        action={{ href: '/contact', label: 'Start a Conversation' }}
      />
    </main>
  );
}
