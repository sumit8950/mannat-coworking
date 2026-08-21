"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const audiences = [
  {
    number: "01",
    title: "Entrepreneurs",
    description:
      "A focused space to build ideas, meet people, and move business forward.",
  },
  {
    number: "02",
    title: "Startups",
    description:
      "Flexible workspaces designed for growing teams and ambitious ventures.",
  },
  {
    number: "03",
    title: "Freelancers",
    description:
      "A professional environment that makes focused, independent work easier.",
  },
  {
    number: "04",
    title: "Growing Teams",
    description:
      "Comfortable spaces where teams can collaborate, connect, and grow together.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function WhoIsMannatFor() {
  const [activeCard, setActiveCard] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % audiences.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="overflow-hidden bg-[#F8F6F1] px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#0F4C45]">
            Made for your way of working
          </p>

          <span className="mx-auto mt-3 block h-px w-9 bg-[#C8A96A]" />

          <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.5vw,4.5rem)] leading-[0.95] tracking-[-0.055em] text-[#1A1A1A]">
            Who is Mannat{" "}
            <span className="italic text-[#0F4C45]">Coworking for?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#5F6368]">
            A thoughtfully designed workspace for people with ideas to build,
            businesses to grow, and work that matters.
          </p>
        </motion.div>

        {/* AUDIENCE CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-[#0F4C45]/10 bg-[#0F4C45]/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {audiences.map((audience, index) => {
            const active = activeCard === index;

            return (
              <motion.article
                key={audience.number}
                variants={item}
                whileHover={{ y: -4 }}
                onClick={() => setActiveCard(index)}
                className={`group relative cursor-pointer px-6 py-7 sm:px-7 transition-all duration-700 ${
                  active
                    ? "bg-[#0F4C45] scale-[1.02] shadow-2xl"
                    : "bg-[#FBFAF6] hover:bg-[#0F4C45]"
                }`}
              >
                {/* NUMBER */}
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-semibold tracking-[0.18em] text-[#C8A96A]">
                    {audience.number}
                  </span>

                  <span
                    className={`h-px transition-all duration-700 ${
                      active
                        ? "w-12 bg-[#C8A96A]"
                        : "w-8 bg-[#C8A96A]/50 group-hover:w-12 group-hover:bg-[#C8A96A]"
                    }`}
                  />
                </div>

                {/* TITLE */}
                <h3
                  className={`mt-8 font-serif text-2xl tracking-[-0.035em] transition-colors duration-700 ${
                    active
                      ? "text-[#F8F6F1]"
                      : "text-[#1A1A1A] group-hover:text-[#F8F6F1]"
                  }`}
                >
                  {audience.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`mt-3 text-sm leading-6 transition-colors duration-700 ${
                    active
                      ? "text-[#F8F6F1]/70"
                      : "text-[#5F6368] group-hover:text-[#F8F6F1]/70"
                  }`}
                >
                  {audience.description}
                </p>

                {/* BOTTOM ACCENT */}
                <div
                  className={`mt-7 h-px bg-[#C8A96A] transition-all duration-700 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}