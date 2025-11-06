import React from 'react';

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
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">Pengalaman</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {experiences.map((exp) => (
            <article key={exp.company} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-neutral-900">{exp.company}</h3>
              <p className="mt-1 text-sm text-neutral-600">{exp.role}</p>
              <p className="mt-1 text-sm font-medium text-neutral-700">{exp.time}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-700">
                {exp.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
