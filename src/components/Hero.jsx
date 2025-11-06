import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-widest text-neutral-500 uppercase">Bandung • Web Developer Intern</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
              Doni Setiawan Wahyono
            </h1>
            <p className="mt-2 text-lg font-semibold text-neutral-800">Web Developer & Project Management Enthusiast</p>
            <p className="mt-5 text-neutral-700 leading-relaxed">
              Saya menggabungkan ketajaman technical coding dengan kemampuan mengelola proyek teknis—membawa solusi yang rapi, terukur, dan siap di-scale.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/donisw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              >
                Connect via LinkedIn
              </a>
              <a
                href="mailto:doni@donisw.com"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
              >
                Email
              </a>
              <a
                href="https://donisw.com"
                target="_blank"
                rel="noreferrer"
                className="ml-2 text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900"
              >
                donisw.com
              </a>
            </div>
          </div>

          <div className="relative h-[360px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-xl border border-neutral-200/70 bg-white/40 backdrop-blur-sm"></div>
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-white via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
