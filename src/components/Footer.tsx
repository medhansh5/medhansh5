import { SOCIAL_LINKS } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 xl:px-12 border-t border-border bg-navy-deep text-xs font-mono text-silver/70 w-full min-w-0 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-w-0">
        <div className="min-w-0 break-words">
          <span className="text-white font-semibold">Medhansh Kabadwal</span>
          <span className="mx-2 text-border">•</span>
          <span className="break-words">Systems Programming, Microkernels & Computer Vision</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 shrink-0">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink transition-colors"
          >
            GitHub
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="hover:text-pink transition-colors"
          >
            Email
          </a>
          <a
            href="#main-content"
            className="text-silver hover:text-white transition-colors"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
