"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Heart, Leaf } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function PakaianAdatPage() {
  const { t, mounted, language } = useLanguage();

  if (!mounted) return null;

  const clothingItems = [
    {
      name: { id: "Pakaian Adat Wanita Osing", en: "Osing Women's Traditional Clothing" },
      description: {
        id: "Pakaian tradisional wanita Osing yang elegan dengan kebaya berwarna cerah, kain batik, dan hiasan kepala yang indah. Mencerminkan keanggunan dan keindahan budaya Banyuwangi.",
        en: "Elegant Osing women's traditional clothing with bright colored kebaya, batik fabric, and beautiful headdress. Reflects the elegance and beauty of Banyuwangi culture.",
      },
      details: {
        id: ["Kebaya dengan motif tradisional", "Kain batik atau songket", "Selendang sutra", "Hiasan kepala (sanggul)", "Perhiasan emas tradisional"],
        en: ["Kebaya with traditional motifs", "Batik or songket fabric", "Silk shawl", "Headdress (sanggul)", "Traditional gold jewelry"],
      },
      occasion: {
        id: "Upacara adat, pernikahan, perayaan budaya",
        en: "Traditional ceremonies, weddings, cultural celebrations",
      },
      image:
        "https://images.unsplash.com/photo-1505673117630-12dcc0c71c6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHx3b21hbiUyMHRyYWRpdGlvbmFsJTIwZHJlc3MlMjBrZWJheWElMjBiYXRpa3xlbnwwfDF8fHwxNzYxODIyNDUxfDA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Pakaian Adat Pria Osing", en: "Osing Men's Traditional Clothing" },
      description: {
        id: "Pakaian tradisional pria Osing yang gagah dengan baju kurung, kain batik, dan ikat kepala. Menampilkan kesederhanaan dan kekuatan karakter pria Osing.",
        en: "Dignified Osing men's traditional clothing with kurung shirt, batik fabric, and headwrap. Shows the simplicity and strength of Osing men's character.",
      },
      details: {
        id: ["Baju kurung atau baju kampuh", "Kain batik atau songket", "Ikat kepala (udeng)", "Sabuk tradisional", "Perhiasan perak atau emas"],
        en: ["Kurung shirt or kampuh shirt", "Batik or songket fabric", "Headwrap (udeng)", "Traditional belt", "Silver or gold jewelry"],
      },
      occasion: {
        id: "Upacara adat, pernikahan, perayaan budaya",
        en: "Traditional ceremonies, weddings, cultural celebrations",
      },
      image:
        "https://images.unsplash.com/photo-1711955687200-3659997780a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxtYW4lMjB0cmFkaXRpb25hbCUyMGNsb3RoaW5nJTIwYmF0aWslMjBjdWx0dXJhbCUyMGF0dGlyZXxlbnwwfDF8fHwxNzYxODIyNDUxfDA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Kebaya Osing", en: "Osing Kebaya" },
      description: {
        id: "Kebaya tradisional Osing dengan desain yang rumit dan detail bordir yang indah. Biasanya berwarna merah, kuning, atau hijau dengan motif bunga dan geometris.",
        en: "Osing traditional kebaya with intricate design and beautiful embroidery details. Usually in red, yellow, or green with floral and geometric patterns.",
      },
      details: {
        id: ["Kain katun atau sutra", "Bordir tangan yang detail", "Motif bunga dan geometris", "Warna-warna cerah tradisional", "Jahitan presisi tinggi"],
        en: ["Cotton or silk fabric", "Detailed hand embroidery", "Floral and geometric patterns", "Bright traditional colors", "High precision stitching"],
      },
      occasion: { id: "Acara formal, pernikahan, festival budaya", en: "Formal events, weddings, cultural festivals" },
      image:
        "https://images.unsplash.com/photo-1718871716580-117417d490f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxlbWJyb2lkZXJlZCUyMGRyZXNzJTIwbGFjZSUyMGVsZWdhbnQlMjBkcmVzc3xlbnwwfDF8fHwxNzYxODIzODQ2fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Kain Batik Banyuwangi", en: "Banyuwangi Batik Fabric" },
      description: {
        id: "Kain batik khas Banyuwangi dengan motif unik yang terinspirasi dari alam dan budaya lokal. Setiap motif memiliki makna dan cerita tersendiri.",
        en: "Distinctive Banyuwangi batik fabric with unique patterns inspired by nature and local culture. Each pattern has its own meaning and story.",
      },
      details: {
        id: ["Motif alam dan budaya lokal", "Pewarna alami tradisional", "Teknik batik tulis", "Pola simetris dan asimetris", "Warna-warna alami yang tahan lama"],
        en: ["Nature and local culture motifs", "Traditional natural dyes", "Hand-written batik technique", "Symmetric and asymmetric patterns", "Durable natural colors"],
      },
      occasion: {
        id: "Pakaian sehari-hari, acara formal, koleksi pribadi",
        en: "Everyday wear, formal events, personal collection",
      },
      image: "https://images.unsplash.com/photo-1761516659902-2994696b362e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxiYXRpayUyMHRleHRpbGUlMjBwYXR0ZXJuJTIwZmFicmljfGVufDB8Mnx8fDE3NjE4MjM4NDd8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Ikat Kepala Tradisional (Udeng)", en: "Traditional Headwrap (Udeng)" },
      description: {
        id: "Ikat kepala tradisional Osing yang dipakai oleh pria. Dibuat dari kain batik atau songket dengan cara melipat dan mengikat yang khusus.",
        en: "Traditional Osing headwrap worn by men. Made from batik or songket fabric with special folding and tying techniques.",
      },
      details: {
        id: ["Kain batik atau songket", "Teknik melipat tradisional", "Berbagai warna dan motif", "Simbol status dan identitas", "Dibuat dengan keahlian khusus"],
        en: ["Batik or songket fabric", "Traditional folding technique", "Various colors and patterns", "Symbol of status and identity", "Made with special skill"],
      },
      occasion: {
        id: "Upacara adat, pernikahan, acara budaya",
        en: "Traditional ceremonies, weddings, cultural events",
      },
      image: "https://images.unsplash.com/photo-1761516659554-28c69fc0eecd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxiYXRpayUyMHRleHRpbGUlMjBwYXR0ZXJuJTIwZmFicmljfGVufDB8Mnx8fDE3NjE4MjM4NDd8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Perhiasan Tradisional Osing", en: "Osing Traditional Jewelry" },
      description: {
        id: "Perhiasan tradisional Osing yang terbuat dari emas dan perak dengan desain yang rumit. Setiap piece adalah karya seni yang mencerminkan keahlian pengrajin lokal.",
        en: "Osing traditional jewelry made from gold and silver with intricate design. Each piece is a work of art reflecting local craftsmen's skill.",
      },
      details: {
        id: ["Emas dan perak murni", "Desain yang rumit dan detail", "Motif tradisional Osing", "Dibuat oleh pengrajin ahli", "Warisan turun-temurun"],
        en: ["Pure gold and silver", "Intricate and detailed design", "Traditional Osing motifs", "Made by skilled craftsmen", "Passed down through generations"],
      },
      occasion: {
        id: "Acara spesial, pernikahan, koleksi keluarga",
        en: "Special occasions, weddings, family collection",
      },
      image:
        "https://images.unsplash.com/photo-1606689518099-4437c5dd3b21?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxnb2xkJTIwamV3ZWxyeSUyMHRyYWRpdGlvbmFsJTIwamV3ZWxyeSUyMG9ybmFtZW50c3xlbnwwfDJ8fHllbGxvd3wxNzYxODIzODQ5fDA&ixlib=rb-4.1.0&q=85",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1756694916043-9c213916e1c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGRhbmNlJTIwSW5kb25lc2lhbiUyMHBlcmZvcm1hbmNlJTIwY3VsdHVyYWwlMjBjZXJlbW9ueSUyMGNvbG9yZnVsJTIwY29zdHVtZXN8ZW58MHwwfHx8MTc2MTgyMjAyMnww&ixlib=rb-4.1.0&q=85"
          alt="Indonesian traditional clothing - Yazid N on Unsplash"
          className="absolute inset-0 w-full h-full object-cover parallax"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">{t.clothingPageTitle}</h1>
          <p className="text-xl text-white/90 mb-6 text-balance">{t.clothingPageDesc}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{t.clothingHeritage}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t.clothingHeritageDesc}</p>
            <p className="text-lg text-muted-foreground">{t.clothingHeritageDesc2}</p>
          </div>
        </div>
      </section>

      {/* Clothing Items Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.clothingCollection}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clothingItems.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <img src={item.image || "/placeholder.svg"} alt={item.name[language]} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{item.name[language]}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description[language]}</p>

                  {/* Details */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">{t.characteristics}</p>
                    <ul className="space-y-1">
                      {item.details[language]?.map((detail: string, i: number) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Occasion */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-foreground mb-1">{t.usedFor}</p>
                    <p className="text-xs text-muted-foreground">{item.occasion[language]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunikan Pakaian Adat Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/30 dark:via-green-950/30 dark:to-teal-950/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">{language === "id" ? "Keunikan Pakaian Adat Osing" : "Uniqueness of Osing Traditional Clothing"}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "id"
                ? "Apa yang membuat pakaian adat Banyuwangi begitu istimewa dan berbeda dari pakaian tradisional daerah lain?"
                : "What makes Banyuwangi traditional clothing so special and different from other regional traditional clothing?"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-emerald-200 dark:border-emerald-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{language === "id" ? "Motif Batik Khas Banyuwangi" : "Distinctive Banyuwangi Batik Motifs"}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Batik Banyuwangi memiliki motif-motif unik seperti Gajah Oling (gajah minum), Paras Gempal, dan Sekar Jagad yang tidak ditemukan di daerah lain. Setiap motif memiliki makna filosofis yang mendalam tentang kehidupan dan alam."
                  : "Banyuwangi batik has unique motifs such as Gajah Oling (drinking elephant), Paras Gempal, and Sekar Jagad which are not found in other regions. Each motif has deep philosophical meaning about life and nature."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-green-200 dark:border-green-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{language === "id" ? "Warna-warna Cerah yang Berani" : "Bold Bright Colors"}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Berbeda dengan kebaya tradisional lain yang cenderung lembut, pakaian adat Osing menggunakan warna-warna cerah seperti merah, kuning, hijau, dan oranye yang melambangkan kegembiraan, semangat, dan vitalitas masyarakat Osing."
                  : "Unlike other traditional kebaya which tend to be soft, Osing traditional clothing uses bright colors such as red, yellow, green, and orange which symbolize the joy, spirit, and vitality of the Osing people."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-teal-200 dark:border-teal-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{language === "id" ? "Teknik Bordir Tangan yang Rumit" : "Intricate Hand Embroidery Technique"}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Setiap kebaya dihiasi dengan bordir tangan yang sangat detail dan rumit, membutuhkan waktu berminggu-minggu hingga berbulan-bulan untuk menyelesaikannya. Motif bordir menggambarkan bunga, daun, dan geometris yang mencerminkan keindahan alam."
                  : "Each kebaya is adorned with very detailed and intricate hand embroidery, requiring weeks to months to complete. The embroidery motifs depict flowers, leaves, and geometric patterns that reflect the beauty of nature."}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 border-2 border-emerald-300 dark:border-emerald-700 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{language === "id" ? "Proses Pembuatan yang Sakral" : "Sacred Manufacturing Process"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "id"
                  ? "Pembuatan batik dan pakaian adat Osing melibatkan ritual dan doa khusus. Pengrajin percaya bahwa setiap kain memiliki 'roh' dan harus dibuat dengan penuh kehormatan dan kesabaran. Proses pewarnaan menggunakan bahan alami yang ramah lingkungan."
                  : "Making batik and Osing traditional clothing involves special rituals and prayers. Craftsmen believe that each fabric has a 'spirit' and must be made with full respect and patience. The dyeing process uses natural materials that are environmentally friendly."}
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-green-500/10 border-2 border-teal-300 dark:border-teal-700 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{language === "id" ? "Simbol Status dan Identitas" : "Symbol of Status and Identity"}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "id"
                  ? "Pakaian adat bukan hanya busana, tetapi simbol identitas budaya dan status sosial. Jenis kain, motif, dan cara pemakaian mencerminkan usia, status pernikahan, dan peran dalam masyarakat. Setiap detail memiliki makna yang diwariskan turun-temurun."
                  : "Traditional clothing is not just attire, but a symbol of cultural identity and social status. The type of fabric, motif, and way of wearing reflect age, marital status, and role in society. Every detail has meaning passed down through generations."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Significance Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.culturalMeaning}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-accent" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">{t.culturalIdentity}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{t.culturalIdentityDesc}</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-secondary" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">{t.familyHeritage}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{t.familyHeritageDesc}</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">{t.communityBond}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{t.communityBondDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">{t.preserveCulture}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.preserveCultureDesc}</p>
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
