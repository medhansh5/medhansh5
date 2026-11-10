import { CURRENT_EXPLORATION } from '../data/portfolio';

export default function CurrentExploration() {
  return (
    <section id="notes" className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto border-t border-border">
      {/* Section Header: Direct and concise */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
          Workbench & Current <span className="font-serif italic font-normal text-white px-1">Explorations</span>
        </h2>
        <p className="text-sm text-silver max-w-2xl leading-relaxed">
          Work currently underway across active projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CURRENT_EXPLORATION.map((item, idx) => (
          <div
            key={item.area}
            className="arch-card rounded-xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2 text-silver">
                <span>Note 0{idx + 1}</span>
                <span className="text-pink font-semibold text-[10px] px-2.5 py-0.5 rounded-full bg-pink/10 border border-pink/30">
                  Active
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {item.area}
              </h3>
              <p className="text-xs sm:text-sm text-silver leading-relaxed">
                {item.focus}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
