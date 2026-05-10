'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EngineeringLab = () => {
  return (
    <section className="px-gutter md:px-margin-desktop py-12" id="engineering-lab">
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-headline-lg text-headline-lg text-primary">Engineering Lab</h2>
        <motion.div 
          className="w-16 h-1 bg-primary-container mt-4 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* ShadowMap Bento Card */}
        <motion.div 
          className="md:col-span-7 glass-module p-8 rounded-3xl shadow-ambient border border-white/20 group hover:border-primary/20 transition-all"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-between items-start mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-headline-lg text-headline-lg text-primary mb-2">ShadowMap</h3>
              <p className="text-on-surface-variant font-body-md">Advanced topographical telemetry mapping for real-time spatial awareness.</p>
            </motion.div>
            <motion.span 
              className="material-symbols-outlined text-primary text-4xl"
              initial={{ rotate: -10, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              landscape
            </motion.span>
          </div>
          
          <motion.div 
            className="relative h-64 rounded-2xl overflow-hidden border border-outline-variant/30 rounded-[16px] group-hover:scale-[1.02] transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Image
              className="w-full h-full object-cover rounded-[16px]"
              alt="A dark, high-tech topographical map visualization with glowing forest-green data points and pulsing heatmap traces."
              src="/assets/image_0.png"
              fill
            />
            <motion.div 
              className="absolute inset-0 bg-primary/20 mix-blend-color-dodge"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
        </motion.div>
        
        {/* BikeGuard Bento Card */}
        <motion.div 
          className="md:col-span-5 glass-module p-8 rounded-3xl shadow-ambient border border-white/20 flex flex-col justify-between"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div>
            <motion.div 
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                motorcycle
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary">BikeGuard</h3>
            </motion.div>
            
            <motion.p 
              className="text-on-surface-variant font-body-md mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Tuned specifically for Indian road variables, identifying helmet compliance and contextual traffic risks in chaotic urban environments.
            </motion.p>
          </div>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-2">
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface">
                <span>Helmet Detection</span>
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  99.2%
                </motion.span>
              </div>
              <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "99%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface mt-4">
                <span>Contextual Risk AI</span>
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  84.5%
                </motion.span>
              </div>
              <div className="h-1.5 bg-surface-container rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "84%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EngineeringLab
