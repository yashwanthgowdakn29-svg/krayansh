import aboutBanner from '../assets/aboutbanner.png';
import missionImg  from '../assets/mission.jpg';
import visionImg   from '../assets/vision.png';
import valuesImg   from '../assets/leadership.png';
import './About.css';

const pillars = [
  {
    num: '01',
    img: missionImg,
    title: 'Our Mission',
    text: 'To deliver innovative technology solutions that drive real business success and empower growth.',
  },
  {
    num: '02',
    img: visionImg,
    title: 'Our Vision',
    text: 'To become the premier technology partner for businesses worldwide, shaping tomorrow\'s digital landscape.',
  },
  {
    num: '03',
    img: valuesImg,
    title: 'Our Values',
    text: 'Innovation, Quality, Integrity, and unwavering commitment to Customer Success.',
  },
];

const highlights = [
  { value: '24/7', label: 'Support' },
  { value: '100%', label: 'Client Focus' },
  { value: '∞',   label: 'Innovation' },
];

const About = () => (
  <section className="about" id="about">
    {/* Background glow */}
    <div className="about-bg-glow" aria-hidden="true" />

    <div className="about-inner">

      {/* ── TOP SPLIT ── */}
      <div className="about-split">

        {/* Left: text */}
        <div className="about-text-col">
          <div className="about-heading-group">
            <span className="about-eyebrow">About Us</span>
            <h2 className="about-title">
              Who We Are &amp; <br />
              <span className="about-title-accent">What Drives Us</span>
            </h2>
          </div>

          <p className="about-intro">
            Krayansh is a technology company dedicated to delivering innovative
            software and hardware solutions — turning ideas into reality for
            businesses that refuse to settle for ordinary.
          </p>

          {/* Highlight pills */}
          <div className="about-highlights">
            {highlights.map((h, i) => (
              <div className="about-hl" key={i}>
                <span className="about-hl-val">{h.value}</span>
                <span className="about-hl-label">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image card */}
        <div className="about-img-frame">
          <div className="about-img-card-border" aria-hidden="true" />
          <div className="about-img-col">
            <img src={aboutBanner} alt="About Krayansh" className="about-banner-img" />
            <div className="about-img-overlay" />
          </div>
          <div className="about-img-tag about-img-tag--tl">
            <span className="about-tag-dot" /> Krayansh Technologies
          </div>
          <div className="about-img-tag about-img-tag--br">
            <span className="about-tag-dot" /> Est. 2020
          </div>
        </div>
      </div>

      {/* ── PILLARS ── */}
      <div className="pillars">
        {pillars.map((p) => (
          <div className="pillar" key={p.num}>
            <div className="pillar-img-wrap">
              <img src={p.img} alt={p.title} className="pillar-img" />
              <div className="pillar-img-overlay" />
              <span className="pillar-num" aria-hidden="true">{p.num}</span>
            </div>
            <div className="pillar-body">
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-text">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default About;
