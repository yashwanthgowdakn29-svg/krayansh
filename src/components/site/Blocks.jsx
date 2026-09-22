import Image from 'next/image';
import Link from 'next/link';
import { brand, factStrip } from '../../data/site';
import Icon from './Icon';
import { DotSphere, WaveField } from './Visuals';
import HeroBackdrop from './HeroBackdrop';
import Reveal from '../Reveal';

/* ---- Dark page hero. Every page opens with one. ----
   The photograph in HeroBackdrop is the hero's visual, so the copy runs as a
   single measured column over it. Passing `art` brings back the brand plate
   for a hero that needs a subject of its own. */
export function PageHero({ eyebrow, title, lead, actions = [], art = null, className = '' }) {
  return (
    <section className={`kg-hero ${className}`.trim()}>
      <HeroBackdrop />

      <div className={`kg-wrap kg-hero-inner${art ? '' : ' kg-hero-narrow'}`}>
        <Reveal>
          {eyebrow && <p className="kg-eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {lead && <p className="kg-hero-lead">{lead}</p>}
          {actions.length > 0 && (
            <div className="kg-actions">
              {actions.map((action) => (
                <Link key={action.href} href={action.href} className={action.ghost ? 'kg-btn-ghost' : 'kg-btn'}>
                  {action.label} <Icon name="arrow" />
                </Link>
              ))}
            </div>
          )}
        </Reveal>

        {art && (
          <Reveal className="kg-hero-art" delay={0.15}>
            <div className="kg-hero-art-sphere" aria-hidden="true"><DotSphere /></div>
            <div className="kg-hero-plate">
              <Image src={brand.logo} alt="" width={128} height={128} />
              <strong>{brand.name}</strong>
              <span>{brand.subtitle}</span>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---- The white strip that straddles the hero edge ---- */
export function FactStrip() {
  return (
    <div className="kg-wrap kg-facts-holder">
      <Reveal className="kg-facts">
        {factStrip.map((fact) => (
          <div className="kg-fact" key={fact.label}>
            <span className="kg-fact-icon"><Icon name={fact.icon} /></span>
            <div>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

export function SectionHead({ kicker, title, text, split = false, center = false, action }) {
  const classes = ['kg-head', split && 'kg-head-split', center && 'kg-head-center'].filter(Boolean).join(' ');

  return (
    <Reveal className={classes}>
      <div>
        {kicker && <p className="kg-kicker">{kicker}</p>}
        <h2>{title}</h2>
      </div>
      {(text || action) && (
        <div>
          {text && <p>{text}</p>}
          {action && (
            <Link href={action.href} className="kg-link kg-head-action">
              {action.label} <Icon name="arrow" />
            </Link>
          )}
        </div>
      )}
    </Reveal>
  );
}

/* ---- Icon + copy card, optionally linked ---- */
export function InfoCard({ id, icon, title, text, href, linkLabel = 'Learn More', delay = 0, variant = '' }) {
  const body = (
    <>
      <span className="kg-card-icon"><Icon name={icon} /></span>
      <h3>{title}</h3>
      <p>{text}</p>
      {href && <span className="kg-link">{linkLabel} <Icon name="arrow" /></span>}
    </>
  );

  const classes = `kg-card ${variant}`.trim();

  return href ? (
    <Reveal as="div" delay={delay} id={id}>
      <Link href={href} className={classes}>{body}</Link>
    </Reveal>
  ) : (
    <Reveal as="article" className={classes} delay={delay} id={id}>{body}</Reveal>
  );
}

export function CtaBand({
  title = 'Let\u2019s build what\u2019s next \u2014 together.',
  text = 'Tell us about your goals and we\u2019ll help you turn ideas into impact.',
  action = { href: '/contact', label: 'Get In Touch' },
}) {
  return (
    <section className="kg-section kg-section-paper">
      <div className="kg-wrap">
        <Reveal className="kg-cta-band">
          <WaveField />
          <div className="kg-cta-copy">
            <span className="kg-cta-mark"><Icon name="rocket" /></span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
          <Link href={action.href} className="kg-btn">{action.label} <Icon name="arrow" /></Link>
        </Reveal>
      </div>
    </section>
  );
}
