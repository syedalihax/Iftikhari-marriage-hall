"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isLinkActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery & Decor", href: "/gallery" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact & Location", href: "/contact" },
  ];

  return (
    <>
    <header className="sticky top-0 z-50 bg-[#062A24]/95 backdrop-blur-md border-b border-[#C89D3C]/20 transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#FDFBF7] group-hover:text-[#C89D3C] transition-colors">
              IFTIKHARI
            </span>
            <span className="block text-sm tracking-widest text-[#C89D3C] uppercase font-sans">
              Marriage Hall
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors relative py-1 ${isActive ? "text-[#C89D3C]" : "text-[#E3ECE9] hover:text-[#C89D3C]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          ref={menuButtonRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 rounded-lg text-[#FDFBF7] hover:bg-[#09352e] transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
    </header>

    <div
      className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      aria-hidden={!mobileMenuOpen}
    >
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={mobileMenuOpen ? 0 : -1}
        disabled={!mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
        className="absolute inset-0 bg-black/55"
      />
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        aria-hidden={!mobileMenuOpen}
        className={`absolute inset-y-0 right-0 z-10 flex w-[min(88vw,22rem)] max-w-full flex-col bg-[#041c18] text-white shadow-2xl transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <h2 id="mobile-navigation-title" className="font-serif text-lg font-bold text-[#C89D3C]">
            IFTIKHARI
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            tabIndex={mobileMenuOpen ? 0 : -1}
            disabled={!mobileMenuOpen}
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 hover:text-[#C89D3C]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 py-5" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive ? "bg-white/5 text-[#C89D3C]" : "text-[#FDFBF7] hover:bg-white/5 hover:text-[#C89D3C]"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
    </>
  );
}
