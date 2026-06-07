"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/stiftung", label: "Die Stiftung" },
  { href: "/helfen", label: "Helfen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/satzung", label: "Satzung" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Emergency bar */}
      <div className="bg-[#0d7377] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 text-center">
          <span className="font-medium">
            Brauchen Sie sofort Hilfe?
          </span>
          <div className="flex items-center gap-4">
            <a
              href="tel:+492214666670"
              className="font-bold text-base hover:text-teal-200 transition-colors flex items-center gap-1.5"
              aria-label="Notfallnummer anrufen: 0221 466667"
            >
              <svg
                className="w-4 h-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0221 466667
            </a>
            <a
              href="mailto:info@stiftungkoelneropferhilfe.de"
              className="hover:text-teal-200 transition-colors hidden sm:block"
              aria-label="E-Mail senden"
            >
              info@stiftungkoelneropferhilfe.de
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-md" : "border-b border-gray-100"
        }`}
        aria-label="Hauptnavigation"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7377] rounded"
              aria-label="Stiftung Kölner Opferhilfe – Zur Startseite"
            >
              <Image
                src="/logo-koh.gif"
                alt="Stiftung Kölner Opferhilfe Logo"
                width={80}
                height={80}
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                unoptimized
                priority
              />
              <span className="hidden sm:block font-semibold text-[#0d7377] leading-tight text-sm">
                Stiftung Kölner
                <br />
                Opferhilfe
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7377] ${
                      isActive
                        ? "bg-[#f0fafa] text-[#0d7377]"
                        : "text-gray-700 hover:text-[#0d7377] hover:bg-[#f0fafa]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/kontakt#hilfe-formular"
                className="ml-3 px-4 py-2 bg-[#0d7377] text-white rounded-md text-sm font-semibold hover:bg-[#0a5c5f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0d7377]"
              >
                Hilfe suchen
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#0d7377] hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0d7377]"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-3 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#f0fafa] text-[#0d7377]"
                        : "text-gray-700 hover:text-[#0d7377] hover:bg-[#f0fafa]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/kontakt#hilfe-formular"
                className="mt-2 px-4 py-3 bg-[#0d7377] text-white rounded-md text-base font-semibold text-center hover:bg-[#0a5c5f] transition-colors"
              >
                Jetzt Hilfe suchen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
