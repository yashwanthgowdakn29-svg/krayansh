import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/Logo.png';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

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
                { icon: <FaLinkedinIn />, label: 'LinkedIn' },
                { icon: <FaTwitter />, label: 'Twitter' },
                { icon: <FaFacebookF />, label: 'Facebook' },
                { icon: <FaInstagram />, label: 'Instagram' },
              ].map((s) => (
                <a key={s.label} href="#" className="fsocial" aria-label={s.label}>{s.icon}</a>
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
                <li><FaEnvelope /><span>info@krayansh.com</span></li>
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
            <a href="#" className="flegal-link">Privacy Policy</a>
            <span className="fdot" />
            <a href="#" className="flegal-link">Terms of Service</a>
          </div>
        </div>

        {/* Big decorative word */}
        <div className="footer-wordmark" aria-hidden="true">KRAYANSH</div>
      </div>
    </footer>
  );
};

export default Footer;
