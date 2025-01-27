import {
  Palette,
  Globe2,
  Shield,
  Zap,
  Search,
  Store,
  Layout,
} from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Modern Design",
    description:
      "Dengan sentuhan desain modern, Z Developer menciptakan solusi yang menawarkan design menarik, unik, dan fleksibilitas luar biasa.",
  },
  {
    icon: Globe2,
    title: "Website Siap Digunakan",
    description:
      "Website yang kami siap digunakan untuk Marketing Websites, SaaS, Blogs, Personal Profiles, UMKM untuk di promosikan di kancah dunia.",
  },
  {
    icon: Shield,
    title: "Aman",
    description:
      "Membangun website yang aman, efisien, dan ramah pengguna untuk memberikan pengalaman luar biasa dan nilai jangka panjang.",
  },
  {
    icon: Zap,
    title: "Performa Tinggi",
    description:
      "Dengan performa tinggi, Z Developer memastikan website Anda tidak hanya cepat dimuat, tetapi juga memberikan pengalaman pengguna yang optimal dan mendorong hasil bisnis yang lebih baik.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Z Developer hadir dengan solusi SEO terbaik yang meningkatkan visibilitas website Anda, mendorong trafik organik, dan memperluas jangkauan audiens.",
  },
  {
    icon: Store,
    title: "Terbuka Untuk Usaha Kecil",
    description:
      "Z Developer hadir dengan semangat terbuka untuk usaha kecil, memberikan solusi yang fleksibel dan inovatif untuk membantu bisnis Anda tumbuh.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="p-5 sm:p-10 rounded-2xl bg-gradient-to-br from-primary-dark via-primary-dark to-primary">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Kenapa Harus Memilih Kami?
          </h2>
          <p className="text-white/90 text-lg">
            Percayakan proyek website Anda pada Z Developer dan rasakan
            pengalaman pembuatan website yang memuaskan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
