'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#the-summit', label: 'The Summit', icon: 'landscape' },
    { href: '#fusion-net', label: 'FusionNet', icon: 'hub' },
    { href: '#engineering-lab', label: 'Engineering Lab', icon: 'architecture' },
    { href: '#the-basecamp', label: 'The Basecamp', icon: 'waves' },
    { href: '#contact', label: 'Contact', icon: 'mail' },
  ]

  return (
    <>
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/40 backdrop-blur-xl border-b border-white/20 shadow-[0_20px_40px_rgba(45,90,39,0.08)]">
        <div className="flex justify-between items-center px-gutter md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="font-headline-lg text-headline-lg tracking-tight text-primary">MK Portfolio</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
                {navItems.slice(0, 4).map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={true}
                    className={`font-label-sm text-label-sm ${
                      index === 0 ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors hover:bg-primary/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
          </div>
          
          <Link 
            href="#contact"
            scroll={true}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-sm text-label-sm inner-glow scale-95 active:scale-90 transition-transform hover:bg-primary-container hover:shadow-ambient"
          >
            Connect
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/20"
            >
              <div className="px-gutter py-4 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    scroll={true}
                    className="block font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors py-2 hover:bg-primary/5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Side Navigation (Desktop Only) */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen sidebar-collapsed py-8 bg-white/30 backdrop-blur-xl border-r border-white/20 items-start overflow-hidden shadow-2xl shadow-primary/5 z-[60] transition-[width] duration-300 cubic-bezier(0.4, 0, 0.2, 1) group">
        <div className="w-full px-4 flex justify-center group-hover:justify-start transition-all duration-300">
          <div className="w-12 h-12 rounded-full bg-primary-container overflow-hidden shrink-0">
            <Image
              className="w-full h-full object-cover"
              alt="A professional portrait of a young man with a serene expression, set against a blurred forest green background."
              src="/assets/image_1.jpg"
              width={48}
              height={48}
            />
          </div>
          <div className="sidebar-nav-label ml-4 flex flex-col justify-center overflow-hidden">
            <span className="font-headline-lg text-sm text-primary leading-tight">Medhansh K.</span>
            <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Engineer</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mt-12 w-full px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              className={`flex items-center gap-4 p-3 ${
                item.href === '#the-summit' 
                  ? 'text-primary bg-primary-container/20 rounded-xl' 
                  : 'text-on-surface-variant hover:bg-surface-container-low rounded-xl hover:text-primary'
              } transition-all`}
              title={item.label}
            >
              <span className="material-symbols-outlined shrink-0">{item.icon}</span>
              <span className="sidebar-nav-label font-label-sm">{item.label}</span>
            </Link>
          ))}
        </div>
        
        {/* Toggle button for persistent expansion */}
        <div className="mt-auto w-full px-3">
          <button 
            className="w-full flex items-center gap-4 p-3 text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all"
            onClick={() => document.getElementById('sidebar')?.classList.toggle('manual-expand')}
          >
            <span className="material-symbols-outlined shrink-0 group-hover:rotate-180 transition-transform duration-500">
              chevron_right
            </span>
            <span className="sidebar-nav-label font-label-sm">Collapse View</span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Navigation
