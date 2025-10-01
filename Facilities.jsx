import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Wifi,
  Utensils,
  Heart,
  BookOpen,
  Home,
  Zap,
  Droplets,
} from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Building,
      title: "Masjid Utama",
      description:
        "Masjid dengan kapasitas 1000 jamaah untuk sholat berjamaah dan kegiatan keagamaan",
      image:
        "Beautiful mosque interior with Islamic architecture, prayer hall for 1000 people",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: BookOpen,
      title: "Perpustakaan",
      description:
        "Koleksi lengkap kitab-kitab Islam klasik dan modern serta buku-buku umum",
      image:
        "Islamic library with traditional books and modern facilities, peaceful reading environment",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Home,
      title: "Asrama Santri",
      description:
        "Asrama nyaman dengan fasilitas lengkap untuk santri putra dan putri",
      image:
        "Clean and comfortable dormitory rooms for Islamic boarding school students",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Utensils,
      title: "Dapur & Kantin",
      description:
        "Dapur bersih dengan menu makanan bergizi dan halal untuk santri",
      image: "Clean halal kitchen and dining area in Islamic boarding school",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Heart,
      title: "Klinik Kesehatan",
      description:
        "Pelayanan kesehatan 24 jam dengan tenaga medis berpengalaman",
      image:
        "Medical clinic facility in Islamic boarding school with healthcare equipment",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Wifi,
      title: "Lab Komputer",
      description:
        "Laboratorium komputer dengan akses internet untuk pembelajaran digital",
      image:
        "Modern computer laboratory in Islamic school with internet access",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Listrik 24 Jam",
      description: "Pasokan listrik stabil 24 jam dengan generator cadangan",
      image:
        "Electrical infrastructure and generator backup system in boarding school",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Droplets,
      title: "Air Bersih",
      description:
        "Sistem air bersih dengan filtrasi modern untuk kebutuhan sehari-hari",
      image:
        "Clean water filtration system and water facilities in Islamic boarding school",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section
      id="facilities"
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
            Fasilitas <span className="gradient-text">Lengkap</span>
          </h2>
          <div className="section-divider mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pondok Pesantren Darussalam dilengkapi dengan berbagai fasilitas
            modern untuk mendukung kenyamanan dan pembelajaran santri.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg card-hover"
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={`Fasilitas ${facility.title} di Pondok Pesantren Darussalam`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  src="https://images.unsplash.com/photo-1693801241056-44d1dbba7d85"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${facility.color} opacity-80`}
                ></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <facility.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-emerald-800 mb-4">
                Lingkungan Kondusif
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Semua fasilitas dirancang untuk menciptakan lingkungan belajar
                yang kondusif, aman, dan nyaman. Kami berkomitmen memberikan
                yang terbaik untuk mendukung perkembangan santri dalam segala
                aspek.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Keamanan</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">
                    100%
                  </div>
                  <div className="text-sm text-gray-600">Halal</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-gray-600">Fasilitas</div>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-xl">
                  <div className="text-2xl font-bold text-emerald-600">
                    Modern
                  </div>
                  <div className="text-sm text-gray-600">Teknologi</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                alt="Suasana lingkungan Pondok Pesantren Darussalam yang asri dan kondusif"
                className="w-full h-auto rounded-xl shadow-lg"
                src="https://images.unsplash.com/photo-1693282541775-cd1e85c00786"
              />

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;
