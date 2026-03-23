import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';
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
    text: 'To become the premier technology partner for businesses worldwide, shaping tomorrows digital landscape.',
  },
  {
    num: '03',
    img: valuesImg,
    title: 'Our Values',
    text: 'Innovation, Quality, Integrity, and unwavering commitment to Customer Success.',
  },
];

const stats = [
  { num: '24/7', label: 'Support Available' },
];

const About = () => (
  <section className="about" id="about">
    <div className="about-inner">

      {/* Top split: text left, image right */}
      <div className="about-split">
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
          {/* Stats inside text col */}
          <div className="about-stats">
            {stats.map((s, i) => (
              <div className="astat" key={i}>
                <span className="astat-num">{s.num}</span>
                <span className="astat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-img-col">
          <img src={aboutBanner} alt="About Krayansh" className="about-banner-img" />
          <div className="about-img-overlay" />
        </div>
      </div>

      {/* Pillars */}
      <div className="pillars">
        {pillars.map((p) => (
          <div className="pillar" key={p.num}>
            {p.img ? (
              <div className="pillar-img-wrap">
                <img src={p.img} alt={p.title} className="pillar-img" />
                <div className="pillar-img-overlay" />
              </div>
            ) : (
              <div className="pillar-icon-wrap">
                <div className="pillar-icon">{p.icon}</div>
              </div>
            )}
            <span className="pillar-num" aria-hidden="true">{p.num}</span>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-text">{p.text}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default About;
