"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#0F4C45]">

      {/* Green Coworking Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      {/* Green Premium Overlay */}
      <div className="absolute inset-0 bg-[#073F3A]/70" />

      {/* Soft Light Behind Content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,246,241,0.22),transparent_48%)]" />

      {/* Subtle Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#063B36]/35 via-[#0F4C45]/25 to-[#063B36]/70" />

      {/* Hero Content */}
      <div className="relative flex min-h-[calc(100svh-72px)] items-center justify-center px-4 py-20 sm:px-10 sm:py-16">

        <motion.div
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-7xl text-center"
        >

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mb-7 flex items-center justify-center gap-2 sm:gap-4"
          >
            <span className="h-px w-5 shrink-0 bg-[#C8A96A] sm:w-10" />

            <p className="text-center text-[9px] font-semibold uppercase tracking-[0.18em] text-[#E1BD78] sm:text-[11px] sm:tracking-[0.32em]">
              Premium Coworking Spaces
            </p>

            <span className="h-px w-5 shrink-0 bg-[#C8A96A] sm:w-10" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="mx-auto max-w-5xl font-serif text-[clamp(2.65rem,12vw,7rem)] leading-[0.94] tracking-[-0.065em] text-[#F8F6F1] sm:text-[clamp(3.5rem,6.2vw,7rem)] sm:leading-none"
          >
            Where Great{" "}
            <span className="italic text-[#C8A96A]">
              Ideas Work.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#F8F6F1]/85 sm:text-base sm:leading-8"
          >
            A thoughtfully designed coworking destination for entrepreneurs,
            startups, teams, and modern professionals.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: "easeOut",
            }}
            className="mt-9 flex flex-col items-stretch justify-center gap-3 min-[390px]:flex-row min-[390px]:items-center sm:gap-4"
          >
            <Link href="/contact">
              <motion.span
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#F8F6F1] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0F4C45] shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-colors duration-300 hover:bg-[#C8A96A] hover:text-[#1A1A1A] min-[390px]:w-auto sm:px-7 sm:tracking-[0.18em]"
              >
                Book a Visit
              </motion.span>
            </Link>

            <Link href="/gallery">
              <motion.span
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-[#F8F6F1]/60 bg-[#0F4C45]/25 px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F8F6F1] backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#1A1A1A] min-[390px]:w-auto sm:px-7 sm:tracking-[0.18em]"
              >
                Explore Spaces
              </motion.span>
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-5 left-1/2 flex w-max max-w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-2 sm:bottom-7 sm:gap-3"
      >
        <span className="h-px w-5 bg-[#C8A96A] sm:w-8" />

        <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#F8F6F1]/70 sm:text-[20px] sm:tracking-[0.28em] lg:text-[22px]">
          Work. Connect. Grow.
        </span>

        <span className="h-px w-5 bg-[#C8A96A] sm:w-8" />
      </motion.div>

    </section>
  );
}
