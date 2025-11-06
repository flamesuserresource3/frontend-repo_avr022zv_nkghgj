import React from 'react';

export default function CTA() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">Siap berkolaborasi?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-700">
          Saya terbuka untuk kesempatan Web Developer Intern. Mari terhubung dan bicarakan bagaimana saya bisa memperkuat tim Anda.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
    </section>
  );
}
