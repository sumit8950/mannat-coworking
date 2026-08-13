"use client";

import { motion } from "framer-motion";

const faqs = [
  ["Can I visit without booking?", "Walk-ins are welcome when space allows. Booking ahead helps us make your visit more considered."],
  ["Do you offer private cabins?", "Yes. We offer focused spaces that give growing teams the privacy and flexibility they need."],
  ["Is parking available?", "Parking details are available from our reception team before your visit."],
];

export default function QuickFaq() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 xl:px-24">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="mb-12"><p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">Quick FAQ</p><h2 className="mt-4 font-serif text-5xl tracking-[-0.045em] sm:text-6xl">Useful to know.</h2></motion.div>
      <div className="grid gap-4 lg:grid-cols-3">{faqs.map(([question, answer], index) => <motion.article key={question} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ y: -5 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="rounded-3xl border border-[#0F4C45]/10 bg-[#FBFAF6] p-7 shadow-[0_10px_26px_rgba(15,76,69,0.05)] sm:p-8"><span className="text-[10px] font-semibold tracking-[0.2em] text-[#C8A96A]">0{index + 1}</span><h3 className="mt-8 font-serif text-3xl leading-8 tracking-[-0.035em]">{question}</h3><p className="mt-5 text-sm leading-6 text-[#5F6368]">{answer}</p></motion.article>)}</div>
    </section>
  );
}
