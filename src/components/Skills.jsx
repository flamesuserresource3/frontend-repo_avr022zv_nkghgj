import React from 'react';

const hard = ['PHP', 'JavaScript', 'Laravel', 'React', 'Flutter', 'MySQL', 'Figma', 'Trello'];
const soft = ['Leadership', 'Analytical Thinking', 'Problem Solving'];

function Pill({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-neutral-800 shadow-sm">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900">Skill</h2>
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Hard Skill</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {hard.map((h) => (
                <Pill key={h} label={h} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">Soft Skill</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {soft.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
