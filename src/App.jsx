import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0a0f1f]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-base font-semibold tracking-[0.08em] uppercase text-white/80">Doni SW</span>
          <nav className="hidden gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">Tentang</a>
            <a href="#experience" className="transition hover:text-white">Pengalaman</a>
            <a href="#skills" className="transition hover:text-white">Skill</a>
            <a href="https://donisw.com" target="_blank" rel="noreferrer" className="transition hover:text-white">Portfolio</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
      </main>

      <footer className="border-t border-white/10 bg-[#0a0f1f]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Doni Setiawan Wahyono — Bandung</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
