import { useState } from "react";
import { Crown, Menu, X } from "lucide-react";

const navigation = [
  { label: "Početna", href: "#pocetna" },
  { label: "O nama", href: "#o-nama" },
  { label: "Časovi", href: "#casovi" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-6 lg:px-10 2xl:px-16">

        {/* Logo */}
        <a href="#pocetna" className="flex items-center gap-3">
          <Crown
            size={32}
            strokeWidth={1.5}
            className="text-amber-600"
          />
          <span className="font-serif text-2xl font-bold text-heading">
            Chess Coach
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Glavna navigacija"
          className="hidden items-center gap-10 md:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-heading transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="cursor-pointer text-heading md:hidden"
          aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobilna navigacija"
          className="absolute top-full right-0 left-0 flex flex-col gap-5 border-t border-black/5 bg-white px-6 py-6 shadow-lg md:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-heading"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}