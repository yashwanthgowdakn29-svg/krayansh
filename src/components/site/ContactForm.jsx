'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contact } from '../../data/site';
import Icon from './Icon';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_vhlbhhy';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_h8wbvkj';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const empty = { name: '', company: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!PUBLIC_KEY) {
      setStatus({ state: 'error', text: `Email service is not configured. Please write to ${contact.email} directly.` });
      return;
    }

    setSending(true);
    setStatus({ state: 'info', text: 'Sending\u2026' });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone || 'Not provided',
          subject: form.subject,
          // Company is also folded into the body so it survives even if the
          // EmailJS template has no {{company}} placeholder yet.
          message: `Company: ${form.company || 'Not provided'}\n\n${form.message}`,
        },
        { publicKey: PUBLIC_KEY },
      );

      setStatus({ state: 'ok', text: 'Message sent. We will get back to you shortly.' });
      setForm(empty);
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setStatus({ state: 'error', text: `Message failed. Please try again or email ${contact.email} directly.` });
    } finally {
      setSending(false);
      window.setTimeout(() => setStatus(null), 6000);
    }
  };

  const field = (name, label, icon, type = 'text', wide = false) => (
    <div className={`kg-field${wide ? ' kg-field-wide' : ''}`}>
      <label className="kg-sr-only" htmlFor={`kg-${name}`}>{label}</label>
      <input
        id={`kg-${name}`}
        name={name}
        type={type}
        value={form[name]}
        onChange={update}
        placeholder={`${label} *`}
        required
      />
      <Icon name={icon} />
    </div>
  );

  return (
    <div className="kg-form-card">
      <h2>Send Us a Message</h2>
      <p>Fill out the form and our team will get back to you shortly.</p>

      <form className="kg-form" onSubmit={handleSubmit} noValidate={false}>
        {field('name', 'Full Name', 'users')}
        {field('company', 'Company Name', 'briefcase')}
        {field('email', 'Email Address', 'mail', 'email')}
        {field('phone', 'Phone Number', 'phone', 'tel')}
        {field('subject', 'Subject', 'star', 'text', true)}

        <div className="kg-field kg-field-wide">
          <label className="kg-sr-only" htmlFor="kg-message">Message</label>
          <textarea
            id="kg-message"
            name="message"
            value={form.message}
            onChange={update}
            placeholder="Message *"
            required
          />
          <Icon name="pen" />
        </div>

        <div className="kg-form-foot">
          <button type="submit" className="kg-btn" disabled={sending}>
            {sending ? 'Sending\u2026' : 'Send Message'} <Icon name="arrow" />
          </button>
          <span className="kg-form-note">
            <Icon name="shield" /> We respect your privacy. Your information is safe with us.
          </span>
        </div>

        {status && (
          <p className="kg-form-status" data-state={status.state} role="status">{status.text}</p>
        )}
      </form>
    </div>
  );
}
