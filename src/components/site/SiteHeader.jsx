'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand, navigation } from '../../data/site';
import Icon from './Icon';

/* Desktop dropdowns open on hover *and* focus-within, so the menu is fully
   reachable by keyboard without any JS state. The drawer below handles the
   same navigation on touch, where hover does not exist. */
export default function SiteHeader() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes. Adjusting during render is
  // React's own pattern for state derived from a changing input — an effect
  // here would cost an extra render pass with the drawer still open.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setDrawerOpen(false);
    setOpenGroup(null);
  }

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <>
      <header className={`kg-header${solid ? ' is-solid' : ''}`}>
        <div className="kg-wrap kg-header-inner">
          <Link href="/" className="kg-logo" aria-label={`${brand.name} home`}>
            <span className="kg-logo-mark">
              <Image src={brand.logo} alt="" width={46} height={46} priority />
            </span>
            <span className="kg-logo-text">
              <strong>{brand.name}</strong>
              <small>{brand.subtitle}</small>
            </span>
          </Link>

          <nav className="kg-nav" aria-label="Primary">
            <ul className="kg-nav-list">
              {navigation.map((item) => (
                <li className="kg-nav-item" key={item.href}>
                  <Link href={item.href} className={`kg-nav-link${isActive(item.href) ? ' is-active' : ''}`}>
                    {item.label}
                    {item.children && <Icon name="chevron" />}
                  </Link>
                  {item.children && (
                    <div className="kg-dropdown">
                      {item.children.map((child) => (
                        <Link href={child.href} className="kg-dropdown-link" key={child.href}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/contact" className="kg-btn kg-header-cta">
            Get In Touch <Icon name="arrow" />
          </Link>

          <button
            type="button"
            className="kg-burger"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((open) => !open)}
          >
            <Icon name={drawerOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </header>

      <div className={`kg-drawer${drawerOpen ? ' is-open' : ''}`} aria-hidden={!drawerOpen}>
        {navigation.map((item) => (
          <div key={item.href}>
            {item.children ? (
              <button
                type="button"
                className="kg-drawer-link"
                aria-expanded={openGroup === item.href}
                onClick={() => setOpenGroup((current) => (current === item.href ? null : item.href))}
              >
                {item.label} <Icon name="chevron" />
              </button>
            ) : (
              <Link href={item.href} className="kg-drawer-link" tabIndex={drawerOpen ? 0 : -1}>
                {item.label}
              </Link>
            )}

            {item.children && openGroup === item.href && (
              <div className="kg-drawer-sub">
                <Link href={item.href}>All {item.label}</Link>
                {item.children.map((child) => (
                  <Link href={child.href} key={child.href}>{child.label}</Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link href="/contact" className="kg-btn" tabIndex={drawerOpen ? 0 : -1}>
          Get In Touch <Icon name="arrow" />
        </Link>
      </div>
    </>
  );
}
