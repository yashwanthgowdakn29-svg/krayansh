import Image from 'next/image';
import Link from 'next/link';
import { FaBolt, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import bannerImg from '../assets/banner.png';

const marqueeItems = [
  'Software Engineering',
  'Hardware Design',
  'IoT Solutions',
  'AI & Machine Learning',
  'Embedded Systems',
  'Cloud & DevOps',
  'Cybersecurity',
];

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-bg-grid" />
    <div className="hero-bg-glow" aria-hidden="true" />

    <div className="hero-layout">
      <div className="hero-content">
        <span className="hero-tag">Technology &amp; Innovation</span>

        <h1 className="hero-title">
          <span className="line-outline">Transform</span>
          <span className="line-solid">Your Business</span>
          <span className="line-accent">With Us.</span>
        </h1>

        <p className="hero-desc">
          Krayansh delivers high-performance software, hardware, IoT, and AI solutions
          engineered for growth, security, and long-term reliability.
        </p>

        <div className="hero-actions">
          <Link className="hbtn hbtn-primary" href="/#services">
            Explore Services
          </Link>
          <Link className="hbtn hbtn-ghost" href="/#contact">
            Start a Project <span className="arrow">-&gt;</span>
          </Link>
        </div>

        <div className="hero-chips">
          <span className="hero-chip"><FaBolt /> Fast Delivery</span>
          <span className="hero-chip"><FaShieldAlt /> Secure Systems</span>
          <span className="hero-chip"><FaHeadset /> Responsive Support</span>
        </div>
      </div>

      <div className="hero-art">
        <div className="hero-img-card">
          <div className="hero-img-card-border" aria-hidden="true" />
          <Image
            src={bannerImg}
            alt="Krayansh software, hardware, IoT and artificial intelligence engineering"
            className="hero-img"
            priority
            sizes="(max-width: 1100px) 92vw, 50vw"
          />
          <div className="hero-img-shine" aria-hidden="true" />
          <div className="hero-floating-tag hero-floating-tag--tl">
            <span className="hft-dot" />
            AI &amp; Hardware
          </div>
          <div className="hero-floating-tag hero-floating-tag--br">
            <span className="hft-dot" />
            Software Engineering
          </div>
        </div>
      </div>
    </div>

    <div className="hero-marquee-wrap" aria-hidden="true">
      <div className="hero-marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span className="hero-marquee-item" key={`${item}-${index}`}>
            <span className="hero-marquee-dot">+</span> {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
