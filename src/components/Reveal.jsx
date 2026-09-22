'use client';

import { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, as: Tag = 'div', delay = 0, className = '', ...rest }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      const timer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(timer);
    }

    // Reaching the fold is the condition, not strictly intersecting it: an
    // element already scrolled past reports isIntersecting false forever, so
    // testing the top edge covers "in view" and "above view" alike. The
    // observer's first callback applies this to the element's state on mount.
    const reached = () => node.getBoundingClientRect().top < window.innerHeight;

    let cleanup;

    const show = () => {
      setVisible(true);
      cleanup();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) show();
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    );

    // An instant jump — an anchor link, a restored scroll position — can move
    // the element from below the fold to above it without the observer ever
    // seeing an intersecting frame, so back it with a cheap scroll check.
    const onScroll = () => { if (reached()) show(); };

    cleanup = () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };

    observer.observe(node);
    window.addEventListener('scroll', onScroll, { passive: true });

    return cleanup;
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
