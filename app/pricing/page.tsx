import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/sections/pricing/Pricing";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Coworking Space Pricing in Sonipat",
  description:
    "View flexible coworking passes at Mannat Coworking in Sonipat, with options for productive day passes and consistent monthly workspaces.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <Pricing />
      <Footer />
    </>
  );
}
