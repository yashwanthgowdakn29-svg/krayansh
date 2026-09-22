import Reveal from '../../src/components/Reveal';
import Icon from '../../src/components/site/Icon';
import { CtaBand, InfoCard, PageHero, SectionHead } from '../../src/components/site/Blocks';
import { industries, techStacks } from '../../src/data/site';

export const metadata = {
  title: 'Industries & Technologies',
  description: 'The industries Krayansh builds for and the technologies we use across web, mobile, cloud, AI, backend and embedded hardware.',
  alternates: { canonical: '/industries' },
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries & Technologies"
        title={<>Industries We Serve.<br />Technologies <span className="kg-hl">We Use.</span></>}
        lead="We combine domain understanding with modern technology to create scalable, secure and intelligent solutions tailored to the environment each industry actually operates in."
        actions={[
          { href: '#industries', label: 'Explore Our Industries' },
          { href: '#technologies', label: 'Explore Technologies', ghost: true },
        ]}
      />

      <section className="kg-section" id="industries">
        <div className="kg-wrap">
          <SectionHead
            split
            kicker="Industries We Serve"
            title={<>Empowering Businesses<br />Across Key Industries</>}
            text="We deliver purpose-built solutions that address the constraints of each sector, from regulated data handling to hardware that has to survive a factory floor."
          />
          <div className="kg-cards">
            {industries.map((industry, index) => (
              <InfoCard
                key={industry.id}
                id={industry.id}
                icon={industry.icon}
                title={industry.title}
                text={industry.text}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section kg-section-white" id="technologies">
        <div className="kg-wrap">
          <SectionHead
            split
            kicker="Technologies We Use"
            title={<>Modern Technologies.<br />Measurable Impact.</>}
            text="Our stack is chosen per project rather than by habit. These are the tools we reach for most often."
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

      <CtaBand />
    </main>
  );
}
