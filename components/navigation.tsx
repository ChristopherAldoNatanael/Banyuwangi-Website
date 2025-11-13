"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ThemeLanguageSwitcher } from "./theme-language-switcher";
import { useLanguage } from "@/hooks/use-language";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, mounted, t } = useLanguage();

  if (!mounted) return null;

  const links = [
    { href: "/", label: t.home },
    { href: "/kuliner", label: t.culinary },
    { href: "/pakaian-adat", label: t.clothing },
    { href: "/kesenian", label: t.arts },
    { href: "/pekerjaan", label: t.occupations },
    { href: "/adat-tradisi", label: t.customs },
    { href: "/nilai-nilai", label: t.values },
    { href: "/kesimpulan", label: language === "id" ? "Kesimpulan" : "Conclusion" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image src="/Lambang_Kabupaten_Banyuwangi.png" alt="Lambang Kabupaten Banyuwangi" fill className="object-contain" />
            </div>
            <span className="font-serif font-bold text-lg text-primary hidden sm:inline">Banyuwangi</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeLanguageSwitcher />

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
