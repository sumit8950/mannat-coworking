"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  BatteryCharging,
  Snowflake,
  Monitor,
  ShieldCheck,
  Coffee,
} from "lucide-react";

const amenities = [
  {
    number: "01",
    title: "High-Speed Wi-Fi",
    description: "Fast and reliable connectivity for uninterrupted work.",
    icon: Wifi,
  },
  {
    number: "02",
    title: "Power Backup",
    description: "Stay productive with dependable power backup.",
    icon: BatteryCharging,
  },
  {
    number: "03",
    title: "Air Conditioned",
    description: "A comfortable, climate-controlled workspace.",
    icon: Snowflake,
  },
  {
    number: "04",
    title: "Modern Workstations",
    description: "Thoughtfully designed spaces for productive work.",
    icon: Monitor,
  },
  {
    number: "05",
    title: "24/7 CCTV Security",
    description: "A secure and monitored environment throughout the day.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Unlimited Tea & Coffee",
    description: "Your favourite refreshments, always within reach.",
    icon: Coffee,
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
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function HomeAmenities() {
  return (
    <section
  id="amenities"
  className="relative scroll-mt-20 overflow-hidden bg-[#0F4C45] px-4 py-8 text-[#F8F6F1] sm:px-10 sm:py-10 lg:px-12 lg:py-12"
>

      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#C8A96A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#F8F6F1]/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-11 max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C8A96A]" />

            <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
              The Mannat Standard
            </p>
          </div>

             <h2 className="mt-4 text-center font-serif text-[clamp(2rem,3.6vw,4rem)] leading-none tracking-[-0.055em]">
              Everything you need to{" "}
              <span className="italic text-[#C8A96A]">work better.</span>
             </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-[#F8F6F1]/70">
             From seamless connectivity to everyday comforts, every detail is designed to make your workday effortless.
          </p>
        </motion.div>

        {/* AMENITIES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-[24px] border border-[#F8F6F1]/15 bg-[#F8F6F1]/15 min-[390px]:grid-cols-2 lg:grid-cols-3"
        >
          {amenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <motion.article
                key={amenity.number}
                variants={item}
                whileHover={{
                  backgroundColor: "rgba(248,246,241,0.08)",
                  transition: { duration: 0.3 },
                }}
                className="group relative overflow-hidden bg-[#0F4C45] px-5 py-6 transition-colors duration-500 sm:px-6 sm:py-7"
              >

                {/* HOVER GREEN/GOLD GLOW */}
                <div className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#C8A96A]/0 blur-2xl transition-all duration-700 group-hover:bg-[#C8A96A]/15 group-hover:blur-2xl" />

                {/* TOP */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-[#C8A96A]">
                    {amenity.number}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F8F6F1]/15 text-[#C8A96A] transition-all duration-500 group-hover:border-[#C8A96A]/60 group-hover:bg-[#C8A96A] group-hover:text-[#0F4C45]"
                  >
                    <Icon size={17} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-6 font-serif text-[1.55rem] leading-none tracking-[-0.035em] text-[#F8F6F1]">
                  {amenity.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-3 max-w-xs text-[11px] leading-5 text-[#F8F6F1]/55 transition-colors duration-500 group-hover:text-[#F8F6F1]/75">
                  {amenity.description}
                </p>

                {/* BOTTOM LINE */}
                <motion.div
                  initial={{ width: 18 }}
                  whileHover={{ width: 38 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mt-6 h-px bg-[#C8A96A]"
                />

              </motion.article>
            );
          })}
        </motion.div>

        {/* SMALL FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#F8F6F1]/35"
        >
          Designed for focused work. Built for better days.
        </motion.p>

      </div>
    </section>
  );
}

