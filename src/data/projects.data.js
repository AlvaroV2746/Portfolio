import taskManagerImg from '../assets/images/abmclientes.png';
import ventasImg from '../assets/images/abmventas.png';
import blucoImg from '../assets/images/BLUCO.png';

/**
 * Los proyectos viven aquí, no en el JSX.
 * Añadir uno nuevo = añadir un objeto a este array.
 *
 * problem: qué resuelve el proyecto, no con qué está hecho.
 * note:    dato operativo opcional (credenciales de demo, estado…).
 */
export const projects = [
  {
    id: 'task-manager',
    title: 'Task Manager',
    image: taskManagerImg,
    problem:
      'Un registro de clientes que reemplaza la hoja de cálculo compartida: alta, ' +
      'baja y modificación con validación, sin pisarse los datos entre usuarios.',
    tags: ['PHP', 'JSON', 'Bootstrap', 'CSS'],
    demo: 'https://taskmanager.infinityfree.me/',
    code: 'https://github.com/AlvaroV2746/task-organizer',
  },
  {
    id: 'sales-system',
    title: 'Sistema de Gestión de Ventas',
    image: ventasImg,
    problem:
      'Clientes, productos y ventas en un solo panel con login. Arquitectura MVC ' +
      'sobre MySQL, con actualizaciones vía AJAX para no recargar la página en cada operación.',
    tags: ['PHP', 'MVC', 'MySQL', 'AJAX', 'jQuery'],
    note: 'demo: test / test',
    demo: 'https://alvaroproyectos.infinityfreeapp.com/login.php',
    code: 'https://github.com/AlvaroV2746/SALES-MANAGMENT-SYSTEM',
  },
  {
    id: 'bluco',
    title: 'BLUCO Travel',
    image: blucoImg,
    problem:
      'Sitio de turismo comunitario para una agencia colombiana. Le da presencia en ' +
      'línea y un canal de reservas a operadores locales que antes solo vendían por WhatsApp.',
    tags: ['React', 'JavaScript', 'Bootstrap', 'CSS'],
    flag: 'CLIENTE REAL',
    demo: 'https://blucotravel.com/',
    code: null, // código privado
  },
];
