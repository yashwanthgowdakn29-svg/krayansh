import Image from 'next/image';
import aboutVisual from '../../src/assets/about.webp';
import Reveal from '../../src/components/Reveal';
import Icon from '../../src/components/site/Icon';
import { CtaBand, FactStrip, InfoCard, PageHero, SectionHead } from '../../src/components/site/Blocks';
import { journey, mission, values } from '../../src/data/site';

export const metadata = {
  title: 'About Us',
  description: 'Krayansh is a Bengaluru technology company joining a software practice and a hardware practice under one accountable engineering team.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Krayansh"
        title={<>Technology Built<br />Around Your <span className="kg-hl">Business</span></>}
        lead="We partner with businesses to solve complex challenges and unlock new opportunities through innovative technology. Our commitment to excellence, agility and client success drives everything we do."
        actions={[
          { href: '/services', label: 'Explore Our Services' },
          { href: '/contact', label: 'Get In Touch', ghost: true },
        ]}
      />

      <FactStrip />

      <section className="kg-section">
        <div className="kg-wrap kg-split">
          <Reveal>
            <p className="kg-kicker">Who We Are</p>
            <h2>Empowering Businesses Through Technology</h2>
            <p className="kg-body">
              Krayansh is a technology company focused on delivering IT and engineering solutions that
              empower businesses to grow, scale and succeed in the digital era. We combine domain
              expertise with emerging technologies to build future-ready solutions that drive
              measurable impact.
            </p>
            <p className="kg-body">
              Two practices sit under one roof — software and hardware — which means firmware,
              connectivity and the application layer are designed by the same accountable team rather
              than stitched together across vendors.
            </p>
            <ul className="kg-bullets">
              <li><Icon name="check" /> Product thinking and engineering depth in one partnership</li>
              <li><Icon name="check" /> Delivery with visible milestones and clean handover</li>
              <li><Icon name="check" /> Support that turns operational insight into the next advantage</li>
            </ul>
          </Reveal>
          <Reveal className="kg-split-media" delay={0.12}>
            <Image src={aboutVisual} alt="The Krayansh engineering team at work" placeholder="blur" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="kg-split-caption">
              <strong>Bengaluru studio</strong>
              <span>One team, from silicon to cloud</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="kg-section kg-section-white">
        <div className="kg-wrap">
          <div className="kg-mv">
            <Reveal className="kg-card">
              <div className="kg-mv-head">
                <span className="kg-card-icon"><Icon name="rocket" /></span>
                <h3>Our Mission</h3>
              </div>
              <p>{mission.mission}</p>
            </Reveal>
            <Reveal className="kg-card" delay={0.08}>
              <div className="kg-mv-head">
                <span className="kg-card-icon"><Icon name="star" /></span>
                <h3>Our Vision</h3>
              </div>
              <p>{mission.vision}</p>
            </Reveal>
            <Reveal className="kg-card" delay={0.16}>
              <h3>Our Values</h3>
              <div className="kg-mv-values">
                {mission.values.map((value) => (
                  <div className="kg-mv-value" key={value.title}>
                    <Icon name={value.icon} />
                    <strong>{value.title}</strong>
                    <span>{value.text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="kg-section">
        <div className="kg-wrap">
          <SectionHead
            split
            kicker="Our Journey"
            title={<>Where we are<br />and where we are going</>}
            text="Client work is where we earn our insight. Alongside it, Krayansh is building focused product ideas in AI, connected systems and automation."
          />
          <div className="kg-journey">
            {journey.map((node, index) => (
              <Reveal className="kg-journey-node" key={node.phase} delay={index * 0.08}>
                <span className="kg-journey-dot"><Icon name={node.icon} /></span>
                <span className="kg-journey-phase">{node.phase}</span>
                <h3>{node.title}</h3>
                <p>{node.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section kg-section-white">
        <div className="kg-wrap">
          <SectionHead center kicker="Why Choose Us" title="Your Partner in Digital Excellence" text="We combine innovation, expertise and a customer-first approach to deliver solutions that drive measurable results." />
          <div className="kg-cards">
            {values.map((value, index) => (
              <InfoCard key={value.title} icon={value.icon} title={value.title} text={value.text} variant="kg-value" delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
