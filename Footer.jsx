import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: "Media Sosial",
      description: `🚧 Link ${platform} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`,
    });
  };

  const handleLinkClick = (link) => {
    toast({
      title: "Navigasi",
      description: `🚧 Link ${link} belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀`,
    });
  };

  const quickLinks = [
    "Tentang Kami",
    "Program Pendidikan",
    "Fasilitas",
    "Pendaftaran",
    "Berita",
    "Kontak",
  ];

  const programs = [
    "Tahfidz Al-Qur'an",
    "Madrasah Diniyah",
    "Pendidikan Formal",
    "Keterampilan Hidup",
    "Bahasa Arab",
    "Bahasa Inggris",
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, name: "Instagram", color: "hover:text-pink-600" },
    { icon: Youtube, name: "YouTube", color: "hover:text-red-600" },
    { icon: Twitter, name: "Twitter", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="bg-gradient-to-b from-emerald-800 to-emerald-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">PP Darussalam</span>
                <p className="text-sm arabic-font opacity-80">دار السلام</p>
              </div>
            </div>

            <p className="text-emerald-100 leading-relaxed">
              Pondok Pesantren Darussalam berkomitmen mendidik generasi Qur'ani
              yang berakhlak mulia dan siap menghadapi tantangan zaman.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-emerald-100">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">
                  Jl. Raya Pesantren No. 123, Bogor
                </span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-100">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+62 21 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-100">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">info@darussalam.ac.id</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <span className="text-xl font-bold">Tautan Cepat</span>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link)}
                  className="block text-emerald-100 hover:text-white transition-colors duration-200 text-left"
                >
                  {link}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <span className="text-xl font-bold">Program Kami</span>
            <nav className="space-y-3">
              {programs.map((program, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(program)}
                  className="block text-emerald-100 hover:text-white transition-colors duration-200 text-left"
                >
                  {program}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <span className="text-xl font-bold">Ikuti Kami</span>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.name)}
                  className={`w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* Islamic Quote */}
            <div className="bg-emerald-700/50 p-4 rounded-xl">
              <p className="text-sm arabic-font mb-2 text-center">
                وَقُل رَّبِّ زِدْنِي عِلْمًا
              </p>
              <p className="text-xs text-emerald-100 text-center opacity-80">
                "Dan katakanlah: Ya Tuhanku, tambahkanlah kepadaku ilmu
                pengetahuan"
              </p>
              <p className="text-xs text-emerald-200 text-center mt-1">
                (QS. Taha: 114)
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-emerald-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-emerald-100 text-sm text-center md:text-left">
              © 2024 Yayasan Pondok Pesantren Darussalam. Semua hak dilindungi.
            </p>

            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => handleLinkClick("Kebijakan Privasi")}
                className="text-emerald-100 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </button>
              <button
                onClick={() => handleLinkClick("Syarat & Ketentuan")}
                className="text-emerald-100 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
