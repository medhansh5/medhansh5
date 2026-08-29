import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 09</span>
            <span className="w-12 h-[1px] bg-accent/40"></span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            INITIATE CONTACT
          </h2>

          <p className="text-muted text-lg md:text-xl font-light max-w-2xl mb-16">
            Open to research collaborations in low-latency Physical AI, edge computer vision, systems engineering, and graduate academic inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <div className="glass-panel p-6 border border-white/10">
                <div className="font-mono text-[10px] text-accent tracking-widest uppercase mb-1">DIRECT EMAIL</div>
                <a href="mailto:medhansh.hq@outlook.com" className="font-mono text-base font-bold text-white hover:text-accent transition-colors">
                  medhansh.hq@outlook.com
                </a>
              </div>

              <div className="glass-panel p-6 border border-white/10">
                <div className="font-mono text-[10px] text-accent tracking-widest uppercase mb-1">LINKEDIN PROFILE</div>
                <a href="https://www.linkedin.com/in/medhansh.5" target="_blank" rel="noreferrer" className="font-mono text-base font-bold text-white hover:text-accent transition-colors">
                  linkedin.com/in/medhansh.5 (@medhansh.5)
                </a>
              </div>

              <div className="glass-panel p-6 border border-white/10">
                <div className="font-mono text-[10px] text-accent tracking-widest uppercase mb-1">GITHUB REPOSITORIES</div>
                <a href="https://github.com/medhansh5" target="_blank" rel="noreferrer" className="font-mono text-base font-bold text-white hover:text-accent transition-colors">
                  github.com/medhansh5
                </a>
              </div>

              <div className="glass-panel p-6 border border-white/10">
                <div className="font-mono text-[10px] text-accent tracking-widest uppercase mb-1">ASHCRESTHQ COLLECTIVE</div>
                <a href="https://github.com/AshcrestHQ" target="_blank" rel="noreferrer" className="font-mono text-base font-bold text-white hover:text-accent transition-colors">
                  github.com/AshcrestHQ
                </a>
              </div>
            </div>

            <div className="font-mono text-xs text-muted/60 tracking-wider">
              LOCATION: GHAZIABAD, NCR, INDIA<br />
              TIMEZONE: IST (UTC+05:30)
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 glass-panel p-8 md:p-10 border border-white/10">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:medhansh.hq@outlook.com?subject=Contact%20from%20Portfolio";
              }}
              className="flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-muted tracking-widest uppercase">NAME</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Name" 
                    className="bg-[#040405] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors font-mono"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs text-muted tracking-widest uppercase">EMAIL</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="your.email@domain.com" 
                    className="bg-[#040405] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors font-mono"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-muted tracking-widest uppercase">MESSAGE / RESEARCH PROPOSAL</label>
                <textarea 
                  rows={5} 
                  required 
                  placeholder="State your technical query or collaboration context..." 
                  className="bg-[#040405] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors font-mono resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-accent text-white font-mono text-xs font-semibold tracking-widest uppercase hover:bg-red-600 transition-colors border border-accent cursor-pointer shadow-lg shadow-accent/20"
              >
                SEND DIRECT INQUIRY VIA EMAIL
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
