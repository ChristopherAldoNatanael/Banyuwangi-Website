import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 relative">
                <Image src="/Lambang_Kabupaten_Banyuwangi.png" alt="Lambang Kabupaten Banyuwangi" fill className="object-contain" />
              </div>
              <h3 className="font-serif font-bold text-lg">Pesona Budaya Banyuwangi</h3>
            </div>
            <p className="text-sm opacity-90">Menjelajahi kekayaan budaya, tradisi, dan keindahan alam Banyuwangi - The Sunrise of Java.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/kuliner" className="hover:opacity-80 transition-opacity">
                  Kuliner
                </Link>
              </li>
              <li>
                <Link href="/kesenian" className="hover:opacity-80 transition-opacity">
                  Kesenian
                </Link>
              </li>
              <li>
                <Link href="/adat-tradisi" className="hover:opacity-80 transition-opacity">
                  Adat & Tradisi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Banyuwangi, Jawa Timur, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@banyuwangi.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+62 333 123 456</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">© 2025 Pesona Budaya Banyuwangi. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
