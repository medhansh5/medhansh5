import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2020 → Present",
    role: "Chief Technology Evangelist",
    organization: "CyberHeaven",
    type: "PROFESSIONAL"
  },
  {
    year: "2026 → Present",
    role: "Founder",
    organization: "AshcrestHQ",
    type: "COLLECTIVE"
  },
  {
    year: "2026",
    role: "Independent Researcher",
    organization: "FusionNet / PotholeNet / ShadowMap / BikeGuard",
    type: "RESEARCH"
  },
  {
    year: "2026 → 2030",
    role: "Computer Science",
    organization: "Bennett University",
    type: "ACADEMIC"
  },
  {
    year: "2026 → 2030",
    role: "Computer Science",
    organization: "University of the People",
    type: "ACADEMIC"
  }
];

export default function Experience() {
  return (
    <section className="py-32 px-6 md:px-12 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono tracking-widest text-muted mb-16">SECTION 08 — TIMELINE</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="mb-16 last:mb-0 relative pl-8 md:pl-16 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-[#050505] border border-white/40 group-hover:bg-accent group-hover:border-accent transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                <span className="font-mono text-sm text-accent shrink-0 md:w-32">{item.year}</span>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300">{item.role}</h4>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <div className="hidden md:block w-32 shrink-0"></div>
                <div className="flex items-center gap-4">
                  <span className="text-lg text-muted">{item.organization}</span>
                  <span className="font-mono text-[10px] tracking-widest px-2 py-1 bg-white/5 text-white/40 border border-white/5">{item.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
