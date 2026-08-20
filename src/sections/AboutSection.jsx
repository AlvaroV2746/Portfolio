import { experience, education } from '../data/about.data';
import './about.css';

const AboutSection = () => (
  <section id="sobre-mi" className="pf-section pf-section--alt">
    <div className="container">
      <header className="pf-about__head">
        <span className="pf-eyebrow">01 — SOBRE MÍ</span>
        <h2>De arreglar equipos a construir los sistemas que corren en ellos</h2>
      </header>

      <div className="row g-5">
        {/* --- biografía --- */}
        <div className="col-12 col-lg-6">
          <div className="pf-about__bio">
            <p>
              Llevo años en tecnología por el lado menos glamoroso: soporte técnico, redes,
              atención bilingüe a clientes de compañías en Estados Unidos. Ahí aprendí lo que
              ningún curso enseña — a entender un problema ajeno rápido y a explicarlo sin
              tecnicismos.
            </p>
            <p>
              Hoy escribo código. Full Stack con PHP, MySQL, JavaScript y React, con la base de
              redes y ciberseguridad que traigo de mi tecnología en UNIMINUTO. Me entusiasma el
              momento en que algo que no existía empieza a funcionar, y no me asusta el stack que
              todavía no conozco: lo aprendo.
            </p>
            <p>
              Busco mi primer equipo de desarrollo — uno donde pueda aportar desde el día uno y
              crecer rápido.
            </p>
          </div>
        </div>

        {/* --- trayectoria --- */}
        <div className="col-12 col-lg-6">
          <div className="pf-glass pf-trayecto">
            <div className="pf-trayecto__head">
              <i className="fa-solid fa-briefcase" aria-hidden="true" />
              <span className="pf-mono">EXPERIENCIA</span>
            </div>
            <ul className="pf-trayecto__list">
              {experience.map((item) => (
                <li key={`${item.org}-${item.role}`}>
                  <b>{item.role} · {item.org}</b>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-glass pf-trayecto">
            <div className="pf-trayecto__head">
              <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
              <span className="pf-mono">FORMACIÓN</span>
            </div>
            <ul className="pf-trayecto__list pf-trayecto__list--tight">
              {education.map((item) => (
                <li key={item.title}>
                  <b>{item.title} <em>· {item.org}</em></b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
