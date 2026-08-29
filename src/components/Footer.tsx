import { useEffect, useState } from 'react';

export default function Footer() {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setIstTime(new Date().toLocaleTimeString('en-US', options) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-12 px-6 md:px-12 bg-[#040405] border-t border-white/10 text-xs font-mono text-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-white">MEDHANSH KABADWAL © {new Date().getFullYear()}</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline text-white/70">PHYSICAL AI & SYSTEMS</span>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-white/60">
          <span>GHAZIABAD {istTime && `[ ${istTime} ]`}</span>
          <a href="https://www.linkedin.com/in/medhansh.5" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LINKEDIN: @MEDHANSH.5</a>
          <a href="https://github.com/medhansh5" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GITHUB</a>
          <a href="https://github.com/AshcrestHQ" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">ASHCRESTHQ</a>
          <a href="#" className="hover:text-accent transition-colors">BACK TO TOP ↑</a>
        </div>
      </div>
    </footer>
  );
}
