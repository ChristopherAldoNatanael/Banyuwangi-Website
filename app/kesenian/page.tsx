"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Music, Users, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function KesenianPage() {
  const { t, mounted, language } = useLanguage();

  if (!mounted) return null;

  const arts = [
    {
      name: "Tari Gandrung",
      description: "Tari Gandrung adalah tari tradisional Banyuwangi yang paling terkenal. Penari wanita menari dengan gerakan yang anggun sambil memegang kipas, diikuti oleh penari pria yang menari di depannya.",
      history: "Tari Gandrung berasal dari tradisi penyambutan tamu kehormatan dan telah berkembang menjadi simbol budaya Banyuwangi yang diakui secara internasional.",
      characteristics: ["Gerakan tubuh yang lembut dan anggun", "Kostum tradisional yang berwarna cerah", "Musik gamelan yang merdu", "Interaksi antara penari pria dan wanita", "Makna spiritual dan sosial yang mendalam"],
      image:
        "https://images.unsplash.com/photo-1695834173794-540873ea1f8e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHx0cmFkaXRpb25hbCUyMGRhbmNlJTIwZmVtYWxlJTIwZGFuY2VyJTIwZmFuJTIwZGFuY2UlMjBjb2xvcmZ1bCUyMGNvc3R1bWV8ZW58MHwxfHx8MTc2MTgyMjQ1M3ww&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Tari Seblang",
      description: "Tari Seblang adalah tari ritual yang sakral dan penuh makna spiritual. Penari perempuan menari dengan gerakan yang hipnotis sambil membawa sesaji untuk upacara keagamaan.",
      history: "Tari Seblang berasal dari kepercayaan animisme masyarakat Osing dan masih dipraktikkan dalam upacara adat untuk memohon berkah dan perlindungan dari roh-roh leluhur.",
      characteristics: ["Gerakan yang hipnotis dan spiritual", "Kostum putih dan emas yang elegan", "Musik tradisional yang menenangkan", "Makna ritual dan keagamaan", "Dilakukan oleh perempuan pilihan"],
      image:
        "https://images.unsplash.com/photo-1560033311-b9b5cf8cbaa8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxyaXR1YWwlMjBkYW5jZSUyMHNwaXJpdHVhbCUyMGRhbmNlJTIwdHJhZGl0aW9uYWwlMjBjZXJlbW9ueSUyMHdoaXRlJTIwY29zdHVtZXxlbnwwfDF8fHdoaXRlfDE3NjE4MjI0NTN8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Tari Topeng",
      description: "Tari Topeng adalah pertunjukan teater tradisional dengan penari yang mengenakan topeng kayu yang indah. Setiap topeng mewakili karakter yang berbeda dengan cerita yang menarik.",
      history: "Tari Topeng memiliki akar yang dalam dalam budaya Jawa dan Banyuwangi, sering digunakan untuk menceritakan kisah-kisah legendaris dan nilai-nilai moral.",
      characteristics: ["Topeng kayu yang diukir dengan detail", "Kostum tradisional yang berwarna-warni", "Gerakan yang ekspresif dan dramatis", "Cerita yang penuh makna", "Musik gamelan yang dinamis"],
      image:
        "https://images.unsplash.com/photo-1708264956763-8a1673ba9b4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxMHx8bWFzayUyMGRhbmNlJTIwd29vZGVuJTIwbWFzayUyMHRyYWRpdGlvbmFsJTIwdGhlYXRlciUyMGN1bHR1cmFsJTIwcGVyZm9ybWFuY2V8ZW58MHwyfHx8MTc2MTgyMjQ1NHww&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Musik Gamelan Banyuwangi",
      description: "Gamelan Banyuwangi adalah orkestra tradisional yang terdiri dari berbagai alat musik pukul. Suara yang dihasilkan menciptakan harmoni yang indah dan menenangkan.",
      history: "Gamelan telah menjadi bagian integral dari budaya Jawa selama berabad-abad dan terus berkembang dengan inovasi lokal yang unik di Banyuwangi.",
      characteristics: ["Alat musik pukul tradisional", "Harmoni yang kompleks dan indah", "Ritme yang konsisten dan menenangkan", "Digunakan dalam berbagai acara budaya", "Memerlukan keahlian dan latihan bertahun-tahun"],
      image:
        "https://images.unsplash.com/photo-1597235506549-5392d2b7559a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHxtdXNpY2FsJTIwaW5zdHJ1bWVudHMlMjBwZXJjdXNzaW9uJTIwdHJhZGl0aW9uYWwlMjBtdXNpY3xlbnwwfDB8fHwxNzYxODIzODUxfDA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Wayang Kulit",
      description: "Wayang Kulit adalah pertunjukan boneka bayangan yang menceritakan kisah-kisah dari epos Ramayana dan Mahabharata. Dalang yang terampil menggerakkan boneka di belakang layar putih yang diterangi.",
      history: "Wayang Kulit adalah seni pertunjukan tertua di Indonesia dan masih menjadi bagian penting dari budaya Banyuwangi, sering ditampilkan dalam acara-acara khusus.",
      characteristics: ["Boneka kulit yang diukir dengan detail", "Cerita yang mendalam dan bermakna", "Musik gamelan yang mengiringi", "Pertunjukan malam yang dramatis", "Dalang yang ahli dan berpengalaman"],
      image:
        "https://images.unsplash.com/photo-1758186175183-eb662b44643d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxzaGFkb3clMjBwdXBwZXQlMjBwdXBwZXQlMjB0cmFkaXRpb25hbCUyMHRoZWF0ZXJ8ZW58MHwxfHx8MTc2MTgyMzg1MXww&ixlib=rb-4.1.0&q=85",
    },
    {
      name: "Seni Batik Tradisional",
      description: "Seni Batik adalah teknik pewarnaan kain yang menggunakan lilin untuk menciptakan pola yang indah. Setiap motif batik memiliki makna dan cerita tersendiri.",
      history: "Batik adalah warisan budaya UNESCO dan telah dipraktikkan di Banyuwangi selama berabad-abad dengan motif-motif unik yang mencerminkan identitas lokal.",
      characteristics: ["Teknik pewarnaan yang rumit", "Motif yang bermakna dan indah", "Warna-warna alami yang tahan lama", "Proses yang memerlukan kesabaran", "Setiap piece adalah karya seni unik"],
      image: "https://images.unsplash.com/photo-1759738096144-b43206226765?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHx0ZXh0aWxlJTIwY3JhZnQlMjBhcnRpc2FuJTIwaGFuZHdvcmt8ZW58MHwwfHx8MTc2MTgyMzg1Mnww&ixlib=rb-4.1.0&q=85",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1709094979090-bc35418ab53b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxkYW5jZSUyMHBlcmZvcm1hbmNlJTIwc3RhZ2UlMjB0cmFkaXRpb25hbCUyMGFydHMlMjBjdWx0dXJhbCUyMHNob3d8ZW58MHwwfHx8MTc2MTgyMjQ0N3ww&ixlib=rb-4.1.0&q=85"
          alt="Indonesian traditional arts performance - Muhammad Adin Samudro on Unsplash"
          className="absolute inset-0 w-full h-full object-cover parallax"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">{t.artsPageTitle}</h1>
          <p className="text-xl text-white/90 mb-6 text-balance">{t.artsPageDesc}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{t.artsHeritage}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t.artsHeritageDesc}</p>
            <p className="text-lg text-muted-foreground">{t.artsHeritageDesc2}</p>
          </div>
        </div>
      </section>

      {/* Arts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.artsCollection}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {arts.map((art, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center overflow-hidden">
                  <img src={art.image || "/placeholder.svg"} alt={art.name} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{art.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{art.description}</p>

                  {/* History */}
                  <div className="mb-4 pb-4 border-b border-border">
                    <p className="text-xs font-semibold text-foreground mb-1">Sejarah:</p>
                    <p className="text-xs text-muted-foreground">{art.history}</p>
                  </div>

                  {/* Characteristics */}
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Karakteristik:</p>
                    <ul className="space-y-1">
                      {art.characteristics.slice(0, 3).map((char, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-secondary mt-0.5">•</span>
                          <span>{char}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunikan Kesenian Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-violet-50 dark:from-purple-950/30 dark:via-pink-950/30 dark:to-violet-950/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              {language === "id" ? "Keunikan Kesenian Banyuwangi" : "Uniqueness of Banyuwangi Arts"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "id"
                ? "Apa yang membuat kesenian Banyuwangi begitu istimewa dan berbeda dari seni tradisional daerah lain?"
                : "What makes Banyuwangi arts so special and different from other regional traditional arts?"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                <Music className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Tari Gandrung yang Hipnotis" : "Hypnotic Gandrung Dance"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Tari Gandrung Banyuwangi memiliki gerakan yang lebih dinamis dan ekspresif dibandingkan tari tradisional lain. Interaksi unik antara penari wanita (gandrung) dan penari pria (pengibing) menciptakan pertunjukan yang energik dan memikat, dengan improvisasi yang memperlihatkan keahlian tinggi."
                  : "Banyuwangi Gandrung Dance has more dynamic and expressive movements compared to other traditional dances. The unique interaction between female dancers (gandrung) and male dancers (pengibing) creates an energetic and captivating performance, with improvisation demonstrating high skill."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-pink-200 dark:border-pink-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Tari Seblang Ritual Sakral" : "Sacred Seblang Ritual Dance"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Tari Seblang adalah satu-satunya tarian ritual di Indonesia yang penarinya masuk dalam kondisi trans spiritual selama pertunjukan. Penari dipilih secara spiritual dan dipercaya menjadi medium antara dunia manusia dan roh leluhur, menciptakan pengalaman yang sangat sakral dan mendalam."
                  : "Seblang Dance is the only ritual dance in Indonesia where the dancer enters a spiritual trance state during the performance. Dancers are spiritually chosen and believed to be a medium between the human world and ancestral spirits, creating a very sacred and profound experience."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-violet-200 dark:border-violet-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {language === "id" ? "Gamelan Tangga Nada Khusus" : "Gamelan with Special Scale"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Gamelan Banyuwangi menggunakan laras (tangga nada) yang sedikit berbeda dari gamelan Jawa tengah atau timur lainnya. Kombinasi instrumen dan teknik permainan yang khas menciptakan nuansa musik yang lebih meriah dan bersemangat, cocok untuk tarian dinamis seperti Gandrung."
                  : "Banyuwangi Gamelan uses a laras (scale) slightly different from other Central or East Javanese gamelan. The distinctive combination of instruments and playing techniques creates a more festive and spirited musical nuance, suitable for dynamic dances like Gandrung."}
              </p>
            </div>
          </div>

          {/* Additional Uniqueness */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-violet-500/10 border-2 border-purple-300 dark:border-purple-700 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {language === "id" ? "Wayang Kulit dengan Cerita Lokal" : "Shadow Puppets with Local Stories"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "id"
                  ? "Wayang Kulit Banyuwangi tidak hanya menampilkan cerita Ramayana dan Mahabharata, tetapi juga mengadaptasi legenda lokal dan isu kontemporer. Dalang Banyuwangi terkenal dengan kemampuan improvisasi dan humor yang kritis terhadap kondisi sosial, menjadikan wayang sebagai media edukasi dan kritik sosial yang relevan."
                  : "Banyuwangi Shadow Puppets not only present Ramayana and Mahabharata stories, but also adapt local legends and contemporary issues. Banyuwangi puppeteers are famous for their improvisation skills and humor critical of social conditions, making wayang a relevant educational and social criticism medium."}
              </p>
            </div>

            <div className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 border-2 border-violet-300 dark:border-violet-700 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                {language === "id" ? "Kolaborasi Tradisi dan Modern" : "Collaboration of Tradition and Modern"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {language === "id"
                  ? "Kesenian Banyuwangi telah berhasil berkolaborasi dengan seni modern tanpa kehilangan esensinya. Tari Gandrung telah dipentaskan dengan musik elektro-tradisional, dan batik Banyuwangi telah menjadi inspirasi desain fashion internasional. Inovasi ini menjaga kesenian tetap relevan untuk generasi muda."
                  : "Banyuwangi arts have successfully collaborated with modern arts without losing their essence. Gandrung Dance has been performed with electro-traditional music, and Banyuwangi batik has become an inspiration for international fashion design. This innovation keeps the arts relevant for the young generation."}
              </p>
            </div>
          </div>

          {/* Recognition */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 via-pink-600 to-violet-600 text-white rounded-2xl p-8 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4">
              {language === "id" ? "Pengakuan Internasional" : "International Recognition"}
            </h3>
            <p className="leading-relaxed max-w-3xl mx-auto opacity-95">
              {language === "id"
                ? "Tari Gandrung Banyuwangi telah dipentaskan di berbagai negara seperti Jepang, Korea, Prancis, dan Amerika Serikat. UNESCO telah mengakui potensi kesenian Banyuwangi sebagai warisan budaya tak benda yang perlu dilestarikan. Festival Gandrung Sewu yang menampilkan ribuan penari gandrung telah memecahkan rekor dan menarik perhatian dunia internasional."
                : "Banyuwangi Gandrung Dance has been performed in various countries such as Japan, Korea, France, and the United States. UNESCO has recognized the potential of Banyuwangi arts as intangible cultural heritage that needs to be preserved. The Gandrung Sewu Festival featuring thousands of gandrung dancers has broken records and attracted international attention."}
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Impact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.culturalImpact}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Music className="text-secondary" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">Pengakuan Global</h3>
              </div>
              <p className="text-muted-foreground text-sm">Seni Banyuwangi telah diakui oleh UNESCO dan ditampilkan di panggung internasional, membawa kebanggaan budaya Indonesia ke seluruh dunia.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-primary" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">Pelestarian Budaya</h3>
              </div>
              <p className="text-muted-foreground text-sm">Generasi muda Banyuwangi terus belajar dan melestarikan seni tradisional melalui sekolah seni dan komunitas budaya yang aktif.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-accent" size={28} />
                <h3 className="font-serif text-xl font-bold text-foreground">Inovasi Berkelanjutan</h3>
              </div>
              <p className="text-muted-foreground text-sm">Seni tradisional terus berkembang dengan sentuhan modern, menciptakan harmoni antara warisan masa lalu dan kreativitas masa kini.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Schedule Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.culturalEvents}</h2>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Festival Banyuwangi Bersatu</h3>
              <p className="text-muted-foreground mb-2">Festival tahunan yang menampilkan berbagai seni tradisional Banyuwangi dengan pertunjukan spektakuler.</p>
              <p className="text-sm text-muted-foreground">Waktu: Agustus setiap tahunnya</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Pertunjukan Tari Gandrung</h3>
              <p className="text-muted-foreground mb-2">Pertunjukan reguler Tari Gandrung yang menampilkan penari profesional dan tradisional.</p>
              <p className="text-sm text-muted-foreground">Waktu: Setiap akhir pekan di pusat budaya</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">Wayang Kulit Malam</h3>
              <p className="text-muted-foreground mb-2">Pertunjukan wayang kulit tradisional dengan dalang berpengalaman yang menceritakan kisah-kisah klasik.</p>
              <p className="text-sm text-muted-foreground">Waktu: Acara khusus dan perayaan budaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">{t.watchArts}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.watchArtsDesc}</p>
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
