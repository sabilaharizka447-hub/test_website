import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Wisuda Tahfidz Al-Qur'an Angkatan ke-15",
      excerpt:
        "Sebanyak 25 santri berhasil menyelesaikan hafalan 30 juz Al-Qur'an dalam upacara wisuda yang khidmat.",
      date: "15 Desember 2024",
      author: "Admin Pesantren",
      category: "Prestasi",
      image:
        "Graduation ceremony for Quran memorization students in Islamic boarding school, celebration event",
      featured: true,
    },
    {
      id: 2,
      title: "Pembangunan Gedung Baru Madrasah Aliyah",
      excerpt:
        "Groundbreaking pembangunan gedung baru untuk menampung santri yang semakin bertambah.",
      date: "10 Desember 2024",
      author: "Humas Pesantren",
      category: "Pembangunan",
      image:
        "Construction of new Islamic school building, modern architecture for boarding school",
      featured: false,
    },
    {
      id: 3,
      title: "Pelatihan Keterampilan Digital untuk Santri",
      excerpt:
        "Program pelatihan komputer dan internet sehat untuk mempersiapkan santri menghadapi era digital.",
      date: "5 Desember 2024",
      author: "Tim IT Pesantren",
      category: "Pendidikan",
      image:
        "Digital skills training for Islamic boarding school students, computer literacy program",
      featured: false,
    },
    {
      id: 4,
      title: "Kunjungan Delegasi Pesantren Malaysia",
      excerpt:
        "Kunjungan studi banding dari pesantren-pesantren di Malaysia untuk berbagi pengalaman.",
      date: "1 Desember 2024",
      author: "Bagian Kerjasama",
      category: "Kerjasama",
      image:
        "International delegation visit from Malaysian Islamic schools, cultural exchange",
      featured: false,
    },
  ];

  const handleReadMore = (newsTitle) => {
    toast({
      title: "Baca Berita",
      description: `🚧 Detail berita "${newsTitle}" belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`,
    });
  };

  const handleViewAll = () => {
    toast({
      title: "Semua Berita",
      description:
        "🚧 Halaman semua berita belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Prestasi: "bg-emerald-100 text-emerald-800",
      Pembangunan: "bg-blue-100 text-blue-800",
      Pendidikan: "bg-purple-100 text-purple-800",
      Kerjasama: "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <section
      id="news"
      className="py-20 bg-gradient-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-emerald-800 mb-4">
            Berita & <span className="gradient-text">Kegiatan</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti perkembangan terbaru dan berbagai kegiatan menarik di Pondok
            Pesantren Darussalam.
          </p>
        </motion.div>

        {/* Featured News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {news
            .filter((item) => item.featured)
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      alt={`Berita: ${item.title}`}
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                          item.category
                        )}`}
                      >
                        <Tag className="w-3 h-3 inline mr-1" />
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-emerald-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {item.author}
                        </div>
                      </div>

                      <Button
                        onClick={() => handleReadMore(item.title)}
                        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>

        {/* Other News */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news
            .filter((item) => !item.featured)
            .map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={`Berita: ${item.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    src="https://images.unsplash.com/photo-1595872018818-97555653a011"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-emerald-800 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {item.author}
                    </div>
                  </div>

                  <Button
                    onClick={() => handleReadMore(item.title)}
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-xl transition-all duration-300"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleViewAll}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Lihat Semua Berita
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
