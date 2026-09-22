import Reveal from '../../src/components/Reveal';
import Icon from '../../src/components/site/Icon';
import ContactForm from '../../src/components/site/ContactForm';
import HeroBackdrop from '../../src/components/site/HeroBackdrop';
import { contact } from '../../src/data/site';

export const metadata = {
  title: 'Contact Us',
  description: 'Talk to Krayansh about software, hardware, IoT or AI engineering. Based in Bengaluru, Karnataka, India.',
  alternates: { canonical: '/contact' },
};

const channels = [
  {
    icon: 'mail',
    label: 'Email Us',
    value: contact.email,
    href: contact.emailHref,
  },
  {
    icon: 'phone',
    label: 'Call Us',
    value: contact.phone,
    href: contact.phoneHref,
  },
  {
    icon: 'pin',
    label: 'Visit Us',
    value: contact.city,
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="kg-hero kg-contact">
        <HeroBackdrop />

        <div className="kg-wrap kg-contact-inner">
          <Reveal>
            <p className="kg-eyebrow">Contact Us</p>
            <h1>Let&apos;s Build Something <span className="kg-hl">Great</span></h1>
            <p className="kg-hero-lead">
              Have a project in mind, or want to explore how we can help your business grow?
              We&apos;d love to hear from you. {contact.response}.
            </p>

            <div className="kg-contact-cards">
              {channels.map((channel) => {
                const inner = (
                  <>
                    <span className="kg-contact-icon"><Icon name={channel.icon} /></span>
                    <div>
                      <strong>{channel.label}</strong>
                      <span>{channel.value}</span>
                    </div>
                    {channel.href && <Icon name="arrow" />}
                  </>
                );

                return channel.href ? (
                  <a className="kg-contact-card" href={channel.href} key={channel.label}>{inner}</a>
                ) : (
                  <div className="kg-contact-card" key={channel.label}>{inner}</div>
                );
              })}
            </div>

            <address className="kg-address">
              {contact.addressLines.map((line) => <span key={line}>{line}</span>)}
            </address>
          </Reveal>

          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
