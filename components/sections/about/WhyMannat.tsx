"use client";

import { motion } from "framer-motion";

const reasons = [
  ["01", "Considered comfort", "Thoughtful ergonomics and natural light that make long days feel lighter."],
  ["02", "Room to grow", "Flexible spaces that move easily with you, from focused solo work to a growing team."],
  ["03", "A quiet advantage", "Reliable essentials, seamlessly handled, so your attention stays where it belongs."],
  ["04", "People with purpose", "A warm professional community that turns a shared address into real connection."],
];

export default function WhyMannat() {
  return (
    <section className="border-y border-[#0F4C45]/10 bg-[#0F4C45] text-[#F8F7F2]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-32 xl:px-24">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div><p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">Why Mannat</p><h2 className="mt-4 font-serif text-[clamp(2.75rem,12vw,3.75rem)] tracking-[-0.04em]">The details matter.</h2></div>
          <p className="max-w-sm text-sm leading-6 text-[#F8F7F2]/70">Everything here is intentional, so you can be too.</p>
        </motion.div>
        <div className="border-t border-[#F8F7F2]/20">
          {reasons.map(([number, title, copy], index) => (
            <motion.article key={number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: index * 0.08 }} className="grid gap-4 border-b border-[#F8F7F2]/20 py-7 sm:grid-cols-[90px_1fr_1fr] sm:items-baseline lg:grid-cols-[90px_minmax(0,0.85fr)_minmax(0,1.15fr)] lg:py-8">
              <span className="text-xs tracking-[0.2em] text-[#C8A96A]">{number}</span><h3 className="font-serif text-3xl tracking-[-0.03em]">{title}</h3><p className="max-w-md text-sm leading-6 text-[#F8F7F2]/65">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
