export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-[#020202] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        
        <div>
          <h2 className="text-xl font-bold tracking-widest mb-2">MEDHANSH KABADWAL</h2>
          <p className="text-muted font-mono text-xs tracking-widest">
            Physical AI · Computer Vision · Systems
          </p>
        </div>

        <div className="flex flex-wrap gap-8 font-mono text-xs tracking-widest">
          <a href="https://github.com/medhansh5" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">GITHUB</a>
          <a href="https://www.linkedin.com/in/medhansh5" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">LINKEDIN</a>
          <a href="https://instagram.com/medhansh.hq" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">INSTAGRAM</a>
          <a href="https://github.com/AshcrestHQ" target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors">ASHCRESTHQ</a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-mono tracking-widest text-muted/40">
        <span>BUILT IN THE OPEN.</span>
        <span>2026</span>
      </div>
    </footer>
  );
}
