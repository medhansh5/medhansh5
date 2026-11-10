import { SOCIAL_LINKS } from '../data/portfolio';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1440px] mx-auto border-t border-border">
      <div className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
          Initiate Technical <span className="font-serif italic font-normal text-white px-1">Dialogue</span>
        </h2>
        <p className="text-sm sm:text-base text-silver leading-relaxed mb-8">
          Interested in operating systems, local computer vision, and systems programming in C++ and Rust. Feel free to reach out.
        </p>

        {/* Contact links */}
        <div className="flex flex-wrap items-center gap-4 mb-10 text-xs font-mono">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-pink text-white font-semibold tracking-wider hover:bg-pink/90 hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(255,46,147,0.25)] hover:shadow-[0_8px_25px_rgba(255,46,147,0.35)]"
          >
            {SOCIAL_LINKS.email} ↗
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-navy-elevated/70 border border-border text-white hover:border-pink hover:-translate-y-0.5 transition-all font-medium"
          >
            LinkedIn ↗
          </a>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-5 rounded-full bg-navy-elevated/70 border border-border text-white hover:border-pink hover:-translate-y-0.5 transition-all font-medium"
          >
            GitHub ↗
          </a>
        </div>

        <p className="text-xs text-silver/70 italic font-light pt-6 border-t border-border">
          "The most reliable way to understand a complex system is to build a minimal, working model of it from scratch."
        </p>
      </div>
    </section>
  );
}
