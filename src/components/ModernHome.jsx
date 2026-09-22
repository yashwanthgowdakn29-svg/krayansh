import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheck, FaCloud, FaCode, FaMicrochip, FaMobileAlt, FaNetworkWired, FaRobot, FaShieldAlt } from 'react-icons/fa';
import premiumHero from '../assets/krayansh-premium-hero.png';
import expertise from '../assets/expertise.png';
import { services } from '../data/services';
import Reveal from './Reveal';

const capabilityIcons=[FaCode,FaMobileAlt,FaCloud,FaRobot,FaShieldAlt,FaMicrochip];
const industries=['Industrial & IoT','Retail & Commerce','Healthcare','Education','Startups & Scale-ups','Enterprise Operations'];
const process=[['01','Discover','Understand the business, users and measurable outcome.'],['02','Define','Shape the right solution, architecture and delivery plan.'],['03','Deliver','Build, test and release through transparent iterations.'],['04','Evolve','Support, optimise and scale as requirements grow.']];

export default function ModernHome(){
 const featured=services.filter(s=>s.category==='software').slice(0,5).concat(services.filter(s=>s.slug==='iot-edge-computing'));
 return <div className="modern-home">
  <section className="mh-hero" id="home">
   <div className="mh-grid"/>
   <div className="mh-shell mh-hero-grid">
    <Reveal className="mh-hero-copy">
     <div className="mh-badge"><span/> Bengaluru-based technology company</div>
     <h1>Engineering digital solutions.<br/><em>Creating products for tomorrow.</em></h1>
     <p>Krayansh helps organisations design, build and scale dependable software, AI, cloud, IoT and embedded solutions—while developing the next generation of proprietary technology products.</p>
     <div className="mh-actions"><Link href="/#contact" className="mh-btn mh-btn-primary">Start a conversation <FaArrowRight/></Link><Link href="/#services" className="mh-btn mh-btn-secondary">Explore capabilities</Link></div>
     <div className="mh-trust"><span><FaCheck/> Client-first delivery</span><span><FaCheck/> Software + hardware expertise</span><span><FaCheck/> Long-term support</span></div>
    </Reveal>
    <Reveal className="mh-hero-visual" delay={.12}>
     <div className="mh-visual-top"><span>KRAYANSH / TECHNOLOGY</span><span className="mh-live"><i/> Engineering in progress</span></div>
     <div className="mh-visual-image"><Image src={premiumHero} alt="Abstract technology visual representing Krayansh innovation" fill priority sizes="(max-width: 960px) 100vw, 48vw"/></div>
     <div className="mh-visual-footer"><div><small>Core capabilities</small><strong>Software · AI · IoT · Embedded</strong></div><span>01</span></div>
    </Reveal>
   </div>
   <div className="mh-capability-strip">{['Web Platforms','Mobile Products','Cloud Systems','Artificial Intelligence','IoT & Edge','Embedded Engineering'].map(x=><span key={x}>{x}</span>)}</div>
  </section>

  <section className="mh-intro" id="company"><div className="mh-shell">
   <Reveal className="mh-section-head"><div><span className="mh-kicker">Who we are</span><h2>One technology partner.<br/><em>Two ambitions.</em></h2></div><p>We deliver high-quality technology services for clients today and channel that experience into proprietary products for the future.</p></Reveal>
   <div className="mh-pillar-grid">
    <Reveal as="article" className="mh-business-card"><span>01 / Client Services</span><h3>Technology that moves your business forward.</h3><p>From digital products and cloud platforms to connected hardware, we solve practical business challenges with reliable engineering.</p><Link href="/#services">Explore our services <FaArrowRight/></Link></Reveal>
    <Reveal as="article" className="mh-business-card mh-business-card-dark" delay={.1}><span>02 / Products &amp; Innovation</span><h3>Ideas designed to become scalable products.</h3><p>We are building internal product capabilities around AI, connected systems and automation, informed by real market needs.</p><Link href="/#innovation">See our direction <FaArrowRight/></Link></Reveal>
   </div>
  </div></section>

  <section className="mh-services" id="services"><div className="mh-shell">
   <Reveal className="mh-section-head"><div><span className="mh-kicker">What we do</span><h2>End-to-end technology <em>capabilities.</em></h2></div><p>Strategy, experience and engineering brought together to take ideas from concept to dependable operation.</p></Reveal>
   <div className="mh-service-grid">{featured.map((s,i)=>{const Icon=capabilityIcons[i];return <Reveal as="article" className="mh-service-card" delay={i*.05} key={s.slug}><div className="mh-service-icon"><Icon/></div><span>0{i+1}</span><h3>{s.title}</h3><p>{s.description}</p><Link href={`/services/${s.slug}`} aria-label={`Learn about ${s.title}`}><FaArrowRight/></Link></Reveal>})}</div>
   <div className="mh-services-footer"><p>Need hardware, PCB, embedded or system integration expertise?</p><Link href="/#contact">Discuss your requirement <FaArrowRight/></Link></div>
  </div></section>

  <section className="mh-solutions"><div className="mh-shell mh-solutions-grid">
   <Reveal className="mh-solutions-image"><Image src={expertise} alt="Krayansh engineering expertise" fill sizes="(max-width: 900px) 100vw, 48vw"/><div><span>Integrated engineering</span><strong>Digital experiences connected to real-world systems.</strong></div></Reveal>
   <Reveal className="mh-solutions-copy" delay={.1}><span className="mh-kicker">Why Krayansh</span><h2>Built around outcomes, not just outputs.</h2><p>Our teams connect technology decisions to business value. You receive a practical solution, clear communication and an engineering foundation that remains maintainable after launch.</p><ul><li><FaCheck/><div><strong>Cross-disciplinary expertise</strong><span>Software, cloud, AI, electronics and connected devices.</span></div></li><li><FaCheck/><div><strong>Transparent engagement</strong><span>Clear scope, milestones, reviews and delivery ownership.</span></div></li><li><FaCheck/><div><strong>Future-ready architecture</strong><span>Secure, scalable systems designed for long-term growth.</span></div></li></ul></Reveal>
  </div></section>

  <section className="mh-industries" id="industries"><div className="mh-shell">
   <Reveal className="mh-section-head mh-head-light"><div><span className="mh-kicker">Where we create value</span><h2>Solutions shaped for <em>your industry.</em></h2></div><p>We adapt our engineering approach to the workflows, users and operational realities of each organisation.</p></Reveal>
   <div className="mh-industry-list">{industries.map((x,i)=><Reveal className="mh-industry" delay={i*.04} key={x}><span>0{i+1}</span><strong>{x}</strong><FaArrowRight/></Reveal>)}</div>
  </div></section>

  <section className="mh-process" id="approach"><div className="mh-shell">
   <Reveal className="mh-section-head"><div><span className="mh-kicker">How we deliver</span><h2>A clear path from <em>idea to impact.</em></h2></div><p>Our structured process keeps every engagement focused, visible and accountable.</p></Reveal>
   <div className="mh-process-grid">{process.map((s,i)=><Reveal as="article" delay={i*.06} key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></Reveal>)}</div>
  </div></section>

  <section className="mh-innovation" id="innovation"><div className="mh-shell mh-innovation-grid">
   <Reveal><span className="mh-kicker">Products &amp; innovation</span><h2>From service expertise to <em>owned innovation.</em></h2><p>Our client work gives us firsthand insight into recurring business challenges. Over the coming years, Krayansh will transform selected insights into focused, proprietary products across software, AI, automation and connected technology.</p><Link href="/#contact" className="mh-btn mh-btn-primary">Explore a partnership <FaArrowRight/></Link></Reveal>
   <Reveal className="mh-roadmap" delay={.1}><div><small>Present</small><span/><h3>Client Solutions</h3><p>Solving defined business and engineering challenges.</p></div><div><small>Building</small><span/><h3>Reusable Platforms</h3><p>Turning proven capabilities into repeatable technology foundations.</p></div><div><small>Future</small><span/><h3>Krayansh Products</h3><p>Launching focused products with lasting market value.</p></div></Reveal>
  </div></section>

  <section className="mh-cta"><div className="mh-shell"><Reveal><span>Have a requirement or product idea?</span><h2>Let’s build technology that creates lasting value.</h2><Link href="/#contact">Talk to our team <FaArrowRight/></Link></Reveal></div></section>
 </div>
}