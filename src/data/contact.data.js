export const EMAIL = 'Alvarovillarreal2746@hotmail.com';

export const channels = [
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'alvaro-villarreal',
    icon: 'fa-brands fa-linkedin-in',
    href: 'https://www.linkedin.com/in/alvaro-villarreal-854061188',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: 'AlvaroV2746',
    icon: 'fa-brands fa-github',
    href: 'https://github.com/AlvaroV2746',
  },
  {
    id: 'whatsapp',
    label: 'WHATSAPP',
    value: '+57 318 455 9655',
    icon: 'fa-brands fa-whatsapp',
    href: 'https://api.whatsapp.com/send?phone=573184559655',
  },
];

/* Credenciales de EmailJS — las mismas que ya usa src/pages/Contact.jsx.
   La public key de EmailJS es pública por diseño, no es un secreto. */
export const emailjsConfig = {
  serviceId: 'service_ahj39f6',
  templateId: 'template_9sihg0c',
  publicKey: '51GRVsQsV94v6JBIy',
};
