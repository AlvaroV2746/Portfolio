# Sistema de diseño

Referencia de la paleta, la tipografía y las primitivas del portafolio.
Todo vive bajo la clase `.pf` para no chocar con Bootstrap (`.btn`, `.card`…).

## Estructura

```
src/
├── components/   Navbar y Footer (la envoltura del sitio)
├── sections/     Hero, About, Skills, Projects, Contact + ProjectCard
├── data/         los contenidos, fuera del JSX
└── styles/       tokens.css — paleta, tipografía, primitivas
```

Regla: **los datos no viven en el JSX**. Un proyecto nuevo es un objeto más
en `data/projects.data.js`; lo mismo con skills, experiencia y contacto.

## Paleta

Neutros fríos de croma bajo (≤ 0.022) + un solo acento. Los dos acentos
comparten claridad y croma, solo cambia el tono — por eso combinan sin pelearse.

| Token        | Dark                  | Uso                               |
|--------------|-----------------------|-----------------------------------|
| `--bg`       | `oklch(.15 .018 280)` | fondo base                        |
| `--bg-2`     | `oklch(.19 .021 280)` | secciones alternas                |
| `--text`     | `oklch(.97 .006 280)` | texto principal                   |
| `--muted`    | `oklch(.73 .018 280)` | párrafos                          |
| `--faint`    | `oklch(.56 .02 280)`  | etiquetas, metadatos              |
| `--accent`   | `#8b5cf6`             | acento principal (violeta)        |
| `--accent-2` | `oklch(.72 .15 205)`  | acento secundario (cian)          |
| `--ok`       | `oklch(.76 .16 152)`  | disponibilidad, estados positivos |

El tema claro redefine los mismos tokens en `.pf[data-theme="light"]`.
El estado del tema vive en `App.jsx` y lo cambia el botón del Navbar.

## Tipografía

- **Bricolage Grotesque** 800, tracking −3% → titulares
- **Manrope** 400/600 → cuerpo e interfaz
- **JetBrains Mono** 500 → etiquetas, tags de tecnología, datos técnicos

Escala: 68 / 40 / 21 / 17 / 14.5 / 11px.

## Primitivas

`.pf-glass` (vidrio) · `.pf-btn` + `--primary`/`--ghost`/`--sm` · `.pf-pill`
(tags) · `.pf-badge` (disponibilidad) · `.pf-field` (formularios) ·
`.pf-section` + `--alt` · `.pf-eyebrow` (numeración de sección) · `.pf-mono`.

Espaciado: 4 · 8 · 12 · 16 · 22 · 34 · 48 · 76.
Radios: 10 · 12 · 14 · 16 · 20 · 24 · 999.

`tokens.css` respeta `prefers-reduced-motion`.
