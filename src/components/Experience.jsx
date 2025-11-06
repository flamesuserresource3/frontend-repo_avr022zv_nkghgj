import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'PT Hasta Reksa Manunggal',
    role: 'Junior Project Manager',
    time: 'Project Digitalisasi SPBU Pertamina',
    points: [
      'Mengelola timeline dan koordinasi lintas tim menggunakan Trello',
      'Menyusun RAB dan kontrol biaya proyek',
      'Koordinasi vendor untuk instalasi dan integrasi perangkat',
    ],
  },
  {
    company: 'Universitas Cipasung',
    role: 'Web Developer Magang',
    time: 'Aplikasi Perpustakaan (React + CodeIgniter)',
    points: [
      'Membangun front-end React yang terintegrasi API CodeIgniter',
      'Otentikasi, katalog buku, dan manajemen peminjaman',
      'Deployment internal dan pelatihan penggunaan dasar',
    ],
  },
  {
    company: 'LP3I Tasikmalaya',
    role: 'IT Support Magang',
    time: 'Operasional Infrastruktur',
    points: [
      'Maintenance 50+ komputer, troubleshooting jaringan, dan CCTV',
      'Standarisasi dokumentasi aset dan SOP perawatan',
      'Peningkatan uptime perangkat dengan monitoring terjadwal',
    ],
  },
];

export default function Experience() {
  return (
    <section className="bg-[#0a0f1f]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold tracking-[0.22em] text-white/50 uppercase">Pengalaman</h2>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {experiences.map((exp, i) => (
                <motion.article
                  key={exp.company}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition will-change-transform hover:scale-[1.02] hover:bg-white/[0.04]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h3 className="text-base font-semibold text-white">{exp.company}</h3>
                  <p className="mt-1 text-sm text-white/70">{exp.role}</p>
                  <p className="mt-1 text-xs font-medium text-white/60">{exp.time}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {exp.points.map((p, idx) => (
                      <li key={idx} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
