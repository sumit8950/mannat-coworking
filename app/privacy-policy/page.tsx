import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Mannat Coworking privacy policy, including how we handle the information you share when you contact us or enquire about a workspace.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F1] px-6 py-16 text-[#1A1A1A] sm:px-10 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A96A]">Mannat Coworking</p>
          <h1 className="mt-4 font-serif text-[clamp(2.75rem,8vw,4.5rem)] leading-none tracking-[-0.05em]">Privacy Policy</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#5F6368]">How Mannat Coworking handles the information you share with us.</p>
          <div className="mt-12 space-y-9 text-sm leading-7 text-[#5F6368] [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:leading-none [&_h2]:tracking-[-0.03em] [&_h2]:text-[#0F4C45]">
            <section><h2>Information we collect</h2><p>When you contact us or enquire about a workspace, we may collect the details you choose to provide, such as your name, phone number, email address, and workspace requirements.</p></section>
            <section><h2>How we use information</h2><p>We use your information to respond to enquiries, arrange visits, provide workspace-related support, and improve our services. We do not sell your personal information.</p></section>
            <section><h2>Sharing and security</h2><p>Information is shared only when reasonably necessary to operate our services or meet legal obligations. We take appropriate measures to protect the information entrusted to us.</p></section>
            <section><h2>Contact</h2><p>For privacy-related questions, please contact us through the contact page.</p></section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
