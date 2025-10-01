import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Clock, Award, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Programs = () => {
  const programs = [
    {
      title: "Tahfidz Al-Qur'an",
      description:
        "Program menghafal Al-Qur'an dengan metode yang efektif dan bimbingan ustadz berpengalaman.",
      duration: "3-6 Tahun",
      capacity: "50 Santri",
      level: "Semua Tingkat",
      features: [
        "Metode Tilawati",
        "Bimbingan Personal",
        "Evaluasi Berkala",
        "Sertifikat Resmi",
      ],
      image:
        "Students memorizing Quran in traditional Islamic setting, peaceful mosque environment",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Madrasah Diniyah",
      description:
        "Pendidikan agama Islam komprehensif meliputi fiqh, hadits, tafsir, dan akhlak.",
      duration: "6 Tahun",
      capacity: "100 Santri",
      level: "Ibtidaiyah - Aliyah",
      features: [
        "Kurikulum Salaf",
        "Kitab Kuning",
        "Bahasa Arab",
        "Praktek Ibadah",
      ],
      image:
        "Islamic religious education classroom with traditional books, students learning Arabic",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Pendidikan Formal",
      description:
        "Pendidikan formal setara SD, SMP, dan SMA dengan kurikulum nasional terintegrasi.",
      duration: "12 Tahun",
      capacity: "200 Santri",
      level: "SD - SMA",
      features: [
        "Kurikulum Nasional",
        "Integrasi Islam",
        "Laboratorium",
        "Ekstrakurikuler",
      ],
      image:
        "Modern Islamic school classroom with students studying, integrated education system",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Keterampilan Hidup",
      description:
        "Program pengembangan keterampilan praktis untuk bekal kehidupan santri.",
      duration: "2 Tahun",
      capacity: "75 Santri",
      level: "Menengah - Atas",
      features: ["Pertanian", "Teknologi", "Kewirausahaan", "Kemandirian"],
      image:
        "Students learning practical life skills, agriculture and technology in Islamic boarding school",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const handleLearnMore = (programTitle) => {
    toast({
      title: "Info Program",
      description: `🚧 Detail program ${programTitle} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`,
    });
  };

  return (
    <section
      id="programs"
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
            Program <span className="gradient-text">Pendidikan</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beragam program pendidikan yang dirancang untuk mengembangkan
            potensi santri secara holistik, menggabungkan ilmu agama dan umum.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              {/* Program Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={`Program ${program.title} di Pondok Pesantren Darussalam`}
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1591206246224-04b4624adef4"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-80`}
                ></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Program Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-800">
                      {program.duration}
                    </div>
                    <div className="text-xs text-gray-500">Durasi</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-800">
                      {program.capacity}
                    </div>
                    <div className="text-xs text-gray-500">Kapasitas</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-gray-800">
                      Bersertifikat
                    </div>
                    <div className="text-xs text-gray-500">Status</div>
                  </div>
                </div>

                {/* Program Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Fitur Program:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <Star className="w-3 h-3 text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleLearnMore(program.title)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Siap Bergabung dengan Kami?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Daftarkan putra-putri Anda untuk mendapatkan pendidikan Islam
            terbaik di Pondok Pesantren Darussalam.
          </p>
          <Button
            onClick={() => handleLearnMore("Pendaftaran")}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-xl font-semibold transition-all duration-300"
          >
            Daftar Sekarang
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
