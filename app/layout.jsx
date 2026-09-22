import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import SiteHeader from '../src/components/site/SiteHeader';
import SiteFooter from '../src/components/site/SiteFooter';
import '../src/styles/theme.css';
import '../src/styles/template.css';
import './seo-pages.css';

/* Geometric grotesk for display, Inter for running text — the pairing the
   reference design uses for its headline/body contrast. */
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const siteUrl = 'https://krayansh.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Krayansh | Software, Hardware, IoT & AI Engineering',
    template: '%s | Krayansh',
  },
  description: 'Krayansh is a Bengaluru technology company delivering web, mobile, cloud, AI, IoT, embedded systems, PCB design, and engineering solutions.',
  applicationName: 'Krayansh',
  keywords: [
    'software development company Bengaluru',
    'hardware engineering company India',
    'IoT solutions Bengaluru',
    'AI development services',
    'embedded systems development',
    'PCB design and prototyping',
    'cloud and DevOps services',
  ],
  authors: [{ name: 'Krayansh', url: siteUrl }],
  creator: 'Krayansh',
  publisher: 'Krayansh',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Krayansh',
    title: 'Krayansh | Software, Hardware, IoT & AI Engineering',
    description: 'Software and hardware engineering solutions for businesses building reliable digital and connected products.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krayansh | Software, Hardware, IoT & AI Engineering',
    description: 'Software and hardware engineering solutions for businesses building reliable digital and connected products.',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/tab-icon.png',
  },
  category: 'technology',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060d1d',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${inter.variable}`}>
      <head>
        {/* Reveal-on-scroll needs IntersectionObserver; without JS the
            observer never runs, so make sure nothing stays invisible. */}
        <noscript>
          <style>{'.reveal{opacity:1 !important;transform:none !important}'}</style>
        </noscript>
      </head>
      <body>
        <div className="app">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
