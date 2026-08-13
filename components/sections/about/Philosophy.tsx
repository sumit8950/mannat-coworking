"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="mx-auto grid max-w-[1440px] gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-16 lg:py-36 xl:px-24">
      <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.65 }} className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">Our philosophy</motion.p>
      <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
        <h2 className="max-w-4xl font-serif text-[clamp(2.6rem,4.6vw,5rem)] leading-[0.98] tracking-[-0.045em]">A better workday begins with a better atmosphere.</h2>
        <p className="mt-8 max-w-2xl text-base leading-8 text-[#5F6368] lg:text-lg">We believe the spaces around us quietly shape what is possible. So every corner of Mannat is designed with a simple purpose: to make room for clear thinking, generous conversation, and work you feel proud to bring into the world.</p>
      </motion.div>
    </section>
  );
}
