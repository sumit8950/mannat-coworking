"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/images/about/about-image.png",
    alt: "Modern private office interior with desk seating and city views",
  },
  {
    src: "/images/about/about-image1.jpg",
    alt: "Modern private office interior with desk seating and city views",
  },
  {
    src: "/images/about/about-image3.png",
    alt: "Modern private office interior with desk seating and city views",
  },
  {
    src: "/images/about/about-image2.png",
    alt: "Modern private office interior with desk seating and city views",
  },
  {
    src: "/images/about/about-image4.jpg",
    alt: "Modern private office interior with desk seating and city views",
  },
  {
    src: "/images/about/about-image5.jpg",
    alt: "Modern private office interior with desk seating and city views",
  },
];

export default function HomeAbout() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="overflow-hidden bg-[#F8F6F1] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C8A96A]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0F4C45] sm:text-xs">
                About Mannat
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl font-serif text-[clamp(3rem,5vw,5.4rem)] leading-[0.92] tracking-[-0.055em] text-[#1A1A1A]">
              A better place to{" "}
              <span className="italic text-[#0F4C45]">
                work, connect &
              </span>{" "}
              grow.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-sm leading-7 text-[#5F6368] sm:text-base sm:leading-8">
              Mannat is a thoughtfully designed coworking space for
              entrepreneurs, professionals, startups, and teams looking for a
              productive place to work, connect, and grow.
            </p>

            {/* Highlights */}
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
              {[
                "Flexible Workspaces",
                "Premium Amenities",
                "Professional Community",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                  }}
                  className="flex items-center gap-2"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8A96A]" />

                  <span className="text-xs text-[#5F6368] sm:text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 border-b border-[#0F4C45] pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0F4C45] transition-all duration-300 hover:gap-5"
              >
                Discover Mannat Coworking

                <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Slider */}
            <div className="relative z-10 overflow-hidden rounded-[2rem] bg-[#0F4C45] shadow-[0_25px_60px_rgba(15,76,69,0.12)]">

              {/* Drag Area */}
              <motion.div
                className="relative aspect-[4/3] w-full cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  const swipeDistance = info.offset.x;

                  if (swipeDistance < -50) {
                    setActiveIndex(
                      (current) => (current + 1) % images.length
                    );
                  }

                  if (swipeDistance > 50) {
                    setActiveIndex(
                      (current) =>
                        (current - 1 + images.length) % images.length
                    );
                  }
                }}
              >
                <AnimatePresence mode="sync">
                  <motion.div
                    key={activeIndex}
                    initial={{
                      opacity: 0,
                      scale: 1.04,
                      x: 25,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.02,
                      x: -25,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeIndex].src}
                      alt={images[activeIndex].alt}
                      fill
                      priority={activeIndex === 0}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="select-none object-cover"
                      draggable={false}
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C45]/20 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Bottom Slider Controls */}
              <div className="absolute bottom-5 left-0 right-0 z-20 flex items-center justify-between px-5 sm:px-7">

                {/* Counter */}
                <div className="rounded-full border border-white/20 bg-black/10 px-3 py-1.5 text-[9px] font-semibold tracking-[0.18em] text-white backdrop-blur-md">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </div>

                {/* Dots */}
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/10 px-3 py-2 backdrop-blur-md">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to image ${index + 1}`}
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        activeIndex === index
                          ? "w-6 bg-[#C8A96A]"
                          : "w-1.5 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
