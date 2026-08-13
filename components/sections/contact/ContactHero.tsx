"use client";

import { motion } from "framer-motion";

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-4 sm:pt-16 sm:pb-6">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_14%,rgba(200,169,106,0.07),transparent_24%),radial-gradient(circle_at_92%_88%,rgba(15,76,69,0.055),transparent_28%)]" />

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{
          staggerChildren: 0.1,
          delayChildren: 0.05,
        }}
        className="relative mx-auto max-w-7xl px-6 text-center sm:px-10"
      >
        {/* Label */}
        <motion.div
          variants={rise}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#0F4C45]">
            CONTACT MANNAT CO-WORKING
          </p>

          <span className="mx-auto mt-3 block h-px w-10 bg-[#C8A96A]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={rise}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-5xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-[-0.05em] text-[#1A1A1A]"
        >
          Make room for{" "}
          <span className="italic text-[#0F4C45]">
            what&apos;s next.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={rise}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5F6368]"
        >
          A considered workplace for teams and individuals ready to make
          their next move.
        </motion.p>
      </motion.div>
    </section>
  );
}
