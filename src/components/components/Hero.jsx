import { FaBolt, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import bannerImg from '../assets/banner.png';
import './Hero.css';

const marqueeItems = [
  'Software Engineering',
  'Hardware Design',
  'IoT Solutions',
  'AI & Machine Learning',
  'Embedded Systems',
  'Cloud & DevOps',
  'Cybersecurity',
];

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Background layers */}
      
      <div className="hero-bg-grid" />
      <div className="hero-bg-glow" aria-hidden="true" />

      <div className="hero-layout">
        {/* Left: Content */}
        <div className="hero-content">
          
          <span className="hero-tag">✦ Technology &amp; Innovation</span>

          <h1 className="hero-title">
            <span className="line-outline">Transform</span>
            <span className="line-solid">Your Business</span>
            <span className="line-accent">With Us.</span>
          </h1>

          <p className="hero-desc">
            Krayansh delivers cutting-edge software &amp; hardware solutions
            engineered for performance, scale, and the future.
          </p>

          <div className="hero-actions">
            <button className="hbtn hbtn-primary" onClick={() => scrollToSection('services')}>
              Explore Services
            </button>
            <button className="hbtn hbtn-ghost" onClick={() => scrollToSection('contact')}>
              Start a Project <span className="arrow">→</span>
            </button>
          </div>

          {/* Pill chips */}
          <div className="hero-chips">
            <span className="hero-chip"><FaBolt /> Fast Delivery</span>
            <span className="hero-chip"><FaShieldAlt /> Secure Systems</span>
            <span className="hero-chip"><FaHeadset /> 24/7 Support</span>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-art">
          <div className="hero-img-card">
            <div className="hero-img-card-border" aria-hidden="true" />
            <img src={bannerImg} alt="Krayansh Technology" className="hero-img" loading="eager" fetchPriority="high" decoding="async" />
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

      {/* Marquee strip */}
      <div className="hero-marquee-wrap" aria-hidden="true">
        <div className="hero-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="hero-marquee-item" key={i}>
              <span className="hero-marquee-dot">◆</span> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
      
