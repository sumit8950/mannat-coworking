"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-72px)] items-center border-b border-[#0F4C45]/10 py-8 sm:py-10 lg:py-6">
      <div className="absolute left-0 top-[17%] h-52 w-px bg-[#C8A96A]" />
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 sm:gap-12 sm:px-10 lg:grid-cols-[0.93fr_1.07fr] lg:gap-12 lg:px-16 xl:gap-16 xl:px-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
          className="relative z-10 max-w-2xl lg:pl-4"
        >
          <motion.p variants={rise} transition={{ duration: 0.7, ease: "easeOut" }} className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0F4C45]">
            <span className="h-px w-9 bg-[#C8A96A]" /> Our story
          </motion.p>
          <motion.h1 variants={rise} transition={{ duration: 0.8, ease: "easeOut" }} className="font-serif text-[clamp(3.2rem,6.3vw,6.6rem)] leading-[0.91] tracking-[-0.055em] text-[#1A1A1A]">
            Work with
            <span className="block italic text-[#0F4C45]">intention.</span>
          </motion.h1>
          <motion.p variants={rise} transition={{ duration: 0.7, ease: "easeOut" }} className="mt-7 max-w-xl text-base leading-7 text-[#5F6368] lg:text-lg lg:leading-8">
            Mannat is a considered place for ambitious people to do their most meaningful work—calm, connected, and made for momentum.
          </motion.p>
          <motion.div variants={rise} transition={{ duration: 0.7, ease: "easeOut" }} className="mt-9 flex flex-col gap-3 min-[390px]:flex-row sm:mt-10">
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center gap-3 bg-[#0F4C45] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#F8F7F2] transition hover:bg-[#1A1A1A]">
              Book a visit <ArrowUpRight size={15} strokeWidth={1.7} />
            </Link>
            <Link href="#philosophy" className="inline-flex min-h-11 items-center justify-center border border-[#0F4C45]/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0F4C45] transition hover:border-[#0F4C45] hover:bg-[#0F4C45]/5">
              Our philosophy
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0 0 0 0)" }} transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1], delay: 0.18 }} className="relative mx-auto w-full max-w-[680px] lg:justify-self-end">
          <div className="relative aspect-[1.08/1] overflow-hidden rounded-tl-[6.5rem] rounded-tr-[2rem] rounded-br-[6.5rem] rounded-bl-[2rem] shadow-[0_34px_70px_rgba(15,76,69,0.2)] sm:aspect-[1.2/1] sm:rounded-tl-[8rem] sm:rounded-tr-[2.75rem] sm:rounded-br-[8rem] sm:rounded-bl-[2.75rem] lg:aspect-[1.12/1.04]">
            <Image src="/images/about/about-image.jpg" alt="Modern private office interior with desk seating and city views" fill priority sizes="(max-width: 1024px) 90vw, 50vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-[#0F4C45]/15" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0F4C45]/55 to-transparent" />
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.82, duration: 0.65 }} className="absolute bottom-5 left-5 max-w-[215px] border border-[#F8F7F2]/30 bg-[#F8F7F2]/95 px-4 py-3.5 shadow-[0_14px_30px_rgba(15,76,69,0.18)] backdrop-blur-sm sm:bottom-7 sm:left-7 sm:px-5 sm:py-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">Mannat Coworking</p>
              <p className="mt-1.5 font-serif text-lg leading-5 tracking-[-0.02em] text-[#0F4C45]">Space, considered for focus.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
