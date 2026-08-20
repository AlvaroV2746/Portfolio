import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

/* El sitio anterior usaba HashRouter con cuatro rutas. Ahora es una sola
   página, así que los enlaces viejos (#/about, #/projects…) se traducen a
   su ancla equivalente para que nada de lo ya compartido quede roto. */
const LEGACY_ROUTES = {
  '#/': '#inicio',
  '#/about': '#sobre-mi',
  '#/projects': '#proyectos',
  '#/contact': '#contacto',
};

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const target = LEGACY_ROUTES[window.location.hash.toLowerCase()];
    if (target) window.location.replace(target);
  }, []);

  return (
    <div className="pf" data-theme={theme}>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
