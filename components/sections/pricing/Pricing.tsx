"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Day Pass",
    price: "₹300",
    cadence: "/ Day",
    description: "Perfect for productive workdays and flexible schedules.",
    features: [
      "Flexible Seating",
      "High-Speed Wi-Fi",
      "Unlimited Tea & Coffee",
      "Air Conditioned Workspace",
      "Reception Support",
    ],
    dark: false,
  },
  {
    name: "Monthly Pass",
    price: "₹4,000",
    cadence: "/ Month",
    description: "A dedicated workspace for consistent productivity.",
    features: [
      "Dedicated Workspace",
      "High-Speed Wi-Fi",
      "Unlimited Tea & Coffee",
      "Meeting Room Access",
      "Community Networking",
    ],
    dark: true,
  },
];

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const featureContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.15,
    },
  },
};

const featureItem = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export default function Pricing() {
  return (
    <main className="min-h-[calc(100svh-72px)] overflow-hidden bg-[#F8F6F1] text-[#1A1A1A]">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-5 pt-7 sm:px-8 sm:pb-6 sm:pt-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(200,169,106,0.05),transparent_24%),radial-gradient(circle_at_92%_78%,rgba(15,76,69,0.045),transparent_28%)]" />

        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-7xl text-center"
        >

          <motion.div variants={fadeUp}>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#0F4C45]">
              WORKSPACE PASSES
            </p>

            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 32, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="mx-auto mt-2 block h-px bg-[#C8A96A]"
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mx-auto mt-3 max-w-5xl font-serif text-[clamp(2.35rem,10vw,5rem)] leading-[0.94] tracking-[-0.055em] sm:text-[clamp(2.4rem,4.7vw,5rem)] sm:leading-none"
          >
            Work your way,{" "}
            <span className="italic text-[#0F4C45]">
              beautifully.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-[#5F6368] sm:text-sm"
          >
            Premium coworking passes with the flexibility to work the way you want.
          </motion.p>
        </motion.div>
      </section>

      {/* PRICING CARDS */}
      <section className="mx-auto max-w-6xl px-4 pb-5 pt-1 sm:px-8">
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              variants={cardItem}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.3,
                },
              }}
              className={`group rounded-[24px] border px-5 py-5 transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(15,76,69,0.10)] sm:px-6 ${
                plan.dark
                  ? "border-[#0F4C45] bg-[#0F4C45] text-[#F8F6F1]"
                  : "border-[#0F4C45]/[0.12] bg-[#FBFAF6]"
              }`}
            >

              {/* CARD TOP */}
              <div className="flex items-start justify-between">
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#C8A96A]"
                >
                  {plan.name}
                </motion.p>

                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 220,
                  }}
                  className={`mt-1 h-2 w-2 rounded-full ${
                    plan.dark ? "bg-[#C8A96A]" : "bg-[#0F4C45]"
                  }`}
                />
              </div>

              {/* STARTING AT */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className={`mt-3 text-[9px] font-semibold uppercase tracking-[0.18em] ${
                  plan.dark
                    ? "text-[#F8F6F1]/60"
                    : "text-[#5F6368]"
                }`}
              >
                Starting at
              </motion.p>

              {/* PRICE */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.2,
                }}
                className={`mt-0.5 flex items-baseline font-serif tracking-[-0.055em] ${
                  plan.dark
                    ? "text-[#F8F6F1]"
                    : "text-[#1A1A1A]"
                }`}
              >
                <span className="text-[3rem] leading-none">
                  {plan.price}
                </span>

                <span
                  className={`ml-2 text-sm tracking-normal ${
                    plan.dark
                      ? "text-[#F8F6F1]/65"
                      : "text-[#5F6368]"
                  }`}
                >
                  {plan.cadence}
                </span>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 }}
                className={`mt-2 text-xs leading-5 ${
                  plan.dark
                    ? "text-[#F8F6F1]/70"
                    : "text-[#5F6368]"
                }`}
              >
                {plan.description}
              </motion.p>

              {/* DIVIDER */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className={`mt-3 h-px origin-left ${
                  plan.dark
                    ? "bg-[#F8F6F1]/20"
                    : "bg-[#0F4C45]/[0.12]"
                }`}
              />

              {/* FEATURES */}
              <motion.ul
                variants={featureContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`mt-3 grid gap-y-1.5 text-xs ${
                  plan.dark
                    ? "text-[#F8F6F1]/85"
                    : "text-[#5F6368]"
                }`}
              >
                {plan.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={featureItem}
                    className="flex items-center gap-2"
                  >
                    <span className="h-px w-3 shrink-0 bg-[#C8A96A]" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* LONG TERM MEMBERSHIP */}
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
        }}
        className="mx-auto max-w-6xl px-4 pb-6 pt-2 sm:px-8"
      >
        <motion.div
          whileHover={{
            y: -2,
            transition: { duration: 0.25 },
          }}
          className="flex flex-col items-start justify-between gap-5 rounded-[24px] border border-[#C8A96A]/60 bg-[#C8A96A]/[0.07] px-5 py-5 sm:px-6 md:flex-row md:items-center"
        >

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#0F4C45]">
              LONG-TERM MEMBERSHIP BENEFITS
            </p>

            <h2 className="mt-1 font-serif text-2xl tracking-[-0.04em]">
              Planning to stay longer?
            </h2>

            <p className="mt-1 max-w-2xl text-xs leading-5 text-[#5F6368]">
              Enjoy exclusive membership advantages with special pricing
              available for 6-month and annual memberships.
            </p>
          </div>

          <Link href="/contact" className="w-full md:w-auto">
            <motion.span
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#0F4C45] px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#F8F6F1] transition-colors duration-300 hover:bg-[#1A1A1A] md:w-auto"
            >
              Contact Us
            </motion.span>
          </Link>

        </motion.div>
      </motion.section>

    </main>
  );
}

