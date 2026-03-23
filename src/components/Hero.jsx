import bannerImg from '../assets/banner.png';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid" />

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

          <div className="hero-stats">
            
          </div>
        </div>

        {/* Right: Brand Image */}
        <div className="hero-art">
          <div className="hero-img-wrap">
            <img src={bannerImg} alt="Krayansh Technology" className="hero-img" />
            <div className="hero-img-glow" />
          </div>
        </div>
      </div>

      <button className="hero-scroll" onClick={() => scrollToSection('about')} aria-label="Scroll down">
        <span />
      </button>
    </section>
  );
};

export default Hero;
