import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/index.css';
import '../src/App.css';
import '../src/components/Header.css';
import '../src/components/Hero.css';
import '../src/components/About.css';
import '../src/components/Services.css';
import '../src/components/Contact.css';
import '../src/components/Footer.css';
import './seo-pages.css';

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
  alternates: {
    canonical: '/',
  },
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
  themeColor: '#f6fafb',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <div className="app">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
