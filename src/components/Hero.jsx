import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1f]">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-xs md:text-sm font-semibold tracking-[0.22em] text-white/50 uppercase">Bandung • Web Developer Intern</p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
              Doni Setiawan Wahyono
            </h1>
            <p className="mt-3 text-lg md:text-xl font-medium text-white/85">Web Developer & Project Management Enthusiast</p>
            <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
              Saya menggabungkan ketajaman technical coding dengan kemampuan mengelola proyek teknis—membawa solusi yang rapi, terukur, dan siap di-scale.
            </p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="https://www.linkedin.com/in/donisw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0f1f] shadow-sm transition will-change-transform hover:scale-[1.02] hover:bg-white/90"
              >
                Connect via LinkedIn
              </a>
              <a
                href="mailto:doni@donisw.com"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition will-change-transform hover:scale-[1.02] hover:bg-white/5"
              >
                Email
              </a>
              <a
                href="https://donisw.com"
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-sm font-medium text-white/70 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                donisw.com
              </a>
            </motion.div>
          </div>

          <div className="relative md:col-span-6 h-[420px] w-full md:h-[620px]">
            <div className="absolute inset-0 rounded-[20px] border border-white/10" />
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-t from-[#0a0f1f] via-transparent to-transparent" />
            <div className="pointer-events-none absolute -inset-6 rounded-[28px] border border-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
