import { useState } from 'react';
import './navbar.css';

const LINKS = [
  { href: '#sobre-mi',  label: 'Sobre mí' },
  { href: '#skills',    label: 'Skills' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto',  label: 'Contacto' },
];

const CV_URL = 'https://www.canva.com/design/DAFZLvOSf-M/g30fdTkEtFSjhJ6wvCxO-w/edit';

/**
 * Barra sticky del one-page.
 * El tema no vive aquí: lo controla la página y lo baja por props, porque
 * el atributo data-theme va en el contenedor .pf que envuelve todo.
 */
const Navbar = ({ theme = 'dark', onToggleTheme }) => {
  const [open, setOpen] = useState(false);
  const isDark = theme === 'dark';

  return (
    <nav className="pf-nav">
      <div className="pf-nav__inner">
        <a className="pf-nav__brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="pf-nav__mark">AV</span>
          <span className="pf-nav__name">Álvaro Villarreal</span>
        </a>

        <div className="pf-nav__links">
          {LINKS.map((l) => (
            <a key={l.href} className="pf-nav__link" href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="pf-nav__actions">
          <button
            type="button"
            className="pf-nav__icon"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            title={isDark ? 'Tema claro' : 'Tema oscuro'}
          >
            <i className={isDark ? 'fa-regular fa-sun' : 'fa-regular fa-moon'} aria-hidden="true" />
          </button>

          <a className="pf-nav__cv pf-mono" href={CV_URL} target="_blank" rel="noreferrer">
            CV
            <i className="fa-solid fa-download" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="pf-nav__icon pf-nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="pf-nav__panel">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
