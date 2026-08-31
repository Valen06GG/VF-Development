'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Ocurrió un error inesperado');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Error de conexión con el servidor');
    }
  };

  return (
    <section id="contacto">
      <div className="wrap">
        <div className="contact-grid reveal">
          <div>
            <h2>¿Tenés una idea? Hablemos.</h2>
            <p>Contame qué necesitás y te respondo en menos de 24 horas con los próximos pasos.</p>
            <div className="contact-links">
              <a href="mailto:valenfortunato06@gmail.com">✉ valenfortunato06@gmail.com</a>
              <a href="https://wa.me/5491128655799" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              <a href="https://github.com/Valen06GG" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
              <a href="https://www.linkedin.com/in/valentín-fortunato" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Contame sobre tu proyecto"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'loading'}
              style={{ border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar mensaje →'}
            </button>

            {status === 'success' && (
              <p className="form-status ok">¡Mensaje enviado con éxito! Te responderé a la brevedad.</p>
            )}
            {status === 'error' && (
              <p className="form-status err">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}