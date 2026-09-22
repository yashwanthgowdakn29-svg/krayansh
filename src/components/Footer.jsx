'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaInstagram, FaPhone } from 'react-icons/fa';
import logo from '../assets/Logo.png';
import { legalContent } from '../data/legal';
import { services } from '../data/services';

const Footer = () => {
  const year = new Date().getFullYear();
  const [activeLegal, setActiveLegal] = useState(null);
  const modalContent = activeLegal ? legalContent[activeLegal] : null;

  useEffect(() => {
    if (!activeLegal) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveLegal(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeLegal]);

  const openLegal = (event, key) => {
    event.preventDefault();
    setActiveLegal(key);
  };

  return (
    <footer className="footer">
      <div className="footer-topbar" />

      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/#home" aria-label="Krayansh home">
              <Image src={logo} alt="Krayansh" className="footer-logo" sizes="80px" />
            </Link>
            <p className="footer-tagline">
              Engineering tomorrow&apos;s solutions, from software to circuits.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/krayansh.global?utm_source=qr&igsh=MTE5MjAzaWJ6cDJkaA=="
                className="fsocial"
                aria-label="Krayansh on Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="flinks-col">
              <p className="fcol-title">Navigate</p>
              <ul>
                {[
                  ['/#home', 'Home'],
                  ['/#about', 'About'],
                  ['/#services', 'Services'],
                  ['/#contact', 'Contact'],
                ].map(([href, label]) => (
                  <li key={href}><Link href={href} className="flink">{label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="flinks-col">
              <p className="fcol-title">Solutions</p>
              <ul>
                {services.slice(0, 6).map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="flink">{service.shortTitle}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flinks-col">
              <p className="fcol-title">Reach Us</p>
              <ul className="fcontact-list">
                <li><FaEnvelope /><a href="mailto:info@krayansh.com" className="flink">info@krayansh.com</a></li>
                <li><FaPhone /><a href="tel:+919886581294" className="flink">+91 9886581294</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {year} Krayansh. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy-policy" className="flegal-link" onClick={(event) => openLegal(event, 'privacy')}>
              Privacy Policy
            </Link>
            <span className="fdot" />
            <Link href="/terms-and-conditions" className="flegal-link" onClick={(event) => openLegal(event, 'terms')}>
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

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
              <Link className="legal-modal-page-link" href={`/${modalContent.slug}`} onClick={() => setActiveLegal(null)}>
                Open full page
              </Link>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
