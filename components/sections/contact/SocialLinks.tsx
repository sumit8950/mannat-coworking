"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/mannatcoworking", icon: "/icons/social/instagram.svg" },
  { label: "Facebook", href: "https://www.facebook.com/share/19CqEt7YKf/", icon: "/icons/social/facebook.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mannat-coworking-0a858a429", icon: "/icons/social/linkedin.svg" },
  { label: "X (Twitter)", href: "https://x.com/Mannat_Coorking", icon: "/icons/social/x.svg" },
];

export default function SocialLinks() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-9 px-6 pb-24 pt-12 text-center sm:px-10 sm:pt-16 lg:flex-row lg:px-16 lg:pb-28 lg:pt-20 lg:text-left xl:px-24">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}><p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">Follow along</p><h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">Stay connected.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-[#5F6368]">A closer look at the people, spaces, and moments that make up Mannat.</p></motion.div>
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }} className="flex flex-wrap justify-center gap-3">
        {socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Open Mannat Coworking on ${social.label}`} className="group flex h-16 w-16 items-center justify-center rounded-full border border-[#0F4C45]/25 transition duration-300 hover:scale-110 hover:border-[#0F4C45] hover:bg-[#0F4C45]"><Image src={social.icon} alt="" width={21} height={21} className="h-[21px] w-[21px] transition group-hover:brightness-0 group-hover:invert" /></a>)}
      </motion.div>
    </section>
  );
}
