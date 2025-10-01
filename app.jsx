import React from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Yayasan Pondok Pesantren Darussalam - Pendidikan Islam Terpadu
        </title>
        <meta
          name="description"
          content="Yayasan Pondok Pesantren Darussalam menyediakan pendidikan Islam terpadu dengan kurikulum modern dan tradisional. Bergabunglah dengan komunitas santri yang berkualitas."
        />
        <meta
          name="keywords"
          content="pondok pesantren, pendidikan islam, darussalam, yayasan, santri, tahfidz, madrasah"
        />
        <meta
          property="og:title"
          content="Yayasan Pondok Pesantren Darussalam"
        />
        <meta
          property="og:description"
          content="Pendidikan Islam terpadu dengan kurikulum modern dan tradisional"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Programs />
          <Facilities />
          <News />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
