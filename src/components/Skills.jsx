import React from 'react';
import { motion } from 'framer-motion';

const hard = ['PHP', 'JavaScript', 'Laravel', 'React', 'Flutter', 'MySQL', 'Figma', 'Trello'];
const soft = ['Leadership', 'Analytical Thinking', 'Problem Solving'];

function Pill({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-white/90">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="bg-[#0a0f1f]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold tracking-[0.22em] text-white/50 uppercase">Skill</h2>
          </div>
          <motion.div
            className="md:col-span-9"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <h3 className="text-xs tracking-widest text-white/50 uppercase">Hard Skill</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hard.map((h) => (
                    <Pill key={h} label={h} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs tracking-widest text-white/50 uppercase">Soft Skill</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {soft.map((s) => (
                    <Pill key={s} label={s} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
