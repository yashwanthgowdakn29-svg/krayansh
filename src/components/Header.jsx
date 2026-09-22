'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Logo3.png';

const navigation = [
  { href: '/#home', label: 'Home' },
  { href: '/#company', label: 'Company' },
  { href: '/#capabilities', label: 'Capabilities' },
  { href: '/#approach', label: 'Approach' },
  { href: '/#innovation', label: 'Innovation' },
  { href: '/#contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.split('#')[1]))
      .filter(Boolean);

    if (!sections.length || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) => (
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          ));
          setActiveSection(topmost.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <Link href="/#home" className="logo-container" aria-label="Krayansh home">
          <span className="logo-mark"><Image src={logo} alt="" className="logo" priority sizes="48px" /></span>
          <span className="brand-lockup">
            <strong>KRAYANSH</strong>
            <small>Technology &amp; Innovation</small>
          </span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map((item) => {
              const sectionId = item.href.split('#')[1];
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`nav-link${activeSection === sectionId ? ' active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link className="nav-cta" href="/#contact" onClick={() => setIsMenuOpen(false)}>
            Start a project <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <button className="menu-toggle" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
