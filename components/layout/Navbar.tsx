"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Amenities", href: "/#amenities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    itemName: string,
  ) => {
    // If already on Home page and Home is clicked,
    // smoothly scroll all the way back to the top.
    if (itemName === "Home" && window.location.pathname === "/") {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E7E4DB] bg-[#F8F7F2]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-10 xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        
        {/* LOGO */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }

            closeMenu();
          }}
        >
          <Image
            src="/logo/mannat-logo.svg"
            alt="Mannat Coworking"
            width={150}
            height={55}
            priority
            className="h-auto w-28 sm:w-[150px]"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden items-center justify-center gap-7 xl:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={(e) => handleNavigation(e, item.name)}
                className="group relative inline-flex min-h-11 items-center text-[16px] font-medium text-[#1A1A1A] transition-all duration-300 ease-out hover:-translate-y-1 hover:text-[#0F4C45] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#C8A96A] after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex justify-self-end items-center gap-2">
          
          {/* BOOK A VISIT */}
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-md bg-[#0F4C45] px-3.5 py-2 text-[11px] uppercase tracking-[0.14em] text-[#F8F7F2] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0B3B36] hover:shadow-lg sm:inline-flex sm:px-4 sm:text-sm"
            onClick={closeMenu}
          >
            Book a Visit
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[#0F4C45] transition hover:bg-[#0F4C45]/10 xl:hidden"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-[#E7E4DB] bg-[#F8F7F2] xl:hidden"
          >
            <div className="mx-auto flex max-w-[1280px] flex-col px-4 py-3 sm:px-6">
              
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.name)}
                  className="flex min-h-11 items-center border-b border-[#0F4C45]/10 py-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:text-[#0F4C45]"
                >
                  {item.name}
                </Link>
              ))}

              {/* MOBILE BOOK A VISIT */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md bg-[#0F4C45] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F8F7F2]"
              >
                Book a Visit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
