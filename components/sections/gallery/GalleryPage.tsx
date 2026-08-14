"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const galleryItems = [
  {
    number: "01",
    title: "Private Cabins",
    description:
      "Focused spaces for uninterrupted work, privacy, and productivity.",
    src: "/images/gallery/private-cabins.png",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    number: "02",
    title: "Meeting Rooms",
    description:
      "Professional spaces designed for productive conversations and team meetings.",
    src: "/images/gallery/meeting-rooms.png",
    className: "md:col-span-5",
  },
  {
    number: "03",
    title: "Modern Workstations",
    description:
      "Thoughtfully designed workspaces that keep everyday work comfortable and focused.",
    src: "/images/gallery/workstations.png",
    className: "md:col-span-5",
  },
  {
    number: "04",
    title: "Collaborative Spaces",
    description:
      "Open environments built for ideas, conversation, and meaningful collaboration.",
    src: "/images/gallery/collaborative-spaces.png",
    className: "md:col-span-5",
  },
  {
    number: "05",
    title: "Lounge & Common Areas",
    description:
      "Relaxed spaces to recharge, connect, and take a break between work.",
    src: "/images/gallery/lounge-common-areas.png",
    className: "md:col-span-7",
  },
  {
    number: "06",
    title: "The Mannat Experience",
    description:
      "A refined coworking environment where comfort, design, and productivity come together.",
    src: "/images/gallery/coworking-environment.png",
    className: "md:col-span-12",
  },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null
            ? null
            : (index - 1 + galleryItems.length) % galleryItems.length
        );
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? null : (index + 1) % galleryItems.length
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const showPrevious = () =>
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + galleryItems.length) % galleryItems.length
    );

  const showNext = () =>
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % galleryItems.length
    );

  return (
    <main className="overflow-hidden bg-[#F8F6F1] text-[#1A1A1A]">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-12 text-center sm:px-10 sm:pb-10 sm:pt-14 lg:px-12 lg:pb-12 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C8A96A]">
            The Mannat Experience
          </p>

          <h1 className="mx-auto mt-4 whitespace-nowrap font-serif text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.92] tracking-[-0.06em] text-[#1A1A1A]">
            Spaces designed to{" "}
            <span className="italic text-[#0F4C45]">inspire.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: "easeOut",
            }}
            className="mx-auto mt-5 max-w-3xl text-center text-sm leading-6 text-[#5F6368] sm:text-base"
          >
            Explore the spaces, details, and environments that make Mannat
            Coworking a better place to work, connect, and grow.
          </motion.p>
        </motion.div>
      </section>

      {/* PRIVATE CABINS */}
      <GalleryGroup
        eyebrow="Private Cabins"
        title="Your own space to focus."
        description="Every work style has room to settle in, think clearly, and make progress."
        items={galleryItems.slice(0, 3)}
        offset={0}
        onOpen={setActiveIndex}
      />

      {/* SHARED SPACES */}
      <GalleryGroup
        eyebrow="Shared Spaces"
        title="A thoughtful rhythm to every day."
        description="From collaborative moments to a quieter pause, each shared space is made to feel considered."
        items={galleryItems.slice(3)}
        offset={3}
        onOpen={setActiveIndex}
        dark
      />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            item={galleryItems[activeIndex]}
            activeIndex={activeIndex}
            onClose={() => setActiveIndex(null)}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function GalleryGroup({
  eyebrow,
  title,
  description,
  items,
  offset,
  onOpen,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: typeof galleryItems;
  offset: number;
  onOpen: (index: number) => void;
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? "bg-[#0F4C45] text-[#F8F6F1]"
          : "bg-[#F8F6F1] text-[#1A1A1A]"
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mx-auto mb-7 max-w-4xl text-center sm:mb-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">
            {eyebrow}
          </p>

          <h2 className="mt-2 whitespace-nowrap font-serif text-[clamp(2rem,4vw,3.8rem)] leading-none tracking-[-0.05em]">
            {title}
          </h2>

          <p
            className={
              dark
                ? "mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-[#F8F6F1]/65"
                : "mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-[#5F6368]"
            }
          >
            {description}
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid gap-4 md:grid-cols-12 md:gap-5"
        >
          {items.map((item, index) => (
            <GalleryTile
              key={item.number}
              item={item}
              index={offset + index}
              onOpen={onOpen}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GalleryTile({
  item,
  index,
  onOpen,
}: {
  item: (typeof galleryItems)[number];
  index: number;
  onOpen: (index: number) => void;
}) {
  return (
    <motion.button
      type="button"
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.985,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
      }}
      onClick={() => onOpen(index)}
      className={`group relative min-h-72 overflow-hidden rounded-[1.5rem] border border-[#0F4C45]/10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] ${
        item.className
      } ${
        index === 0
          ? "md:min-h-[37rem]"
          : index === 5
          ? "md:min-h-[28rem]"
          : "md:min-h-[18rem]"
      }`}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes={
          index === 0
            ? "(max-width: 768px) 100vw, 58vw"
            : "(max-width: 768px) 100vw, 42vw"
        }
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.045]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#071F1C]/80 via-[#0F4C45]/20 to-transparent transition-colors duration-500 group-hover:from-[#071F1C]/90 group-hover:via-[#0F4C45]/35" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="h-px w-8 bg-[#C8A96A] transition-all duration-500 group-hover:w-14" />

        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
          {item.number} — {item.title}
        </p>

        <p className="mt-2 max-w-md text-sm leading-6 text-[#F8F6F1]/80 transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          {item.description}
        </p>
      </div>
    </motion.button>
  );
}

function Lightbox({
  item,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: {
  item: (typeof galleryItems)[number];
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071F1C]/[0.96] p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} image viewer`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 14 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
        className="relative flex h-full w-full max-w-6xl items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={item.src}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute right-0 top-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F8F6F1]/20 bg-[#071F1C]/70 text-[#F8F6F1] transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
        >
          <X size={20} />
        </button>

        <button
          type="button"
          onClick={onPrevious}
          aria-label="Previous image"
          className="absolute left-0 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#F8F6F1]/20 bg-[#071F1C]/70 text-[#F8F6F1] transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-0 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#F8F6F1]/20 bg-[#071F1C]/70 text-[#F8F6F1] transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-0 left-0 bg-[#071F1C]/75 px-3 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#F8F6F1]">
          <span className="text-[#C8A96A]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>{" "}
          / {String(galleryItems.length).padStart(2, "0")}
        </div>
      </motion.div>
    </motion.div>
  );
}