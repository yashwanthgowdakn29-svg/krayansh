'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaHandshake, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_vhlbhhy';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_h8wbvkj';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const infoItems = [
  {
    icon: <FaMapMarkerAlt />,
    label: 'Address',
    value: 'No 34, 6E Main Road, 2nd Phase, Bovipalya, Nagapura, Mahalakshmipuram Layout, Bengaluru, Karnataka 560086, India.',
  },
  { icon: <FaPhone />, label: 'Phone', value: '+91 9886581294', href: 'tel:+919886581294' },
  { icon: <FaEnvelope />, label: 'Email', value: 'info@krayansh.com', href: 'mailto:info@krayansh.com' },
  { icon: <FaHandshake />, label: 'Partner', value: 'Vincent Thrives', href: 'https://www.vincentthrives.com' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!EMAILJS_PUBLIC_KEY) {
      setFormStatus('Email service configuration is incomplete. Please email info@krayansh.com directly.');
      return;
    }

    setIsSubmitting(true);
    setFormStatus('Sending...');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      setFormStatus('Message sent! We will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setFormStatus('Message failed. Please try again or email info@krayansh.com directly.');
    } finally {
      setIsSubmitting(false);
      window.setTimeout(() => setFormStatus(''), 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="ct-heading">
          <span className="ct-watermark" aria-hidden="true">03</span>
          <p className="ct-eyebrow">Get In Touch</p>
          <h2 className="ct-title">
            Let&apos;s Build <br />
            <span className="ct-accent">Something Great</span>
          </h2>
        </div>

        <div className="ct-layout">
          <div className="ct-info-card">
            <div className="ct-info-card-glow" aria-hidden="true" />
            <p className="ct-info-intro">Reach out through any channel. We typically respond within 24 hours.</p>

            <div className="ct-info-list">
              {infoItems.map((item) => (
                <div className="ct-info-item" key={item.label}>
                  <span className="ct-info-icon">{item.icon}</span>
                  <div>
                    <p className="ct-info-label">{item.label}</p>
                    {item.href ? (
                      <a
                        className="ct-info-value ct-info-link"
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="ct-info-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="ct-socials">
              <a
                href="https://www.instagram.com/krayansh.global?utm_source=qr&igsh=MTE5MjAzaWJ6cDJkaA=="
                className="ct-social"
                aria-label="Krayansh on Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <form className="ct-form" onSubmit={handleSubmit}>
            <div className="ct-form-row">
              <div className="ct-field">
                <input type="text" name="name" autoComplete="name" placeholder=" " value={formData.name} onChange={handleChange} required />
                <label>Your Name</label>
              </div>
              <div className="ct-field">
                <input type="email" name="email" autoComplete="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                <label>Email Address</label>
              </div>
            </div>
            <div className="ct-form-row">
              <div className="ct-field">
                <input type="tel" name="phone" autoComplete="tel" placeholder=" " value={formData.phone} onChange={handleChange} />
                <label>Phone Number</label>
              </div>
              <div className="ct-field">
                <input type="text" name="subject" placeholder=" " value={formData.subject} onChange={handleChange} required />
                <label>Subject</label>
              </div>
            </div>
            <div className="ct-field">
              <textarea name="message" rows="5" placeholder=" " aria-label="Your Message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="ct-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <span className="ct-submit-arrow">-&gt;</span>
            </button>
            {formStatus && <p className="ct-status" aria-live="polite">{formStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
