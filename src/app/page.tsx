'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FusionNet from '@/components/FusionNet'
import EngineeringLab from '@/components/EngineeringLab'
import ResponsiveTest from '@/components/ResponsiveTest'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const Basecamp = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.addEventListener('ended', () => setIsPlaying(false))
      return () => {
        audio.removeEventListener('ended', () => setIsPlaying(false))
      }
    }
  }, [])
  return (
    <section className="bg-primary/5 py-24 px-gutter md:px-margin-desktop border-y border-primary/5" id="the-basecamp">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">The Basecamp</h2>
          <p className="text-on-surface-variant font-body-md mb-12">Bridging the analytical with the auditory. A synthesis of visual storytelling through the lens of Adrian Vance and acoustic exploration through sonic architecture.</p>
          
          <motion.div 
            className="glass-module p-8 rounded-3xl border border-primary/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined">waves</span>
              </div>
              <div>
                <h4 className="font-headline-lg text-headline-lg text-primary">Ash Velde</h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Sonic Experiments</p>
              </div>
            </div>
            
            <div className="sonic-wave">
              <div className="wave-bar h-[20%]"></div>
              <div className="wave-bar h-[40%]"></div>
              <div className="wave-bar h-[70%]"></div>
              <div className="wave-bar h-[90%]"></div>
              <div className="wave-bar h-[60%]"></div>
              <div className="wave-bar h-[85%]"></div>
              <div className="wave-bar h-[30%]"></div>
              <div className="wave-bar h-[50%]"></div>
              <div className="wave-bar h-[80%]"></div>
              <div className="wave-bar h-[45%]"></div>
              <div className="wave-bar h-[95%]"></div>
              <div className="wave-bar h-[75%]"></div>
              <div className="wave-bar h-[35%]"></div>
              <div className="wave-bar h-[65%]"></div>
            </div>
            
            <button 
              onClick={toggleAudio}
              className="mt-8 flex items-center gap-2 text-primary font-label-sm text-label-sm hover:underline underline-offset-4 hover:text-primary-container transition-colors"
            >
              <span className="material-symbols-outlined">
                {isPlaying ? 'pause_circle' : 'play_circle'}
              </span>
              {isPlaying ? 'Pause Session' : 'Listen to Latest Session'}
            </button>
            
            <audio
              ref={audioRef}
              src="/audio/ash-velde-session.mp3"
              preload="metadata"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-ambient"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
            alt="A moody, high-contrast forest landscape featuring tall, slender pines disappearing into a heavy morning fog."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwD9uBZMDw4eycGGAKFYzsHtgAX3m4NvCqjgzXBrW7Mqhyqaek0rjuKEbZY2NupLuTpGjKDRu4YPL9MLz4XEnMspGUgMZU8PaoBatYDuuqpjOX3TgiXKu4qOfsw-VrVtjpPHGDoTc2FYpmGswuPeACOTiLK5-OTf-PiXDCMu6tXy3ySxDjsu0dqU6fggvLTOAGGW_5l6XIs-e3WJnsbRda6pvT8QDFSN2hGvntffCjUWfYE7Fl-VEh-BVAWCltPTtL7t4oz7HmNxte"
            fill
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent">
            <p className="text-white font-label-sm text-label-sm mb-2">Featured Series</p>
            <h4 className="text-white font-headline-lg text-headline-lg">Ethereal Moss & Mist</h4>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section className="bg-surface-container-low py-24 px-gutter md:px-margin-desktop" id="contact">
      <div className="max-w-container-max mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Get In Touch</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mb-12">
            Interested in collaborating on safety systems or discussing biophilic engineering? Let's connect and explore how we can make transportation safer together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:medhansh5@proton.me"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-sm text-label-sm inner-glow hover:bg-primary-container transition-colors shadow-ambient hover:shadow-lg"
            >
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/medhansh-kabadwal-30197b374/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-module text-primary px-8 py-4 rounded-full font-label-sm text-label-sm inner-glow border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest py-20 border-t border-outline-variant/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop gap-8 max-w-container-max mx-auto">
        <motion.div 
          className="flex flex-col gap-4 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-headline-lg text-primary">M. Kabadwal</div>
          <p className="font-label-sm text-label-sm text-on-surface-variant max-w-md">
            © 2026 Medhansh Kabadwal. Designed at the intersection of nature and silicon.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Define your specific social links here */}
{[
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/medhansh-kabadwal-30197b374/' },
  { label: 'GitHub', href: 'https://github.com/medhansh5' },
  { label: 'Instagram', href: 'https://www.instagram.com/medhansh.5' },
  { label: 'SoundCloud', href: '#' } // Add your Ash Velde link here
].map((social, index) => (
  <a
    key={social.label}
    className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-opacity hover:underline underline-offset-4 opacity-80 hover:opacity-100"
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    {social.label}
  </a>
))}
        </motion.div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 space-y-32">
        <Hero />
        <FusionNet />
        <EngineeringLab />
        <Basecamp />
        <Contact />
      </main>
      
      <Footer />
      <ResponsiveTest />
    </div>
  )
}
