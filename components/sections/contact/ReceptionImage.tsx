"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ReceptionImage() {
  return (
    <section className="p-3 sm:p-5 lg:p-8">
      <motion.div initial={{ opacity: 0, scale: 0.985 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }} className="group relative mx-auto min-h-[510px] max-w-[1560px] overflow-hidden rounded-[2rem] shadow-[0_20px_55px_rgba(15,76,69,0.14)] sm:min-h-[600px]">
        <Image src="/images/about/about-image.jpg" alt="Mannat Coworking reception and workspace" fill sizes="100vw" className="object-cover transition duration-1000 ease-out group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,76,69,0.68),rgba(15,76,69,0.15)_65%,transparent)]" />
        <div className="absolute bottom-8 left-7 max-w-lg text-[#F8F7F2] sm:bottom-14 sm:left-14"><p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">Mannat Coworking</p><h2 className="mt-4 font-serif text-[clamp(3rem,5.5vw,6rem)] leading-[0.91] tracking-[-0.05em]">Designed for ambitious professionals.</h2></div>
      </motion.div>
    </section>
  );
}
