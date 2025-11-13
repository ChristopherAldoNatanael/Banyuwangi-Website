"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Anchor, Leaf, Hammer, Briefcase, Palette } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function PekerjaanPage() {
  const { t, mounted, language } = useLanguage();

  if (!mounted) return null;

  const occupations = [
    {
      name: "Nelayan (Fisherman)",
      description: "Nelayan adalah profesi utama masyarakat Banyuwangi yang memanfaatkan kekayaan laut. Mereka menangkap berbagai jenis ikan dan hasil laut lainnya untuk memenuhi kebutuhan lokal dan ekspor.",
      details: [
        "Menangkap ikan dengan berbagai teknik tradisional dan modern",
        "Menggunakan perahu tradisional dan kapal modern",
        "Bekerja di laut Jawa dan Selat Bali",
        "Menjual hasil tangkapan ke pasar lokal dan nasional",
        "Menjaga kelestarian ekosistem laut",
      ],
      significance: "Nelayan adalah tulang punggung ekonomi Banyuwangi dan menjaga tradisi maritim yang kaya.",
      icon: Anchor,
      image:
        "https://images.unsplash.com/photo-1549048144-899e8172ca6f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxmaXNoZXJtYW4lMjBmaXNoaW5nJTIwbmV0cyUyMGJvYXQlMjBvY2VhbnxlbnwwfDB8fGJsdWV8MTc2MTgyMjQ1NXww&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Petani (Farmer)",
      description: "Petani Banyuwangi mengelola lahan pertanian yang subur untuk menghasilkan berbagai komoditas pertanian. Mereka menanam padi, jagung, tembakau, dan berbagai tanaman perkebunan lainnya.",
      details: [
        "Menanam padi, jagung, dan tanaman musiman",
        "Mengelola perkebunan kopi, cokelat, dan rempah-rempah",
        "Menggunakan teknik pertanian tradisional dan modern",
        "Menjaga kesuburan tanah dan kelestarian lingkungan",
        "Memproduksi hasil pertanian berkualitas tinggi",
      ],
      significance: "Petani memastikan ketahanan pangan dan menghasilkan komoditas ekspor yang bernilai tinggi.",
      icon: Leaf,
      image:
        "https://images.unsplash.com/photo-1613005355639-54728b188289?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxmYXJtZXIlMjByaWNlJTIwZmllbGQlMjBhZ3JpY3VsdHVyZSUyMHJ1cmFsJTIwd29ya3xlbnwwfDB8fGdyZWVufDE3NjE4MjI0NTV8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Pengrajin (Craftsman)",
      description: "Pengrajin Banyuwangi menciptakan berbagai produk kerajinan tangan yang indah dan bernilai seni tinggi. Mereka membuat batik, ukiran kayu, keramik, dan berbagai produk kerajinan lainnya.",
      details: [
        "Membuat batik dengan teknik tulis dan cap",
        "Mengukir kayu dengan desain tradisional dan modern",
        "Membuat keramik dan produk tanah liat",
        "Menggunakan bahan-bahan alami berkualitas",
        "Melestarikan teknik tradisional sambil berinovasi",
      ],
      significance: "Pengrajin menjaga warisan budaya dan menciptakan produk yang diakui secara internasional.",
      icon: Palette,
      image:
        "https://images.unsplash.com/photo-1609881583302-61548332039c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjcmFmdHNtYW4lMjBhcnRpc2FuJTIwaGFuZGljcmFmdCUyMHRyYWRpdGlvbmFsJTIwd29ya3xlbnwwfDJ8fHwxNzYxODIyNDU2fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Pengusaha Kecil & Menengah (SME)",
      description: "Pengusaha kecil dan menengah di Banyuwangi menjalankan berbagai bisnis dari warung makan hingga toko kelontong. Mereka adalah motor penggerak ekonomi lokal yang dinamis.",
      details: ["Menjalankan warung makan dan restoran", "Mengelola toko kelontong dan minimarket", "Berdagang hasil pertanian dan perikanan", "Menyediakan layanan jasa dan transportasi", "Menciptakan lapangan kerja bagi masyarakat lokal"],
      significance: "Pengusaha kecil dan menengah adalah jantung ekonomi Banyuwangi yang menciptakan lapangan kerja.",
      icon: Briefcase,
      image: "/pengusaha-entrepreneur-banyuwangi.jpg",
    },
    {
      name: "Tukang (Skilled Worker)",
      description: "Tukang di Banyuwangi memiliki keahlian khusus dalam berbagai bidang seperti pertukangan, perbaikan, dan konstruksi. Mereka adalah ahli yang dipercaya untuk pekerjaan-pekerjaan teknis.",
      details: [
        "Tukang kayu yang membuat furniture dan bangunan",
        "Tukang batu untuk konstruksi dan renovasi",
        "Tukang listrik dan pipa untuk instalasi",
        "Tukang las dan logam untuk pekerjaan teknis",
        "Memiliki keahlian yang diwariskan turun-temurun",
      ],
      significance: "Tukang adalah profesi yang dihormati dan memiliki keahlian yang sangat dibutuhkan masyarakat.",
      icon: Hammer,
      image: "/tukang-skilled-worker-banyuwangi.jpg",
    },
    {
      name: "Pedagang & Penjual (Trader)",
      description: "Pedagang dan penjual di Banyuwangi aktif di pasar tradisional, toko, dan jalanan. Mereka menjual berbagai produk dari kebutuhan sehari-hari hingga barang-barang khusus.",
      details: [
        "Berjualan di pasar tradisional dan modern",
        "Menjual hasil pertanian dan perikanan segar",
        "Berdagang barang-barang kebutuhan sehari-hari",
        "Menjual produk kerajinan dan souvenir",
        "Membangun hubungan baik dengan pelanggan setia",
      ],
      significance: "Pedagang adalah penghubung antara produsen dan konsumen yang memastikan distribusi barang.",
      icon: Briefcase,
      image: "/pedagang-trader-banyuwangi.jpg",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1717065165653-bb853b7e6e7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxtYXJrZXQlMjBwZW9wbGUlMjB3b3JraW5nJTIwdmVuZG9ycyUyMGJ1c3klMjBtYXJrZXRwbGFjZXxlbnwwfDB8fHwxNzYxODIyNDQ3fDA&ixlib=rb-4.1.0&q=85"
          alt="Indonesian people working in market - Junaid Rahim on Unsplash"
          className="absolute inset-0 w-full h-full object-cover parallax"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">{t.occupationsPageTitle}</h1>
          <p className="text-xl text-white/90 mb-6 text-balance">{t.occupationsPageDesc}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{t.occupationsHeritage}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t.occupationsHeritageDesc}</p>
            <p className="text-lg text-muted-foreground">{t.occupationsHeritageDesc2}</p>
          </div>
        </div>
      </section>

      {/* Occupations Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.occupationsCollection}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occupations.map((occupation, index) => {
              const IconComponent = occupation.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                    <img src={occupation.image || "/placeholder.svg"} alt={occupation.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="text-accent" size={24} />
                      <h3 className="font-serif text-2xl font-bold text-foreground">{occupation.name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">{occupation.description}</p>

                    {/* Activities */}
                    <div className="mb-4 pb-4 border-b border-border">
                      <p className="text-xs font-semibold text-foreground mb-2">Aktivitas Utama:</p>
                      <ul className="space-y-1">
                        {occupation.details.slice(0, 3).map((detail, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Significance */}
                    <p className="text-xs text-muted-foreground italic">{occupation.significance}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Keunikan Pekerjaan Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/30 dark:via-yellow-950/30 dark:to-orange-950/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              {language === "id" ? "Keberagaman & Keunikan Pekerjaan Masyarakat" : "Diversity & Uniqueness of Community Occupations"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "id" 
                ? "Apa yang membuat profesi dan pekerjaan masyarakat Banyuwangi begitu unik dan beragam?"
                : "What makes the professions and occupations of Banyuwangi people so unique and diverse?"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-amber-200 dark:border-amber-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <Anchor className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Harmoni Maritim dan Agraris" : "Maritime and Agrarian Harmony"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Banyuwangi unik karena masyarakatnya menggabungkan profesi nelayan (maritim) dan petani (agraris) secara harmonis. Banyak keluarga memiliki anggota yang bekerja di laut dan di sawah, memanfaatkan kekayaan geografis yang strategis antara laut Jawa, Selat Bali, dan dataran subur lereng Gunung Ijen."
                  : "Banyuwangi is unique because its people harmoniously combine fishing (maritime) and farming (agrarian) professions. Many families have members working at sea and in fields, utilizing the strategic geographic wealth between the Java Sea, Bali Strait, and the fertile slopes of Mount Ijen."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-yellow-200 dark:border-yellow-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mb-4">
                <Palette className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Pengrajin dengan Keahlian Turun-Temurun" : "Craftsmen with Inherited Skills"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Pengrajin batik, ukiran kayu, dan keramik Banyuwangi memiliki teknik khusus yang hanya diajarkan dalam keluarga dan komunitas tertentu. Setiap produk memiliki 'signature' unik yang mencerminkan gaya dan filosofi pembuatnya, menciptakan eksklusivitas dan nilai seni yang tinggi."
                  : "Banyuwangi batik, wood carving, and ceramic craftsmen have special techniques only taught within families and certain communities. Each product has a unique 'signature' reflecting the maker's style and philosophy, creating exclusivity and high artistic value."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-orange-200 dark:border-orange-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Ekonomi Lokal yang Berkelanjutan" : "Sustainable Local Economy"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Sistem ekonomi masyarakat Banyuwangi berbasis gotong royong dan saling mendukung. Pedagang membeli dari petani dan nelayan lokal, pengrajin menggunakan bahan dari produsen setempat, menciptakan ekosistem ekonomi yang saling menguntungkan dan berkelanjutan."
                  : "Banyuwangi community's economic system is based on mutual cooperation and support. Traders buy from local farmers and fishermen, craftsmen use materials from local producers, creating a mutually beneficial and sustainable economic ecosystem."}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 border-2 border-amber-300 dark:border-amber-700 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {language === "id" ? "Diversifikasi Pendapatan" : "Income Diversification"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "id"
                  ? "Masyarakat Banyuwangi cerdas dalam mendiversifikasi sumber pendapatan. Seorang nelayan juga bisa menjadi petani saat musim ombak besar, atau pengrajin yang juga berdagang. Fleksibilitas ini menciptakan ketahanan ekonomi keluarga yang kuat terhadap perubahan musim dan kondisi pasar."
                  : "Banyuwangi people are smart in diversifying income sources. A fisherman can also become a farmer during the big wave season, or a craftsman who also trades. This flexibility creates strong family economic resilience against seasonal changes and market conditions."}
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {language === "id" ? "Peran Perempuan yang Kuat" : "Strong Role of Women"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "id"
                  ? "Perempuan Banyuwangi memiliki peran ekonomi yang sangat kuat. Mereka tidak hanya mengurus rumah tangga, tetapi juga aktif sebagai pedagang pasar, pengrajin batik, pengelola warung makan, dan bahkan nelayan. Kesetaraan gender dalam ekonomi sudah menjadi bagian dari budaya Osing sejak lama."
                  : "Banyuwangi women have a very strong economic role. They not only manage households but are also active as market traders, batik craftsmen, food stall managers, and even fishermen. Gender equality in economics has long been part of Osing culture."}
              </p>
            </div>
          </div>

          {/* Values from Work */}
          <div className="mt-12 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">
              {language === "id" ? "Nilai yang Dibangun dari Pekerjaan" : "Values Built from Work"}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div>
                <h4 className="font-bold mb-2">{language === "id" ? "Kerja Keras" : "Hard Work"}</h4>
                <p className="text-sm opacity-90">
                  {language === "id" 
                    ? "Setiap profesi mengajarkan dedikasi dan kerja keras untuk mencapai hasil terbaik"
                    : "Every profession teaches dedication and hard work to achieve the best results"}
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">{language === "id" ? "Keterampilan" : "Skills"}</h4>
                <p className="text-sm opacity-90">
                  {language === "id"
                    ? "Keahlian khusus yang diasah bertahun-tahun menjadi warisan berharga"
                    : "Special skills honed over years become valuable heritage"}
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">{language === "id" ? "Kemandirian" : "Independence"}</h4>
                <p className="text-sm opacity-90">
                  {language === "id"
                    ? "Ekonomi berkelanjutan menciptakan kemandirian finansial keluarga dan komunitas"
                    : "Sustainable economy creates financial independence for families and communities"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Contribution Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.economicContribution}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Sektor Primer</h3>
              <p className="text-muted-foreground mb-4">Pertanian, perikanan, dan pertambangan adalah sektor utama yang menghasilkan bahan baku berkualitas tinggi untuk pasar lokal dan ekspor internasional.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Hasil perikanan berkualitas tinggi
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Produk pertanian organik
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Komoditas ekspor bernilai tinggi
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Sektor Sekunder & Tersier</h3>
              <p className="text-muted-foreground mb-4">Industri pengolahan, kerajinan, dan layanan jasa terus berkembang dengan inovasi dan kualitas yang meningkat setiap tahunnya.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Industri kerajinan dan batik
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Usaha kecil dan menengah yang berkembang
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Pariwisata dan layanan jasa
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Training Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.skillsTraining}</h2>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Pelatihan Tradisional</h3>
              <p className="text-muted-foreground">Keterampilan tradisional diwariskan dari generasi ke generasi melalui pembelajaran langsung dan pengalaman praktis di lapangan.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Program Pendidikan Formal</h3>
              <p className="text-muted-foreground">Sekolah kejuruan dan lembaga pelatihan menyediakan program pendidikan untuk meningkatkan keterampilan dan kompetensi tenaga kerja lokal.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Inovasi & Modernisasi</h3>
              <p className="text-muted-foreground">Adopsi teknologi modern dan inovasi bisnis membantu meningkatkan produktivitas dan daya saing di pasar global.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">{t.joinEconomy}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.joinEconomyDesc}</p>
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
