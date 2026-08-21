import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Mannat", href: "/about" },
  { label: "Coworking Amenities", href: "/#amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Coworking Pricing", href: "/pricing" },
  { label: "Contact Mannat Coworking", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mannatcoworking",
    icon: "/icons/social/instagram.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/19CqEt7YKf/",
    icon: "/icons/social/facebook.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mannat-coworking-0a858a429",
    icon: "/icons/social/linkedin.svg",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Mannat_Coorking",
    icon: "/icons/social/x.svg",
  },
];

const linkClassName =
  "inline-flex min-h-11 break-words items-center text-sm text-[#0F4C45]/70 transition-colors duration-200 hover:text-[#C8A96A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1]";

export default function Footer() {
  return (
    <footer
      className="mt-auto border-t border-[#ce9f31] bg-[#F8F6F1] text-[#032521]"
      aria-label="Mannat Coworking footer"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 sm:px-10 sm:py-14 xl:grid-cols-[1.6fr_repeat(4,1fr)] xl:gap-8 xl:px-12">

        {/* BRAND */}
        <div className="max-w-sm">
          <Link
            href="/"
            aria-label="Mannat Coworking - Home"
            className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C45] focus-visible:ring-offset-4"
          >
            <Image
              src="/logo/mannat-logo.svg"
              alt="Mannat Coworking"
              width={150}
              height={55}
              className="h-auto w-36"
            />
          </Link>

          <p className="mt-5 text-sm leading-6 text-[#0F4C45]/70">
            A thoughtfully designed coworking space for entrepreneurs,
            professionals, startups, freelancers, and teams looking for a
            productive place to work, connect, and grow.
          </p>
        </div>

        {/* NAVIGATION */}
        <FooterColumn title="Explore Mannat">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassName}
            >
              {link.label}
            </Link>
          ))}
        </FooterColumn>

        {/* CONTACT */}
        <FooterColumn title="Contact Mannat">
          <Link href="/contact" className={linkClassName}>
            Contact Us
          </Link>

          <a
            href="tel:+919996169001"
            className={linkClassName}
            aria-label="Call Mannat Coworking"
          >
            99961 69001
          </a>

          <a
            href="mailto:mannatcoworking@gmail.com"
            className={linkClassName}
          >
            mannatcoworking@gmail.com
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=S1%2C%20Second%20Floor%2C%20Atlas%20Rd%2C%20Parshuram%20Chowk%2C%20Sonipat%2C%20Haryana%20131001"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            S1, Second Floor, Atlas Rd, Parshuram Chowk, Sonipat,
            Haryana 131001
          </a>
        </FooterColumn>

        {/* LEGAL */}
        <FooterColumn title="Information">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassName}
            >
              {link.label}
            </Link>
          ))}
        </FooterColumn>

        {/* SOCIAL */}
        <FooterColumn title="Follow Mannat">
          <div className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Mannat Coworking on ${social.label}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0F4C45]/20 transition-colors duration-200 hover:border-[#C8A96A] hover:bg-[#0F4C45]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A96A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F1]"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
              </a>
            ))}
          </div>
        </FooterColumn>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#0F4C45]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-[#0F4C45]/60 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">

          <p>
            © 2026 Mannat Coworking. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-[#0F4C45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F4C45]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C8A96A]">
        {title}
      </h2>

      <div className="mt-3 flex flex-col">
        {children}
      </div>
    </div>
  );
}