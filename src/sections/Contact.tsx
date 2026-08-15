import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-black">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-mono tracking-[0.2em] text-muted mb-8">SECTION 09</h2>
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
            HAVE SOMETHING<br />WORTH BUILDING?
          </h3>
          <p className="text-xl text-muted font-light max-w-2xl mx-auto mb-16">
            For sensor fusion, embedded ML, road safety, open source, or interesting engineering problems.
          </p>

          <a 
            href="mailto:medhansh5@proton.me"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-medium tracking-widest text-sm hover:bg-accent hover:text-white transition-colors duration-500 overflow-hidden"
          >
            <span className="relative z-10">medhansh5@proton.me</span>
          </a>

          <div className="mt-24 flex flex-wrap justify-center gap-8 md:gap-16 font-mono text-xs tracking-widest text-muted">
            <a href="https://www.linkedin.com/in/medhansh5" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LINKEDIN</a>
            <a href="https://github.com/medhansh5" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GITHUB</a>
            <a href="https://medhansh5.github.io/medhansh5" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">PORTFOLIO</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
