import { useState, useEffect } from 'react';
import { SOCIAL_LINKS } from '../data/portfolio';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#work', label: 'Systems' },
    { href: '#experiments', label: 'Experiments' },
    { href: '#interests', label: 'Focus' },
    { href: '#archive', label: 'Archive' },
    { href: '#notes', label: 'Notes' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b w-full min-w-0 ${
        scrolled
          ? 'bg-navy-deep/95 backdrop-blur-md border-border'
          : 'bg-navy-deep/80 backdrop-blur-sm border-border-subtle'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-14 flex items-center justify-between min-w-0">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-sm font-semibold text-white hover:text-pink transition-colors shrink-0"
          aria-label="Medhansh Kabadwal — Home"
        >
          <span className="w-2 h-2 rounded-full bg-pink shadow-[0_0_8px_rgba(255,46,147,0.6)] shrink-0" />
          <span className="truncate">Medhansh Kabadwal</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono text-silver" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-1 hover:border-b hover:border-pink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* External links */}
        <div className="hidden sm:flex items-center gap-3 text-xs font-mono">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-full bg-navy-elevated/70 border border-border text-silver hover:text-white hover:border-pink transition-all"
          >
            GitHub ↗
          </a>
          <a
            href="#work"
            className="px-3.5 py-1 rounded-full bg-pink text-white font-semibold shadow-[0_2px_12px_rgba(255,46,147,0.35)] hover:bg-pink/90 transition-all"
          >
            Explore Work
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-xs font-mono text-pink hover:text-white p-2 shrink-0 font-semibold"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-elevated border-b border-border px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-3 text-sm font-mono text-silver">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white hover:text-pink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-3 mt-2 border-t border-border text-xs font-mono">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-white"
              >
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-silver hover:text-pink"
              >
                Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
