import { useState } from 'react';
import { skillGroups } from '../data/skills.data';
import './skills.css';

const SkillsSection = () => {
  const [active, setActive] = useState('frontend');
  const group = skillGroups.find((g) => g.id === active);

  return (
    <section id="skills" className="pf-section">
      <div className="container">
        <header className="pf-skills__head">
          <div className="pf-skills__title">
            <span className="pf-eyebrow">02 — HABILIDADES</span>
            <h2>Con lo que trabajo</h2>
          </div>

          <div className="pf-tabs" role="tablist" aria-label="Categorías de habilidades">
            {skillGroups.map((g) => (
              <button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={g.id === active}
                className={`pf-tab${g.id === active ? ' pf-tab--on' : ''}`}
                onClick={() => setActive(g.id)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </header>

        <div className="row g-3">
          {group.skills.map((skill) => (
            <div className="col-12 col-sm-6 col-lg-4" key={skill.name}>
              <div className="pf-glass pf-skill">
                <i className={skill.icon} aria-hidden="true" />
                <div>
                  <b>{skill.name}</b>
                  <span>{skill.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
