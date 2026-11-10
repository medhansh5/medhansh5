import { DOMAIN_INTERESTS } from '../data/portfolio';

export default function EngineeringInterests() {
  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto border-t border-border">
      {/* Section Header: Direct and concise */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Disciplines & <span className="font-serif italic font-normal text-white px-1">Architectural Focus</span>
        </h2>
        <p className="text-sm text-silver max-w-2xl leading-relaxed">
          Core engineering areas explored through code and benchmarks.
        </p>
      </div>

      <div className="flex flex-col divide-y divide-border border-y border-border">
        {DOMAIN_INTERESTS.map((domain) => (
          <div
            key={domain.number}
            className="py-7 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Number and title */}
            <div className="lg:col-span-4">
              <div className="text-xs font-mono text-pink font-semibold mb-1">
                Discipline {domain.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {domain.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {domain.technologies.map((tech) => (
                  <span key={tech} className="spec-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-4">
              <p className="text-xs sm:text-sm text-silver leading-relaxed">
                {domain.summary}
              </p>
            </div>

            {/* Topics */}
            <div className="lg:col-span-4">
              <div className="text-[11px] font-mono text-pink/80 uppercase tracking-wider mb-2">
                Explored Primitives
              </div>
              <ul className="flex flex-col gap-1.5 text-xs text-silver">
                {domain.topics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink/60 shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
