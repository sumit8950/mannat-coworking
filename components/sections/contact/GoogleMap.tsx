"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const visitDetails = [
  ["Address", "Address Placeholder", "/icons/contact/location.svg"],
  ["Nearest landmark", "Landmark Placeholder", "/icons/contact/landmark.svg"],
  ["Parking", "Parking information placeholder", "/icons/contact/parking.svg"],
  ["Metro", "Metro information placeholder", "/icons/contact/metro.svg"],
  ["Cab availability", "Cab availability placeholder", "/icons/contact/cab.svg"],
  ["Reception hours", "Monday – Saturday · 9 AM – 8 PM", "/icons/contact/clock.svg"],
];

export default function GoogleMap() {
  return (
    <section className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
      <div className="mb-12 flex items-end justify-between border-b border-[#C8A96A]/60 pb-5"><div><p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C8A96A]">Visit us</p><h2 className="mt-4 font-serif text-5xl tracking-[-0.045em] sm:text-6xl">Come by, stay awhile.</h2></div><span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0F4C45] sm:block">Mannat Coworking</span></div>
      <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75 }} className="relative min-h-[440px] overflow-hidden rounded-3xl bg-[#EAE7DD] shadow-[0_18px_50px_rgba(15,76,69,0.1)]">
          <iframe title="Mannat Coworking location map placeholder" src="about:blank" className="absolute inset-0 h-full w-full border-0" loading="lazy" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,76,69,0.12),transparent_55%)]" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0F4C45] shadow-lg"><Image src="/icons/contact/location.svg" alt="" width={21} height={21} className="brightness-0 invert" /></span><span className="mt-3 whitespace-nowrap bg-[#F8F7F2] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0F4C45] shadow-md">Map location placeholder</span></div>
        </motion.div>
        <motion.aside initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75, delay: 0.08 }} className="rounded-3xl bg-[#0F4C45] p-7 text-[#F8F7F2] shadow-[0_18px_50px_rgba(15,76,69,0.18)] sm:p-9">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">The welcome desk</p>
          <div className="mt-7 divide-y divide-[#F8F7F2]/15">
            {visitDetails.map(([title, value, icon]) => <div key={title} className="flex gap-4 py-4 first:pt-0"><Image src={icon} alt="" width={18} height={18} className="mt-0.5 h-[18px] w-[18px] brightness-0 invert" /><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C8A96A]">{title}</p><p className="mt-1.5 text-sm leading-5 text-[#F8F7F2]/85">{value}</p></div></div>)}
          </div>
          <Link href="/contact" className="mt-7 inline-flex bg-[#F8F7F2] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0F4C45] transition hover:bg-[#C8A96A]">Book a visit</Link>
        </motion.aside>
      </div>
    </section>
  );
}
