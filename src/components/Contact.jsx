import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaHandshake, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_vhlbhhy';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_h8wbvkj';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const infoItems = [
  { icon: <FaMapMarkerAlt />, label: 'Address', value: 'No 34,6e Main Road, 2nd, Phase Bovipalya, Nagapura, Mahalakshmipuram Layout, Bangalore, Bangalore North, Karnataka, India, 560086.' },
  { icon: <FaPhone />, label: 'Phone', value: '+91 9886581294' },
  { icon: <FaEnvelope />, label: 'Email', value: 'info@krayansh.com' },
  { icon: <FaHandshake />, label: 'Partners', value: 'Vincent Thrives', href: 'https://www.vincentthrives.com' },
];

const socials = [
  { icon: <FaLinkedinIn />, label: 'LinkedIn', href: '#' },
  { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/krayansh.global?utm_source=qr&igsh=MTE5MjAzaWJ6cDJkaA==' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EMAILJS_PUBLIC_KEY) {
      setFormStatus('EmailJS Public Key is missing. Please add it to VITE_EMAILJS_PUBLIC_KEY.');
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
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setFormStatus('Message sent! We\'ll get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setFormStatus('Message failed. Please try again or email info@krayansh.com directly.');
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => setFormStatus(''), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        {/* Section heading */}
        <div className="ct-heading">
          <span className="ct-watermark" aria-hidden="true">03</span>
          <p className="ct-eyebrow">Get In Touch</p>
          <h2 className="ct-title">
            Let&apos;s Build <br />
            <span className="ct-accent">Something Great</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="ct-layout">
          {/* Info card */}
          <div className="ct-info-card">
            <div className="ct-info-card-glow" aria-hidden="true" />
            <p className="ct-info-intro">Reach out through any channel. We typically respond within 24 hours.</p>

            <div className="ct-info-list">
              {infoItems.map((item, i) => (
                <div className="ct-info-item" key={i}>
                  <span className="ct-info-icon">{item.icon}</span>
                  <div>
                    <p className="ct-info-label">{item.label}</p>
                    {item.href ? (
                      <a className="ct-info-value ct-info-link" href={item.href} target="_blank" rel="noreferrer">
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
              {socials.map((s, i) => (
                <a href={s.href} className="ct-social" key={i} aria-label={s.label} target={s.href === '#' ? undefined : '_blank'} rel={s.href === '#' ? undefined : 'noreferrer'}>{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="ct-form" onSubmit={handleSubmit}>
            <div className="ct-form-row">
              <div className="ct-field">
                <input type="text" name="name" placeholder=" " value={formData.name} onChange={handleChange} required />
                <label>Your Name</label>
              </div>
              <div className="ct-field">
                <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                <label>Email Address</label>
              </div>
            </div>
            <div className="ct-form-row">
              <div className="ct-field">
                <input type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} />
                <label>Phone Number</label>
              </div>
              <div className="ct-field">
                <input type="text" name="subject" placeholder=" " value={formData.subject} onChange={handleChange} required />
                <label>Subject</label>
              </div>
            </div>
            <div className="ct-field">
              <textarea name="message" rows="5" placeholder=" " value={formData.message} onChange={handleChange} required />
              <label>Your Message</label>
            </div>
            <button type="submit" className="ct-submit" disabled={isSubmitting}>
              Send Message <span className="ct-submit-arrow">→</span>
            </button>
            {formStatus && <p className="ct-status">{formStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


