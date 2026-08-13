import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/hero";
import HomeAbout from "@/components/sections/about/HomeAbout";
import WorkspaceOptions from "@/components/sections/workspace/WorkspaceOptions";
import HomeAmenities from "@/components/sections/amenities/HomeAmenities";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeAbout />
      <WorkspaceOptions />
      <HomeAmenities />
    </>
  );
}