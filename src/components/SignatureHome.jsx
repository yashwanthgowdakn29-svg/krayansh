import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaExternalLinkAlt, FaCheck, FaCode, FaMicrochip, FaNetworkWired, FaRobot } from 'react-icons/fa';
import heroVisual from '../assets/blog1.webp';
import systemVisual from '../assets/image7.webp';
import innovationVisual from '../assets/robotics.webp';
import closingVisual from '../assets/aboutbanner.webp';
import perspectiveVisual from '../assets/about.webp';
import platformVisual from '../assets/blog.webp';
import intelligenceVisual from '../assets/image4.jpeg';
import connectedVisual from '../assets/blog2.webp';
import productVisual from '../assets/blog6.webp';
import { services } from '../data/services';
import Reveal from './Reveal';

const capabilities = [
  { number: '01', icon: FaCode, title: 'Digital platforms', image: platformVisual, alt: 'Product planning for a Krayansh web and mobile platform', text: 'Web applications, enterprise systems and customer experiences designed around real workflows.', links: [['Web Applications', '/services/web-application-development'], ['Mobile Applications', '/services/mobile-application-development'], ['Enterprise Solutions', '/services/enterprise-solutions']] },
  { number: '02', icon: FaRobot, title: 'Intelligent systems', image: intelligenceVisual, alt: 'AI and machine learning systems built by Krayansh', text: 'Data-led automation and AI capabilities that turn everyday operations into an advantage.', links: [['AI & Machine Learning', '/services/ai-machine-learning'], ['Cloud & DevOps', '/services/cloud-devops'], ['Cybersecurity', '/services/cybersecurity-services']] },
  { number: '03', icon: FaNetworkWired, title: 'Connected technology', image: connectedVisual, alt: 'Connected IoT devices and edge computing solutions', text: 'IoT ecosystems that connect devices, data and decision-making in the real world.', links: [['IoT & Edge Computing', '/services/iot-edge-computing'], ['System Integration', '/services/system-integration'], ['Network Infrastructure', '/services/network-infrastructure']] },
  { number: '04', icon: FaMicrochip, title: 'Product engineering', image: productVisual, alt: 'Embedded systems and hardware prototyping at Krayansh', text: 'Electronics, embedded systems and prototyping for technology products made to endure.', links: [['Embedded Systems', '/services/embedded-systems'], ['PCB Design & Prototyping', '/services/pcb-design-prototyping'], ['Sustaining Engineering', '/services/sustaining-engineering']] },
];

const principles = [
  ['Discover', 'Frame the opportunity, users and constraints before writing code.'],
  ['Design', 'Create the experience, system architecture and plan for delivery.'],
  ['Deliver', 'Build with visible milestones, rigorous testing and clean handover.'],
  ['Evolve', 'Support the platform and turn insight into its next advantage.'],
];

// Only facts that are true of the site's own content — no invented metrics.
const specs = [
  ['Disciplines', `${services.length} services`],
  ['Coverage', 'Silicon → Cloud'],
  ['Based in', 'Bengaluru, IN'],
];

/* PCB-style traces behind the hero: right angles and 45° runs, drawn in on
   load via stroke-dashoffset. Pure CSS animation, so this stays a server
   component and costs nothing at runtime. */
const traces = [
  { d: 'M0 96 H150 L196 142 H392 L428 106 H620', dash: 700, delay: 0 },
  { d: 'M0 232 H92 L150 174 H330 L378 222 H560', dash: 660, delay: 0.18, live: true },
  { d: 'M0 372 H210 L262 320 H470', dash: 520, delay: 0.34 },
  { d: 'M0 486 H128 L182 540 H408 L452 496 H640', dash: 700, delay: 0.5 },
  { d: 'M0 604 H286 L338 552 H540', dash: 560, delay: 0.66, live: true },
];

const pads = [[620, 106], [560, 222], [470, 320], [640, 496], [540, 552]];

/* Links from the core panel out to each delivery layer, with signal flowing
   along them — the board reads as a wired system rather than a card grid. */
const nodeLinks = [
  { d: 'M30 50 H62 V22 H97', live: true },
  { d: 'M30 50 H62 V50 H97', live: false },
  { d: 'M30 50 H62 V78 H97', live: true },
  { d: 'M30 50 H62 V50 H97', live: false },
];

function NodeGraph() {
  return (
    <svg className="sch-node-graph" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      {nodeLinks.map((link, index) => (
        <path key={`${link.d}-${index}`} d={link.d} className={link.live ? 'sch-link-live' : ''} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

function HeroTraces() {
  return (
    <svg className="sch-hero-traces" viewBox="0 0 760 700" fill="none" aria-hidden="true" focusable="false" preserveAspectRatio="xMinYMid meet">
      {traces.map((trace) => (
        <path
          key={trace.d}
          d={trace.d}
          className="sch-live"
          style={{ '--dash': trace.dash, animationDelay: `${trace.delay}s` }}
        />
      ))}
      {/* Duplicate overlay for the live runs: a slow signal travelling the
          trace. Kept on its own element so it can't fight the draw-in. */}
      {traces.filter((trace) => trace.live).map((trace, index) => (
        <path key={`flow-${trace.d}`} d={trace.d} className="sch-flowline" style={{ animationDelay: `${2 + index * 1.2}s` }} />
      ))}
      {pads.map(([cx, cy], index) => (
        <circle key={`${cx}-${cy}`} className="sch-pad" cx={cx} cy={cy} style={{ animationDelay: `${1.4 + index * 0.14}s` }} />
      ))}
    </svg>
  );
}

export default function SignatureHome() {
  return <div className="sig-home">
    <section className="sig-hero" id="home">
      <div className="sig-hero-lines" aria-hidden="true"/>
      <HeroTraces/>
      <div className="sig-wrap sig-hero-wrap">
        <Reveal className="sig-hero-content">
          <p className="sig-eyebrow"><span/> Krayansh · technology, engineered</p>
          <h1>From complex ideas<br/>to <em>clear advantage.</em></h1>
          <p className="sig-lead">Krayansh partners with ambitious organisations to build intelligent software, connected systems and the technology products of tomorrow.</p>
          <div className="sig-actions"><Link className="sig-primary" href="/#contact">Start a conversation <FaArrowRight/></Link><Link className="sig-text-link" href="/#capabilities">Explore capabilities <FaExternalLinkAlt/></Link></div>
          <dl className="sch-specs">
            {specs.map(([label, value]) => <div className="sch-spec" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </Reveal>
        <Reveal className="sig-hero-art" delay={.12}>
          <div className="sig-art-number"><span>01</span><i>KR</i></div>
          <div className="sig-art-frame"><Image placeholder="blur" src={heroVisual} alt="Abstract Krayansh technology innovation visual" fill priority sizes="(max-width: 960px) 100vw, 48vw"/></div>
          <div className="sig-art-note"><span>Integrated technology</span><strong>Designed to connect</strong></div><div className="sig-art-signal"><i/> System intelligence</div>
        </Reveal>
      </div>
      <div className="sig-wrap sig-hero-foot"><span>Software services today</span><i/><span>Products & innovation tomorrow</span><p>Based in Bengaluru · Serving ambitious teams</p></div>
    </section>

    <section className="sig-statement" id="company"><div className="sig-wrap">
      <Reveal><p className="sig-eyebrow sig-eyebrow-blue"><span/> The Krayansh perspective</p><h2>Good technology is not a collection of features.<br/><em>It is a system that moves a business forward.</em></h2></Reveal>
      <Reveal className="sig-statement-bottom" delay={.12}>
        <div className="sig-statement-copy"><p>We bring product thinking and engineering depth into one accountable partnership. Our work starts with the problem that matters and stays focused on the result it needs to create.</p><div className="sig-statement-mark"><span>01</span><strong>A team that sees the whole system.</strong></div></div>
        <figure className="sig-statement-figure"><Image placeholder="blur" src={perspectiveVisual} alt="Krayansh engineering team working together in Bengaluru" fill sizes="(max-width: 1000px) 100vw, 46vw"/><figcaption><i/> Bengaluru studio · one accountable team</figcaption></figure>
      </Reveal>
    </div></section>

    <section className="sig-capabilities" id="capabilities"><div className="sig-wrap">
      <Reveal className="sig-section-intro"><div><p className="sig-eyebrow sig-eyebrow-blue"><span/> Core capabilities</p><h2>Everything needed to make technology <em>work together.</em></h2></div><p>Choose a focused capability or bring us a bigger challenge. We connect the disciplines required to make a solution work in the real world.</p></Reveal>
      <div className="sig-capability-list">{capabilities.map((item, index) => { const Icon = item.icon; return <Reveal as="article" className="sig-capability" delay={index * .06} key={item.number}><span className="sig-cap-num">{item.number}</span><Icon className="sig-cap-icon"/><div className="sig-cap-main"><h3>{item.title}</h3><p>{item.text}</p></div><div className="sig-cap-media"><Image placeholder="blur" src={item.image} alt={item.alt} fill sizes="(max-width: 1000px) 100vw, 200px"/></div><div className="sig-cap-links">{item.links.map(([label, href]) => <Link href={href} key={href}>{label}<FaExternalLinkAlt/></Link>)}</div></Reveal>; })}</div>
    </div></section>

    <section className="sig-architecture"><div className="sig-wrap sig-architecture-wrap">
      <Reveal className="sig-architecture-aside"><p className="sig-eyebrow"><span/> Why it works</p><h2>One connected<br/><em>engineering mindset.</em></h2><p>Decisions made across design, application, cloud and device layers create a product that is coherent from the inside out.</p></Reveal>
      <Reveal className="sig-system-board sch-frame" delay={.1}>
        <NodeGraph/>
        <div className="sig-system-bar"><span>KR / delivery-system</span><strong><i/> Connected by design</strong></div>
        <div className="sig-system-body">
          <div className="sig-system-core">
            <Image placeholder="blur" className="sig-system-core-image" src={systemVisual} alt="Krayansh engineering expertise" fill sizes="(max-width: 700px) 100vw, 24vw"/>
            <div className="sig-system-core-overlay" aria-hidden="true"/>
            <div className="sig-system-core-content"><span>01 / Focus</span><h3>One team.<br/><em>Clear direction.</em></h3><p>Strategy, engineering and operational thinking brought together from the start.</p></div>
            <div className="sig-core-orbit" aria-hidden="true"><b>KR</b><i/><i/><i/></div>
          </div>
          <div className="sig-system-layers">{[['02','Experience','Customer journeys'],['03','Engineering','Software & systems'],['04','Intelligence','Data & automation'],['05','Operations','Cloud & devices']].map(([number,title,detail]) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div><FaArrowRight/></article>)}</div>
        </div>
        <div className="sig-system-footer"><span>Shared context</span><i/><span>Decisive delivery</span><i/><span>Built to evolve</span></div>
      </Reveal>
    </div></section>

    <section className="sig-method" id="approach"><div className="sig-wrap">
      <Reveal className="sig-section-intro sig-method-intro"><div><p className="sig-eyebrow sig-eyebrow-blue"><span/> Our approach</p><h2>Rigour in the process.<br/><em>Momentum in the work.</em></h2></div><p>A practical, visible way of working keeps the project aligned and gives your team confidence at every stage.</p></Reveal>
      <div className="sig-method-grid">
        <div className="sch-chain" aria-hidden="true"><i/></div>
        {principles.map(([title, text], index) => <Reveal as="article" delay={index * .07} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
      </div>
    </div></section>

    <section className="sig-innovation" id="innovation"><div className="sig-wrap sig-innovation-wrap">
      <Reveal className="sig-innovation-copy"><p className="sig-eyebrow"><span/> Beyond services</p><h2>Building the things<br/>we believe should <em>exist.</em></h2><p>Client work is where we earn our insight. Alongside it, Krayansh is building focused product ideas in AI, connected systems and automation—technology created for enduring value, not just the next release.</p><Link className="sig-light-link" href="/#contact">Talk to our innovation team <FaArrowRight/></Link></Reveal>
      <Reveal className="sig-evolution" delay={.12}>
        <Image placeholder="blur" className="sig-evolution-image" src={innovationVisual} alt="Krayansh robotics and connected-systems innovation" fill sizes="(max-width: 1000px) 100vw, 42vw"/>
        <div className="sig-evolution-overlay" aria-hidden="true"/>
        <div className="sig-evolution-content"><div className="sig-evolution-label">How we are evolving</div><article><span>Now</span><h3>Client technology partner</h3><p>Solving urgent digital and engineering challenges.</p></article><article><span>Next</span><h3>Reusable intelligence</h3><p>Turning proven capability into robust technology foundations.</p></article><article><span>Future</span><h3>Krayansh products</h3><p>Launching proprietary products where we can create distinct value.</p></article></div>
      </Reveal>
    </div></section>

    <section className="sig-close"><div className="sig-wrap"><Reveal className="sig-close-panel">
      <Image placeholder="blur" className="sig-close-image" src={closingVisual} alt="Krayansh team and technology collaboration" fill sizes="100vw"/>
      <div className="sig-close-overlay" aria-hidden="true"/>
      <div className="sig-close-content"><p className="sig-eyebrow"><span/> Let&apos;s make progress</p><h2>Bring us the challenge<br/>you cannot afford to get wrong.</h2><Link className="sig-primary" href="/#contact">Speak with Krayansh <FaArrowRight/></Link></div>
    </Reveal></div></section>
  </div>;
}