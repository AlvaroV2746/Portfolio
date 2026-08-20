import './footer.css';

const Footer = () => (
  <footer className="pf-footer">
    <div className="pf-footer__inner">
      <span className="pf-mono pf-footer__copy">
        © 2026 Álvaro Villarreal · Full Stack Developer
      </span>

      <div className="pf-footer__links">
        <a href="#inicio">Volver arriba</a>
        <a href="https://github.com/AlvaroV2746" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/alvaro-villarreal-854061188" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
