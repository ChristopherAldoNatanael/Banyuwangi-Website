"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, Users, Zap, Shield, Lightbulb } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function NilaiNilaiPage() {
  const { t, mounted, language } = useLanguage();

  if (!mounted) return null;

  const values = [
    {
      name: "Gotong Royong",
      description: "Semangat saling membantu dan bekerja sama tanpa mengharapkan imbalan. Gotong royong adalah fondasi kehidupan sosial masyarakat Osing yang kuat.",
      details: "Dalam gotong royong, setiap anggota masyarakat berkontribusi sesuai kemampuan mereka untuk mencapai tujuan bersama. Nilai ini menciptakan ikatan sosial yang erat dan saling percaya.",
      examples: ["Membantu membangun rumah tetangga", "Bersama-sama panen dan menanam", "Membersihkan lingkungan bersama", "Saling membantu dalam acara-acara penting"],
      icon: Users,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    },
    {
      name: "Spiritualitas",
      description: "Kepercayaan mendalam terhadap kekuatan spiritual, alam, dan leluhur. Spiritualitas membimbing setiap keputusan dan tindakan masyarakat Osing.",
      details: "Spiritualitas bukan hanya tentang agama, tetapi juga tentang menghormati alam, leluhur, dan kekuatan-kekuatan yang lebih besar dari diri sendiri. Ini menciptakan keseimbangan hidup.",
      examples: ["Upacara ritual dan doa bersama", "Menghormati tempat-tempat sakral", "Menjaga hubungan dengan leluhur", "Percaya pada keseimbangan alam"],
      icon: Lightbulb,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    },
    {
      name: "Cinta Lingkungan",
      description: "Komitmen untuk menjaga dan melestarikan alam sebagai warisan untuk generasi mendatang. Masyarakat Osing memahami ketergantungan mereka pada alam.",
      details: "Cinta lingkungan tercermin dalam cara masyarakat Osing mengelola sumber daya alam secara berkelanjutan. Mereka percaya bahwa alam harus dihormati dan dijaga.",
      examples: ["Pertanian berkelanjutan dan organik", "Menjaga kelestarian laut dan hutan", "Menggunakan bahan-bahan alami", "Menghindari kerusakan lingkungan"],
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    },
    {
      name: "Kejujuran & Integritas",
      description: "Nilai kejujuran dan integritas adalah dasar kepercayaan dalam masyarakat Osing. Setiap orang diharapkan untuk berbicara jujur dan bertindak dengan integritas.",
      details: "Kejujuran bukan hanya tentang tidak berbohong, tetapi juga tentang transparansi, akuntabilitas, dan konsistensi antara kata dan tindakan.",
      examples: ["Berbisnis dengan jujur dan adil", "Menepati janji dan komitmen", "Mengakui kesalahan dan memperbaikinya", "Memperlakukan semua orang dengan adil"],
      icon: Shield,
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    },
    {
      name: "Kerendahan Hati",
      description: "Sikap rendah hati dan tidak sombong adalah nilai penting dalam budaya Osing. Kerendahan hati menciptakan harmoni dan menghindari konflik.",
      details: "Kerendahan hati bukan berarti lemah, tetapi tentang menghormati orang lain, mendengarkan dengan baik, dan tidak merasa lebih baik dari orang lain.",
      examples: ["Menghormati pendapat orang lain", "Belajar dari kesalahan dengan terbuka", "Tidak menonjolkan diri sendiri", "Menghargai kontribusi setiap orang"],
      icon: Heart,
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    },
    {
      name: "Inovasi & Adaptasi",
      description: "Meskipun menghargai tradisi, masyarakat Osing juga terbuka terhadap inovasi dan adaptasi. Mereka percaya pada keseimbangan antara tradisi dan modernitas.",
      details: "Inovasi dan adaptasi memungkinkan masyarakat Osing untuk tetap relevan dan berkembang tanpa kehilangan identitas budaya mereka.",
      examples: ["Mengadopsi teknologi baru dalam pertanian", "Mengembangkan produk tradisional dengan cara modern", "Belajar dari budaya lain sambil tetap setia pada akar", "Menciptakan peluang baru untuk generasi muda"],
      icon: Zap,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=srgb&fm=jpg&w=800&q=85",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1599745010340-26fda733ebde?crop=entropy&cs=srgb&fm=jpg&w=1920&q=85"
          alt="Banyuwangi cultural values community harmony"
          className="absolute inset-0 w-full h-full object-cover parallax"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">{t.valuesPageTitle}</h1>
          <p className="text-xl text-white/90 mb-6 text-balance">{t.valuesPageDesc}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{t.valuesFoundation}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t.valuesFoundationDesc}</p>
            <p className="text-lg text-muted-foreground">{t.valuesFoundationDesc2}</p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.valuesCollection}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center overflow-hidden">
                    <img src={value.image || "/placeholder.svg"} alt={value.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="text-secondary" size={24} />
                      <h3 className="font-serif text-2xl font-bold text-foreground">{value.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">{value.description}</p>

                    {/* Details */}
                    <div className="mb-4 pb-4 border-b border-border">
                      <p className="text-xs font-semibold text-foreground mb-1">Penjelasan:</p>
                      <p className="text-xs text-muted-foreground">{value.details}</p>
                    </div>

                    {/* Examples */}
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">Contoh Penerapan:</p>
                      <ul className="space-y-1">
                        {value.examples.slice(0, 2).map((example, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-secondary mt-0.5">•</span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.integrationValues}</h2>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Dalam Keluarga</h3>
              <p className="text-muted-foreground">Nilai-nilai ini diajarkan sejak kecil melalui contoh orang tua dan anggota keluarga. Keluarga adalah tempat pertama di mana nilai-nilai budaya ditanamkan dan dipraktikkan.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Dalam Komunitas</h3>
              <p className="text-muted-foreground">Nilai-nilai ini diperkuat melalui interaksi sosial, upacara bersama, dan kegiatan komunitas. Setiap anggota masyarakat berperan dalam menjaga dan melestarikan nilai-nilai ini.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Dalam Pekerjaan & Bisnis</h3>
              <p className="text-muted-foreground">
                Nilai-nilai ini membimbing cara masyarakat Osing berbisnis dengan jujur, adil, dan berkelanjutan. Kesuksesan bisnis diukur tidak hanya dari keuntungan, tetapi juga dari kontribusi sosial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">{t.learnApplyValues}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.learnApplyValuesDesc}</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:gap-3">
            {t.backHome}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
