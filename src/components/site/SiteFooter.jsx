import Image from 'next/image';
import Link from 'next/link';
import { services } from '../../data/services';
import { brand, contact, navigation } from '../../data/site';
import Icon from './Icon';
import { WaveField } from './Visuals';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="kg-footer">
      <WaveField className="kg-footer-wave" />

      <div className="kg-wrap kg-footer-top">
        <div className="kg-footer-brand">
          <Link href="/" className="kg-logo" aria-label={`${brand.name} home`}>
            <span className="kg-logo-mark"><Image src={brand.logo} alt="" width={46} height={46} /></span>
            <span className="kg-logo-text">
              <strong>{brand.name}</strong>
              <small>{brand.subtitle}</small>
            </span>
          </Link>
          <p>{brand.description}</p>
          <div className="kg-socials">
            <a href={contact.instagram} className="kg-social" target="_blank" rel="noreferrer" aria-label={`${brand.name} on Instagram`}>
              <Icon name="instagram" />
            </a>
            <a href={contact.emailHref} className="kg-social" aria-label={`Email ${brand.name}`}>
              <Icon name="mail" />
            </a>
            <a href={contact.phoneHref} className="kg-social" aria-label={`Call ${brand.name}`}>
              <Icon name="phone" />
            </a>
          </div>
        </div>

        <div className="kg-footer-col">
          <h3>Quick Links</h3>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="kg-footer-col">
          <h3>Our Services</h3>
          <ul>
            {services.slice(0, 7).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>{service.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="kg-footer-col kg-footer-contact">
          <h3>Contact Details</h3>
          <ul>
            <li>
              <Icon name="pin" />
              <p>{contact.addressLines.slice(1).join(' ')}</p>
            </li>
            <li>
              <Icon name="mail" />
              <a href={contact.emailHref}>{contact.email}</a>
            </li>
            <li>
              <Icon name="phone" />
              <a href={contact.phoneHref}>{contact.phone}</a>
            </li>
          </ul>
        </div>

        <div className="kg-footer-col kg-footer-connect">
          <h3>Let&apos;s Connect</h3>
          <p>Let&apos;s collaborate to build solutions that move your business forward.</p>
          <Link href="/contact" className="kg-btn">Get In Touch <Icon name="arrow" /></Link>
        </div>
      </div>

      <div className="kg-wrap">
        <div className="kg-footer-bottom">
          <p>&copy; {year} Krayansh. All rights reserved.</p>
          <div className="kg-footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
