import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GalleryPage from "@/components/sections/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Mannat Coworking",
  description: "Explore the spaces and details that make Mannat Coworking a better place to work.",
};

export default function GalleryRoute() {
  return (
    <>
      <Navbar />
      <GalleryPage />
      <Footer />
    </>
  );
}
