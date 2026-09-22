'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/Logo.png';

const navigation = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <Link href="/#home" className="logo-container" aria-label="Krayansh home">
          <Image src={logo} alt="Krayansh" className="logo" priority sizes="120px" />
        </Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Primary navigation">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="nav-cta" href="/#contact" onClick={() => setIsMenuOpen(false)}>
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
