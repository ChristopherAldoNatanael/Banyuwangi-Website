"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Leaf, Waves, Utensils, Users, Music, Briefcase, MapPin, Award, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import Image from "next/image";

export default function Home() {
  const { mounted, t } = useLanguage();

  if (!mounted) return null;

  const cards = [
    {
      href: "/kuliner",
      title: t.culinaryTitle,
      desc: t.culinaryDesc,
      icon: Utensils,
      image:
        "https://images.unsplash.com/photo-1585302614556-7b0eaa75f353?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHxjdWx0dXJhbCUyMGNlcmVtb255JTIwSW5kb25lc2lhbiUyMHRyYWRpdGlvbiUyMGNvbW11bml0eSUyMGdhdGhlcmluZyUyMHJpdHVhbHxlbnwwfDB8fHwxNzYxODIyMDIyfDA&ixlib=rb-4.1.0&q=85",
      gradient: "from-orange-500/80 via-red-500/60 to-transparent",
    },
    {
      href: "/pakaian-adat",
      title: t.clothingTitle,
      desc: t.clothingDesc,
      icon: Leaf,
      image:
        "https://images.unsplash.com/photo-1745292502176-d0f67c8a2766?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx0cmFkaXRpb25hbCUyMGNsb3RoaW5nJTIwYmF0aWslMjBJbmRvbmVzaWFuJTIwZHJlc3MlMjBjdWx0dXJhbCUyMGZhYnJpY3xlbnwwfDF8fHwxNzYxODIyMDIyfDA&ixlib=rb-4.1.0&q=85",
      gradient: "from-emerald-500/80 via-green-500/60 to-transparent",
    },
    {
      href: "/kesenian",
      title: t.artsTitle,
      desc: t.artsDesc,
      icon: Music,
      image:
        "https://images.unsplash.com/photo-1756694916043-9c213916e1c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGRhbmNlJTIwSW5kb25lc2lhbiUyMHBlcmZvcm1hbmNlJTIwY3VsdHVyYWwlMjBjZXJlbW9ueSUyMGNvbG9yZnVsJTIwY29zdHVtZXN8ZW58MHwwfHx8MTc2MTgyMjAyMnww&ixlib=rb-4.1.0&q=85",
      gradient: "from-purple-500/80 via-pink-500/60 to-transparent",
    },
    {
      href: "/pekerjaan",
      title: t.occupationsTitle,
      desc: t.occupationsDesc,
      icon: Briefcase,
      image:
        "https://images.unsplash.com/photo-1761410403735-108d974d9a76?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjBhcnRpc2FuJTIwdHJhZGl0aW9uYWwlMjB3b3JrJTIwaGFuZGljcmFmdHxlbnwwfDB8fHwxNzYxODIyMDIzfDA&ixlib=rb-4.1.0&q=85",
      gradient: "from-amber-500/80 via-yellow-500/60 to-transparent",
    },
    {
      href: "/adat-tradisi",
      title: t.customsTitle,
      desc: t.customsDesc,
      icon: Users,
      image:
        "https://images.unsplash.com/photo-1752760023188-f8e277034cc3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxjdWx0dXJhbCUyMGNlcmVtb255JTIwSW5kb25lc2lhbiUyMHRyYWRpdGlvbiUyMGNvbW11bml0eSUyMGdhdGhlcmluZyUyMHJpdHVhbHxlbnwwfDB8fHwxNzYxODIyMDIyfDA&ixlib=rb-4.1.0&q=85",
      gradient: "from-blue-500/80 via-cyan-500/60 to-transparent",
    },
    {
      href: "/nilai-nilai",
      title: t.valuesTitle,
      desc: t.valuesDesc,
      icon: Waves,
      image:
        "https://images.unsplash.com/photo-1599745010340-26fda733ebde?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx0ZW1wbGUlMjBuYXR1cmUlMjBzcGlyaXR1YWwlMjBwZWFjZWZ1bCUyMGxhbmRzY2FwZXxlbnwwfDB8fGdyZWVufDE3NjE4MjIwMjN8MA&ixlib=rb-4.1.0&q=85",
      gradient: "from-teal-500/80 via-emerald-500/60 to-transparent",
    },
  ];

  const destinations = [
    {
      name: "Gunung Ijen",
      image:
        "https://images.unsplash.com/photo-1518458227252-2fa54f3b7d5b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8dm9sY2FubyUyMGNyYXRlciUyMGxha2UlMjBtb3VudGFpbiUyMGJsdWUlMjBmaXJlfGVufDB8MHx8Ymx1ZXwxNzYxODIyMDI2fDA&ixlib=rb-4.1.0&q=85",
      description: "Blue Fire & Kawah Ijen",
    },
    {
      name: "Air Terjun",
      image:
        "https://images.unsplash.com/photo-1698774387910-cac0a700c78b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjB0cm9waWNhbCUyMGZvcmVzdCUyMG5hdHVyZSUyMGNhc2NhZGluZyUyMHdhdGVyfGVufDB8MXx8Z3JlZW58MTc2MTgyMjAyNnww&ixlib=rb-4.1.0&q=85",
      description: "Keindahan Alam Tropis",
    },
    {
      name: "Desa Tradisional",
      image:
        "https://images.unsplash.com/photo-1570780728980-63f5a30a1393?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx0cmFkaXRpb25hbCUyMHZpbGxhZ2UlMjByaWNlJTIwZmllbGRzJTIwd29vZGVuJTIwaG91c2VzJTIwcnVyYWwlMjBsYW5kc2NhcGV8ZW58MHwwfHxncmVlbnwxNzYxODIyMDI3fDA&ixlib=rb-4.1.0&q=85",
      description: "Pesona Pedesaan Asri",
    },
  ];

  const stats = [
    { icon: MapPin, value: "50+", label: "Destinasi Wisata" },
    { icon: Award, value: "100+", label: "Warisan Budaya" },
    { icon: Heart, value: "1000+", label: "Pengunjung/Tahun" },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592634047088-7a1f85644183?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxzdW5yaXNlJTIwYmVhY2glMjBvY2VhbiUyMG1vdW50YWluJTIwZ29sZGVuJTIwc2t5fGVufDB8MHx8b3JhbmdlfDE3NjE4MjIwMjJ8MA&ixlib=rb-4.1.0&q=85"
            alt="Stunning sunrise over Banyuwangi beach - Sylvain Cleymans on Unsplash"
            className="w-full h-full object-cover parallax"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 fade-in">
            <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-4">
              <span className="text-white/90 text-sm font-medium">✨ The Sunrise of Java</span>
            </div>

            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">{t.welcome}</h1>

            <p className="text-2xl sm:text-3xl text-white/95 mb-6 font-medium">{t.sunrise}</p>

            <p className="text-lg sm:text-xl text-white/85 mb-12 max-w-3xl mx-auto leading-relaxed">{t.explore}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="#explore"
                className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl shadow-xl"
              >
                {t.explorePesona}
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#destinations"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-semibold text-lg transition-all hover:scale-105 border border-white/20"
              >
                Lihat Destinasi
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all hover:-translate-y-2 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Explore Section - Enhanced with Real Images */}
      <section id="explore" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary text-sm font-semibold">Jelajahi Budaya</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-6">{t.explorePesona}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.explorePesonaDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link key={card.href} href={card.href} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    {/* Image with overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} group-hover:opacity-90 transition-opacity`}></div>

                      {/* Icon overlay */}
                      <div className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Icon size={28} className="text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="font-serif text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{card.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{card.desc}</p>
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                        {t.learnMore}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section id="destinations" className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-6 py-2 bg-secondary/10 rounded-full mb-4">
              <span className="text-secondary text-sm font-semibold">Destinasi Populer</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl font-bold text-foreground mb-6">Keindahan Banyuwangi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Temukan pesona alam dan budaya yang memukau di setiap sudut Banyuwangi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[3/4] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-serif text-3xl font-bold mb-2 group-hover:translate-y-[-4px] transition-transform">{dest.name}</h3>
                  <p className="text-white/90 text-lg">{dest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1545412181-e8395e0fd09b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxzdW5yaXNlJTIwYmVhY2glMjBvY2VhbiUyMG1vdW50YWluJTIwZ29sZGVuJTIwc2t5fGVufDB8MHx8b3JhbmdlfDE3NjE4MjIwMjJ8MA&ixlib=rb-4.1.0&q=85"
            alt="Banyuwangi landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/95"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">{t.banyuwangiAwaits}</h2>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">{t.banyuwangiDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/kuliner" className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105">
                {t.startExplore}
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/kesimpulan"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Lihat Kesimpulan
                <Award size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
