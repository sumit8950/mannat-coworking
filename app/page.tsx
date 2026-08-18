import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero/hero";
import HomeAbout from "@/components/sections/about/HomeAbout";
import WorkspaceOptions from "@/components/sections/workspace/WorkspaceOptions";
import HomeAmenities from "@/components/sections/amenities/HomeAmenities";
import WhoIsMannatFor from "@/components/sections/about/WhoIsMannatFor";
import type { Metadata } from "next";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Mannat Coworking Space",
  description:
    "Discover Mannat Coworking, a premium coworking space in Sonipat with flexible workspaces, private offices, meeting rooms, and thoughtful amenities.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeAbout />
      <WorkspaceOptions />
      <HomeAmenities />
      <WhoIsMannatFor />
      <Footer />
    </>
  );
}
