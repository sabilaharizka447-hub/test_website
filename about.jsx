import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, BookOpen, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Akhlak Mulia",
      description:
        "Membentuk karakter santri yang berakhlak mulia sesuai ajaran Islam",
    },
    {
      icon: BookOpen,
      title: "Ilmu Berkualitas",
      description:
        "Memberikan pendidikan berkualitas tinggi dengan kurikulum terpadu",
    },
    {
      icon: Users,
      title: "Ukhuwah Islamiyah",
      description:
        "Membangun persaudaraan dan kebersamaan dalam lingkungan pesantren",
    },
    {
      icon: Award,
      title: "Prestasi Unggul",
      description:
        "Menghasilkan lulusan yang berprestasi dan siap berkontribusi",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-emerald-50"
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
            Tentang <span className="gradient-text">Darussalam</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pondok Pesantren Darussalam telah berdedikasi dalam mendidik
            generasi Muslim yang berakhlak mulia dan berilmu tinggi sejak tahun
            2008.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800">Visi</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Menjadi lembaga pendidikan Islam terdepan yang menghasilkan
                generasi Qur'ani, berakhlak mulia, dan mampu berkontribusi
                positif bagi masyarakat dan bangsa.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-800">Misi</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>
                  • Menyelenggarakan pendidikan Islam yang komprehensif dan
                  berkualitas
                </li>
                <li>
                  • Membentuk karakter santri yang berakhlak mulia dan bertaqwa
                </li>
                <li>
                  • Mengembangkan potensi akademik dan non-akademik santri
                </li>
                <li>
                  • Membangun lingkungan pesantren yang kondusif untuk
                  pembelajaran
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              alt="Kegiatan pembelajaran di Pondok Pesantren Darussalam"
              className="w-full h-auto rounded-2xl shadow-2xl"
              src="https://images.unsplash.com/photo-1683143791298-975df18702ce"
            />

            {/* Decorative Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="text-sm arabic-font mb-2">
                طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
              </p>
              <p className="text-xs opacity-90">
                "Menuntut ilmu adalah kewajiban bagi setiap Muslim"
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-emerald-800 mb-4">
            Nilai-Nilai Kami
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nilai-nilai fundamental yang menjadi landasan dalam setiap aspek
            pendidikan di Pondok Pesantren Darussalam.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg card-hover text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-emerald-800 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
