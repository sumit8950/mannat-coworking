"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-76px)] overflow-hidden bg-[#0F4C45]">

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
      <div className="relative flex min-h-[calc(100svh-76px)] items-center justify-center px-6 py-16 sm:px-10">

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
            className="mb-7 flex items-center justify-center gap-4"
          >
            <span className="h-px w-10 bg-[#C8A96A]" />

            <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.32em] text-[#E1BD78] sm:text-[11px]">
              Premium Coworking Spaces
            </p>

            <span className="h-px w-10 bg-[#C8A96A]" />
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
            className="mx-auto whitespace-nowrap font-serif text-[clamp(2.8rem,6.2vw,7rem)] leading-none tracking-[-0.065em] text-[#F8F6F1]"
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
            className="mt-9 flex justify-center gap-4"
          >
            <Link href="/contact">
              <motion.span
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex rounded-xl bg-[#F8F6F1] px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F4C45] shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-colors duration-300 hover:bg-[#C8A96A] hover:text-[#1A1A1A]"
              >
                Book a Visit
              </motion.span>
            </Link>

            <Link href="/about">
              <motion.span
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex rounded-xl border border-[#F8F6F1]/60 bg-[#0F4C45]/25 px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F8F6F1] backdrop-blur-sm transition-all duration-300 hover:border-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#1A1A1A]"
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
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-3"
      >
        <span className="h-px w-8 bg-[#C8A96A]" />

        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#F8F6F1]/70">
          Work. Connect. Grow.
        </span>

        <span className="h-px w-8 bg-[#C8A96A]" />
      </motion.div>

    </section>
  );
}