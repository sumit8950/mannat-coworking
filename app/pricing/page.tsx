import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/sections/pricing/Pricing";

export const metadata: Metadata = {
  title: "Pricing | Mannat Coworking",
  description: "Flexible workspace passes at Mannat Coworking.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <Pricing />
    </>
  );
}
