import Link from 'next/link';
import Reveal from '../../src/components/Reveal';
import Icon from '../../src/components/site/Icon';
import { CtaBand, PageHero, SectionHead } from '../../src/components/site/Blocks';
import { insights } from '../../src/data/site';

export const metadata = {
  title: 'Insights',
  description: 'Engineering perspectives from Krayansh on silicon-to-cloud delivery, IoT reliability, applied AI, cloud architecture, DFM and practical security.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights & Perspectives"
        title={<>Ideas Worth<br /><span className="kg-hl">Building On</span></>}
        lead="Notes from the work itself: what we have learned shipping software and hardware together, written for the people who have to make the decisions."
        actions={[{ href: '/contact', label: 'Talk to an Engineer' }]}
      />

      <section className="kg-section">
        <div className="kg-wrap">
          <SectionHead
            split
            kicker="Perspectives"
            title={<>What we are<br />thinking about</>}
            text="Short, opinionated pieces on the decisions that tend to determine whether a technology project lands well."
          />
          <div className="kg-cards">
            {insights.map((post, index) => (
              <Reveal className="kg-card kg-post" key={post.id} delay={index * 0.05}>
                <span className="kg-post-top" aria-hidden="true" />
                <div className="kg-post-body">
                  <span className="kg-tag">{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  <Link href="/contact" className="kg-link">Discuss this with us <Icon name="arrow" /></Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want a longer conversation about any of these?"
        text="We are happy to talk through the specifics of your stack, your constraints and your timeline."
        action={{ href: '/contact', label: 'Get In Touch' }}
      />
    </main>
  );
}
