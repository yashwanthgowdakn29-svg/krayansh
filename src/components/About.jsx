import Image from 'next/image';
import aboutBanner from '../assets/aboutbanner.png';
import missionImg from '../assets/mission.jpg';
import visionImg from '../assets/vision.png';
import valuesImg from '../assets/leadership.png';
import Reveal from './Reveal';

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
    text: 'To become a trusted technology partner for businesses worldwide and help shape the digital future.',
  },
  {
    num: '03',
    img: valuesImg,
    title: 'Our Values',
    text: 'Innovation, quality, integrity, and an unwavering commitment to customer success.',
  },
];

const highlights = [
  { value: '24/7', label: 'Support' },
  { value: '100%', label: 'Client Focus' },
  { value: 'Always', label: 'Innovation' },
];

const About = () => (
  <section className="about" id="about">
    <div className="about-bg-glow" aria-hidden="true" />

    <div className="about-inner">
      <div className="about-split">
        <Reveal className="about-text-col">
          <div className="about-heading-group">
            <span className="about-eyebrow">About Us</span>
            <h2 className="about-title">
              Who We Are &amp; <br />
              <span className="about-title-accent">What Drives Us</span>
            </h2>
          </div>

          <p className="about-intro">
            Krayansh is a technology company in Bengaluru delivering software and
            hardware solutions that turn ambitious ideas into practical products.
          </p>

          <div className="about-highlights">
            {highlights.map((highlight) => (
              <div className="about-hl" key={highlight.label}>
                <span className="about-hl-val">{highlight.value}</span>
                <span className="about-hl-label">{highlight.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="about-img-frame" delay={0.15}>
          <div className="about-img-card-border" aria-hidden="true" />
          <div className="about-img-col">
            <Image
              src={aboutBanner}
              alt="Krayansh technology engineering capabilities"
              className="about-banner-img"
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <div className="about-img-overlay" />
          </div>
          <div className="about-img-tag about-img-tag--tl">
            <span className="about-tag-dot" /> Krayansh
          </div>
          <div className="about-img-tag about-img-tag--br">
            <span className="about-tag-dot" /> Bengaluru, India
          </div>
        </Reveal>
      </div>

      <div className="pillars">
        {pillars.map((pillar, index) => (
          <Reveal as="article" className="pillar" delay={index * 0.1} key={pillar.num}>
            <div className="pillar-img-wrap">
              <Image
                src={pillar.img}
                alt={`${pillar.title} at Krayansh`}
                className="pillar-img"
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="pillar-img-overlay" />
              <span className="pillar-num" aria-hidden="true">{pillar.num}</span>
            </div>
            <div className="pillar-body">
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-text">{pillar.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default About;
