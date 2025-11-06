import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-base font-bold tracking-tight">Doni SW</span>
          <nav className="hidden gap-6 text-sm font-medium text-neutral-700 md:flex">
            <a href="#about" className="hover:text-neutral-900">Tentang</a>
            <a href="#experience" className="hover:text-neutral-900">Pengalaman</a>
            <a href="#skills" className="hover:text-neutral-900">Skill</a>
            <a href="https://donisw.com" target="_blank" rel="noreferrer" className="hover:text-neutral-900">Portfolio</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="skills"><Skills /></div>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Doni Setiawan Wahyono — Bandung</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
