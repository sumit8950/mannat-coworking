import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GalleryPage from "@/components/sections/gallery/GalleryPage";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Coworking Space Gallery in Sonipat",
  description:
    "Explore Mannat Coworking in Sonipat, including private cabins, meeting rooms, modern workstations, lounge areas, and collaborative spaces.",
  path: "/gallery",
});

export default function GalleryRoute() {
  return (
    <>
      <Navbar />
      <GalleryPage />
      <Footer />
    </>
  );
}
