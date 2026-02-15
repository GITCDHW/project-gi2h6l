"use client";

import React from 'react';
import Head from 'next/head';

export default function JewelleryStore() {
  const shopName = "AURELIA & CO.";
  const yearEstablished = "1988";

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#121212] font-sans selection:bg-[#D4AF37] selection:text-white">
      <Head>
        <title>{shopName} | Timeless Elegance</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-[#F9F8F6]/80 backdrop-blur-md border-b border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="font-serif text-2xl tracking-widest text-[#121212]">{shopName}</h1>
          <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">Heritage</a>
            <a href="#collections" className="hover:text-[#D4AF37] transition-colors">Collections</a>
            <a href="#rates" className="hover:text-[#D4AF37] transition-colors">Gold Rate</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Visit Us</a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Jewellery"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] mb-4 text-sm font-medium">Est. {yearEstablished}</p>
          <h2 className="font-serif text-6xl md:text-8xl text-white mb-8 tracking-tight italic">
            {shopName}
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto tracking-wide">
            Timeless Elegance. Trusted Since {yearEstablished}.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-[#D4AF37] text-white px-10 py-4 uppercase tracking-widest text-xs hover:bg-[#B8962E] transition-all duration-500 shadow-xl">
              Explore Collection
            </button>
            <button className="border border-white/30 text-white backdrop-blur-sm px-10 py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-500">
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <span className="text-[#D4AF37] text-3xl font-serif">~</span>
        <h2 className="font-serif text-4xl mb-8 mt-4 tracking-tight">A Legacy of Radiance</h2>
        <p className="text-gray-600 leading-relaxed text-lg font-light italic">
          For over three decades, {shopName} has been the cornerstone of trust in the community. 
          Our family legacy is built on the pursuit of perfection, blending ancestral craftsmanship 
          with modern sophistication to create pieces that tell your unique story.
        </p>
      </section>

      {/* --- Collections Grid --- */}
      <section id="collections" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Gold Jewellery", img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&q=80&w=800" },
              { title: "Diamond Collection", img: "https://images.unsplash.com/photo-1598560912005-59a0d5c1a612?auto=format&fit=crop&q=80&w=800" },
              { title: "Bridal Couture", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800" }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer overflow-hidden relative">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-end p-8">
                  <h3 className="text-white font-serif text-2xl tracking-wide">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Live Gold Rate --- */}
      <section id="rates" className="py-20 bg-[#121212] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-[#D4AF37]/30 p-12 text-center relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#121212] px-6 text-[#D4AF37] tracking-[0.3em] text-xs">DAILY MARKET RATE</div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-widest mb-2">24K Pure Gold (10g)</p>
                <p className="font-serif text-4xl text-[#D4AF37]">$740.00</p>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-[#D4AF37]/20 pt-8 md:pt-0">
                <p className="text-gray-400 uppercase text-xs tracking-widest mb-2">22K Standard Gold (10g)</p>
                <p className="font-serif text-4xl text-[#D4AF37]">$685.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section className="py-20 bg-[#F9F8F6]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
            "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&q=80&w=600"
          ].map((url, i) => (
            <div key={i} className="aspect-square overflow-hidden hover:opacity-90 transition-opacity">
              <img src={url} alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact & Location --- */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-6">Visit Our Boutique</h2>
            <p className="text-gray-500 mb-8 font-light">Experience the brilliance in person. Our private viewing rooms offer a discreet and personalized shopping experience.</p>
            <div className="space-y-4 text-sm tracking-wide">
              <p><strong>ADDRESS:</strong> 72 Rue du Faubourg Saint-Honoré, Paris, France</p>
              <p><strong>TEL:</strong> +33 1 42 68 71 00</p>
              <p><strong>HOURS:</strong> Mon - Sat: 10am - 7pm</p>
            </div>
            <button className="mt-10 bg-[#25D366] text-white px-8 py-3 rounded-full flex items-center space-x-2 text-sm hover:shadow-lg transition-all">
              <span>WhatsApp Us for Appointment</span>
            </button>
          </div>
          <div className="h-[400px] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.215951680516!2d2.3168236156744853!3d48.87313267928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcc4305f889%3A0xc06198f1618ed7b1!2sRue%20du%20Faubourg%20Saint-Honor%C3%A9!5e0!3m2!1sen!2s!4v1625000000000!5m2!1sen!2s" 
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <h2 className="font-serif text-xl tracking-[0.3em] mb-6">{shopName}</h2>
        <div className="flex justify-center space-x-6 mb-8 text-gray-400 uppercase text-[10px] tracking-widest font-bold">
          <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
          <a href="#" className="hover:text-[#D4AF37]">Facebook</a>
          <a href="#" className="hover:text-[#D4AF37]">Pinterest</a>
        </div>
        <p className="text-[10px] text-gray-400 tracking-widest uppercase">&copy; 2024 {shopName} Boutique. All Rights Reserved.</p>
      </footer>

      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
}
