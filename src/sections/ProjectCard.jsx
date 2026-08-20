/**
 * Tarjeta de proyecto.
 * El hover (elevación, zoom de la captura, borde de acento) es 100% CSS:
 * ver .pf-proj en projects.css.
 */
const ProjectCard = ({ project, index }) => {
  const { title, image, problem, tags, note, flag, demo, code } = project;

  return (
    <article className="pf-glass pf-proj">
      <div className="pf-proj__shot">
        <img src={image} alt={title} loading="lazy" />
        <span className="pf-proj__veil" />
        <span className="pf-mono pf-proj__num">{String(index + 1).padStart(2, '0')}</span>
        {flag && <span className="pf-mono pf-proj__flag">{flag}</span>}
      </div>

      <div className="pf-proj__body">
        <h3>{title}</h3>
        <p className="pf-proj__problem">{problem}</p>

        <div className="pf-proj__tags">
          {tags.map((tag) => (
            <span className="pf-pill" key={tag}>{tag}</span>
          ))}
        </div>

        {note && (
          <div className="pf-mono pf-proj__note">
            <i className="fa-solid fa-lock" aria-hidden="true" />
            {note}
          </div>
        )}

        <div className="pf-proj__actions">
          <a
            className="pf-btn pf-btn--sm pf-btn--primary"
            href={demo} target="_blank" rel="noreferrer"
          >
            <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
            Ver demo
          </a>

          {code ? (
            <a
              className="pf-btn pf-btn--sm pf-btn--ghost"
              href={code} target="_blank" rel="noreferrer"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
              Código
            </a>
          ) : (
            <span className="pf-mono pf-proj__private">código privado</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
