"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const contactItems = [
  { title: "Phone", value: "99961 69001", href: "tel:+919996169001", description: "For tours and workspace enquiries.", icon: "/icons/contact/phone.svg" },
  { title: "Email", value: "mannatcoworking@gmail.com", href: "mailto:mannatcoworking@gmail.com", description: "Write to us and we will be in touch.", icon: "/icons/contact/email.svg" },
  { title: "Address", value: "S1, Second Floor, Atlas Rd, Parshuram Chowk, Sonipat, Haryana 131001", description: "A central place to do your best work.", icon: "/icons/contact/location.svg" },
  { title: "Working hours", value: "Monday – Saturday · 9 AM – 8 PM", description: "Our reception is ready to welcome you.", icon: "/icons/contact/clock.svg" },
];

export default function ContactCards() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-10 sm:pb-16 sm:pt-10">
      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: "easeOut" }} className="rounded-[2rem] border border-[#0F4C45]/[0.12] bg-[#0F4C45]/[0.035] p-3 shadow-[0_16px_40px_rgba(15,76,69,0.07)] sm:p-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} whileHover={{ y: -6 }} transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }} className="group flex min-h-48 flex-col rounded-3xl border border-[#0F4C45]/[0.12] bg-[#F8F6F1] p-5 shadow-[0_8px_20px_rgba(15,76,69,0.045)] transition-colors duration-300 hover:bg-[#0F4C45] sm:min-h-52 sm:p-6">
            <Image src={item.icon} alt="" width={25} height={25} className="h-6 w-6 transition group-hover:brightness-0 group-hover:invert" />
            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C8A96A] sm:mt-9">{item.title}</p>
            {item.href ? <a href={item.href} className="mt-3 max-w-[15rem] break-words font-serif text-xl leading-6 tracking-[-0.025em] text-[#1A1A1A] transition-colors group-hover:text-[#F8F7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A]">{item.value}</a> : <p className="mt-3 max-w-[15rem] break-words font-serif text-xl leading-6 tracking-[-0.025em] text-[#1A1A1A] transition-colors group-hover:text-[#F8F7F2]">{item.value}</p>}
            <p className="mt-4 max-w-[14rem] text-sm leading-6 text-[#5F6368] transition-colors group-hover:text-[#F8F7F2]/70">{item.description}</p>
          </motion.article>
        ))}
      </div>
      </motion.div>
    </section>
  );
}
