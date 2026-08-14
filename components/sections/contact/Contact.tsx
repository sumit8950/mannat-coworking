import ContactCards from "./ContactCards";
import ContactHero from "./ContactHero";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <main className="min-h-[calc(100svh-72px)] overflow-hidden bg-[#F8F6F1] text-[#1A1A1A]">
      <ContactHero />
      <ContactCards />
      <SocialLinks />
    </main>
  );
}
