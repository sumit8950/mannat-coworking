import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createPageMetadata } from "@/app/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Read the terms and conditions for using the Mannat Coworking website and arranging a workspace visit in Sonipat.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8F6F1] px-6 py-16 text-[#1A1A1A] sm:px-10 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A96A]">Mannat Coworking</p>
          <h1 className="mt-4 font-serif text-[clamp(2.75rem,8vw,4.5rem)] leading-none tracking-[-0.05em]">Terms &amp; Conditions</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#5F6368]">The terms that apply when you use Mannat Coworking&apos;s website or arrange a workspace visit.</p>
          <div className="mt-12 space-y-9 text-sm leading-7 text-[#5F6368] [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:leading-none [&_h2]:tracking-[-0.03em] [&_h2]:text-[#0F4C45]">
            <section><h2>Website use</h2><p>This website is provided to help you learn about Mannat Coworking and make an enquiry. Please use it lawfully and do not attempt to interfere with its operation.</p></section>
            <section><h2>Enquiries and bookings</h2><p>Submitting an enquiry or requesting a visit does not create a workspace agreement. Availability, pricing, and booking terms are confirmed directly with Mannat Coworking.</p></section>
            <section><h2>Content</h2><p>Website content is provided for general information and may be updated as our workspace, services, and availability evolve.</p></section>
            <section><h2>Contact</h2><p>If you have a question about these terms, please contact us through the contact page.</p></section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
