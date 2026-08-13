"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "Instagram", icon: "/icons/social/instagram.svg" },
  { label: "Facebook", icon: "/icons/social/facebook.svg" },
  { label: "LinkedIn", icon: "/icons/social/linkedin.svg" },
  { label: "WhatsApp", icon: "/icons/social/whatsapp.svg" },
];

export default function SocialLinks() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-9 px-6 py-24 text-center sm:px-10 lg:flex-row lg:px-16 lg:py-28 lg:text-left xl:px-24">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}><p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">Follow along</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Stay connected.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[#5F6368]">A closer look at the people, spaces, and moments that make up Mannat.</p></motion.div>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }} className="flex flex-wrap justify-center gap-3">
        {socialLinks.map((social) => <a key={social.label} href="#" aria-label={`${social.label} placeholder link`} onClick={(event) => event.preventDefault()} className="group flex h-16 w-16 items-center justify-center rounded-full border border-[#0F4C45]/25 transition duration-300 hover:scale-110 hover:border-[#0F4C45] hover:bg-[#0F4C45]"><Image src={social.icon} alt="" width={21} height={21} className="h-[21px] w-[21px] transition group-hover:brightness-0 group-hover:invert" /></a>)}
      </motion.div>
    </section>
  );
}
