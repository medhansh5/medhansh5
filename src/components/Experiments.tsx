import { ACTIVE_EXPERIMENTS } from '../data/portfolio';

export default function Experiments() {
  return (
    <section id="experiments" className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto border-t border-border">
      {/* Section Header: Direct and concise */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Secondary Projects & <span className="font-serif italic font-normal text-white px-1">Prototypes</span>
        </h2>
        <p className="text-sm text-silver max-w-2xl leading-relaxed">
          Prototypes covering Linux desktop HUDs and browser audio synthesis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACTIVE_EXPERIMENTS.map((exp) => (
          <div
            key={exp.id}
            className="arch-card rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-3 text-silver">
                <span>{exp.id === 'spectre' ? 'Linux X11 Overlay' : 'Web Audio Synthesis'}</span>
                <span className="text-pink font-semibold text-[10px] px-2.5 py-0.5 rounded-full bg-pink/10 border border-pink/30">
                  Active
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-white mb-1">
                {exp.name}
              </h3>
              <p className="text-xs font-mono text-pink mb-3">
                {exp.tagline}
              </p>
              <p className="text-xs sm:text-sm text-silver leading-relaxed mb-6">
                {exp.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="spec-tag"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs font-mono pt-3 border-t border-border">
                <a
                  href={exp.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink hover:text-white transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Repository ↗</span>
                </a>
                {exp.liveUrl && (
                  <a
                    href={exp.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink transition-colors flex items-center gap-1"
                  >
                    <span>Live Demo ↗</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
