/**
 * Habilidades por categoría.
 * icon: clase de Font Awesome (ya instalado en el proyecto).
 * note: para qué la usas — más útil que un porcentaje inventado.
 */
export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React 19',     icon: 'fa-brands fa-react',       note: 'Hooks, componentes, router' },
      { name: 'JavaScript',   icon: 'fa-brands fa-square-js',   note: 'ES6+, async, DOM' },
      { name: 'HTML5',        icon: 'fa-brands fa-html5',       note: 'Semántico y accesible' },
      { name: 'CSS3',         icon: 'fa-brands fa-css3-alt',    note: 'Flex, grid, variables' },
      { name: 'Bootstrap 5',  icon: 'fa-brands fa-bootstrap',   note: 'Grid y componentes' },
      { name: 'React Router', icon: 'fa-solid fa-route',        note: 'Navegación SPA' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'PHP',           icon: 'fa-brands fa-php',        note: 'CRUD, sesiones, formularios' },
      { name: 'MySQL',         icon: 'fa-solid fa-database',    note: 'Modelado y consultas' },
      { name: 'Patrón MVC',    icon: 'fa-solid fa-layer-group', note: 'Separación de capas' },
      { name: 'Apache',        icon: 'fa-solid fa-server',      note: 'Despliegue y hosting' },
      { name: 'AJAX & jQuery', icon: 'fa-solid fa-right-left',  note: 'Peticiones sin recargar' },
      { name: 'JSON / REST',   icon: 'fa-solid fa-code',        note: 'Consumo de APIs' },
    ],
  },
  {
    id: 'tools',
    label: 'Herramientas',
    skills: [
      { name: 'Git',          icon: 'fa-brands fa-git-alt',   note: 'Ramas y control de versiones' },
      { name: 'GitHub',       icon: 'fa-brands fa-github',    note: 'Repos y colaboración' },
      { name: 'Linux',        icon: 'fa-brands fa-linux',     note: 'Terminal y servidores' },
      { name: 'Vite',         icon: 'fa-solid fa-bolt',       note: 'Build y dev server' },
      { name: 'GitHub Pages', icon: 'fa-solid fa-globe',      note: 'Despliegue continuo' },
      { name: 'EmailJS',      icon: 'fa-regular fa-envelope', note: 'Formularios sin backend' },
    ],
  },
];
