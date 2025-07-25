import React, { useState } from 'react';
import { supabase } from '../../utils/supabase';

export default function GetInTouchPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from('feedback').insert([
        { name: form.name, email: form.email, message: form.message }
      ]);
      if (error) throw error;
      console.log('data', data);
    } catch (error) {
      console.error('Error inserting data:', error);
    } finally {
      setIsLoading(false);
    }
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ermiyas-damte/',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:inbox@ermiyas.dev',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 13.065l-11.985-7.065v14h24v-14l-12.015 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Yishak27',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.587 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~017147ca1bf5d8c2e4',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#6fda44">
          <path d="M19.74 8.74c-1.07 0-2.01.46-2.73 1.19a6.373 6.373 0 0 0-1.66-3.62l-1.08 3.52c.38.69.61 1.48.65 2.3a4.386 4.386 0 0 1-2.67 4.17 4.396 4.396 0 0 1-5.97-3.21c-.14-.7-.17-1.45-.18-2.21V5H3.24v5.95c0 .96.05 1.91.21 2.85a6.563 6.563 0 0 0 4.4 5.2 6.453 6.453 0 0 0 6.87-1.69 6.43 6.43 0 0 0 1.71-3.83 2.275 2.275 0 0 1 3.27-1.87l.61.31.77-1.88-.52-.3a4.424 4.424 0 0 0-2.42-.72z" />
        </svg>
      )
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@ermiyasdev1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 7.01c.01-.17.09-.33.24-.43L4.91 4.06v-.5h6.94l5.36 11.7 4.72-11.7H22v.5l-1.93 1.85c-.17.13-.26.33-.23.54v12.9c-.03.2.06.4.23.54L22 21.44v.5h-7.03v-.5l2.02-1.96c.2-.2.2-.25.2-.54V7.99l-5.62 14.48h-.76L6.25 7.99v9.95c-.06.4.08.8.37 1.08l2.63 3.4v.5H2v-.5l2.63-3.4c.27-.29.4-.68.35-1.08V7.01z" />
        </svg>
      )
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/yishak27',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EA4C89" width="24" height="24">
          <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.628-5.372-12-12-12zm7.943 6.53a9.951 9.951 0 0 1 2.057 6.126c-.232-.05-2.517-.512-4.942-.26-.19-.462-.377-.89-.584-1.297 2.436-.955 3.689-2.384 3.469-4.57zm-1.779-2.084c-.76 1.15-2.078 2.324-3.978 3.047-1.025-1.868-2.106-3.492-3.198-4.825a9.96 9.96 0 0 1 7.176 1.778zM7.68 2.812c1.104 1.305 2.25 2.904 3.31 4.703-3.157.84-6.003.855-8.163.44A10.005 10.005 0 0 1 7.68 2.812zM1.958 12.02c0-.072.002-.143.004-.215 2.56.66 5.838.562 9.155-.385.267.468.525.946.766 1.442-3.584 1.095-6.126 3.226-7.795 6.364A9.98 9.98 0 0 1 1.958 12.02zm4.917 7.64c1.55-2.867 3.763-4.816 6.906-5.783 1.4 3.59 2.243 7.184 2.527 9.373a9.977 9.977 0 0 1-9.433-3.59zm11.124 2.13c-.222-1.513-.97-5.04-2.312-8.686 2.147-.27 4.267.173 4.583.246a10.004 10.004 0 0 1-2.27 8.44z" />
        </svg>
      )
    }, {
      name: "Twitter",
      url: "https://x.com/Yisu43823770",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" fill="#currentColor" height="24" viewBox="0 0 24 24">
          <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/yisumaid/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" fill="#EA4C89" height="24" viewBox="0 0 50 50">
          <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
        </svg>
      )
    }, {
      name: "Telegram",
      url: "https://t.me/iamermi",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" fill="#EA4C89" height="24" viewBox="0 0 50 50">
          <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="w-full flex items-center justify-center py-8">
        <a href="/" className="text-[var(--color-primary)] hover:text-[var(--color-botton)] transition-colors text-lg">
          &larr; Back to Home
        </a>
      </section>
      <section className="w-full flex flex-col lg:flex-row items-center justify-center px-4 py-16 gap-8">
        <div className="w-full max-w-md lg:max-w-xs rounded-2xl shadow p-8 border border-[var(--color-secondary)] mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 text-center">Find Me On</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 hover:text-[var(--color-botton)] transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  {social.icon}
                </div>
                <span className="text-sm text-center">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="w-full max-w-lg rounded-2xl shadow p-8 border border-[var(--color-secondary)]">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6 text-center">Contact Me</h2>
          {submitted ? (
            <div className="text-center text-[var(--color-primary)] text-lg font-semibold py-8">
              Thank you for reaching out! I'll get back to you soon.
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-md px-4 py-2 border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-md px-4 py-2 border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="rounded-md px-4 py-2 border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`items-center gap-2 mt-2 px-6 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-background-2)] transition-colors hover:bg-[var(--color-botton)] text-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
          <div className="mt-8 flex flex-col items-center gap-2 text-[var(--color-primary)]">
            <div className="font-semibold">Or reach me at:</div>
            <a href="mailto:inbox@ermiyas.dev" className="hover:text-[var(--color-botton)] transition-colors">inbox@ermiyas.dev</a>
            <a href="tel:+251924193077" className="hover:text-[var(--color-botton)] transition-colors">+251 924 193 077</a>
          </div>
        </div>
      </section>
    </>
  );
}