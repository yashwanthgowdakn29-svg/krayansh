import Reveal from '../../src/components/Reveal';
import Icon from '../../src/components/site/Icon';
import { CtaBand, InfoCard, PageHero, SectionHead } from '../../src/components/site/Blocks';
import { careerAreas, contact, cultureNotes } from '../../src/data/site';

export const metadata = {
  title: 'Careers',
  description: 'Build your career at Krayansh. We hire across software engineering, embedded and firmware, cloud and DevOps, AI and data, design, and hardware and PCB.',
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Careers at Krayansh"
        title={<>Build Your Future<br />With <span className="kg-hl">Krayansh</span></>}
        lead="We believe great people build great solutions. Join a team that works across the whole system, from firmware on the board to the application your customer opens."
        actions={[
          { href: '#areas', label: 'See Where We Hire' },
          { href: `mailto:${contact.email}?subject=Application%20%E2%80%94%20Krayansh`, label: 'Send Your Resume', ghost: true },
        ]}
      />

      <div className="kg-wrap kg-facts-holder">
        <Reveal className="kg-facts kg-facts-notes">
          {cultureNotes.map((note) => (
            <div className="kg-fact" key={note.title}>
              <span className="kg-fact-icon"><Icon name={note.icon} /></span>
              <div>
                <strong>{note.title}</strong>
                <span>{note.text}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <section className="kg-section" id="areas">
        <div className="kg-wrap">
          <SectionHead
            split
            kicker="Where We Hire"
            title="Find Your Next Opportunity"
            text="We recruit into these disciplines as projects grow. If your work fits one of them, we would like to hear from you even when nothing is formally posted."
          />
          <div className="kg-cards">
            {careerAreas.map((area, index) => (
              <InfoCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                text={area.text}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="kg-section kg-section-white">
        <div className="kg-wrap">
          <Reveal className="kg-resume">
            <div>
              <h3>Don&apos;t see the right role?</h3>
              <p>
                We are always interested in talented engineers and designers. Send your resume and a
                short note about the work you want to do, and we will get in touch when something
                matching comes up.
              </p>
            </div>
            <a
              className="kg-btn"
              href={`mailto:${contact.email}?subject=Application%20%E2%80%94%20Krayansh`}
            >
              Submit Your Resume <Icon name="arrow" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Prefer to ask a question first?"
        text="Reach the team directly and we will point you to the right person."
        action={{ href: '/contact', label: 'Contact Us' }}
      />
    </main>
  );
}
