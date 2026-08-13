"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  "Flexible Workspaces",
  "Premium Amenities",
  "Professional Community",
];

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#C8A96A]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0F4C45]">
                About Mannat
              </p>
            </div>

            <h2 className="mt-6 max-w-xl font-serif text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.055em] text-[#1A1A1A]">
              A better place to{" "}
              <span className="italic text-[#0F4C45]">
                work, connect & grow.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-[15px] leading-7 text-[#5F6368]">
              Mannat is a thoughtfully designed coworking space for
              entrepreneurs, professionals, startups, and teams looking for a
              productive place to work, connect, and grow.
            </p>

            {/* FEATURES */}
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-xs font-medium text-[#3F4548]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96A]" />
                  {feature}
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#0F4C45] pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0F4C45] transition-all duration-300 hover:gap-5"
            >
              Discover Mannat Coworking
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
              <Image
                src="/images/about/about-image.jpg"
                alt="Mannat Coworking workspace"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* subtle overlay */}
              <div className="absolute inset-0 bg-[#0F4C45]/10" />
            </div>

            {/* Small decorative accent */}
            <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-full border border-[#C8A96A]/50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}