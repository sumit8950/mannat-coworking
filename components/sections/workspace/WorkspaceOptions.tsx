"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  DoorOpen,
  UsersRound,
  Presentation,
} from "lucide-react";

const workspaces = [
  {
    number: "01",
    title: "Flexible Workspace",
    description:
      "Comfortable workspaces for freelancers, professionals, and flexible workdays.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Private Cabins",
    description:
      "Quiet, dedicated spaces designed for focused and uninterrupted work.",
    icon: DoorOpen,
  },
  {
    number: "03",
    title: "Meeting Rooms",
    description:
      "Professional spaces for meetings, presentations, client discussions, and collaboration.",
    icon: Presentation,
  },
  {
    number: "04",
    title: "Collaborative Spaces",
    description:
      "Open and welcoming areas where ideas and meaningful connections come together.",
    icon: UsersRound,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
};

export default function WorkspaceOptions() {
  return (
    <section className="overflow-hidden bg-[#F8F6F1] px-4 py-6 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-7xl">

        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-9 bg-[#C8A96A]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#0F4C45]">
              Workspace Options
            </p>

            <span className="h-px w-9 bg-[#C8A96A]" />
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-[clamp(2.8rem,4.5vw,4.8rem)] leading-[0.95] tracking-[-0.055em] text-[#1A1A1A]">
            A space for every way you{" "}
            <span className="italic text-[#0F4C45]">work.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#5F6368]">
            From focused solo work to collaborative meetings, choose a
            workspace designed around your needs.
          </p>
        </motion.div>

        {/* WORKSPACE CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4"
        >
          {workspaces.map((workspace) => {
            const Icon = workspace.icon;

            return (
              <motion.article
                key={workspace.number}
                variants={card}
                whileHover={{
                  y: -7,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="group relative overflow-hidden rounded-[22px] border border-[#0F4C45]/10 bg-[#FBFAF6] px-5 py-6 shadow-[0_8px_25px_rgba(15,76,69,0.045)] transition-all duration-500 ease-out hover:border-[#0F4C45] hover:bg-[#0F4C45] hover:shadow-[0_20px_45px_rgba(15,76,69,0.18)]"
              >

                {/* GREEN ANIMATION LAYER */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#145E55]"
                />

                {/* GOLD ACCENT */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 28 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative z-10 mb-5 h-px bg-[#C8A96A]"
                />

                {/* TOP ROW */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#C8A96A]">
                    {workspace.number}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F4C45]/[0.07] text-[#0F4C45] transition-all duration-500 group-hover:bg-[#F8F6F1]/10 group-hover:text-[#F8F6F1]"
                  >
                    <Icon size={17} strokeWidth={1.6} />
                  </motion.div>
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mt-5 font-serif text-[1.65rem] leading-[1] tracking-[-0.035em] text-[#1A1A1A] transition-colors duration-500 group-hover:text-[#F8F6F1]">
                  {workspace.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 mt-4 text-[12px] leading-5 text-[#6A6F72] transition-colors duration-500 group-hover:text-[#F8F6F1]/75">
                  {workspace.description}
                </p>

                {/* BOTTOM DETAIL */}
                <div className="relative z-10 mt-6 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0F4C45]/55 transition-colors duration-500 group-hover:text-[#C8A96A]">
                  <span className="h-1 w-1 rounded-full bg-[#C8A96A]" />
                  Mannat Coworking
                </div>

                {/* HOVER GLOW */}
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-[#C8A96A]/[0.08] opacity-0 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-100" />

              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

