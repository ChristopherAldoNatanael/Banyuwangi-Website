"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Clock, Users, Flame, Utensils, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function KulinerPage() {
  const { t, mounted, language } = useLanguage();

  if (!mounted) return null;

  const dishes = [
    {
      name: { id: "Rawon", en: "Rawon" },
      description: {
        id: "Sup tradisional Banyuwangi dengan daging sapi, kacang tanah, dan bumbu rempah yang kaya. Warna hitam pekat berasal dari kluwek yang memberikan cita rasa unik.",
        en: "Traditional Banyuwangi soup with beef, peanuts, and rich spices. The dark black color comes from kluwek which gives a unique taste.",
      },
      ingredients: {
        id: ["Daging sapi", "Kluwek", "Kacang tanah", "Rempah-rempah"],
        en: ["Beef", "Kluwek", "Peanuts", "Spices"],
      },
      servings: { id: "4-6 orang", en: "4-6 people" },
      time: { id: "2 jam", en: "2 hours" },
      image: "https://images.unsplash.com/photo-1625535608282-8f181a38f9e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjbGVhciUyMHNvdXAlMjBicm90aCUyMEFzaWFuJTIwc291cHxlbnwwfDJ8fHwxNzYxODIzODQ2fDA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Rujak Soto", en: "Rujak Soto" },
      description: {
        id: "Perpaduan unik antara rujak dan soto khas Banyuwangi. Campuran buah-buahan segar dengan kuah soto yang gurih, menciptakan harmoni rasa manis, asam, dan gurih.",
        en: "Unique combination of rujak and Banyuwangi's signature soto. Fresh fruits mixed with savory soto broth, creating harmony of sweet, sour, and savory flavors.",
      },
      ingredients: {
        id: ["Buah-buahan", "Kuah soto", "Bumbu petis", "Kerupuk"],
        en: ["Fruits", "Soto broth", "Petis spice", "Crackers"],
      },
      servings: { id: "2-4 orang", en: "2-4 people" },
      time: { id: "30 menit", en: "30 minutes" },
      image:
        "https://images.unsplash.com/photo-1673238112965-f1e92cdbd8cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxncmlsbGVkJTIwY2hpY2tlbiUyMGNoaWNrZW4lMjBkaXNoJTIwQXNpYW4lMjBmb29kfGVufDB8Mnx8fDE3NjE4MjM4NDZ8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Sego Tempong", en: "Sego Tempong" },
      description: {
        id: "Nasi yang dimasak dengan santan dan rempah-rempah, disajikan dengan lauk pauk tradisional. Hidangan ini melambangkan kebersamaan dan kemakmuran.",
        en: "Rice cooked with coconut milk and spices, served with traditional side dishes. This dish symbolizes togetherness and prosperity.",
      },
      ingredients: {
        id: ["Nasi", "Santan", "Rempah-rempah", "Lauk pauk"],
        en: ["Rice", "Coconut milk", "Spices", "Side dishes"],
      },
      servings: { id: "4-6 orang", en: "4-6 people" },
      time: { id: "1 jam", en: "1 hour" },
      image:
        "https://images.unsplash.com/photo-1599682303048-8689078dd687?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjByaWNlJTIwdHVybWVyaWMlMjByaWNlJTIwQXNpYW4lMjByaWNlfGVufDB8Mnx8eWVsbG93fDE3NjE4MjM4NDZ8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Pecel Pitik", en: "Pecel Pitik" },
      description: {
        id: "Ayam kampung yang dimasak dengan bumbu tradisional, disajikan dengan pecel sayuran dan sambal. Hidangan yang sehat dan bergizi.",
        en: "Free-range chicken cooked with traditional spices, served with vegetable pecel and sambal. A healthy and nutritious dish.",
      },
      ingredients: {
        id: ["Ayam kampung", "Sayuran", "Bumbu pecel", "Sambal"],
        en: ["Free-range chicken", "Vegetables", "Pecel spices", "Sambal"],
      },
      servings: { id: "3-5 orang", en: "3-5 people" },
      time: { id: "1.5 jam", en: "1.5 hours" },
      image:
        "https://images.unsplash.com/photo-1708782344490-9026aaa5eec7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGNoaWNrZW4lMjBkaXNoJTIwQXNpYW4lMjBmb29kfGVufDB8Mnx8fDE3NjE4MjM4NDZ8MA&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Tahu Campur", en: "Tahu Campur" },
      description: {
        id: "Tahu yang digoreng renyah dicampur dengan sayuran, lentho (bakwan jagung), dan kuah petis yang gurih. Hidangan ringan namun mengenyangkan.",
        en: "Crispy fried tofu mixed with vegetables, lentho (corn fritters), and savory petis broth. A light yet satisfying dish.",
      },
      ingredients: {
        id: ["Tahu", "Sayuran", "Lentho", "Kuah petis"],
        en: ["Tofu", "Vegetables", "Lentho", "Petis broth"],
      },
      servings: { id: "2-4 orang", en: "2-4 people" },
      time: { id: "45 menit", en: "45 minutes" },
      image:
        "https://images.unsplash.com/photo-1603247901740-a09dea59cffd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxmcmllZCUyMHRvZnUlMjB0b2Z1JTIwZGlzaCUyMGNyaXNweSUyMHRvZnV8ZW58MHwyfHx8MTc2MTgyMzg0Nnww&ixlib=rb-4.1.0&q=85",
    },
    {
      name: { id: "Jangan Cong", en: "Jangan Cong" },
      description: {
        id: "Sup tradisional dengan bahan utama jangan (kaki sapi) yang dimasak lama hingga empuk. Kuahnya yang bening namun kaya rasa menjadi ciri khasnya.",
        en: "Traditional soup with main ingredient jangan (cow's leg) cooked slowly until tender. Its clear yet flavorful broth is its distinctive feature.",
      },
      ingredients: {
        id: ["Kaki sapi", "Bumbu rempah", "Sayuran", "Jeruk nipis"],
        en: ["Cow's leg", "Spice mix", "Vegetables", "Lime"],
      },
      servings: { id: "4-6 orang", en: "4-6 people" },
      time: { id: "3 jam", en: "3 hours" },
      image: "https://images.unsplash.com/photo-1571809864118-d0a73b090d6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjbGVhciUyMHNvdXAlMjBicm90aCUyMEFzaWFuJTIwc291cHxlbnwwfDJ8fHwxNzYxODIzODQ2fDA&ixlib=rb-4.1.0&q=85",
    },
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1717065165653-bb853b7e6e7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxtYXJrZXQlMjBwZW9wbGUlMjB3b3JraW5nJTIwdmVuZG9ycyUyMGJ1c3klMjBtYXJrZXRwbGFjZXxlbnwwfDB8fHwxNzYxODIyNDQ3fDA&ixlib=rb-4.1.0&q=85"
          alt="Indonesian traditional food market - Junaid Rahim on Unsplash"
          className="absolute inset-0 w-full h-full object-cover parallax"
        />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4 text-balance">{t.culinaryPageTitle}</h1>
          <p className="text-xl text-white/90 mb-6 text-balance">{t.culinaryPageDesc}</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">{t.culinaryHeritage}</h2>
            <p className="text-lg text-muted-foreground mb-4">{t.culinaryHeritageDesc}</p>
            <p className="text-lg text-muted-foreground">{t.culinaryHeritageDesc2}</p>
          </div>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.specialDishes}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
                  <img src={dish.image || "/placeholder.svg"} alt={dish.name[language]} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{dish.name[language]}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{dish.description[language]}</p>

                  {/* Info */}
                  <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock size={16} className="text-accent" />
                      <span>{dish.time[language]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} className="text-accent" />
                      <span>{dish.servings[language]}</span>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">{t.mainIngredients}</p>
                    <div className="flex flex-wrap gap-2">
                      {dish.ingredients[language]?.map((ingredient: string, i: number) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunikan Kuliner Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 dark:from-orange-950/30 dark:via-red-950/30 dark:to-yellow-950/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">{language === "id" ? "Keunikan Kuliner Banyuwangi" : "Uniqueness of Banyuwangi Cuisine"}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === "id" ? "Apa yang membuat makanan Banyuwangi begitu istimewa dan berbeda dari kuliner daerah lain?" : "What makes Banyuwangi cuisine so special and different from other regional cuisines?"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-orange-200 dark:border-orange-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <Flame className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{language === "id" ? "Perpaduan Rasa yang Unik" : "Unique Flavor Combination"}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Kuliner Banyuwangi menggabungkan rasa pedas, manis, asam, dan gurih dalam harmoni sempurna. Rujak Soto adalah contoh perpaduan unik antara konsep rujak buah dengan kuah soto yang menciptakan sensasi rasa yang belum pernah ada sebelumnya."
                  : "Banyuwangi cuisine combines spicy, sweet, sour, and savory flavors in perfect harmony. Rujak Soto is an example of a unique blend of fruit salad concept with soto broth that creates an unprecedented taste sensation."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-amber-500 rounded-full flex items-center justify-center mb-4">
                <Utensils className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{language === "id" ? "Penggunaan Kluwek & Rempah Lokal" : "Use of Kluwek & Local Spices"}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Rawon Banyuwangi menggunakan kluwek (buah kepayang) yang memberikan warna hitam pekat dan rasa khas yang tidak ditemukan di daerah lain. Kombinasi rempah-rempah lokal seperti lengkuas, jahe, dan kencur menciptakan aroma dan cita rasa yang autentik."
                  : "Banyuwangi Rawon uses kluwek (kepayang fruit) which gives a deep black color and distinctive taste not found in other regions. The combination of local spices such as galangal, ginger, and kencur creates an authentic aroma and flavor."}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-yellow-200 dark:border-yellow-800 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{language === "id" ? "Warisan Resep Turun-Temurun" : "Inherited Recipes Passed Down"}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {language === "id"
                  ? "Setiap hidangan memiliki resep rahasia yang diwariskan dari generasi ke generasi, menjaga autentisitas rasa. Teknik memasak tradisional seperti penggunaan tungku kayu dan periuk tanah liat memberikan cita rasa yang tidak bisa ditiru oleh alat modern."
                  : "Each dish has secret recipes passed down from generation to generation, maintaining authentic taste. Traditional cooking techniques such as using wood stoves and clay pots give a flavor that cannot be replicated by modern tools."}
              </p>
            </div>
          </div>

          {/* Additional Uniqueness Info */}
          <div className="mt-12 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-yellow-500/10 border-2 border-orange-300 dark:border-orange-700 rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-center">{language === "id" ? "Filosofi di Balik Makanan" : "Philosophy Behind the Food"}</h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              {language === "id"
                ? "Kuliner Banyuwangi bukan sekadar makanan, tetapi representasi dari nilai-nilai kebersamaan, kesederhanaan, dan penghormatan terhadap alam. Setiap hidangan mencerminkan kearifan lokal dalam memanfaatkan bahan-bahan alami secara optimal dan berkelanjutan. Tradisi makan bersama memperkuat ikatan sosial dan menjadi medium untuk berbagi cinta dan perhatian."
                : "Banyuwangi cuisine is not just food, but a representation of the values of togetherness, simplicity, and respect for nature. Each dish reflects local wisdom in utilizing natural ingredients optimally and sustainably. The tradition of eating together strengthens social bonds and becomes a medium for sharing love and care."}
            </p>
          </div>
        </div>
      </section>

      {/* Culinary Experience Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">{t.culinaryExperience}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="text-accent" size={28} />
                <h3 className="font-serif text-2xl font-bold text-foreground">{t.authenticTaste}</h3>
              </div>
              <p className="text-muted-foreground">{t.authenticTasteDesc}</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-secondary" size={28} />
                <h3 className="font-serif text-2xl font-bold text-foreground">{t.togetherness}</h3>
              </div>
              <p className="text-muted-foreground">{t.togetherDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">{t.tasteBanyuwangi}</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{t.tasteBanyuwangiDesc}</p>
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
