import { ARCHIVED_PROJECTS } from '../data/portfolio';

export default function ArchivedWork() {
  return (
    <section id="archive" className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto border-t border-border">
      {/* Section Header: Direct and concise */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Archived Research & <span className="font-serif italic font-normal text-white px-1">Past Projects</span>
        </h2>
        <p className="text-sm text-silver max-w-2xl leading-relaxed">
          Completed research benchmarks and previous projects, archived for reference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARCHIVED_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="arch-card rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2 text-silver/70">
                <span>{project.period}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-navy-deep border border-border text-silver/70">
                  Archived
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-2.5 mb-2">
                <h3 className="text-lg font-bold text-white">
                  {project.name}
                </h3>
                {project.doi && (
                  <a
                    href={project.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-pink hover:underline font-semibold"
                  >
                    Zenodo DOI: {project.doi} ↗
                  </a>
                )}
              </div>

              <p className="text-xs sm:text-sm text-silver leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            <div className="pt-3 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex flex-wrap gap-1.5 text-silver/70">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-[11px] px-1.5 py-0.5 bg-navy-deep rounded border border-border/50">
                    #{tech}
                  </span>
                ))}
              </div>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-white transition-colors"
              >
                Repository ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
