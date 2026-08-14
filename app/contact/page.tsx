import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/contact/Contact";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Mannat Coworking in Sonipat",
  description:
    "Contact Mannat Coworking to arrange a visit or ask about coworking space, private offices, meeting rooms, and flexible workspace options in Sonipat.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
}
