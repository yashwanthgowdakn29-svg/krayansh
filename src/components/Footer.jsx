import { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/Logo.png';
import './Footer.css';

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: June 8, 2026',
    sections: [
      {
        heading: 'Information We Collect',
        text: 'When you contact Krayansh through this website, we may collect your name, email address, phone number, subject, and message so we can respond to your enquiry.',
      },
      {
        heading: 'How We Use Information',
        text: 'We use submitted information only to communicate with you, understand your requirements, provide support, and improve our services.',
      },
      {
        heading: 'Sharing',
        text: 'We do not sell your personal information. We may share information only when required to provide requested services, comply with law, or protect our business.',
      },
      {
        heading: 'Contact',
        text: 'For privacy questions or data requests, contact us at info@krayansh.com.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated: 'Last updated: June 8, 2026',
    sections: [
      {
        heading: 'Use Of Website',
        text: 'By using this website, you agree to use it only for lawful purposes and not to interfere with the website, its security, or its availability.',
      },
      {
        heading: 'Service Information',
        text: 'Website content is provided for general information about Krayansh services. Final project scope, pricing, timelines, and deliverables are confirmed separately in writing.',
      },
      {
        heading: 'Intellectual Property',
        text: 'All website content, branding, images, text, and design elements belong to Krayansh or their respective owners and may not be copied without permission.',
      },
      {
        heading: 'Contact',
        text: 'For questions about these terms, contact us at info@krayansh.com.',
      },
    ],
  },
};

const Footer = () => {
  const year = new Date().getFullYear();
  const [activeLegal, setActiveLegal] = useState(null);
  const modalContent = activeLegal ? legalContent[activeLegal] : null;

  const scroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top gradient bar */}
      <div className="footer-topbar" />

      <div className="footer-inner">
        {/* Main row */}
        <div className="footer-main">
          {/* Brand col */}
          <div className="footer-brand">
            <img src={logo} alt="Krayansh" className="footer-logo" />
            <p className="footer-tagline">
              Engineering tomorrow's solutions — from software to circuits.
            </p>
            <div className="footer-socials">
              {[
                { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
                { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/krayansh.global?utm_source=qr&igsh=MTE5MjAzaWJ6cDJkaA==' },
              ].map((s) => (
                <a key={s.label} href={s.href} className="fsocial" aria-label={s.label} target={s.href === '#' ? undefined : '_blank'} rel={s.href === '#' ? undefined : 'noreferrer'}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          <div className="footer-links-grid">
            <div className="flinks-col">
              <p className="fcol-title">Navigate</p>
              <ul>
                {[['home','Home'],['about','About'],['services','Services'],['contact','Contact']].map(([id, label]) => (
                  <li key={id}><a onClick={() => scroll(id)} className="flink">{label}</a></li>
                ))}
              </ul>
            </div>

            <div className="flinks-col">
              <p className="fcol-title">Solutions</p>
              <ul>
                {['Web Development','Mobile Apps','Cloud Services','AI & ML','IoT Solutions','Cybersecurity'].map(s => (
                  <li key={s}><a href="#" className="flink">{s}</a></li>
                ))}
              </ul>
            </div>

            <div className="flinks-col">
              <p className="fcol-title">Reach Us</p>
              <ul className="fcontact-list">
                <li><FaEnvelope /><a href="mailto:info@krayansh.com" className="flink">info@krayansh.com</a></li>
                <li><FaPhone /><span>+91 9886581294</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p className="footer-copy">&copy; {year} Krayansh. All rights reserved.</p>
          <div className="footer-legal">
            <button type="button" className="flegal-link" onClick={() => setActiveLegal('privacy')}>Privacy Policy</button>
            <span className="fdot" />
            <button type="button" className="flegal-link" onClick={() => setActiveLegal('terms')}>Terms & Conditions</button>
          </div>
        </div>

        {/* Big decorative word */}
        <div className="footer-wordmark" aria-hidden="true">KRAYANSH</div>
      </div>

      {modalContent && (
        <div className="legal-modal" role="dialog" aria-modal="true" aria-labelledby="legal-modal-title">
          <button type="button" className="legal-modal-backdrop" aria-label="Close modal" onClick={() => setActiveLegal(null)} />
          <div className="legal-modal-panel">
            <div className="legal-modal-head">
              <div>
                <p className="legal-modal-kicker">Krayansh</p>
                <h2 id="legal-modal-title">{modalContent.title}</h2>
                <p>{modalContent.updated}</p>
              </div>
              <button type="button" className="legal-modal-close" onClick={() => setActiveLegal(null)} aria-label="Close modal">x</button>
            </div>
            <div className="legal-modal-body">
              {modalContent.sections.map((section) => (
                <section key={section.heading}>
                  <h3>{section.heading}</h3>
                  <p>{section.text}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
