import { motion } from 'framer-motion';

const milestones = [
  {
    period: "2025 — PRESENT",
    title: "FOUNDER & SYSTEMS ARCHITECT",
    org: "AshcrestHQ Collective",
    details: "Architecting open-source security tools, privacy daemons, and microkernels (Janus OS, Blindside, Aegis, Spectre, Terra, Holocron)."
  },
  {
    period: "2025",
    title: "AUTHOR & RESEARCHER",
    org: "FusionNet Paper (DOI: 10.5281/zenodo.20971224)",
    details: "Published multimodal computer vision + 6-DOF IMU sensor fusion framework for single-track vehicle road anomaly isolation (0.91 F1 score)."
  },
  {
    period: "PRESENT & BEYOND",
    title: "EXPANDING REACH",
    org: "Global Research & Open-Source Community",
    details: "Expanding open-source systems architecture, edge computer vision research, and technical collaboration across global engineering communities."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-[#070708]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono tracking-widest text-accent uppercase">SECTION 08</span>
          <span className="w-12 h-[1px] bg-accent/40"></span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16">
          ENGINEERING TIMELINE
        </h2>

        <div className="relative border-l border-white/10 pl-8 md:pl-12 flex flex-col gap-12">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[37px] md:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-[#070708] border-2 border-accent group-hover:bg-accent group-hover:scale-125 transition-all duration-300"></div>

              <div className="font-mono text-xs text-accent tracking-widest uppercase mb-1">
                {m.period}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {m.title}
              </h3>

              <div className="font-mono text-xs text-muted/80 mb-3">
                {m.org}
              </div>

              <p className="text-muted text-sm leading-relaxed max-w-2xl font-light">
                {m.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
