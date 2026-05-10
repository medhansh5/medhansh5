'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

const FusionNet = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement)?.getBoundingClientRect?.()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    const element = document.getElementById('fusion-net')
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      return () => element.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section id="fusion-net" className="px-gutter md:px-margin-desktop">
      <motion.div 
        className="relative rounded-[32px] overflow-hidden min-h-[600px] flex items-center justify-end p-8 md:p-16"
        style={{ scale }}
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <Image
            className="w-full h-full object-cover opacity-15"
            alt="A lush tropical rainforest interior seen through a slightly misty lens, with intricate neural network patterns faintly overlaid in a glowing mint green."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7c2v__Ic5J1jGyeBWXXOMIRCYkK2lNg1nkZ-h4rqbMfS0y7xCS8hVvjqj6xW_nBtXCqgRwo3TykVbccuYj2-8Y0HUNtTtCPI9PKT2oCr-_kuYWU-28WMYVVVcPxcYws6ah5Gypu9EQSwCN2DcQ-YHDNqRcVWfIiyXWsnQobQazql_UA7u09hyXDEPc-oDwXkMINHxPgmUL7URfb489JoBN66MRbL_gzmHnXSELcbjyRk1QAU6YTpGI8JykyB3WchDgdzYwloh846B"
            fill
            priority
          />
          
          {/* Animated topographical overlay */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(45, 90, 39, 0.3) 0%, transparent 50%)`,
            }}
          />
          
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <motion.path
                  d="M0 50 Q 25 25 50 50 T 100 50"
                  stroke="rgba(45, 90, 39, 0.2)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                />
                <motion.path
                  d="M0 80 Q 30 60 60 80 T 120 80"
                  stroke="rgba(45, 90, 39, 0.15)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-pattern)" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="glass-module max-w-xl p-10 rounded-3xl shadow-ambient border border-white/40 relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="font-headline-lg text-headline-lg text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            FusionNet Deep-Dive
          </motion.h2>
          
          <motion.p 
            className="text-on-surface-variant mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Implementing a robust 4th-order Butterworth Filter combined with a optimized YOLOv8n pipeline to handle complex environmental noise in real-time safety monitoring.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column: Stats */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-2">
                <motion.div 
                  className="font-display-lg text-headline-lg text-primary"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                >
                  0.87
                </motion.div>
                <div className="font-label-sm text-label-sm text-outline">F1-SCORE</div>
                <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary-container"
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <motion.div 
                  className="font-display-lg text-headline-lg text-primary"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                >
                  68.1%
                </motion.div>
                <div className="font-label-sm text-label-sm text-outline">FP REDUCTION</div>
                <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary-container"
                    initial={{ width: 0 }}
                    whileInView={{ width: "68%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Right Column: Architecture */}
            <motion.div 
              className="space-y-4 border-l border-primary/10 pl-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-4">System Architecture</h3>
              <ul className="space-y-3 font-mono text-xs text-on-surface-variant">
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Latency: ~20.6 ms
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Architecture: Multi-modal Edge AI
                </motion.li>
                <motion.li 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Inference: 30 FPS YOLOv8n
                </motion.li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-10 flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              hub
            </span>
            <span className="font-label-sm text-label-sm text-on-surface">
              Edge Processing Optimized for ARM-based Systems
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FusionNet
