import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Amenities", href: "/#amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E4DB] bg-[#F8F7F2]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 sm:px-10">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/mannat-logo.svg"
            alt="Mannat Coworking"
            width={150}
            height={55}
            priority
          />
        </Link>

        {/* Navigation */}
        <ul className="hidden items-center justify-center gap-7 xl:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group relative inline-flex -translate-y-0 items-center text-[16px] font-medium text-[#1A1A1A] transition-all duration-300 ease-out hover:-translate-y-1 hover:text-[#0F4C45] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#C8A96A] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex justify-end">
          <Link href="/contact" className="rounded-md bg-[#0F4C45] px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-[#F8F7F2] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3B36] hover:shadow-lg sm:px-4 sm:text-sm">
            Book a Visit
          </Link>
        </div>

      </nav>
    </header>
  );
}
