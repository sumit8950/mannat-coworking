"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkspaceExperience() {
  return (
    <section className="p-3 sm:p-5 lg:p-8">
      <motion.div initial={{ opacity: 0, scale: 0.985 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }} className="relative mx-auto flex min-h-[540px] max-w-[1560px] items-end overflow-hidden rounded-[2rem] p-7 sm:min-h-[620px] sm:p-12 lg:min-h-[680px] lg:p-16">
        <Image src="/images/about/about-image.jpg" alt="Mannat Coworking workspace experience" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#0F4C45]/55" />
        <div className="relative max-w-2xl text-[#F8F7F2]"><p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">The workspace experience</p><h2 className="mt-5 font-serif text-[clamp(3rem,5.5vw,6rem)] leading-[0.91] tracking-[-0.05em]">Made for the work that moves you forward.</h2></div>
      </motion.div>
    </section>
  );
}
