import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAIL, channels, emailjsConfig } from '../data/contact.data';
import './contact.css';

/**
 * OJO con la plantilla de EmailJS:
 * este formulario envía { nombre, email, asunto, mensaje }.
 * La plantilla actual (template_9sihg0c) espera `telefono` en vez de `asunto`.
 * Añade {{asunto}} a la plantilla en el panel de EmailJS o el campo llegará vacío.
 */
const ContactSection = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return; // el navegador bloqueó el portapapeles: no mentimos con un "copiado"
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const payload = {
      nombre: form.nombre.value,
      email: form.email.value,
      asunto: form.asunto.value,
      mensaje: form.mensaje.value,
    };

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        payload,
        emailjsConfig.publicKey,
      );
      setStatus('ok');
      form.reset();
    } catch (err) {
      console.error('EmailJS falló:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="pf-section">
      <div className="container">
        <header className="pf-contact__head">
          <span className="pf-eyebrow">04 — CONTACTO</span>
          <h2>¿Tienes un proyecto o una vacante? Hablemos.</h2>
        </header>

        <div className="row g-4">
          {/* --- canales directos --- */}
          <div className="col-12 col-lg-5">
            <p className="pf-contact__intro">
              Respondo en el día. Escríbeme por donde te resulte más cómodo.
            </p>

            <div className="pf-glass pf-channel">
              <i className="fa-regular fa-envelope" aria-hidden="true" />
              <div className="pf-channel__text">
                <span className="pf-mono pf-channel__label">EMAIL</span>
                <span className="pf-channel__value">{EMAIL}</span>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className={`pf-copy${copied ? ' pf-copy--done' : ''}`}
                aria-label="Copiar correo al portapapeles"
              >
                <i className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'} aria-hidden="true" />
                <span className="pf-mono">{copied ? 'copiado' : 'copiar'}</span>
              </button>
            </div>

            {channels.map((c) => (
              <a
                key={c.id}
                className="pf-glass pf-channel pf-channel--link"
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                <i className={c.icon} aria-hidden="true" />
                <div className="pf-channel__text">
                  <span className="pf-mono pf-channel__label">{c.label}</span>
                  <span className="pf-channel__value">{c.value}</span>
                </div>
                <i className="fa-solid fa-arrow-right pf-channel__go" aria-hidden="true" />
              </a>
            ))}
          </div>

          {/* --- formulario --- */}
          <div className="col-12 col-lg-7">
            <form className="pf-glass pf-form" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="pf-mono pf-form__label" htmlFor="nombre">NOMBRE</label>
                  <input className="pf-field" id="nombre" name="nombre" type="text" required placeholder="Tu nombre" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="pf-mono pf-form__label" htmlFor="email">EMAIL</label>
                  <input className="pf-field" id="email" name="email" type="email" required placeholder="tucorreo@empresa.com" />
                </div>
              </div>

              <div>
                <label className="pf-mono pf-form__label" htmlFor="asunto">ASUNTO</label>
                <input className="pf-field" id="asunto" name="asunto" type="text" required placeholder="Vacante, proyecto freelance, otra cosa…" />
              </div>

              <div>
                <label className="pf-mono pf-form__label" htmlFor="mensaje">MENSAJE</label>
                <textarea className="pf-field pf-field--area" id="mensaje" name="mensaje" rows="5" required placeholder="Cuéntame en dos líneas de qué se trata." />
              </div>

              <button className="pf-btn pf-btn--primary" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
                <i className="fa-solid fa-paper-plane pf-shift" aria-hidden="true" />
              </button>

              {status === 'ok' && (
                <p className="pf-form__msg pf-form__msg--ok" role="status">
                  <i className="fa-solid fa-check" aria-hidden="true" /> Mensaje enviado. Te respondo pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="pf-form__msg pf-form__msg--err" role="alert">
                  No se pudo enviar. Escríbeme directo a {EMAIL}.
                </p>
              )}
              {status !== 'ok' && status !== 'error' && (
                <p className="pf-mono pf-form__note">Enviado con EmailJS · sin backend</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
