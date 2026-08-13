import AboutHero from "./AboutHero";
import FinalCTA from "./FinalCTA";
import Philosophy from "./Philosophy";
import WhyMannat from "./WhyMannat";
import WorkspaceExperience from "./WorkspaceExperience";

export default function About() {
  return (
    <main className="overflow-hidden bg-[#F8F7F2] text-[#1A1A1A]">
      <AboutHero />
      <Philosophy />
      <WhyMannat />
      <WorkspaceExperience />
      <FinalCTA />
    </main>
  );
}
