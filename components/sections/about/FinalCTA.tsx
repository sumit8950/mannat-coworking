"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-28 text-center sm:px-10 lg:px-16 lg:py-36 xl:px-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.75 }}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">Come see the difference</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-[clamp(3rem,5.5vw,6rem)] leading-[0.92] tracking-[-0.05em]">Your next chapter has room to begin.</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3"><Link href="/contact" className="inline-flex items-center gap-3 bg-[#0F4C45] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#F8F7F2] transition hover:bg-[#1A1A1A]">Book a visit <ArrowUpRight size={15} /></Link><Link href="/contact" className="inline-flex items-center border border-[#0F4C45]/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0F4C45] transition hover:border-[#0F4C45] hover:bg-[#0F4C45]/5">Contact us</Link></div>
      </motion.div>
    </section>
  );
}
