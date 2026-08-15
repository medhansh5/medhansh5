import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Engineering from './sections/Engineering';
import Stack from './sections/Stack';
import Ashcrest from './sections/Ashcrest';
import Janus from './sections/Janus';
import About from './sections/About';
import Philosophy from './sections/Philosophy';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        cursor?.classList.add('hovering');
      } else {
        cursor?.classList.remove('hovering');
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground font-sans overflow-x-hidden selection:bg-accent selection:text-white relative">
      <div id="custom-cursor" className="custom-cursor hidden lg:block pointer-events-none"></div>
      
      <Navigation />
      
      <main>
        <Hero />
        <Work />
        <Engineering />
        <Stack />
        <Ashcrest />
        <Janus />
        <About />
        <Philosophy />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
