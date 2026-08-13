import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/about/About";
import type { Metadata } from "next";
  

export const metadata: Metadata = {
  title: "About | Mannat Coworking",
  description: "Discover the considered workspace experience at Mannat Coworking.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      
    </>
  );
}
