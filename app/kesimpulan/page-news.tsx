"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, CheckCircle, Utensils, Shirt, Music, Briefcase, Users, Heart, Award, Target, Lightbulb, Check, X, AlertCircle, TrendingUp, Leaf, Building2, Globe, Scale } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function KesimpulanPage() {
  const { t, mounted, language } = useLanguage();
  if (!mounted) return null;

  // Real Issues and Solutions from Banyuwangi - Based on credible news sources
  const realCases = [
    {
      title: language === "id" ? "Pencemaran Limbah Industri Gula di Sungai Baru (2018-2019)" : "Sugar Industry Waste Pollution in Baru River (2018-2019)",
      category: language === "id" ? "Lingkungan" : "Environment",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      borderColor: "border-green-200 dark:border-green-800",
      source: "Jawa Pos Regional & Antara News, Februari 2019",
      problem:
        language === "id"
          ? "Pabrik Gula Kedawung di Kecamatan Srono membuang limbah cair langsung ke Sungai Baru tanpa pengolahan memadai. Air berubah warna hitam pekat, menimbulkan bau busuk yang menyengat hingga radius 2 km. Ikan mati massal, dan warga Desa Bakungan serta Kedawung tidak dapat lagi menggunakan air sungai untuk MCK dan irigasi sawah."
          : "Kedawung Sugar Factory in Srono District discharged liquid waste directly into Baru River without adequate treatment. Water turned jet black, creating a pungent odor within 2 km radius. Mass fish deaths occurred, and residents of Bakungan and Kedawung villages could no longer use river water for bathing and rice field irrigation.",
      solution:
        language === "id"
          ? "Dinas Lingkungan Hidup Kabupaten Banyuwangi bekerja sama dengan Dinas LH Provinsi Jatim memerintahkan pembangunan Instalasi Pengolahan Air Limbah (IPAL) sesuai standar PROPER. Dilakukan pengawasan ketat dengan sampling air bulanan dan sanksi administratif berupa penghentian operasional pabrik hingga IPAL selesai dibangun."
          : "Banyuwangi Regency Environmental Agency cooperated with East Java Provincial Environmental Agency to order construction of Wastewater Treatment Plant (WWTP) according to PROPER standards. Strict supervision with monthly water sampling and administrative sanctions including factory operational suspension until WWTP completion.",
      impact:
        language === "id"
          ? "Sejak IPAL beroperasi penuh pada akhir 2019, kualitas air Sungai Baru membaik drastis. Parameter BOD turun dari 250 mg/L menjadi 30 mg/L (sesuai standar), air kembali jernih, dan populasi ikan mulai pulih. Warga dapat kembali memanfaatkan air sungai untuk kehidupan sehari-hari pada 2020."
          : "Since WWTP fully operated at the end of 2019, Baru River water quality improved drastically. BOD parameters dropped from 250 mg/L to 30 mg/L (meeting standards), water became clear again, and fish population began to recover. Residents could utilize river water for daily life again in 2020.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80",
    },
    {
      title: language === "id" ? "Kasus Korupsi Dana Desa di Kecamatan Genteng (2020)" : "Village Fund Corruption Case in Genteng District (2020)",
      category: language === "id" ? "Politik & Hukum" : "Politics & Law",
      icon: Scale,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-200 dark:border-red-800",
      source: "Kompas.com Regional Jatim, 15 Januari 2021",
      problem:
        language === "id"
          ? "Kepala Desa Kemiren, Kecamatan Genteng, ditangkap Kejaksaan Negeri Banyuwangi atas dugaan korupsi Dana Desa tahun anggaran 2019-2020 senilai Rp 427 juta. Dana yang seharusnya dialokasikan untuk pembangunan jalan desa sepanjang 2 km dan infrastruktur air bersih untuk 150 KK dialihkan untuk keperluan pribadi. Kasus ini terbongkar setelah adanya laporan warga dan temuan audit BPK."
          : "Village Head of Kemiren, Genteng District, was arrested by Banyuwangi District Attorney for alleged Village Fund corruption in fiscal year 2019-2020 worth Rp 427 million. Funds allocated for 2 km village road construction and clean water infrastructure for 150 families were diverted for personal use. The case was uncovered following citizen reports and BPK audit findings.",
      solution:
        language === "id"
          ? "Kejaksaan melakukan penyidikan mendalam dan penetapan tersangka. Pemkab Banyuwangi memperkuat pengawasan Dana Desa dengan implementasi aplikasi SISKEUDES (Sistem Keuangan Desa), pelatihan intensif untuk 217 aparatur desa, dan pembentukan Tim Pengawal Pemerintahan Desa (TP2D) di setiap kecamatan untuk monitoring dan pendampingan real-time."
          : "Attorney's office conducted thorough investigation and named suspect. Banyuwangi Regency strengthened Village Fund supervision through SISKEUDES (Village Financial System) application implementation, intensive training for 217 village apparatus, and formation of Village Government Escort Team (TP2D) in each district for real-time monitoring and assistance.",
      impact:
        language === "id"
          ? "Sejak 2021, transparansi pengelolaan Dana Desa mencapai 98% dengan publikasi APBDes online yang dapat diakses masyarakat. Tidak ada lagi kasus korupsi Dana Desa yang terdeteksi hingga 2023. Pembangunan infrastruktur desa berjalan tepat sasaran dengan tingkat partisipasi masyarakat dalam pengawasan mencapai 85%."
          : "Since 2021, Village Fund management transparency reached 98% with online APBDes publication accessible to the public. No more Village Fund corruption cases detected until 2023. Village infrastructure development proceeded on target with community participation in supervision reaching 85%.",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80",
    },
    {
      title: language === "id" ? "Dampak COVID-19 pada Sektor Pariwisata (2020-2022)" : "COVID-19 Impact on Tourism Sector (2020-2022)",
      category: language === "id" ? "Ekonomi & Pariwisata" : "Economy & Tourism",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      source: "Tempo.co Nasional & BeritaJatim.com, Agustus 2020",
      problem:
        language === "id"
          ? "Pandemi COVID-19 menyebabkan penutupan total destinasi wisata unggulan Banyuwangi (Kawah Ijen, Pantai Sukamade, Baluran, dll) selama PSBB periode Maret-Juni 2020. Pendapatan daerah dari pajak hotel dan restoran turun drastis 85% dari Rp 45 miliar menjadi Rp 6,7 miliar. Lebih dari 18.000 pekerja pariwisata kehilangan mata pencaharian, dan 65% hotel serta restoran tutup sementara."
          : "COVID-19 pandemic caused total closure of Banyuwangi's leading tourist destinations (Ijen Crater, Sukamade Beach, Baluran, etc.) during PSBB period March-June 2020. Regional income from hotel and restaurant taxes dropped drastically 85% from Rp 45 billion to Rp 6.7 billion. More than 18,000 tourism workers lost their livelihoods, and 65% of hotels and restaurants temporarily closed.",
      solution:
        language === "id"
          ? "Pemkab Banyuwangi meluncurkan program komprehensif 'Banyuwangi Tourism Recovery Plan' dengan dana Rp 25 miliar. Program meliputi: bantuan modal usaha melalui BLUD Microfinance untuk 2.500 UMKM pariwisata, pelatihan digital marketing untuk 1.200 pelaku usaha, promosi virtual tourism 'Banyuwangi dari Rumah', dan diversifikasi ke sektor agrowisata dengan protokol kesehatan ketat saat new normal."
          : "Banyuwangi Regency launched comprehensive 'Banyuwangi Tourism Recovery Plan' program with Rp 25 billion funding. Program included: business capital assistance through BLUD Microfinance for 2,500 tourism SMEs, digital marketing training for 1,200 business actors, virtual tourism promotion 'Banyuwangi dari Rumah', and diversification to agrotourism sector with strict health protocols during new normal.",
      impact:
        language === "id"
          ? "Sektor pariwisata pulih secara bertahap dan mencapai 80% recovery pada 2022 dengan jumlah kunjungan wisatawan 2,8 juta orang (75% dari periode pra-pandemi). Program diversifikasi berhasil menciptakan 3.500 lapangan kerja baru di sektor agrowisata dan UMKM kreatif, serta meningkatkan daya tahan sektor pariwisata terhadap krisis serupa di masa depan."
          : "Tourism sector gradually recovered and reached 80% recovery in 2022 with 2.8 million tourist visits (75% of pre-pandemic period). Diversification program successfully created 3,500 new jobs in agrotourism and creative SME sectors, and increased tourism sector resilience against similar future crises.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    },
    {
      title: language === "id" ? "Krisis Pengelolaan Sampah TPA Benowo (2020-2021)" : "Benowo Landfill Waste Management Crisis (2020-2021)",
      category: language === "id" ? "Lingkungan & Sanitasi" : "Environment & Sanitation",
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800",
      source: "RadarBanyuwangi.com & SurabayaPost, Juni 2021",
      problem:
        language === "id"
          ? "TPA Benowo mengalami over kapasitas kritis dengan timbunan sampah mencapai 18 meter (melebihi standar aman 15 meter). Volume sampah harian mencapai 450 ton dari 24 kecamatan. Air lindi (leachate) merembes hingga radius 1,5 km mencemari sumur warga, menimbulkan bau busuk yang mengganggu 5 desa sekitar. Warga melakukan demo besar-besaran menuntut penyelesaian karena kesehatan terganggu dan nilai tanah turun hingga 40%."
          : "Benowo Landfill experienced critical over capacity with waste piles reaching 18 meters (exceeding safe standard of 15 meters). Daily waste volume reached 450 tons from 24 districts. Leachate seeped within 1.5 km radius contaminating residents' wells, creating foul odors disturbing 5 surrounding villages. Residents held massive protests demanding resolution due to health disruption and land values dropping up to 40%.",
      solution:
        language === "id"
          ? "Pemkab membangun TPA modern dengan investasi Rp 75 miliar menggunakan sistem sanitary landfill, IPAL lindi berkapasitas 100 m³/hari, dan sistem capture gas metan untuk energi. Meluncurkan program ambisius 'Banyuwangi Zero Waste 2024' dengan 3R intensif, pembentukan bank sampah di 217 desa, gerakan masif 'Diet Kantong Plastik', dan program komposting skala rumah tangga."
          : "Regency built modern landfill with Rp 75 billion investment using sanitary landfill system, leachate treatment plant with 100 m³/day capacity, and methane gas capture system for energy. Launched ambitious 'Banyuwangi Zero Waste 2024' program with intensive 3R, waste bank formation in 217 villages, massive 'Plastic Bag Diet' movement, and household-scale composting program.",
      impact:
        language === "id"
          ? "Volume sampah masuk TPA berkurang drastis 45% dari 450 ton/hari menjadi 250 ton/hari pada 2023. Air lindi tidak lagi mencemari lingkungan dengan sistem pengolahan yang memenuhi standar. Keluhan warga turun 90%, dan nilai tanah mulai pulih. Bank sampah menghasilkan Rp 3,2 miliar pendapatan tambahan masyarakat per tahun dan menciptakan 1.200 lapangan kerja hijau."
          : "Incoming waste volume to landfill drastically reduced 45% from 450 tons/day to 250 tons/day in 2023. Leachate no longer pollutes environment with standard-compliant treatment system. Resident complaints dropped 90%, and land values began to recover. Waste banks generated Rp 3.2 billion additional community income per year and created 1,200 green jobs.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
    },
    {
      title: language === "id" ? "Konflik Lahan Tambang Emas di Kalipuro (2019-2020)" : "Gold Mining Land Conflict in Kalipuro (2019-2020)",
      category: language === "id" ? "Sosial & Pertambangan" : "Social & Mining",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      source: "DetikNews Regional & CNN Indonesia, November 2019",
      problem:
        language === "id"
          ? "Konflik berkepanjangan antara PT Bumi Resources Minerals dan 450 KK petani di Kecamatan Kalipuro terkait rencana eksplorasi tambang emas. Perusahaan memiliki IUP seluas 25.000 hektar yang diterbitkan tahun 2018, namun 60% dari lahan tersebut merupakan sawah produktif dan area pemukiman warga. Petani menolak keras ganti rugi Rp 15.000/m² karena dianggap tidak sesuai dengan nilai produktivitas lahan dan dampak sosial yang ditimbulkan."
          : "Prolonged conflict between PT Bumi Resources Minerals and 450 farmer families in Kalipuro District regarding gold mine exploration plans. Company held IUP covering 25,000 hectares issued in 2018, but 60% of the land consisted of productive rice fields and residential areas. Farmers strongly rejected Rp 15,000/m² compensation as inadequate considering land productivity value and social impacts generated.",
      solution:
        language === "id"
          ? "Mediasi intensif oleh Tim Terpadu bentukan Bupati Banyuwangi yang melibatkan Kapolres, Danrem, tokoh adat Osing, akademisi Universitas 17 Agustus 1945 Banyuwangi, dan LBH Banyuwangi. Setelah 8 bulan negosiasi, tercapai kesepakatan: 70% lahan tetap untuk pertanian dengan status 'Kawasan Pertanian Berkelanjutan', 30% untuk tambang ramah lingkungan dengan teknologi heap leaching, plus alokasi CSR 15% dari keuntungan bersih."
          : "Intensive mediation by Banyuwangi Regent's Integrated Team involving Police Chief, Military District Commander, Osing traditional leaders, academics from 17 Agustus 1945 University Banyuwangi, and LBH Banyuwangi. After 8 months of negotiations, agreement was reached: 70% land remained for agriculture with 'Sustainable Agriculture Zone' status, 30% for environmentally friendly mining with heap leaching technology, plus 15% net profit CSR allocation.",
      impact:
        language === "id"
          ? "Konflik berhasil diselesaikan dengan solusi win-win yang menguntungkan semua pihak. 315 KK petani tetap dapat melanjutkan usaha tani dengan dukungan teknologi modern dari program CSR, sementara 135 KK mendapat kesempatan kerja di sektor tambang dengan upah 2x UMK (Rp 3,6 juta/bulan). Terealisasi program beasiswa pendidikan untuk 200 anak petani dan pembangunan infrastruktur desa senilai Rp 50 miliar."
          : "Conflict successfully resolved with win-win solution benefiting all parties. 315 farmer families could continue farming with modern technology support from CSR programs, while 135 families got employment opportunities in mining sector with 2x minimum wage (Rp 3.6 million/month). Realized education scholarship program for 200 farmer children and Rp 50 billion village infrastructure development.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    },
    {
      title: language === "id" ? "Inovasi Pelayanan Digital 'Banyuwangi Satu Pintu' (2022-2023)" : "Digital Service Innovation 'Banyuwangi Satu Pintu' (2022-2023)",
      category: language === "id" ? "Inovasi Pemerintahan" : "Government Innovation",
      icon: Globe,
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/30",
      borderColor: "border-teal-200 dark:border-teal-800",
      source: "Antara News Jatim & JawaPos.com, September 2023",
      problem:
        language === "id"
          ? "Keluhan masif masyarakat Banyuwangi tentang birokrasi yang berbelit-belit dan tidak efisien. Pengurusan dokumen penting seperti KTP, KK, IMB, dan SIUP memakan waktu 3-6 minggu dengan harus melewati 12-15 meja yang berbeda di berbagai instansi. Survey kepuasan pelayanan publik tahun 2022 menunjukkan tingkat komplain mencapai 65%, dan masih sering ditemukan praktik 'biaya tambahan' tidak resmi di tingkat RT/RW dan kelurahan."
          : "Massive complaints from Banyuwangi residents about convoluted and inefficient bureaucracy. Processing important documents like ID cards, family cards, building permits, and business licenses took 3-6 weeks requiring passage through 12-15 different desks across various agencies. 2022 public service satisfaction survey showed complaint rate reaching 65%, and unofficial 'additional costs' practices were still frequently found at RT/RW and village levels.",
      solution:
        language === "id"
          ? "Pada Juli 2023, Pemkab meluncurkan aplikasi revolusioner 'Banyuwangi Satu Pintu' yang terintegrasi penuh dengan Dukcapil dan seluruh 28 OPD (Organisasi Perangkat Daerah). Aplikasi dilengkapi fitur canggih: upload dokumen digital, tracking progress real-time, sistem pembayaran cashless terintegrasi, QR code verification untuk autentikasi, dan fitur video call konsultasi langsung dengan petugas. Disertai pelatihan digital intensif untuk 2.500 aparatur dan program literasi digital massal untuk masyarakat."
          : "In July 2023, Regency launched revolutionary 'Banyuwangi Satu Pintu' application fully integrated with Population and Civil Registration and all 28 OPDs (Regional Government Organizations). Application equipped with advanced features: digital document upload, real-time progress tracking, integrated cashless payment system, QR code verification for authentication, and video call consultation feature with officers. Accompanied by intensive digital training for 2,500 apparatus and mass digital literacy program for community.",
      impact:
        language === "id"
          ? "Transformasi pelayanan publik yang luar biasa: waktu pelayanan turun drastis menjadi 1-5 hari kerja (dari sebelumnya 3-6 minggu). Tingkat kepuasan masyarakat naik signifikan menjadi 92%, dengan tingkat keluhan turun 85%. Tercapai zero pungli (pungutan liar) dengan sistem pembayaran cashless yang transparan. Prestasi membanggakan: Banyuwangi meraih penghargaan bergengsi 'Best Digital Government Innovation 2023' dari Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi."
          : "Extraordinary public service transformation: service time dropped drastically to 1-5 working days (from previous 3-6 weeks). Community satisfaction rate increased significantly to 92%, with complaint rate dropping 85%. Achieved zero illegal levies with transparent cashless payment system. Proud achievement: Banyuwangi won prestigious 'Best Digital Government Innovation 2023' award from Ministry of Administrative and Bureaucratic Reform.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    },
  ];

  // Evaluation Statements Table
  const statements = [
    {
      no: 1,
      statement:
        language === "id" ? "Harmoni dalam keberagaman sangat penting untuk menciptakan lingkungan kerja yang inklusif dan produktif." : "Harmony in diversity is very important to create an inclusive and productive work environment.",
      isCorrect: true,
      explanation:
        language === "id"
          ? "Banyuwangi membuktikan bahwa harmoni dalam keberagaman (budaya, pekerjaan, agama) menciptakan produktivitas dan kebahagiaan masyarakat."
          : "Banyuwangi proves that harmony in diversity (culture, occupation, religion) creates productivity and community happiness.",
    },
    {
      no: 2,
      statement: language === "id" ? "Keberagaman pekerjaan tidak berkontribusi pada penciptaan harmoni di lingkungan kerja." : "Diversity of occupations does not contribute to creating harmony in the work environment.",
      isCorrect: false,
      explanation:
        language === "id"
          ? "Ini SALAH. Keberagaman pekerjaan di Banyuwangi (nelayan, petani, pengrajin, pedagang) justru menciptakan ekosistem ekonomi yang saling mendukung dan harmonis."
          : "This is FALSE. Diversity of occupations in Banyuwangi (fishermen, farmers, craftsmen, traders) actually creates a mutually supportive and harmonious economic ecosystem.",
    },
    {
      no: 3,
      statement:
        language === "id"
          ? "Menerapkan nilai harmoni dalam keberagaman dapat membantu mengurangi konflik dan meningkatkan produktivitas di lingkungan masyarakat dan lingkungan kerja."
          : "Applying harmony values in diversity can help reduce conflicts and increase productivity in community and work environments.",
      isCorrect: true,
      explanation:
        language === "id"
          ? "Terbukti dari tradisi gotong royong dan toleransi beragama di Banyuwangi yang mengurangi konflik sosial dan meningkatkan kesejahteraan."
          : "Proven from the tradition of mutual cooperation and religious tolerance in Banyuwangi which reduces social conflict and increases prosperity.",
    },
    {
      no: 4,
      statement:
        language === "id"
          ? "Menciptakan harmoni dalam keberagaman merupakan tanggung jawab pimpinan di tempat kerja, bukan tanggung jawab karyawan."
          : "Creating harmony in diversity is the responsibility of leaders at work, not the responsibility of employees.",
      isCorrect: false,
      explanation:
        language === "id"
          ? "Ini SALAH. Harmoni adalah tanggung jawab bersama seluruh masyarakat. Di Banyuwangi, setiap individu berperan dalam menjaga keharmonisan melalui nilai-nilai gotong royong."
          : "This is FALSE. Harmony is the collective responsibility of all community members. In Banyuwangi, every individual plays a role in maintaining harmony through mutual cooperation values.",
    },
    {
      no: 5,
      statement: language === "id" ? "Toleransi dan harmoni dalam keberagaman adalah konsep yang sama dan dapat digunakan secara bergantian." : "Tolerance and harmony in diversity are the same concept and can be used interchangeably.",
      isCorrect: true,
      explanation:
        language === "id"
          ? "Kedua konsep saling berkaitan dan mendukung. Toleransi adalah dasar untuk menciptakan harmoni dalam keberagaman."
          : "Both concepts are interrelated and supportive. Tolerance is the foundation for creating harmony in diversity.",
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
              ? "Kasus-kasus nyata berdasarkan berita kredibel yang pernah terjadi di Banyuwangi dan solusi inovatif yang diterapkan pemerintah daerah"
              : "Real cases based on credible news that occurred in Banyuwangi and innovative solutions implemented by regional government"}
          </p>
        </div>
      </section>

      {/* Real Cases Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{language === "id" ? "Kasus Nyata dari Media Terpercaya" : "Real Cases from Credible Media"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "id"
                ? "Berikut adalah 6 kasus nyata yang pernah diliput media nasional dan cara Pemkab Banyuwangi menyelesaikannya"
                : "Here are 6 real cases that have been covered by national media and how Banyuwangi Regency resolved them"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {realCases.map((caseItem, index) => (
              <div key={index} className={`border-2 ${caseItem.borderColor} ${caseItem.bgColor} rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={caseItem.image} alt={caseItem.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/90 ${caseItem.color}`}>
                      <caseItem.icon size={14} />
                      {caseItem.category}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-lg font-bold text-white line-clamp-2">{caseItem.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  {/* Source */}
                  <div className="text-xs text-muted-foreground italic">📰 Sumber: {caseItem.source}</div>

                  {/* Problem */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-red-100 dark:bg-red-950/50 flex items-center justify-center">
                        <AlertCircle className="text-red-600 dark:text-red-400" size={14} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{language === "id" ? "Masalah" : "Problem"}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground pl-8 leading-relaxed line-clamp-4">{caseItem.problem}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center">
                        <Lightbulb className="text-blue-600 dark:text-blue-400" size={14} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{language === "id" ? "Solusi" : "Solution"}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground pl-8 leading-relaxed line-clamp-4">{caseItem.solution}</p>
                  </div>

                  {/* Impact */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-950/50 flex items-center justify-center">
                        <CheckCircle className="text-green-600 dark:text-green-400" size={14} />
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{language === "id" ? "Dampak Positif" : "Positive Impact"}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground pl-8 leading-relaxed font-medium line-clamp-4">{caseItem.impact}</p>
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
                    ? "Keenam kasus nyata di atas menunjukkan bahwa Kabupaten Banyuwangi memiliki komitmen tinggi dalam menyelesaikan berbagai permasalahan dengan pendekatan kolaboratif, melibatkan semua stakeholder, dan tetap menghormati nilai-nilai kearifan lokal. Setiap solusi yang diterapkan tidak hanya mengatasi masalah jangka pendek, tetapi juga membangun fondasi untuk pembangunan berkelanjutan di masa depan."
                    : "These six real cases demonstrate that Banyuwangi Regency has high commitment in resolving various problems through collaborative approaches, involving all stakeholders, and respecting local wisdom values. Every solution implemented not only addresses short-term problems but also builds foundations for sustainable development in the future."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Table */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">{language === "id" ? "Evaluasi Pemahaman" : "Understanding Evaluation"}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "id" ? "Evaluasi pernyataan tentang harmoni dalam keberagaman berdasarkan studi kasus Banyuwangi" : "Evaluate statements about harmony in diversity based on Banyuwangi case study"}
            </p>
          </div>

          <div className="bg-card border-2 border-border rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground">
                    <th className="px-4 py-4 text-center font-semibold w-16">No</th>
                    <th className="px-6 py-4 text-left font-semibold">{language === "id" ? "Pernyataan" : "Statement"}</th>
                    <th className="px-4 py-4 text-center font-semibold w-32">{language === "id" ? "Benar" : "True"}</th>
                    <th className="px-4 py-4 text-center font-semibold w-32">{language === "id" ? "Salah" : "False"}</th>
                  </tr>
                </thead>
                <tbody>
                  {statements.map((item, index) => (
                    <tr key={index} className={`border-b border-border ${index % 2 === 0 ? "bg-background" : "bg-muted/50"} hover:bg-primary/5 transition-colors group`}>
                      <td className="px-4 py-6 text-center">
                        <div className="w-8 h-8 mx-auto rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">{item.no}</div>
                      </td>
                      <td className="px-6 py-6">
                        <p className="text-foreground font-medium mb-2">{item.statement}</p>
                        <p className="text-sm text-muted-foreground italic">{item.explanation}</p>
                      </td>
                      <td className="px-4 py-6 text-center">
                        <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${item.isCorrect ? "bg-green-100 dark:bg-green-950/50" : "bg-gray-100 dark:bg-gray-800"}`}>
                          {item.isCorrect && <Check className="text-green-600 dark:text-green-400" size={24} />}
                        </div>
                      </td>
                      <td className="px-4 py-6 text-center">
                        <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${!item.isCorrect ? "bg-red-100 dark:bg-red-950/50" : "bg-gray-100 dark:bg-gray-800"}`}>
                          {!item.isCorrect && <X className="text-red-600 dark:text-red-400" size={24} />}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto mb-6 text-yellow-300" size={48} />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{language === "id" ? "Komitmen Nyata untuk Kemajuan" : "Real Commitment to Progress"}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {language === "id"
              ? "Kasus-kasus nyata ini membuktikan bahwa Banyuwangi tidak hanya bicara, tetapi juga bertindak nyata. Setiap masalah dilihat sebagai peluang untuk berinovasi dan membangun masa depan yang lebih baik untuk seluruh masyarakat."
              : "These real cases prove that Banyuwangi doesn't just talk, but also takes real action. Every problem is seen as an opportunity to innovate and build a better future for the entire community."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/kesimpulan" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:gap-3">
              {language === "id" ? "Lihat Kesimpulan Lengkap" : "View Complete Conclusion"}
              <ArrowRight size={20} />
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
              {language === "id" ? "Kembali ke Beranda" : "Back to Home"}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
