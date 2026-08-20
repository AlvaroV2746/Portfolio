# Contexto técnico — rediseño del portafolio

Documento de referencia de la implementación. Describe **qué hay**, **por qué está
así** y **qué queda pendiente**. Última actualización: 20 de agosto de 2026.

Diseño de referencia (canvas con los tres tableros: escritorio, móvil y sistema de
diseño): https://claude.ai/code/artifact/e5467165-c970-4d38-89f5-ad02b2960930

---

## 1. Stack

Sin dependencias nuevas respecto al proyecto anterior.

| Pieza | Versión | Rol |
|---|---|---|
| React | 19.2 | UI |
| Vite | 8.2 | build y dev server |
| Bootstrap | 5.3 | **solo el grid** (`container`, `row`, `col-*`) |
| Font Awesome Free | 7.3 | iconografía |
| @emailjs/browser | 4.4 | envío del formulario sin backend |

No se usa Tailwind ni TypeScript. Bootstrap aporta únicamente la rejilla: ningún
componente suyo (`.btn`, `.card`, `.navbar`) se utiliza — el aspecto lo define
`src/styles/tokens.css`.

---

## 2. Estructura

```
src/
├── components/          envoltura del sitio
│   ├── Navbar.jsx        sticky, toggle de tema, menú móvil
│   ├── navbar.css
│   ├── Footer.jsx
│   └── footer.css
├── sections/            las cinco secciones de la página
│   ├── Hero.jsx / hero.css
│   ├── AboutSection.jsx / about.css
│   ├── SkillsSection.jsx / skills.css
│   ├── ProjectsSection.jsx / ProjectCard.jsx / projects.css
│   └── ContactSection.jsx / contact.css
├── data/                contenido, fuera del JSX
│   ├── projects.data.js
│   ├── skills.data.js
│   ├── about.data.js
│   └── contact.data.js
├── styles/
│   ├── tokens.css        paleta, tipografía, primitivas
│   └── DESIGN.md         referencia rápida del sistema
├── App.jsx              compone la página + estado del tema
└── main.jsx             punto de entrada
```

**Regla de oro: los datos no viven en el JSX.** Añadir un proyecto es añadir un
objeto a `data/projects.data.js`; ninguna sección se toca. Lo mismo para skills,
experiencia, formación y canales de contacto.

Total: **1.416 líneas** entre JSX, JS y CSS.

---

## 3. Sistema de diseño

Todo cuelga de la clase `.pf`, que define los tokens. El prefijo `.pf-` evita
colisiones con Bootstrap.

### Paleta

Neutros fríos de croma bajo (≤ 0.022) y **un solo acento**. Los dos acentos
comparten claridad y croma y solo varían el tono, por eso armonizan.

| Token | Dark | Light |
|---|---|---|
| `--bg` | `oklch(.15 .018 280)` | `oklch(.985 .004 280)` |
| `--bg-2` | `oklch(.19 .021 280)` | `oklch(.955 .007 280)` |
| `--text` | `oklch(.97 .006 280)` | `oklch(.23 .022 280)` |
| `--muted` | `oklch(.73 .018 280)` | `oklch(.5 .02 280)` |
| `--faint` | `oklch(.56 .02 280)` | `oklch(.62 .018 280)` |
| `--accent` | `#8b5cf6` | `#8b5cf6` |
| `--accent-ink` | `= --accent` | `color-mix(--accent 72%, oscuro)` |
| `--accent-2` | `oklch(.72 .15 205)` | `oklch(.56 .13 205)` |
| `--ok` | `oklch(.76 .16 152)` | `oklch(.55 .14 152)` |

`--accent-ink` existe porque el violeta puro no tiene contraste suficiente sobre
fondo claro: en tema light se oscurece con `color-mix`.

### Vidrio (glassmorphism)

```css
background: rgba(255,255,255,.045);
border: 1px solid rgba(255,255,255,.10);
backdrop-filter: blur(20px) saturate(150%);
box-shadow: 0 24px 60px -32px rgba(0,0,0,.95), inset 0 1px 0 rgba(255,255,255,.14);
```

El `inset` superior es lo que da el borde de luz del cristal. En tema claro los
mismos tokens se invierten a blancos opacos.

### Tipografía

- **Bricolage Grotesque** 800, tracking −3% → titulares
- **Manrope** 400/500/600/700 → cuerpo e interfaz
- **JetBrains Mono** 500 → etiquetas, tags, datos técnicos

Cargadas desde Google Fonts vía `@import` en `tokens.css`, con stacks de respaldo.
Escala: 68 / 40 / 21 / 17 / 14.5 / 11 px. Los titulares usan `clamp()` para
escalar en móvil sin media queries.

### Primitivas

`.pf-glass` · `.pf-btn` (+ `--primary`, `--ghost`, `--sm`) · `.pf-pill` ·
`.pf-badge` · `.pf-field` · `.pf-section` (+ `--alt`) · `.pf-eyebrow` · `.pf-mono`

Espaciado: 4 · 8 · 12 · 16 · 22 · 34 · 48 · 76
Radios: 10 · 12 · 14 · 16 · 20 · 24 · 999

---

## 4. Tema claro / oscuro

El estado vive en `App.jsx` y se aplica como atributo en el contenedor raíz:

```jsx
const [theme, setTheme] = useState('dark');
<div className="pf" data-theme={theme}>
```

`tokens.css` redefine los mismos tokens bajo `.pf[data-theme="light"]`. Un solo
atributo cambia la página entera; ningún componente conoce el tema salvo el
`Navbar`, que lo recibe por props para dibujar el icono correcto.

El fondo del área de rebote del scroll también sigue al tema:

```css
body { background-color: oklch(.15 .018 280); }
body:has(.pf[data-theme='light']) { background-color: oklch(.985 .004 280); }
```

**El tema no se persiste** entre recargas. Si se quiere, es un `localStorage` en
el `useState` inicial.

---

## 5. Enrutado: se eliminó React Router

El sitio anterior usaba `HashRouter` con cuatro rutas. Al pasar a one-page se
quitó por dos razones:

1. **Colisión real de hashes.** Con `HashRouter`, un enlace `href="#sobre-mi"`
   se interpreta como la ruta `/sobre-mi`, no como un ancla. Los anclajes del
   menú no habrían funcionado.
2. Ya no hay rutas que resolver: es una sola página.

Para no romper enlaces ya compartidos (CV, LinkedIn), `App.jsx` traduce los
hashes viejos al cargar:

```js
const LEGACY_ROUTES = {
  '#/': '#inicio',
  '#/about': '#sobre-mi',
  '#/projects': '#proyectos',
  '#/contact': '#contacto',
};
```

---

## 6. Interactividad

| Qué | Dónde | Cómo |
|---|---|---|
| Toggle de tema | `Navbar.jsx` | estado en `App.jsx`, bajado por props |
| Pestañas de skills | `SkillsSection.jsx` | `useState` filtra `skillGroups` por `id` |
| Copiar correo | `ContactSection.jsx` | `navigator.clipboard` + estado `copied` (1,8 s) |
| Envío del formulario | `ContactSection.jsx` | `emailjs.send`, estado `idle/sending/ok/error` |
| Hover de tarjetas | CSS | `translateY(-6px)` + zoom de captura + borde de acento |
| Scroll suave | CSS | `scroll-behavior: smooth` + `scroll-margin-top: 72px` |

`scroll-margin-top` iguala la altura de la barra sticky: sin él, los títulos
quedarían ocultos bajo ella al saltar desde el menú.

El botón de copiar **no miente**: si `navigator.clipboard` falla o está bloqueado,
sale por `return` sin marcar "copiado".

---

## 7. Responsive

Breakpoints alineados con los de Bootstrap:

| Ancho | Qué cambia |
|---|---|
| < 992 px | menú colapsa a hamburguesa, columnas a una sola, se oculta el nombre del logo |
| < 768 px | padding de sección 76→34 px |
| < 576 px | pestañas de skills a ancho completo, footer centrado |

Todos los objetivos táctiles miden **44 px o más**. Los titulares usan `clamp()`.

---

## 8. Accesibilidad

- `aria-label` en todos los botones de solo icono
- `role="tab"` + `aria-selected` en las pestañas de skills
- `role="status"` (éxito) y `role="alert"` (error) en el formulario
- `aria-expanded` en el botón del menú móvil
- `<label>` asociado por `htmlFor` a cada campo
- `aria-hidden="true"` en los `<i>` decorativos de Font Awesome
- `tokens.css` respeta `prefers-reduced-motion: reduce`

---

## 9. Despliegue: tres bugs corregidos

| Bug | Estado |
|---|---|
| `pages/Projects.jsx` importaba `bluco.png`, el archivo es `BLUCO.png` | Corregido. Funcionaba en macOS (sistema de archivos sin distinción de mayúsculas) pero **rompía el build en Ubuntu**, o sea en el despliegue |
| El workflow estaba en `.github/deploy.yml` | Movido con `git mv` a `.github/workflows/deploy.yml`. Donde estaba, GitHub nunca lo ejecutó |
| El workflow disparaba en `main` | Cambiado a `master`. Verificado: `origin/HEAD → origin/master`, no existe rama `main` |

Se auditaron **todos** los imports relativos del proyecto contra los nombres
reales de archivo: `bluco.png` era el único caso.

`vite.config.js` mantiene `base: '/Portfolio/'`, correcto para
`github.com/AlvaroV2746/Portfolio`.

⚠️ **Hay dos mecanismos de despliegue activos**: el workflow de GitHub Actions y
el script `npm run deploy` (paquete `gh-pages`). Ambos escriben en la rama
`gh-pages` y pueden pisarse. Conviene quedarse con uno.

---

## 10. Métricas (medidas, no estimadas)

Comparación entre el build de `HEAD` (sitio anterior) y el actual:

| | Antes | Ahora |
|---|---|---|
| `dist/` total | 6,3 MB | **3,6 MB** |
| JavaScript | 243 KB | **209 KB** |
| CSS | 311 KB | 324 KB |

El JS baja porque se eliminó React Router. El CSS **sube ~13 KB**: Bootstrap y
Font Awesome dominan ese archivo y `tokens.css` suma encima. La caída del total
viene de las imágenes: el fondo `background-4.png` (2,2 MB) se cargaba en todas
las páginas y ya no se empaqueta.

---

## 11. Archivos eliminados

`src/pages/` completo (About, Contact, Home, Projects) · `components/Navbar.jsx`,
`Footer.jsx`, `ProjectCard.jsx` viejos · `styles/styles.css` ·
`App.css` e `index.css` (ya eran código muerto: ningún módulo los importaba).

Todo recuperable desde el historial de git.

---

## 12. Pendientes

### ⚠️ La plantilla de EmailJS necesita `{{asunto}}`

El formulario envía `{ nombre, email, asunto, mensaje }`. La plantilla
`template_9sihg0c` espera `telefono`, no `asunto`. **Mientras no se actualice, ese
campo llega vacío en el correo.**

Arreglo (panel de EmailJS, no hay nada que tocar en el repo):
`dashboard.emailjs.com` → Email Templates → `template_9sihg0c` → sustituir
`{{telefono}}` por `{{asunto}}` → Save.

El aviso está también como comentario al inicio de `src/sections/ContactSection.jsx`.

Alternativa: revertir el campo del formulario a `telefono` y no tocar la plantilla.

### ⚠️ Librería sin usar: `react-router-dom`

Sigue declarada en `package.json` (`^7.18.2`) pero **ningún módulo la importa**
desde que se eliminó el enrutado. No se desinstaló para no modificar
`package-lock.json` sin confirmación. Vite ya no la incluye en el bundle
(de ahí la caída de 243 a 209 KB), así que no pesa en producción — es solo
ruido en las dependencias.

Para quitarla: `npm uninstall react-router-dom`.

### Otros

- **Imágenes sin optimizar.** `Profile.png` pesa 1,7 MB y `BLUCO.png` 1 MB. Son
  el 75% del build. Conviene convertirlas a WebP y redimensionarlas.
- **Capturas de proyecto de baja resolución.** Se ven pixeladas a tamaño de tarjeta.
- **El tema no persiste** entre recargas.
- **Sin commit.** Todos los cambios están en el working tree.

---

## 13. Qué se verificó y qué no

**Verificado:**
- `npm run build` compila sin errores
- `npx eslint src` sale limpio (el proyecto anterior tenía 8 errores)
- Los seis módulos se transforman sin error en el dev server
- El fondo viejo ya no entra al bundle; solo las 4 imágenes en uso
- Los tamaños de la sección 10, medidos con un `git worktree` sobre `HEAD`
- `origin/HEAD → origin/master` y ausencia de rama `main`

**No verificado:**
- **El resultado renderizado.** No se pudo abrir un navegador durante la
  implementación (la extensión de Chrome no estaba conectada). La revisión
  visual queda pendiente.
