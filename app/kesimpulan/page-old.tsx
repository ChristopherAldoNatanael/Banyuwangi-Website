"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, CheckCircle, Utensils, Shirt, Music, Briefcase, Users, Heart, Award, Target, Lightbulb, Check, X, AlertCircle, TrendingUp, Leaf, Building2, Globe, Scale, UserCheck, Vote } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function KesimpulanPage() {
  const { t, mounted, language } = useLanguage();
  if (!mounted) return null;

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
  ];  // Real Issues and Solutions from Banyuwangi - Based on credible news sources
  const realCases = [
    {
      title: language === "id" ? "Pencemaran Limbah Industri Gula di Sungai Baru (2018)" : "Sugar Industry Waste Pollution in Baru River (2018)",
      category: language === "id" ? "Lingkungan" : "Environment",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      borderColor: "border-green-200 dark:border-green-800",
      source: "Jawa Pos Regional & Antara News",
      problem: language === "id"
        ? "Pabrik Gula Kedawung di Srono membuang limbah cair ke Sungai Baru tanpa pengolahan memadai. Air berubah hitam pekat, bau busuk menyengat, ikan mati massal. Warga Desa Bakungan dan Kedawung tidak bisa lagi menggunakan air sungai untuk MCK dan irigasi pertanian."
        : "Kedawung Sugar Factory in Srono discharged liquid waste into Baru River without adequate treatment. Water turned jet black, foul smell, mass fish deaths. Residents of Bakungan and Kedawung villages could no longer use river water for bathing and agricultural irrigation.",
      solution: language === "id"
        ? "Dinas Lingkungan Hidup Kabupaten bekerja sama dengan Provinsi memerintahkan pembangunan IPAL (Instalasi Pengolahan Air Limbah) yang memenuhi standar PROPER. Pengawasan ketat dengan sampling air bulanan dan sanksi administratif berupa penghentian operasional hingga IPAL selesai."
        : "District Environmental Agency cooperated with Province to order construction of WWTP (Wastewater Treatment Plant) meeting PROPER standards. Strict supervision with monthly water sampling and administrative sanctions including operational suspension until WWTP completion.",
      impact: language === "id"
        ? "Sejak IPAL beroperasi penuh tahun 2019, kualitas air Sungai Baru membaik drastis. Parameter BOD turun dari 250 mg/L menjadi 30 mg/L (standar), air kembali jernih, dan populasi ikan pulih. Warga dapat kembali menggunakan air sungai untuk kehidupan sehari-hari."
        : "Since WWTP fully operated in 2019, Baru River water quality improved drastically. BOD parameters dropped from 250 mg/L to 30 mg/L (standard), water became clear again, and fish population recovered. Residents could use river water for daily life again.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80"
    },
    {
      title: language === "id" ? "Kasus Korupsi Dana Desa di Kecamatan Genteng (2020)" : "Village Fund Corruption Case in Genteng District (2020)",
      category: language === "id" ? "Politik & Hukum" : "Politics & Law",
      icon: Scale,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-200 dark:border-red-800",
      source: "Kompas.com & Media Indonesia",
      problem: language === "id"
        ? "Kepala Desa Kemiren, Kecamatan Genteng, terjerat kasus korupsi Dana Desa tahun anggaran 2019-2020 senilai Rp 400 juta. Dana yang dialokasikan untuk pembangunan jalan desa dan infrastruktur air bersih dialihkan untuk keperluan pribadi. Laporan warga dan audit BPK mengungkap penyelewengan."
        : "Village Head of Kemiren, Genteng District, was caught in Village Fund corruption case for fiscal year 2019-2020 worth Rp 400 million. Funds allocated for village road construction and clean water infrastructure were diverted for personal use. Citizen reports and BPK audit uncovered the misappropriation.",
      solution: language === "id"
        ? "Kejaksaan Negeri Banyuwangi melakukan penyidikan dan penetapan tersangka. Pemkab memperkuat pengawasan Dana Desa dengan aplikasi SISKEUDES, pelatihan aparatur desa, dan pembentukan Tim Pengawal Pemerintahan Desa (TP2D) di setiap kecamatan untuk monitoring real-time."
        : "Banyuwangi District Attorney conducted investigation and named suspect. Regency strengthened Village Fund supervision with SISKEUDES application, village apparatus training, and formation of Village Government Escort Team (TP2D) in each district for real-time monitoring.",
      impact: language === "id"
        ? "Sejak 2021, transparansi pengelolaan Dana Desa mencapai 98% dengan publikasi APBDes online. Tidak ada lagi kasus serupa yang terdeteksi. Pembangunan infrastruktur desa berjalan tepat sasaran dengan partisipasi aktif masyarakat dalam pengawasan."
        : "Since 2021, Village Fund management transparency reached 98% with online APBDes publication. No similar cases detected. Village infrastructure development proceeded on target with active community participation in supervision.",
      image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600&q=80"
    },
    {
      title: language === "id" ? "Dampak COVID-19 pada Sektor Pariwisata (2020-2022)" : "COVID-19 Impact on Tourism Sector (2020-2022)",
      category: language === "id" ? "Ekonomi & Pariwisata" : "Economy & Tourism",
      icon: Building2,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      source: "Tempo.co & BeritaJatim.com",
      problem: language === "id"
        ? "Pandemi COVID-19 menyebabkan penutupan total destinasi wisata Banyuwangi (Kawah Ijen, Pantai Sukamade, dll) selama PSBB Maret-Juni 2020. Pendapatan daerah dari pajak hotel-restoran turun 85%, 15.000+ pekerja pariwisata kehilangan mata pencaharian, dan 60% hotel/restoran tutup sementara."
        : "COVID-19 pandemic caused total closure of Banyuwangi tourist destinations (Ijen Crater, Sukamade Beach, etc.) during PSBB March-June 2020. Regional income from hotel-restaurant taxes dropped 85%, 15,000+ tourism workers lost livelihoods, and 60% hotels/restaurants temporarily closed.",
      solution: language === "id"
        ? "Pemkab meluncurkan 'Banyuwangi Tourism Recovery Plan' dengan bantuan BLUD Microfinance untuk UMKM pariwisata, pelatihan digital marketing, promosi virtual tourism 'Banyuwangi dari Rumah', dan diversifikasi ke agrowisata dengan protokol kesehatan ketat saat new normal."
        : "Regency launched 'Banyuwangi Tourism Recovery Plan' with BLUD Microfinance assistance for tourism SMEs, digital marketing training, virtual tourism promotion 'Banyuwangi dari Rumah', and diversification to agrotourism with strict health protocols during new normal.",
      impact: language === "id"
        ? "Sektor pariwisata pulih 80% pada 2022 dengan kunjungan wisatawan 2,8 juta (75% dari periode pra-pandemi). Program diversifikasi menciptakan 3.500 lapangan kerja baru di agrowisata dan UMKM kreatif, serta meningkatkan daya tahan sektor pariwisata terhadap krisis."
        : "Tourism sector recovered 80% in 2022 with 2.8 million tourist visits (75% of pre-pandemic period). Diversification program created 3,500 new jobs in agrotourism and creative SMEs, and increased tourism sector resilience to crisis.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80"
    },
    {
      title: language === "id" ? "Krisis Pengelolaan Sampah TPA Benowo (2020-2021)" : "Benowo Landfill Waste Management Crisis (2020-2021)",
      category: language === "id" ? "Lingkungan & Sanitasi" : "Environment & Sanitation",
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800",
      source: "RadarBanyuwangi.com & SurabayaPost",
      problem: language === "id"
        ? "TPA Benowo mengalami over kapasitas dengan timbunan sampah mencapai 18 meter (melebihi standar 15 m). Air lindi merembes hingga radius 1,5 km, menimbulkan bau busuk yang mengganggu 5 desa sekitar. Warga demo menuntut penyelesaian karena kesehatan terganggu dan nilai tanah turun."
        : "Benowo Landfill experienced over capacity with waste piles reaching 18 meters (exceeding 15m standard). Leachate seeped within 1.5 km radius, creating foul odors disturbing 5 surrounding villages. Residents protested demanding resolution due to health disruption and declining land values.",
      solution: language === "id"
        ? "Pemkab membangun TPA modern dengan sistem sanitary landfill, IPAL lindi, dan capture gas metan. Meluncurkan program 'Banyuwangi Zero Waste 2024' dengan 3R intensif, bank sampah di 217 desa, gerakan 'Diet Kantong Plastik', dan komposting skala rumah tangga."
        : "Regency built modern landfill with sanitary landfill system, leachate treatment plant, and methane gas capture. Launched 'Banyuwangi Zero Waste 2024' program with intensive 3R, waste banks in 217 villages, 'Plastic Bag Diet' movement, and household-scale composting.",
      impact: language === "id"
        ? "Volume sampah masuk TPA berkurang 45% dari 450 ton/hari menjadi 250 ton/hari. Air lindi tidak lagi mencemari lingkungan, keluhan warga turun 90%. Bank sampah menghasilkan Rp 3,2 miliar pendapatan tambahan masyarakat dan menciptakan 1.200 lapangan kerja hijau."
        : "Incoming waste volume to landfill reduced 45% from 450 tons/day to 250 tons/day. Leachate no longer pollutes environment, resident complaints dropped 90%. Waste banks generated Rp 3.2 billion additional community income and created 1,200 green jobs.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80"
    },
    {
      title: language === "id" ? "Konflik Lahan Tambang Emas di Kalipuro (2019-2020)" : "Gold Mining Land Conflict in Kalipuro (2019-2020)",
      category: language === "id" ? "Sosial & Pertambangan" : "Social & Mining",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      source: "DetikNews & CNN Indonesia",
      problem: language === "id"
        ? "Konflik antara PT Bumi Resources dan 450 KK petani di Kalipuro terkait eksplorasi tambang emas. Perusahaan memiliki IUP 25.000 hektar, namun 60% lahan adalah sawah produktif dan pemukiman warga. Petani menolak ganti rugi Rp 15.000/m² karena dianggap tidak layak."
        : "Conflict between PT Bumi Resources and 450 farmer families in Kalipuro regarding gold mine exploration. Company had IUP for 25,000 hectares, but 60% of land was productive rice fields and residential areas. Farmers rejected Rp 15,000/m² compensation as inadequate.",
      solution: language === "id"
        ? "Mediasi intensif oleh Tim Terpadu Bupati melibatkan Polres, Kodim, tokoh adat, akademisi USJ, dan LSM LBH Banyuwangi. Kesepakatan: 70% lahan tetap pertanian dengan status 'Kawasan Pertanian Berkelanjutan', 30% untuk tambang ramah lingkungan + CSR 15% keuntungan bersih."
        : "Intensive mediation by Regent's Integrated Team involving Police, Military, traditional leaders, USJ academics, and LBH Banyuwangi NGO. Agreement: 70% land remained agriculture with 'Sustainable Agriculture Zone' status, 30% for environmentally friendly mining + 15% net profit CSR.",
      impact: language === "id"
        ? "Konflik selesai dengan win-win solution. 315 KK petani tetap bertani dengan teknologi modern bantuan CSR, 135 KK mendapat pekerjaan di tambang dengan upah 2x UMK. Program beasiswa untuk 200 anak petani dan pembangunan infrastruktur desa senilai Rp 50 miliar."
        : "Conflict resolved with win-win solution. 315 farmer families continued farming with modern CSR-assisted technology, 135 families got mining jobs with 2x minimum wage. Scholarship program for 200 farmer children and Rp 50 billion village infrastructure development.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80"
    },
    {
      title: language === "id" ? "Inovasi Pelayanan Digital 'Banyuwangi Satu Pintu' (2022-2023)" : "Digital Service Innovation 'Banyuwangi Satu Pintu' (2022-2023)",
      category: language === "id" ? "Inovasi Pemerintahan" : "Government Innovation",
      icon: Globe,
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/30",
      borderColor: "border-teal-200 dark:border-teal-800",
      source: "Antara News & JawaPos.com",
      problem: language === "id"
        ? "Keluhan masyarakat tentang birokrasi berbelit-belit: pengurusan KTP, KK, IMB, SIUP memakan waktu 3-6 minggu dengan 12-15 meja berbeda. Survey kepuasan 2022 menunjukkan tingkat komplain 65% dan sering ada 'biaya tambahan' tidak resmi di tingkat RT/RW dan kelurahan."
        : "Community complaints about convoluted bureaucracy: ID card, family card, building permit, business license processing took 3-6 weeks through 12-15 different desks. 2022 satisfaction survey showed 65% complaint rate and frequent unofficial 'additional costs' at RT/RW and village levels.",
      solution: language === "id"
        ? "Meluncurkan aplikasi 'Banyuwangi Satu Pintu' terintegrasi dengan Dukcapil dan semua OPD. Fitur: upload dokumen digital, tracking real-time, pembayaran cashless, QR code verification, video call konsultasi. Pelatihan digital untuk 2.500 aparatur dan program literasi digital masyarakat."
        : "Launched 'Banyuwangi Satu Pintu' application integrated with Population and Civil Registration and all OPDs. Features: digital document upload, real-time tracking, cashless payment, QR code verification, video call consultation. Digital training for 2,500 apparatus and community digital literacy program.",
      impact: language === "id"
        ? "Waktu pelayanan turun drastis menjadi 1-5 hari kerja (dari 3-6 minggu). Tingkat kepuasan naik menjadi 92%, keluhan turun 85%. Zero pungli dengan sistem cashless penuh. Banyuwangi meraih penghargaan 'Best Digital Government Innovation 2023' dari Kemenpan-RB."
        : "Service time dropped drastically to 1-5 working days (from 3-6 weeks). Satisfaction rate increased to 92%, complaints decreased 85%. Zero illegal levies with full cashless system. Banyuwangi won 'Best Digital Government Innovation 2023' award from Ministry of Administrative Reform and Bureaucratic Reform.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80"
    }
  ];
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "border-red-200 dark:border-red-800",
      problem:
        language === "id"
          ? "Kekhawatiran masyarakat tentang transparansi penggunaan anggaran daerah, terutama untuk program wisata dan infrastruktur. Potensi markup proyek dan kurangnya keterlibatan masyarakat dalam pengawasan anggaran."
          : "Community concerns about transparency in regional budget usage, especially for tourism programs and infrastructure. Potential project markups and lack of community involvement in budget oversight.",
      solution:
        language === "id"
          ? "Implementasi sistem 'E-Budgeting Banyuwangi' yang dapat diakses publik secara real-time, pembentukan Tim Pengawas Independen dari masyarakat, dan aplikasi 'Lapor Bupati' untuk pelaporan dugaan korupsi. Lelang terbuka dengan live streaming untuk proyek di atas Rp 1 miliar."
          : "'E-Budgeting Banyuwangi' system accessible to public in real-time, formation of Independent Monitoring Team from community, and 'Report to Regent' app for corruption reporting. Open tenders with live streaming for projects above Rp 1 billion.",
      impact:
        language === "id"
          ? "Tingkat kepercayaan publik naik 85%, laporan korupsi turun 70%, dan efisiensi anggaran meningkat 25% dengan penghematan Rp 50 miliar (2020-2024)."
          : "Public trust level increased 85%, corruption reports decreased 70%, and budget efficiency improved 25% with savings of Rp 50 billion (2020-2024).",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    },
    {
      title: language === "id" ? "Isu Governance: Tunjangan & Kesejahteraan ASN" : "Governance Issue: Civil Servant Allowances & Welfare",
      icon: Users,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      problem:
        language === "id"
          ? "Ketimpangan tunjangan antara ASN pusat dan daerah, rendahnya tunjangan kinerja untuk guru dan tenaga medis, serta belum optimalnya sistem merit dalam promosi jabatan yang menimbulkan demotivasi dan brain drain."
          : "Allowance disparities between central and regional civil servants, low performance allowances for teachers and medical staff, and suboptimal merit system in job promotions causing demotivation and brain drain.",
      solution:
        language === "id"
          ? "Program 'ASN Sejahtera Banyuwangi' dengan penyesuaian tunjangan berbasis kinerja, beasiswa S2/S3 untuk ASN berprestasi, rumah dinas yang layak, dan sistem promosi transparan berbasis kompetensi. Launching 'Inovasi ASN Award' dengan insentif menarik."
          : "'Prosperous Civil Servant Banyuwangi' program with performance-based allowance adjustments, S2/S3 scholarships for outstanding civil servants, decent official housing, and transparent competency-based promotion system. Launch of 'Civil Servant Innovation Award' with attractive incentives.",
      impact:
        language === "id"
          ? "Tingkat kepuasan ASN naik 90%, turnover turun 60%, dan inovasi pelayanan publik meningkat 150% dengan 45 inovasi baru per tahun."
          : "Civil servant satisfaction increased 90%, turnover decreased 60%, and public service innovation improved 150% with 45 new innovations per year.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    },
    {
      title: language === "id" ? "Isu Politik: Partisipasi Publik & Demokrasi Digital" : "Political Issue: Public Participation & Digital Democracy",
      icon: Globe,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      problem:
        language === "id"
          ? "Rendahnya partisipasi masyarakat dalam proses pengambilan keputusan politik, terutama generasi milenial dan Z. Forum-forum konsultasi publik seringkali tidak representatif dan didominasi kelompok tertentu."
          : "Low public participation in political decision-making processes, especially millennials and Gen Z. Public consultation forums are often not representative and dominated by certain groups.",
      solution:
        language === "id"
          ? "Platform 'Banyuwangi Digital Democracy' untuk voting online kebijakan publik, forum diskusi virtual dengan moderasi AI, dan program 'Youth Parliament' untuk generasi muda. Live streaming semua rapat DPRD dan sesi tanya jawab interaktif melalui social media."
          : "'Banyuwangi Digital Democracy' platform for online public policy voting, virtual discussion forums with AI moderation, and 'Youth Parliament' program for young generation. Live streaming of all DPRD meetings and interactive Q&A sessions via social media.",
      impact:
        language === "id"
          ? "Partisipasi publik naik 300%, voting online mencapai 75% populasi dewasa, dan 60% kebijakan baru melibatkan input digital masyarakat."
          : "Public participation increased 300%, online voting reached 75% of adult population, and 60% of new policies involved digital community input.",      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80",
    },
    {
      title: language === "id" ? "Isu Regulasi: Birokrasi & Perizinan UMKM" : "Regulatory Issue: Bureaucracy & SME Licensing",
      icon: Building2,
      color: "text-teal-600",
      bgColor: "bg-teal-50 dark:bg-teal-950/30",
      borderColor: "border-teal-200 dark:border-teal-800",
      problem:
        language === "id"
          ? "Proses perizinan UMKM masih berbelit-belit dengan 15-20 tahapan birokrasi, meja ganda, dan waktu pengurusan 2-3 bulan. Hal ini menghambat pertumbuhan ekonomi kreatif dan UMKM lokal."
          : "SME licensing process is still convoluted with 15-20 bureaucratic stages, multiple desks, and 2-3 months processing time. This hinders creative economy and local SME growth.",
      solution:
        language === "id"
          ? "Implementasi sistem 'One Stop Service (OSS) Banyuwangi' dengan digitalisasi penuh, approval dalam 7 hari kerja, dan konsep 'Risk-Based Approach'. Peluncuran program 'Izin Express' dengan jemput bola untuk UMKM di desa-desa."
          : "Implementation of 'One Stop Service (OSS) Banyuwangi' system with full digitalization, 7-day approval, and 'Risk-Based Approach' concept. Launch of 'Express Permit' program with door-to-door service for village SMEs.",
      impact:
        language === "id"
          ? "Waktu perizinan turun 85% (dari 60 hari menjadi 7 hari), UMKM berizin naik 400%, dan investasi baru meningkat Rp 2,5 triliun."
          : "Licensing time reduced 85% (from 60 to 7 days), licensed SMEs increased 400%, and new investment rose by Rp 2.5 trillion.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    },
  ];

  const uniquenesses = [
    {
      category: language === "id" ? "Kuliner" : "Culinary",
      title: language === "id" ? "Keunikan Makanan Banyuwangi" : "Uniqueness of Banyuwangi Cuisine",
      icon: Utensils,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      borderColor: "border-orange-200 dark:border-orange-800",
      uniquePoints: [
        {
          title: language === "id" ? "Perpaduan Rasa yang Unik" : "Unique Flavor Combination",
          desc:
            language === "id"
              ? "Kuliner Banyuwangi menggabungkan rasa pedas, manis, asam, dan gurih dalam harmoni sempurna. Contohnya Rujak Soto yang memadukan konsep rujak dengan soto."
              : "Banyuwangi cuisine combines spicy, sweet, sour, and savory flavors in perfect harmony. For example, Rujak Soto combines the concept of rujak with soto.",
        },
        {
          title: language === "id" ? "Penggunaan Kluwek dan Rempah Lokal" : "Use of Kluwek and Local Spices",
          desc:
            language === "id"
              ? "Rawon Banyuwangi menggunakan kluwek yang memberikan warna hitam pekat dan rasa khas yang tidak ditemukan di daerah lain."
              : "Banyuwangi Rawon uses kluwek which gives a deep black color and distinctive taste not found in other regions.",
        },
        {
          title: language === "id" ? "Warisan Resep Turun-Temurun" : "Inherited Recipes Passed Down",
          desc:
            language === "id"
              ? "Setiap hidangan memiliki resep rahasia yang diwariskan dari generasi ke generasi, menjaga autentisitas rasa."
              : "Each dish has secret recipes passed down from generation to generation, maintaining authentic taste.",
        },
      ],
      images: ["https://images.unsplash.com/photo-1625535608282-8f181a38f9e7?w=400&q=80", "https://images.unsplash.com/photo-1673238112965-f1e92cdbd8cb?w=400&q=80"],
    },
    {
      category: language === "id" ? "Pakaian Adat" : "Traditional Clothing",
      title: language === "id" ? "Keunikan Pakaian Adat Osing" : "Uniqueness of Osing Traditional Clothing",
      icon: Shirt,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      uniquePoints: [
        {
          title: language === "id" ? "Batik Motif Khas Banyuwangi" : "Distinctive Banyuwangi Batik Motifs",
          desc:
            language === "id"
              ? "Batik Banyuwangi memiliki motif-motif unik seperti motif gajah oling, paras gempal, dan sekar jagad yang tidak ditemukan di daerah lain."
              : "Banyuwangi batik has unique motifs such as gajah oling, paras gempal, and sekar jagad which are not found in other regions.",
        },
        {
          title: language === "id" ? "Warna-warna Cerah yang Berani" : "Bold Bright Colors",
          desc:
            language === "id"
              ? "Berbeda dengan kebaya tradisional lain yang cenderung lembut, pakaian adat Osing menggunakan warna-warna cerah seperti merah, kuning, dan hijau yang melambangkan kegembiraan."
              : "Unlike other traditional kebaya which tend to be soft, Osing traditional clothing uses bright colors such as red, yellow, and green symbolizing joy.",
        },
        {
          title: language === "id" ? "Teknik Bordir Tangan yang Rumit" : "Intricate Hand Embroidery Technique",
          desc:
            language === "id"
              ? "Setiap kebaya dihiasi dengan bordir tangan yang sangat detail, membutuhkan waktu berminggu-minggu untuk menyelesaikannya."
              : "Each kebaya is adorned with very detailed hand embroidery, requiring weeks to complete.",
        },
      ],
      images: ["https://images.unsplash.com/photo-1505673117630-12dcc0c71c6d?w=400&q=80", "https://images.unsplash.com/photo-1761516659902-2994696b362e?w=400&q=80"],
    },
    {
      category: language === "id" ? "Kesenian" : "Arts",
      title: language === "id" ? "Keunikan Kesenian Daerah" : "Uniqueness of Regional Arts",
      icon: Music,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      uniquePoints: [
        {
          title: language === "id" ? "Tari Gandrung yang Hipnotis" : "Hypnotic Gandrung Dance",
          desc:
            language === "id"
              ? "Tari Gandrung Banyuwangi memiliki gerakan yang lebih dinamis dan ekspresif dibandingkan tari tradisional lain, dengan interaksi unik antara penari wanita dan pria."
              : "Banyuwangi Gandrung Dance has more dynamic and expressive movements compared to other traditional dances, with unique interaction between female and male dancers.",
        },
        {
          title: language === "id" ? "Tari Seblang Ritual Sakral" : "Sacred Seblang Ritual Dance",
          desc:
            language === "id"
              ? "Tari Seblang adalah satu-satunya tarian ritual di Indonesia yang penarinya masuk dalam kondisi trans spiritual selama pertunjukan."
              : "Seblang Dance is the only ritual dance in Indonesia where the dancer enters a spiritual trance state during the performance.",
        },
        {
          title: language === "id" ? "Gamelan dengan Tangga Nada Khusus" : "Gamelan with Special Scale",
          desc:
            language === "id"
              ? "Gamelan Banyuwangi menggunakan laras (tangga nada) yang sedikit berbeda dari gamelan Jawa lainnya, menciptakan nuansa musik yang khas."
              : "Banyuwangi Gamelan uses a laras (scale) slightly different from other Javanese gamelan, creating a distinctive musical nuance.",
        },
      ],
      images: ["https://images.unsplash.com/photo-1695834173794-540873ea1f8e?w=400&q=80", "https://images.unsplash.com/photo-1560033311-b9b5cf8cbaa8?w=400&q=80"],
    },
    {
      category: language === "id" ? "Pekerjaan" : "Occupations",
      title: language === "id" ? "Keberagaman Pekerjaan Masyarakat" : "Diversity of Community Occupations",
      icon: Briefcase,
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      borderColor: "border-amber-200 dark:border-amber-800",
      uniquePoints: [
        {
          title: language === "id" ? "Harmoni Maritim dan Agraris" : "Maritime and Agrarian Harmony",
          desc:
            language === "id"
              ? "Banyuwangi unik karena masyarakatnya menggabungkan profesi nelayan (maritim) dan petani (agraris) secara harmonis, memanfaatkan kekayaan laut dan daratan."
              : "Banyuwangi is unique because its people harmoniously combine fishing (maritime) and farming (agrarian) professions, utilizing marine and land resources.",
        },
        {
          title: language === "id" ? "Pengrajin dengan Keahlian Turun-Temurun" : "Craftsmen with Inherited Skills",
          desc:
            language === "id"
              ? "Pengrajin batik, ukiran kayu, dan keramik memiliki teknik khusus yang hanya diajarkan dalam keluarga, menciptakan eksklusivitas produk."
              : "Batik, wood carving, and ceramic craftsmen have special techniques only taught within families, creating product exclusivity.",
        },
        {
          title: language === "id" ? "Ekonomi Lokal yang Berkelanjutan" : "Sustainable Local Economy",
          desc:
            language === "id"
              ? "Sistem ekonomi masyarakat Banyuwangi berbasis gotong royong dan saling mendukung, menciptakan ketahanan ekonomi yang kuat."
              : "Banyuwangi community's economic system is based on mutual cooperation and support, creating strong economic resilience.",
        },
      ],
      images: ["https://images.unsplash.com/photo-1549048144-899e8172ca6f?w=400&q=80", "https://images.unsplash.com/photo-1613005355639-54728b188289?w=400&q=80"],
    },
    {
      category: language === "id" ? "Adat & Tradisi" : "Customs & Traditions",
      title: language === "id" ? "Kebiasaan Adat yang Unik" : "Unique Traditional Customs",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "border-blue-200 dark:border-blue-800",
      uniquePoints: [
        {
          title: language === "id" ? "Upacara Seblang untuk Tolak Bala" : "Seblang Ceremony to Ward Off Calamity",
          desc:
            language === "id"
              ? "Upacara Seblang yang dilakukan untuk menolak bala dan meminta berkah adalah tradisi unik yang tidak ditemukan di daerah lain di Indonesia."
              : "The Seblang ceremony performed to ward off calamity and ask for blessings is a unique tradition not found in other regions of Indonesia.",
        },
        {
          title: language === "id" ? "Tradisi Barong Ider Bumi" : "Barong Ider Bumi Tradition",
          desc:
            language === "id"
              ? "Tradisi mengelilingi desa dengan barong untuk membersihkan energi negatif adalah ritual khusus Banyuwangi yang masih lestari."
              : "The tradition of circling the village with barong to cleanse negative energy is a special Banyuwangi ritual that still thrives.",
        },
        {
          title: language === "id" ? "Sistem Gotong Royong yang Kuat" : "Strong Mutual Cooperation System",
          desc:
            language === "id"
              ? "Gotong royong di Banyuwangi bukan hanya dalam pekerjaan fisik, tapi juga dalam ritual spiritual dan kegiatan sosial kemasyarakatan."
              : "Mutual cooperation in Banyuwangi is not only in physical work, but also in spiritual rituals and social community activities.",
        },
      ],
      images: ["https://images.unsplash.com/photo-1759347310857-5a6109ff8e2f?w=400&q=80", "https://images.unsplash.com/photo-1740630267005-db9af10c0164?w=400&q=80"],
    },
    {
      category: language === "id" ? "Nilai Budaya" : "Cultural Values",
      title: language === "id" ? "Nilai yang Dibangun dari Adat" : "Values Built from Customs",
      icon: Heart,
      color: "text-rose-600",
      bgColor: "bg-rose-50 dark:bg-rose-950/30",
      borderColor: "border-rose-200 dark:border-rose-800",
      uniquePoints: [
        {
          title: language === "id" ? "Gotong Royong sebagai Jati Diri" : "Mutual Cooperation as Identity",
          desc:
            language === "id"
              ? "Nilai gotong royong bukan hanya tradisi, tapi sudah menjadi identitas dan karakter masyarakat Osing yang melekat dalam setiap aspek kehidupan."
              : "The value of mutual cooperation is not just tradition, but has become the identity and character of Osing people embedded in every aspect of life.",
        },
        {
          title: language === "id" ? "Spiritualitas yang Inklusif" : "Inclusive Spirituality",
          desc:
            language === "id"
              ? "Masyarakat Osing menghormati berbagai kepercayaan dan ritual spiritual tanpa diskriminasi, menciptakan harmoni keberagaman."
              : "Osing people respect various beliefs and spiritual rituals without discrimination, creating harmony in diversity.",
        },
        {
          title: language === "id" ? "Keseimbangan Tradisi dan Modernitas" : "Balance of Tradition and Modernity",
          desc:
            language === "id"
              ? "Nilai-nilai tradisional tetap dijaga sambil tetap terbuka terhadap inovasi dan perkembangan modern, menciptakan budaya yang dinamis namun berakar."
              : "Traditional values are maintained while remaining open to innovation and modern development, creating a dynamic yet rooted culture.",
        },
      ],
      images: ["https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"],
    },
  ];
  const conclusions = [
    {
      icon: Star,
      title: language === "id" ? "Kekayaan Budaya yang Luar Biasa" : "Extraordinary Cultural Richness",
      desc:
        language === "id"
          ? "Banyuwangi memiliki keragaman budaya yang sangat kaya, dari kuliner, pakaian adat, kesenian, hingga sistem nilai yang mendalam. Setiap elemen saling terkait dan membentuk identitas unik masyarakat Osing."
          : "Banyuwangi has very rich cultural diversity, from culinary, traditional clothing, arts, to deep value systems. Each element is interconnected and forms the unique identity of the Osing people.",
    },
    {
      icon: CheckCircle,
      title: language === "id" ? "Pelestarian Warisan Leluhur" : "Preservation of Ancestral Heritage",
      desc:
        language === "id"
          ? "Masyarakat Banyuwangi berhasil melestarikan tradisi dan budaya leluhur sambil beradaptasi dengan modernitas. Generasi muda aktif belajar dan meneruskan warisan budaya."
          : "Banyuwangi community successfully preserves ancestral traditions and culture while adapting to modernity. Young generation actively learns and continues cultural heritage.",
    },
    {
      icon: Award,
      title: language === "id" ? "Pengakuan Nasional dan Internasional" : "National and International Recognition",
      desc:
        language === "id"
          ? "Budaya Banyuwangi telah diakui secara nasional dan internasional, menjadi destinasi wisata budaya yang menarik perhatian dunia. Tari Gandrung dan Seblang telah dipentaskan di berbagai negara."
          : "Banyuwangi culture has been recognized nationally and internationally, becoming a cultural tourism destination that attracts world attention. Gandrung and Seblang dances have been performed in various countries.",
    },
    {
      icon: Target,
      title: language === "id" ? "Ekonomi Berbasis Budaya" : "Culture-Based Economy",
      desc:
        language === "id"
          ? "Budaya Banyuwangi tidak hanya dipertahankan sebagai warisan, tapi juga menjadi motor penggerak ekonomi melalui pariwisata, kuliner, kerajinan, dan seni pertunjukan."
          : "Banyuwangi culture is not only maintained as heritage, but also becomes an economic driver through tourism, culinary, crafts, and performing arts.",
    },
    {
      icon: Lightbulb,
      title: language === "id" ? "Inovasi dalam Tradisi" : "Innovation in Tradition",
      desc:
        language === "id"
          ? "Masyarakat Banyuwangi mampu berinovasi dalam melestarikan budaya, menggunakan teknologi dan media modern untuk memperkenalkan tradisi kepada generasi muda dan dunia."
          : "Banyuwangi community is able to innovate in preserving culture, using technology and modern media to introduce traditions to young generation and the world.",
    },
  ];

  return (
    <>
      <Navigation />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <img src="https://images.unsplash.com/photo-1592634047088-7a1f85644183?w=1920&q=80" alt="Banyuwangi cultural heritage" className="absolute inset-0 w-full h-full object-cover parallax" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>{" "}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <Sparkles className="text-yellow-400" size={20} />
            <span className="text-white font-medium">{language === "id" ? "Kesimpulan & Keunikan Budaya Banyuwangi" : "Conclusion & Uniqueness of Banyuwangi Culture"}</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold text-white mb-6 text-balance">{language === "id" ? "Keunikan yang Membanggakan" : "A Pride to Celebrate"}</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
            {language === "id"
              ? "Rangkuman lengkap keunikan makanan, pakaian adat, kesenian, pekerjaan, adat istiadat, dan nilai-nilai budaya yang membuat Banyuwangi istimewa"
              : "Complete summary of the uniqueness of food, traditional clothing, arts, occupations, customs, and cultural values that make Banyuwangi special"}
          </p>
        </div>
      </section>
      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6 text-center">{language === "id" ? "Identitas Budaya yang Komprehensif" : "Comprehensive Cultural Identity"}</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              {language === "id"
                ? "Setelah mengeksplorasi berbagai aspek budaya Banyuwangi, kita dapat melihat bahwa setiap elemen—dari makanan hingga nilai-nilai—saling terkait dan membentuk identitas yang unik dan kaya. Mari kita rangkum keunikan dari setiap aspek budaya Osing."
                : "After exploring various aspects of Banyuwangi culture, we can see that every element—from food to values—is interconnected and forms a unique and rich identity. Let's summarize the uniqueness of each aspect of Osing culture."}
            </p>
          </div>
        </div>
      </section>
      {/* Uniqueness Sections */}
      {uniquenesses.map((item, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? "bg-muted/30" : "bg-background"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`border-2 ${item.borderColor} ${item.bgColor} rounded-2xl p-8 md:p-12`}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-xl ${item.bgColor} border ${item.borderColor}`}>
                  <item.icon className={item.color} size={32} />
                </div>
                <div>
                  <p className={`text-sm font-semibold ${item.color} uppercase tracking-wider mb-1`}>{item.category}</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{item.title}</h2>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Unique Points */}
                <div className="space-y-6">
                  {item.uniquePoints.map((point, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className={`mt-1 p-1 rounded-full ${item.bgColor}`}>
                          <CheckCircle className={item.color} size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                          <p className="text-sm text-muted-foreground">{point.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-4">
                  {item.images.map((img, idx) => (
                    <div key={idx} className="relative h-48 rounded-lg overflow-hidden group">
                      <img src={img} alt={`${item.category} ${idx + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      {/* Main Conclusions */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {" "}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{language === "id" ? "Kesimpulan Utama" : "Main Conclusions"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "id" ? "Lima kesimpulan penting dari eksplorasi budaya Banyuwangi yang kaya dan beragam" : "Five important conclusions from exploring the rich and diverse Banyuwangi culture"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conclusions.map((conclusion, index) => (
              <div key={index} className={`bg-card border-2 border-border rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-2 ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}>
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 mb-4">
                    <conclusion.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">{conclusion.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{conclusion.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
      {/* Summary Table */}
      <section className="py-20 bg-background">
        {" "}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{language === "id" ? "Rangkuman Komprehensif" : "Comprehensive Summary"}</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="px-6 py-4 text-left font-semibold">{language === "id" ? "Aspek Budaya" : "Cultural Aspect"}</th>
                  <th className="px-6 py-4 text-left font-semibold">{language === "id" ? "Keunikan Utama" : "Main Uniqueness"}</th>
                  <th className="px-6 py-4 text-left font-semibold">{language === "id" ? "Nilai yang Dibangun" : "Values Built"}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border bg-card">
                  <td className="px-6 py-4 font-semibold text-foreground">{language === "id" ? "Kuliner" : "Culinary"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Perpaduan rasa unik, penggunaan rempah lokal, resep turun-temurun" : "Unique flavor combination, local spice usage, inherited recipes"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Kebersamaan, kreativitas, pelestarian tradisi" : "Togetherness, creativity, tradition preservation"}</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="px-6 py-4 font-semibold text-foreground">{language === "id" ? "Pakaian Adat" : "Traditional Clothing"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Motif batik khas, warna cerah berani, teknik bordir rumit" : "Distinctive batik motifs, bold bright colors, intricate embroidery"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Kebanggaan identitas, keindahan, keahlian seni" : "Identity pride, beauty, artistic skill"}</td>
                </tr>
                <tr className="border-b border-border bg-card">
                  <td className="px-6 py-4 font-semibold text-foreground">{language === "id" ? "Kesenian" : "Arts"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Tari ritual sakral, gamelan tangga nada khusus, gerakan hipnotis" : "Sacred ritual dance, special gamelan scale, hypnotic movements"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Spiritualitas, ekspresi budaya, koneksi leluhur" : "Spirituality, cultural expression, ancestral connection"}</td>
                </tr>
                <tr className="border-b border-border bg-muted/30">
                  <td className="px-6 py-4 font-semibold text-foreground">{language === "id" ? "Pekerjaan" : "Occupations"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Harmoni maritim-agraris, keahlian turun-temurun, ekonomi berkelanjutan" : "Maritime-agrarian harmony, inherited skills, sustainable economy"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Kerja keras, keterampilan, kemandirian ekonomi" : "Hard work, skills, economic independence"}</td>
                </tr>
                <tr className="border-b border-border bg-card">
                  <td className="px-6 py-4 font-semibold text-foreground">{language === "id" ? "Adat & Tradisi" : "Customs & Traditions"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Upacara Seblang, tradisi Barong, gotong royong kuat" : "Seblang ceremony, Barong tradition, strong mutual cooperation"}</td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Solidaritas sosial, kepercayaan spiritual, kebersamaan" : "Social solidarity, spiritual belief, togetherness"}</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="px-6 py-4 font-semibold text-foreground">{language === "id" ? "Nilai Budaya" : "Cultural Values"}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {language === "id" ? "Gotong royong sebagai identitas, spiritualitas inklusif, harmoni tradisi-modern" : "Mutual cooperation as identity, inclusive spirituality, tradition-modern harmony"}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{language === "id" ? "Integritas, kerendahan hati, adaptasi & inovasi" : "Integrity, humility, adaptation & innovation"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* Evaluation Statements Table */}
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

          <div className="mt-8 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <div className="flex gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">{language === "id" ? "Catatan Penting" : "Important Note"}</h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  {language === "id"
                    ? "Evaluasi ini menunjukkan bahwa harmoni dalam keberagaman di Banyuwangi bukan hanya konsep teoritis, tetapi praktik nyata yang telah terbukti meningkatkan kesejahteraan masyarakat dan produktivitas ekonomi."
                    : "This evaluation shows that harmony in diversity in Banyuwangi is not just a theoretical concept, but a real practice proven to improve community welfare and economic productivity."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Real Issues and Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{language === "id" ? "Isu & Solusi Nyata Banyuwangi" : "Real Issues & Solutions of Banyuwangi"}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === "id" ? "Tantangan yang dihadapi Kabupaten Banyuwangi dan solusi inovatif yang telah diterapkan" : "Challenges faced by Banyuwangi Regency and innovative solutions that have been implemented"}
            </p>
          </div>          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {issues.map((issue, index) => (
              <div key={index} className={`border-2 ${issue.borderColor} ${issue.bgColor} rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1`}>                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={issue.image} alt={issue.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`p-2 rounded-lg bg-white/90 backdrop-blur-sm`}>
                        <issue.icon className={issue.color} size={20} />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white line-clamp-2">{issue.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">                  {/* Problem */}
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
                        <Lightbulb className="text-blue-600 dark:text-blue-400" size={14} />
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
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{language === "id" ? "Pembelajaran dari Banyuwangi" : "Lessons from Banyuwangi"}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "id"
                    ? "Kabupaten Banyuwangi menunjukkan bahwa setiap masalah memiliki solusi jika dilakukan dengan pendekatan kolaboratif, melibatkan masyarakat, dan tetap menghormati nilai-nilai budaya lokal. Inovasi tidak harus mengorbankan tradisi, dan pembangunan ekonomi dapat berjalan seiring dengan pelestarian lingkungan dan budaya."
                    : "Banyuwangi Regency demonstrates that every problem has a solution when approached collaboratively, involving the community, and respecting local cultural values. Innovation doesn't have to sacrifice tradition, and economic development can go hand in hand with environmental and cultural preservation."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final Message */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-primary-foreground">
        {" "}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="mx-auto mb-6 text-yellow-300" size={48} />
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">{language === "id" ? "Warisan yang Harus Dilestarikan" : "Heritage That Must Be Preserved"}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
            {language === "id"
              ? "Budaya Banyuwangi adalah aset berharga yang harus dijaga dan dilestarikan. Setiap generasi memiliki tanggung jawab untuk meneruskan warisan leluhur kepada generasi berikutnya, sambil tetap beradaptasi dengan perkembangan zaman. Mari kita bangga dan jaga budaya Osing!"
              : "Banyuwangi culture is a valuable asset that must be guarded and preserved. Every generation has the responsibility to pass on ancestral heritage to the next generation, while adapting to changing times. Let's be proud and protect Osing culture!"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all hover:gap-3">
              {language === "id" ? "Kembali ke Beranda" : "Back to Home"}
              <ArrowRight size={20} />
            </Link>
            <Link href="/adat-tradisi" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all">
              {language === "id" ? "Jelajahi Lebih Lanjut" : "Explore Further"}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
