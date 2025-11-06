import React from 'react';

export default function ContactCTA() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-neutral-200 bg-white p-6 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">Terbuka untuk Web Developer Intern</h3>
            <p className="text-neutral-700">Hubungi saya melalui LinkedIn atau email. Lihat juga portofolio di donisw.com.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/donisw"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              LinkedIn
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
              className="text-sm font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900"
            >
              donisw.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
