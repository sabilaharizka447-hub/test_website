import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Hero = () => {
  const handleCTAClick = () => {
    toast({
      title: "Pendaftaran",
      description:
        "🚧 Fitur pendaftaran belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
    });
  };

  const stats = [
    { icon: Users, value: "500+", label: "Santri Aktif" },
    { icon: BookOpen, value: "25+", label: "Program Studi" },
    { icon: Award, value: "15+", label: "Tahun Berpengalaman" },
    { icon: Star, value: "98%", label: "Tingkat Kepuasan" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-pattern islamic-pattern overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-teal-900/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Arabic Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <p className="text-2xl arabic-font text-emerald-700 mb-2">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </p>
              <p className="text-sm text-gray-600">Bismillahirrahmanirrahim</p>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                <span className="gradient-text">Yayasan Pondok</span>
                <br />
                <span className="text-emerald-800">Pesantren Darussalam</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 max-w-2xl"
              >
                Membangun generasi Qur'ani yang berakhlak mulia, berilmu tinggi,
                dan siap menghadapi tantangan zaman dengan landasan nilai-nilai
                Islam yang kuat.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleCTAClick}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Daftar Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                onClick={handleCTAClick}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                alt="Pondok Pesantren Darussalam - Suasana pembelajaran santri"
                className="w-full h-auto rounded-2xl shadow-2xl"
                src="https://images.unsplash.com/photo-1604245155712-52ae0ae6fe2e"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-10 hidden lg:block"
      ></motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-10 hidden lg:block"
      ></motion.div>
    </section>
  );
};

export default Hero;
