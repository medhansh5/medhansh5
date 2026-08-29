import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#work", label: "WORK" },
    { href: "#engineering", label: "ENGINEERING" },
    { href: "#stack", label: "STACK" },
    { href: "#ashcrest", label: "ASHCREST" },
    { href: "#janus", label: "JANUS" },
    { href: "#about", label: "ABOUT" },
    { href: "#experience", label: "TIMELINE" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 transition-all duration-300 ${
          scrolled ? 'bg-[#070708]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-4' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <a href="#" className="text-sm font-mono tracking-widest uppercase font-semibold hover:text-accent transition-colors">
            MEDHANSH KABADWAL <span className="text-muted/60 font-normal">/ 2026</span>
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted hover:text-white transition-colors relative py-1 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 border border-white/15 hover:border-accent hover:text-accent transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#070708]/98 backdrop-blur-xl lg:hidden flex flex-col justify-center px-8 py-20"
          >
            <div className="flex flex-col gap-6 font-mono text-lg tracking-widest">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-accent transition-colors flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-muted">0{idx + 1}</span>
                </a>
              ))}
            </div>
            <div className="mt-12 text-xs font-mono text-muted tracking-widest">
              GHAZIABAD, INDIA · PHYSICAL AI & SYSTEMS
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

