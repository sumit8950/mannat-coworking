import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/contact/Contact";

export const metadata: Metadata = {
  title: "Contact | Mannat Coworking",
  description: "Start a conversation with Mannat Coworking.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
    </>
  );
}
