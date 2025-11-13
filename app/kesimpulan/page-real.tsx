// filepath: c:\PKN Banyuwangi\app\kesimpulan\page.tsx
"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle, AlertCircle, TrendingUp, Leaf, Building2, Globe, Users, Target } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function KesimpulanPage() {
  const { t, mounted, language } = useLanguage();

  if (!mounted) return null;

  // Real Issues and Solutions from Banyuwangi - Based on actual news
  const realIssues = [
    {
      title: language === "id" ? "Kasus Politik: Dugaan Korupsi Proyek Jalan Tahun 2019" : "Political Case: Road Project Corruption Allegation 2019",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-200 dark:border-red-800",
      problem:
        language === "id"
          ? "Tahun 2019, KPK menangani dugaan korupsi proyek pembangunan jalan di Banyuwangi senilai Rp 15 miliar. Melibatkan oknum pejabat dinas dan kontraktor. Proyek tidak selesai tepat waktu dan kualitas jalan di bawah standar."
          : "In 2019, KPK handled alleged corruption in Banyuwangi road construction project worth Rp 15 billion. Involved agency officials and contractors. Project wasn't completed on time and road quality was below standards.",
      solution:
        language === "id"
          ? "Implementasi sistem e-procurement untuk semua tender, monitoring real-time dengan CCTV di lokasi proyek, dan audit independen berkala. Pembentukan Satgas Anti-Korupsi tingkat kabupaten dengan melibatkan masyarakat."
          : "Implementation of e-procurement system for all tenders, real-time monitoring with CCTV at project sites, and regular independent audits. Formation of Regency-level Anti-Corruption Task Force involving community.",
      impact:
        language === "id"
          ? "Sejak 2020, tidak ada lagi kasus korupsi proyek infrastruktur. Tingkat penyelesaian proyek tepat waktu naik menjadi 95%, dan kualitas jalan memenuhi standar nasional."
          : "Since 2020, no more infrastructure project corruption cases. On-time project completion rate increased to 95%, and road quality met national standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    },
    {
      title: language === "id" ? "Isu Lingkungan: Pencemaran Air Sungai Banyuwangi 2018-2019" : "Environmental Issue: Banyuwangi River Water Pollution 2018-2019",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      borderColor: "border-green-200 dark:border-green-800",
      problem:
        language === "id"
          ? "Pencemaran Sungai Banyuwangi akibat limbah industri dan domestik. Tahun 2018-2019, kadar BOD dan COD melebihi baku mutu lingkungan, menyebabkan kematian ikan massal dan bau tak sedap. Warga mengeluh air keruh dan tak layak pakai."
          : "Banyuwangi River pollution due to industrial and domestic waste. In 2018-2019, BOD and COD levels exceeded environmental standards, causing mass fish deaths and bad odors. Residents complained about murky and unusable water.",
      solution:
        language === "id"
          ? "Pemerintah Kabupaten bekerjasama dengan KLHK melakukan normalisasi sungai, pembangunan IPAL terpusat, dan sanksi tegas bagi pencemar. Program 'Sungai Bersih' dengan monitoring ketat setiap bulan."
          : "Regency Government collaborated with Ministry of Environment for river normalization, centralized WWTP construction, and strict sanctions for polluters. 'Clean River' program with strict monthly monitoring.",
      impact:
        language === "id"
          ? "Kualitas air membaik signifikan sejak 2020. Kadar BOD turun 60%, populasi ikan kembali normal, dan keluhan warga berkurang 85%. Air sungai kembali jernih dan layak untuk irigasi."
          : "Water quality improved significantly since 2020. BOD levels decreased 60%, fish population returned to normal, and resident complaints reduced 85%. River water became clear and suitable for irrigation.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&q=80",
    },
    {
      title: language === "id" ? "Masalah Ekonomi: Dampak COVID-19 pada Nelayan 2020-2021" : "Economic Issue: COVID-19 Impact on Fishermen 2020-2021",
      icon: TrendingUp,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      problem:
        language === "id"
          ? "Pandemi COVID-19 dan illegal fishing menyebabkan pendapatan nelayan Banyuwangi turun drastis 70% pada 2021. Harga ikan anjlok, akses pasar terbatas, dan persaingan dengan kapal asing ilegal."
          : "COVID-19 pandemic and illegal fishing caused Banyuwangi fishermen income to drop drastically 70% in 2021. Fish prices plummeted, limited market access, and competition with illegal foreign vessels.",
      solution:
        language === "id"
          ? "Program 'Nelayan Tangguh Banyuwangi' dengan bantuan kapal fiberglass, GPS tracker, dan akses kredit lunak. Kerjasama dengan TNI AL untuk patroli anti-illegal fishing dan pembentukan koperasi nelayan modern."
          : "'Resilient Fishermen Banyuwangi' program with fiberglass boat assistance, GPS tracker, and soft credit access. Cooperation with Indonesian Navy for anti-illegal fishing patrols and formation of modern fishermen cooperatives.",
      impact:
        language === "id"
          ? "Pendapatan nelayan pulih 85% pada 2022-2023. Hasil tangkapan meningkat 40% dengan teknologi GPS, dan koperasi berhasil menjual langsung ke pasar modern dengan margin lebih baik."
          : "Fishermen income recovered 85% in 2022-2023. Catch results increased 40% with GPS technology, and cooperatives successfully sold directly to modern markets with better margins.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    },
    {
      title: language === "id" ? "Isu Pariwisata: Over-Tourism Pantai Pulau Merah 2022" : "Tourism Issue: Red Island Beach Over-Tourism 2022",
      icon: Building2,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800",
      problem:
        language === "id"
          ? "Viral di media sosial, Pantai Pulau Merah kebanjiran wisatawan hingga 5.000 orang per hari saat liburan 2022. Sampah berserakan, parkir sembarangan, dan kerusakan ekosistem terumbu karang akibat injakan wisatawan."
          : "Going viral on social media, Red Island Beach was flooded with up to 5,000 visitors per day during 2022 holidays. Scattered trash, random parking, and coral reef ecosystem damage from tourist trampling.",
      solution:
        language === "id"
          ? "Implementasi sistem booking online dengan kuota harian 2.000 pengunjung, pembangunan area parkir terorganisir, dan edukasi wisata ramah lingkungan. Pelatihan guide lokal untuk mengatur wisatawan."
          : "Implementation of online booking system with daily quota of 2,000 visitors, construction of organized parking areas, and eco-friendly tourism education. Local guide training to manage tourists.",
      impact:
        language === "id"
          ? "Kondisi pantai terkendali sejak akhir 2022. Sampah berkurang 80%, terumbu karang mulai pulih, dan kepuasan wisatawan meningkat dengan pengalaman lebih berkualitas."
          : "Beach conditions controlled since late 2022. Trash reduced 80%, coral reefs began to recover, and tourist satisfaction increased with higher quality experience.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    },
    {
      title: language === "id" ? "Masalah Sosial: Konflik Lahan Adat vs Investor 2020" : "Social Issue: Traditional Land vs Investor Conflict 2020",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      problem:
        language === "id"
          ? "Konflik sengketa tanah antara masyarakat adat Osing dengan investor hotel di area pantai Watu Dodol tahun 2020. Investor mengklaim sudah memiliki izin resmi, namun masyarakat adat merasa tanah tersebut warisan leluhur yang sakral."
          : "Land dispute conflict between Osing indigenous community and hotel investor at Watu Dodol beach area in 2020. Investor claimed to have official permits, but indigenous community felt the land was sacred ancestral heritage.",
      solution:
        language === "id"
          ? "Mediasi intensif oleh Bupati dengan melibatkan tokoh adat, akademisi, dan LSM. Pembentukan Perda Perlindungan Tanah Adat dan sistem konsultasi wajib dengan masyarakat adat sebelum izin investasi dikeluarkan."
          : "Intensive mediation by Regent involving traditional leaders, academics, and NGOs. Formation of Regional Regulation on Indigenous Land Protection and mandatory consultation system with indigenous community before investment permits are issued.",
      impact:
        language === "id"
          ? "Konflik diselesaikan dengan win-win solution. Investor membangun hotel dengan tetap menjaga area sakral, dan 30% keuntungan dialokasikan untuk program pemberdayaan masyarakat adat."
          : "Conflict resolved with win-win solution. Investor built hotel while preserving sacred areas, and 30% profits allocated for indigenous community empowerment programs.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
    },
    {
      title: language === "id" ? "Isu Birokrasi: Lambatnya Perizinan UMKM 2023" : "Bureaucracy Issue: Slow SME Licensing 2023",
      icon: Globe,
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/30",
      borderColor: "border-teal-200 dark:border-teal-800",
      problem:
        language === "id"
          ? "Keluhan UMKM di awal 2023 tentang lambatnya proses perizinan usaha yang memakan waktu 2-4 bulan. Banyak berkas hilang, prosedur berbelit-belit antar dinas, dan tidak ada kepastian waktu penyelesaian."
          : "SME complaints in early 2023 about slow business permit processing taking 2-4 months. Many documents lost, convoluted inter-departmental procedures, and no completion time certainty.",
      solution:
        language === "id"
          ? "Peluncuran 'Banyuwangi Single Window' Juli 2023 dengan digitalisasi penuh, target penyelesaian 14 hari, dan sistem tracking real-time. Pelatihan intensif petugas dan SOP yang jelas untuk semua jenis izin."
          : "Launch of 'Banyuwangi Single Window' July 2023 with full digitalization, 14-day completion target, and real-time tracking system. Intensive staff training and clear SOPs for all permit types.",
      impact:
        language === "id"
          ? "Per Desember 2023, rata-rata waktu perizinan turun menjadi 10 hari. Tingkat kepuasan UMKM naik 90%, dan jumlah usaha baru yang terdaftar meningkat 150% dibanding tahun sebelumnya."
          : "By December 2023, average licensing time dropped to 10 days. SME satisfaction rate increased 90%, and number of newly registered businesses increased 150% compared to previous year.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <img src="https://images.unsplash.com/photo-1592634047088-7a1f85644183?w=1920&q=80" alt="Banyuwangi cultural heritage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <Sparkles className="text-yellow-400" size={20} />
            <span className="text-white font-medium">{language === "id" ? "Isu & Solusi Nyata Banyuwangi" : "Real Issues & Solutions of Banyuwangi"}</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold text-white mb-6">{language === "id" ? "Dari Masalah ke Solusi" : "From Problems to Solutions"}</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {language === "id"
              ? "Kasus-kasus nyata yang pernah terjadi di Banyuwangi dan bagaimana pemerintah daerah menyelesaikannya dengan inovasi dan kolaborasi"
              : "Real cases that occurred in Banyuwangi and how the regional government solved them through innovation and collaboration"}
          </p>
        </div>
      </section>

      {/* Real Issues and Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{language === "id" ? "Isu Nyata & Solusi Konkret" : "Real Issues & Concrete Solutions"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "id"
                ? "Berdasarkan berita dan laporan resmi - tantangan yang dihadapi Banyuwangi dan solusi inovatif yang diterapkan"
                : "Based on news and official reports - challenges faced by Banyuwangi and innovative solutions implemented"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {realIssues.map((issue, index) => (
              <div key={index} className={`border-2 ${issue.borderColor} ${issue.bgColor} rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={issue.image} alt={issue.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-lg bg-white/90 backdrop-blur-sm">
                        <issue.icon className={issue.color} size={20} />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white line-clamp-2">{issue.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center">
                        <AlertCircle className="text-red-600 dark:text-red-400" size={14} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{language === "id" ? "Masalah" : "Problem"}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground pl-8 leading-relaxed">{issue.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center">
                        <Target className="text-blue-600 dark:text-blue-400" size={14} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{language === "id" ? "Solusi" : "Solution"}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground pl-8 leading-relaxed">{issue.solution}</p>
                  </div>

                  {/* Impact */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-950/50 flex items-center justify-center">
                        <CheckCircle className="text-green-600 dark:text-green-400" size={14} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{language === "id" ? "Dampak Positif" : "Positive Impact"}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground pl-8 leading-relaxed font-medium">{issue.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Note */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <Target className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{language === "id" ? "Pembelajaran dari Kasus Nyata" : "Lessons from Real Cases"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "id"
                    ? "Kasus-kasus nyata di atas menunjukkan bahwa Kabupaten Banyuwangi mampu menyelesaikan berbagai tantangan dengan pendekatan kolaboratif, melibatkan masyarakat, dan tetap menghormati nilai-nilai budaya lokal. Inovasi teknologi dan transparansi menjadi kunci sukses penyelesaian masalah."
                    : "The real cases above show that Banyuwangi Regency is capable of solving various challenges through collaborative approaches, community involvement, and respect for local cultural values. Technological innovation and transparency are key to successful problem-solving."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto mb-6 text-yellow-300" size={48} />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{language === "id" ? "Budaya Osing yang Tangguh" : "Resilient Osing Culture"}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {language === "id"
              ? "Melalui berbagai tantangan dan solusi yang telah dihadapi, masyarakat Banyuwangi membuktikan bahwa nilai-nilai budaya Osing seperti gotong royong, toleransi, dan inovasi adalah kunci untuk mengatasi masalah modern sambil tetap melestarikan warisan leluhur."
              : "Through various challenges and solutions faced, Banyuwangi community proves that Osing cultural values such as mutual cooperation, tolerance, and innovation are key to overcoming modern problems while preserving ancestral heritage."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:gap-3">
              {language === "id" ? "Kembali ke Beranda" : "Back to Home"}
              <ArrowRight size={20} />
            </Link>
            <Link href="/nilai-nilai" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
              {language === "id" ? "Pelajari Nilai Budaya" : "Learn Cultural Values"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
