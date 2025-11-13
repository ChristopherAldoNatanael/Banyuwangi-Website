"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Heart, Users, Flame, Leaf } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function AdatTradisiPage() {
  const { t, mounted, language } = useLanguage();

  if (!mounted) return null;

  const customs = [
    {
      name: "Upacara Seblang",
      description: "Upacara Seblang adalah ritual sakral yang dilakukan untuk memohon berkah dan perlindungan dari roh-roh leluhur. Upacara ini melibatkan tari ritual yang hipnotis dan penuh makna spiritual.",
      significance: "Seblang adalah simbol hubungan spiritual masyarakat Osing dengan alam dan leluhur mereka. Upacara ini memperkuat ikatan komunitas dan kepercayaan kolektif.",
      details: [
        "Dilakukan oleh perempuan pilihan yang dipilih secara spiritual",
        "Melibatkan tari ritual yang hipnotis dan menenangkan",
        "Menggunakan sesaji dan persembahan tradisional",
        "Dipimpin oleh pemimpin spiritual atau dukun",
        "Biasanya dilakukan pada waktu-waktu khusus dalam setahun",
      ],
      timing: "Musiman, biasanya pada bulan-bulan tertentu",
      image:
        "https://images.unsplash.com/photo-1759347310857-5a6109ff8e2f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHx0cmFkaXRpb25hbCUyMGNlcmVtb255JTIwY3VsdHVyYWwlMjBnYXRoZXJpbmclMjByaXR1YWwlMjBjb21tdW5pdHl8ZW58MHwwfHx8MTc2MTgyMjQ0N3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Pernikahan Adat Osing",
      description: "Pernikahan adat Osing adalah perayaan yang meriah dan penuh makna budaya. Upacara ini menggabungkan elemen tradisional, spiritual, dan kebersamaan keluarga besar.",
      significance: "Pernikahan adat adalah momen penting yang menandai persatuan dua keluarga dan memperkuat ikatan sosial dalam komunitas.",
      details: [
        "Dimulai dengan lamaran (pinangan) yang formal",
        "Upacara adat dengan ritual-ritual khusus",
        "Pengantin mengenakan pakaian adat tradisional",
        "Melibatkan seluruh keluarga dan komunitas",
        "Diakhiri dengan pesta dan perayaan bersama",
      ],
      timing: "Sepanjang tahun, biasanya pada musim tertentu",
      image:
        "https://images.unsplash.com/photo-1643215131359-14f1ba64386f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw3fHx3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMHRyYWRpdGlvbmFsJTIwY2VyZW1vbnl8ZW58MHwwfHx8MTc2MTgyMjQ1Nnww&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Upacara Kematian & Pemakaman",
      description: "Upacara kematian Osing adalah ritual yang penuh kehormatan dan penghargaan terhadap orang yang telah meninggal. Upacara ini mencerminkan kepercayaan tentang kehidupan setelah kematian.",
      significance: "Upacara kematian adalah cara masyarakat Osing menghormati orang yang telah meninggal dan memastikan mereka beristirahat dengan tenang.",
      details: [
        "Memandikan dan mempersiapkan jenazah dengan ritual khusus",
        "Doa dan bacaan spiritual dari pemimpin agama",
        "Prosesi pemakaman yang terhormat",
        "Berkumpul keluarga dan tetangga untuk berdoa",
        "Ziarah dan doa di makam pada hari-hari tertentu",
      ],
      timing: "Saat ada anggota keluarga yang meninggal",
      image: "/upacara-kematian-funeral-ceremony.jpg",
    },
    {
      name: "Gotong Royong",
      description: "Gotong royong adalah tradisi saling membantu dan bekerja sama dalam menyelesaikan pekerjaan bersama. Ini adalah nilai inti budaya Osing yang masih hidup hingga hari ini.",
      significance: "Gotong royong adalah simbol kebersamaan, solidaritas, dan kepedulian sosial yang menjadi fondasi kehidupan bermasyarakat Osing.",
      details: [
        "Membantu membangun rumah atau fasilitas umum",
        "Membantu panen atau menanam bersama-sama",
        "Membersihkan lingkungan dan fasilitas publik",
        "Saling membantu dalam acara-acara penting",
        "Tidak ada bayaran, hanya kebersamaan dan makanan bersama",
      ],
      timing: "Sepanjang tahun, sesuai kebutuhan komunitas",
      image: "/gotong-royong-community-work.jpg",
    },
    {
      name: "Perayaan Hari Raya & Festival",
      description: "Perayaan hari raya dan festival adalah momen penting ketika masyarakat Osing berkumpul untuk merayakan kebersamaan, spiritualitas, dan budaya mereka.",
      significance: "Festival adalah kesempatan untuk memperkuat identitas budaya, berbagi kebahagiaan, dan meneruskan tradisi kepada generasi muda.",
      details: [
        "Lebaran dengan berkumpul keluarga dan saling memaafkan",
        "Tahun Baru dengan ritual pembersihan dan pembaruan",
        "Festival Banyuwangi Bersatu dengan pertunjukan budaya",
        "Perayaan lokal dengan makanan dan hiburan tradisional",
        "Melibatkan seluruh komunitas dalam kegembiraan bersama",
      ],
      timing: "Sepanjang tahun, sesuai kalender budaya dan agama",
      image: "/perayaan-festival-celebration.jpg",
    },
    {
      name: "Tradisi Makan Bersama",
      description: "Tradisi makan bersama adalah cara masyarakat Osing mempererat hubungan dan berbagi rezeki. Makanan tradisional disajikan dengan penuh kehangatan dan kebersamaan.",
      significance: "Makan bersama adalah simbol persatuan, kebersamaan, dan saling menghormati dalam kehidupan sosial masyarakat Osing.",
      details: [
        "Makan bersama dalam acara-acara penting",
        "Berbagi makanan tradisional dengan tetangga",
        "Mengundang tamu dengan hidangan istimewa",
        "Makan bersama di rumah ibadah atau tempat umum",
        "Makanan menjadi medium untuk berbagi cinta dan perhatian",
      ],
      timing: "Sepanjang tahun, dalam berbagai kesempatan",
      image: "/makan-bersama-communal-meal.jpg",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1740630267005-db9af10c0164?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx0cmFkaXRpb25hbCUyMGNlcmVtb255JTIwY3VsdHVyYWwlMjBnYXRoZXJpbmclMjByaXR1YWwlMjBjb21tdW5pdHl8ZW58MHwwfHx8MTc2MTgyMjQ0N3ww&ixlib=rb-4.1.0&q=85"
          alt="Indonesian traditional ceremony - wisata lebakmuncang on Unsplash"
          className="absolute inset-0 w-full h-full object-cover parallax"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">{t.customsPageTitle}</h1>
          <p className="text-xl text-white/90 mb-6 text-balance">{t.customsPageDesc}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{t.customsHeritage}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t.customsHeritageDesc}</p>
            <p className="text-lg text-muted-foreground">{t.customsHeritageDesc2}</p>
          </div>
        </div>
      </section>

      {/* Customs Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.customsCollection}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customs.map((custom, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                  <img src={custom.image || "/placeholder.svg"} alt={custom.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{custom.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{custom.description}</p>

                  {/* Significance */}
                  <div className="mb-4 pb-4 border-b border-border">
                    <p className="text-xs font-semibold text-foreground mb-1">Makna:</p>
                    <p className="text-xs text-muted-foreground">{custom.significance}</p>
                  </div>

                  {/* Timing */}
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-1">Waktu Pelaksanaan:</p>
                    <p className="text-xs text-muted-foreground">{custom.timing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunikan Adat & Tradisi Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950/30 dark:via-cyan-950/30 dark:to-teal-950/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              {language === "id" ? "Keunikan Adat & Tradisi Osing" : "Uniqueness of Osing Customs & Traditions"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "id"
                ? "Apa yang membuat adat dan tradisi Banyuwangi begitu istimewa dan berbeda dari tradisi daerah lain?"
                : "What makes Banyuwangi customs and traditions so special and different from other regional traditions?"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Upacara Seblang untuk Tolak Bala" : "Seblang Ceremony to Ward Off Calamity"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Upacara Seblang yang dilakukan untuk menolak bala (bencana) dan meminta berkah adalah tradisi unik yang tidak ditemukan di daerah lain di Indonesia. Penari Seblang dipilih secara spiritual dan masuk dalam kondisi trans, menjadi medium antara dunia manusia dan roh leluhur."
                  : "The Seblang ceremony performed to ward off calamity and ask for blessings is a unique tradition not found in other regions of Indonesia. Seblang dancers are spiritually chosen and enter a trance state, becoming a medium between the human world and ancestral spirits."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-cyan-200 dark:border-cyan-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <Flame className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Tradisi Barong Ider Bumi" : "Barong Ider Bumi Tradition"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Tradisi mengelilingi desa dengan barong (reog) untuk membersihkan energi negatif dan mendatangkan berkah adalah ritual khusus Banyuwangi. Barong dipercaya memiliki kekuatan spiritual yang dapat melindungi desa dari marabahaya dan membawa kemakmuran."
                  : "The tradition of circling the village with barong (reog) to cleanse negative energy and bring blessings is a special Banyuwangi ritual. Barong is believed to have spiritual power that can protect the village from disaster and bring prosperity."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-teal-200 dark:border-teal-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Sistem Gotong Royong yang Kuat" : "Strong Mutual Cooperation System"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Gotong royong di Banyuwangi bukan hanya dalam pekerjaan fisik seperti membangun rumah atau panen, tapi juga dalam ritual spiritual dan kegiatan sosial kemasyarakatan. Setiap anggota masyarakat berkontribusi sesuai kemampuan untuk tujuan bersama."
                  : "Mutual cooperation in Banyuwangi is not only in physical work such as building houses or harvesting, but also in spiritual rituals and community social activities. Every community member contributes according to their abilities for common goals."}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 border-2 border-blue-300 dark:border-blue-700 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {language === "id" ? "Sinkretisme Kepercayaan" : "Syncretism of Beliefs"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "id"
                  ? "Tradisi Osing mencerminkan sinkretisme unik antara kepercayaan animisme, Hindu-Buddha, dan Islam. Upacara adat menggabungkan elemen dari berbagai kepercayaan tanpa konflik, menciptakan harmoni spiritual yang inklusif. Masyarakat menghormati tempat-tempat sakral, leluhur, dan juga menjalankan ibadah agama formal."
                  : "Osing traditions reflect a unique syncretism between animistic beliefs, Hindu-Buddhist, and Islamic faiths. Traditional ceremonies combine elements from various beliefs without conflict, creating an inclusive spiritual harmony. The community respects sacred places, ancestors, and also practices formal religious worship."}
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-cyan-500/10 border-2 border-teal-300 dark:border-teal-700 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {language === "id" ? "Peran Komunitas dalam Ritual" : "Community Role in Rituals"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "id"
                  ? "Setiap ritual adat Osing melibatkan seluruh komunitas, bukan hanya keluarga yang bersangkutan. Tetangga dan warga desa turut membantu persiapan, menyediakan sesaji, dan berpartisipasi dalam upacara. Ini memperkuat ikatan sosial dan menciptakan rasa memiliki bersama terhadap tradisi."
                  : "Every Osing traditional ritual involves the entire community, not just the concerned family. Neighbors and villagers help with preparations, provide offerings, and participate in ceremonies. This strengthens social bonds and creates a shared sense of ownership of traditions."}
              </p>
            </div>
          </div>

          {/* Values Built */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold mb-4 text-center">
              {language === "id" ? "Nilai yang Dibangun dari Adat & Tradisi" : "Values Built from Customs & Traditions"}
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mt-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart size={24} />
                </div>
                <h4 className="font-bold mb-2">
                  {language === "id" ? "Solidaritas Sosial" : "Social Solidarity"}
                </h4>
                <p className="text-sm opacity-90">
                  {language === "id" 
                    ? "Gotong royong menciptakan ikatan kuat antar warga"
                    : "Mutual cooperation creates strong bonds among residents"}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Flame size={24} />
                </div>
                <h4 className="font-bold mb-2">
                  {language === "id" ? "Kepercayaan Spiritual" : "Spiritual Belief"}
                </h4>
                <p className="text-sm opacity-90">
                  {language === "id"
                    ? "Ritual memperkuat hubungan dengan leluhur dan alam"
                    : "Rituals strengthen connection with ancestors and nature"}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users size={24} />
                </div>
                <h4 className="font-bold mb-2">
                  {language === "id" ? "Kebersamaan" : "Togetherness"}
                </h4>
                <p className="text-sm opacity-90">
                  {language === "id"
                    ? "Setiap momen penting dirayakan bersama komunitas"
                    : "Every important moment is celebrated with the community"}
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf size={24} />
                </div>
                <h4 className="font-bold mb-2">
                  {language === "id" ? "Harmoni Alam" : "Natural Harmony"}
                </h4>
                <p className="text-sm opacity-90">
                  {language === "id"
                    ? "Tradisi mengajarkan keseimbangan dengan lingkungan"
                    : "Traditions teach balance with the environment"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.coreValues}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-secondary" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">Kebersamaan</h3>
              </div>
              <p className="text-muted-foreground">Kebersamaan adalah nilai utama yang mengikat masyarakat Osing. Setiap tradisi dirancang untuk memperkuat ikatan sosial dan saling mendukung.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="text-accent" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">Spiritualitas</h3>
              </div>
              <p className="text-muted-foreground">Spiritualitas adalah inti dari banyak tradisi Osing. Kepercayaan terhadap kekuatan spiritual dan leluhur membimbing kehidupan sehari-hari masyarakat.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">Saling Menghormati</h3>
              </div>
              <p className="text-muted-foreground">Menghormati orang lain, alam, dan leluhur adalah prinsip fundamental dalam setiap interaksi sosial dan ritual tradisional.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-secondary" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">Harmoni dengan Alam</h3>
              </div>
              <p className="text-muted-foreground">Masyarakat Osing percaya pada keseimbangan antara manusia dan alam. Tradisi-tradisi mereka mencerminkan komitmen terhadap kelestarian lingkungan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preservation Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.traditionPreservation}</h2>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Pendidikan Generasi Muda</h3>
              <p className="text-muted-foreground">Orang tua dan pemimpin komunitas secara aktif mengajarkan tradisi kepada generasi muda melalui pembelajaran langsung dan partisipasi dalam upacara-upacara penting.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Organisasi Budaya</h3>
              <p className="text-muted-foreground">Berbagai organisasi dan komunitas budaya bekerja untuk mendokumentasikan, melestarikan, dan mempromosikan tradisi Osing kepada masyarakat luas.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Adaptasi Modern</h3>
              <p className="text-muted-foreground">Tradisi terus berkembang dengan adaptasi modern sambil mempertahankan esensi dan makna spiritual yang mendalam dari setiap ritual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">{t.respectPreserveTradition}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.respectPreserveTraditionDesc}</p>
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
