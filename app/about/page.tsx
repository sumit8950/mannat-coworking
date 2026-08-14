import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/about/About";
import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";


export const metadata: Metadata = createPageMetadata({
  title: "About Our Coworking Space in Sonipat",
  description:
    "Learn about Mannat Coworking in Sonipat—a considered flexible workspace for professionals, startups, entrepreneurs, and growing teams.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
