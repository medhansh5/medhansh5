'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
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
    <section className="relative min-h-[90vh] flex items-center px-gutter md:px-margin-desktop" id="the-summit">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          alt="Hero Background"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Jc9wJA42-zGn07cTE87zr20lhKtmRQexMlt8G3OBegclPOOCd-EsE8S1WDJuL19FmlgF4QfypQ1Hl-3wpMM_zasaEE1-SaD_G0q1QL5qU54QAUB_tl0IkCvtoW2vUEfhN8z1GFH_3HzBAkvWYL8EupevJCNiAhQFMlWUBmDhY0UJfD1dE9o4viqmTHULnCr_34Y4pZdC05LoPu6ZnuGNdVASrwgn9TU9c6eq3l_PBGJUdpwKP8TYVJGkN8gsbeG9WWOI4toYTL_t"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/40 to-transparent"></div>
      </div>
      
      <motion.div 
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span 
          className="font-label-sm text-label-sm text-primary-container bg-primary/10 px-4 py-1 rounded-full mb-6 inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Visionary Engineering
        </motion.span>
        
        <motion.h1 
          className="font-display-lg text-display-lg text-on-background mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          MEDHANSH KABADWAL: Engineering Intelligent Safety Systems for the Developing World.
        </motion.h1>
        
        <motion.p 
          className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Mission to protect the hundreds of millions of two-wheeler riders through biophilic design and high-performance neural architecture.
        </motion.p>
        
        <motion.div 
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link 
            href="#engineering-lab"
            scroll={true}
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-sm text-label-sm inner-glow hover:bg-primary-container transition-colors shadow-ambient hover:shadow-lg"
          >
            Explore Systems
          </Link>
          <button className="glass-module text-primary px-8 py-4 rounded-full font-label-sm text-label-sm inner-glow border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all">
            View Lab Data
          </button>
          
          <audio
            ref={audioRef}
            src="/audio/ash-velde-session.mp3"
            preload="metadata"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
