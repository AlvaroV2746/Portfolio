import profileImg from '../assets/images/Profile.png';
import './hero.css';

/**
 * Hero del portafolio.
 * Estructura: columna izquierda (mensaje + CTA), tarjeta de vidrio a la derecha.
 * El grid es de Bootstrap; el aspecto viene de tokens.css + hero.css.
 */
const Hero = () => (
  <section id="inicio" className="pf-hero">
    <div className="container">
      <div className="row align-items-center g-5">

        {/* --- mensaje ------------------------------------------------- */}
        <div className="col-12 col-lg-7">
          <span className="pf-badge">
            <span className="pf-badge__dot" />
            DISPONIBLE PARA TRABAJAR
          </span>

          <h1 className="pf-hero__title">
            Hola, soy Álvaro.<br />
            Construyo <span className="pf-hero__accent">software que resuelve</span> problemas reales.
          </h1>

          <p className="pf-hero__lead">
            Desarrollador Full Stack Junior. Vengo de redes y soporte técnico, así que
            entiendo el sistema completo: del servidor a la interfaz.
            Bilingüe español&nbsp;/&nbsp;inglés C1.
          </p>

          <div className="pf-hero__actions">
            <a className="pf-btn pf-btn--primary" href="#proyectos">
              Ver proyectos
              <i className="fa-solid fa-arrow-right pf-shift" aria-hidden="true" />
            </a>
            <a className="pf-btn pf-btn--ghost" href="#contacto">
              <i className="fa-regular fa-envelope" aria-hidden="true" />
              Contacto
            </a>
          </div>

          <div className="pf-hero__social">
            <a
              className="pf-btn pf-btn--ghost pf-iconbtn"
              href="https://github.com/AlvaroV2746"
              target="_blank" rel="noreferrer" aria-label="GitHub"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>
            <a
              className="pf-btn pf-btn--ghost pf-iconbtn"
              href="https://www.linkedin.com/in/alvaro-villarreal-854061188"
              target="_blank" rel="noreferrer" aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </a>
            <a
              className="pf-btn pf-btn--ghost pf-iconbtn"
              href="https://api.whatsapp.com/send?phone=573184559655"
              target="_blank" rel="noreferrer" aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            </a>
            <span className="pf-mono pf-hero__place">Colombia · Remoto</span>
          </div>
        </div>

        {/* --- tarjeta de perfil --------------------------------------- */}
        <div className="col-12 col-lg-5">
          <div className="pf-glass pf-card">
            <div className="pf-card__head">
              <img className="pf-card__avatar" src={profileImg} alt="Álvaro Villarreal" />
              <div>
                <div className="pf-card__name">Álvaro Villarreal</div>
                <div className="pf-mono pf-card__role">full_stack_junior</div>
                <div className="pf-card__meta">Tecnólogo en Redes · Ing. de Software</div>
              </div>
            </div>

            <hr className="pf-card__rule" />

            <ul className="pf-card__facts">
              <li><i className="fa-regular fa-comments" aria-hidden="true" />Español nativo · Inglés C1</li>
              <li><i className="fa-solid fa-terminal" aria-hidden="true" />Linux, Apache y bases de datos</li>
              <li><i className="fa-regular fa-lightbulb" aria-hidden="true" />Aprendo rápido y pregunto mejor</li>
            </ul>

            <div className="pf-card__stats">
              <div><b>3</b><span className="pf-mono">PROYECTOS</span></div>
              <div><b>C1</b><span className="pf-mono">INGLÉS</span></div>
              <div><b>4+</b><span className="pf-mono">AÑOS EN TI</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
