import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-[#0a0f1f]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold tracking-[0.22em] text-white/50 uppercase">Tentang Saya</h2>
          </div>
          <motion.div
            className="md:col-span-9"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-white/80 leading-relaxed">
              Saya mahasiswa semester 5 Teknik Informatika di Universitas Teknologi Bandung. Fokus saya pada pengembangan web (Laravel, React), perancangan database MySQL, serta perancangan UI menggunakan Figma. Saya nyaman bekerja dalam ritme yang cepat dengan standar dokumentasi yang rapi.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition will-change-transform hover:scale-[1.02] hover:bg-white/[0.05]">
                <p className="text-xs tracking-widest text-white/50 uppercase">Web Development</p>
                <p className="mt-2 font-semibold text-white">Laravel, React</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition will-change-transform hover:scale-[1.02] hover:bg-white/[0.05]">
                <p className="text-xs tracking-widest text-white/50 uppercase">Database</p>
                <p className="mt-2 font-semibold text-white">MySQL</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition will-change-transform hover:scale-[1.02] hover:bg-white/[0.05]">
                <p className="text-xs tracking-widest text-white/50 uppercase">Desain UI</p>
                <p className="mt-2 font-semibold text-white">Figma</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
