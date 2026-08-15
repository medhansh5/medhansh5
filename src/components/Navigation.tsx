import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8 transition-colors duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex-1">
        <a href="#" className="text-sm font-medium tracking-widest uppercase">
          MEDHANSH <span className="text-muted">/ 2026</span>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
        <a href="#work" className="hover:text-accent transition-colors">WORK</a>
        <a href="#about" className="hover:text-accent transition-colors">ABOUT</a>
        <a href="#ashcrest" className="hover:text-accent transition-colors">ASHCREST</a>
        <a href="#contact" className="hover:text-accent transition-colors">CONTACT</a>
      </div>
      
      {/* Mobile Menu Button - Minimal */}
      <div className="md:hidden">
        <button className="text-sm font-medium tracking-widest uppercase hover:text-accent transition-colors">
          MENU
        </button>
      </div>
    </motion.nav>
  );
}
