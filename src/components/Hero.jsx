import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaBolt, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import bannerImg from '../assets/banner.png';
import Reveal from './Reveal';

const marqueeItems = ['Software Engineering','Hardware Design','IoT Solutions','AI & Machine Learning','Embedded Systems','Cloud & DevOps','Cybersecurity'];
const outcomes = [{value:'01',label:'Integrated team',detail:'Design, software and hardware under one roof'},{value:'02',label:'Built to scale',detail:'Architecture that grows with your ambition'},{value:'03',label:'End-to-end',detail:'From discovery through launch and support'}];

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-bg-grid" aria-hidden="true" />
    <div className="hero-bg-glow" aria-hidden="true" />

    <div className="hero-layout">
      <Reveal className="hero-content">
        <div className="hero-overline">
          <span className="hero-tag">Software services & product innovation</span>
        </div>

        <h1 className="hero-title">
          <span className="line-solid">Digital solutions</span>
          <span className="line-outline">for today&apos;s business.</span>
          <span className="line-accent">Products for tomorrow.</span>
        </h1>

        <p className="hero-desc">
          We design and engineer dependable software, connected systems and digital platforms for organisations ready to grow—while investing in the products of tomorrow.
        </p>

        <div className="hero-actions">
          <Link className="hbtn hbtn-primary" href="/#contact">Discuss your requirements <FaArrowRight /></Link>
          <Link className="hbtn hbtn-ghost" href="/#services">View our services</Link>
        </div>

        <div className="hero-chips" aria-label="Our commitments">
          <span className="hero-chip"><FaBolt /> Agile delivery</span>
          <span className="hero-chip"><FaShieldAlt /> Secure by design</span>
          <span className="hero-chip"><FaHeadset /> Long-term support</span>
        </div>
      </Reveal>

      <Reveal className="hero-art" delay={0.15}>
        <div className="hero-img-card">
          <Image src={bannerImg} alt="Krayansh engineering software, hardware, IoT and AI products" className="hero-img" priority sizes="(max-width: 1100px) 92vw, 48vw" />
          <div className="hero-img-shine" aria-hidden="true" />
          <div className="hero-visual-caption">
            <span>Services today. Products tomorrow.</span>
            <strong>Engineering dependable solutions with a long-term product vision.</strong>
          </div>
          <div className="hero-orbit" aria-hidden="true"><span>K</span></div>
        </div>
      </Reveal>
    </div>

    <Reveal className="hero-outcomes" delay={0.25}>{outcomes.map((item) => <div className="hero-outcome" key={item.value}><span>{item.value}</span><div><strong>{item.label}</strong><p>{item.detail}</p></div></div>)}</Reveal>

    <div className="hero-marquee-wrap" aria-hidden="true">
      <div className="hero-marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span className="hero-marquee-item" key={`${item}-${index}`}><span className="hero-marquee-dot">◆</span>{item}</span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;