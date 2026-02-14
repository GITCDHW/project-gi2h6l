import React from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const WHATSAPP_LINK = "https://wa.me/9748725259";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      <Head>
        <title>SmartZone Mobile Store | Latest Smartphones & Repairs</title>
        <meta name="description" content="Buy genuine devices and get trusted repairs at SmartZone." />
      </Head>

      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-white/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-[#2563eb]">SmartZone</span>
          <a 
            href={WHATSAPP_LINK}
            className="bg-[#2563eb] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Latest Smartphones & <span className="text-[#2563eb]">Trusted Repairs</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Buy genuine devices, repair with confidence, and get the best prices in town. Your one-stop shop for everything mobile.
            </p>
            <div className="pt-4">
              <a 
                href={WHATSAPP_LINK}
                className="inline-block bg-[#2563eb] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-shadow"
              >
                Check Availability on WhatsApp
              </a>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img 
              src="https://images.unsplash.com/photo-1556656793-062ff987b50d?auto=format&fit=crop&q=80&w=800" 
              alt="Modern smartphone display" 
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 py-20 bg-slate-50 rounded-3xl mx-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Smartphone Sales", desc: "Latest flagship models and budget-friendly devices with official warranty." },
              { title: "Screen & Battery", desc: "Fast, professional replacement services using high-quality genuine parts." },
              { title: "Accessories & Repairs", desc: "From premium cases to complex motherboard fixes, we've got you covered." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-[#2563eb]">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brands Section */}
        <section className="px-6 py-16 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Authorized Brands</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
            {['Apple', 'Samsung', 'Vivo', 'Realme', 'Xiaomi'].map((brand) => (
              <span key={brand} className="text-2xl font-bold italic">{brand}</span>
            ))}
          </div>
        </section>

        {/* Featured Offers */}
        <section className="px-6 py-20">
          <h2 className="text-3xl font-bold mb-12">Hot Deals This Week</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group border rounded-3xl overflow-hidden flex flex-col sm:flex-row p-4 gap-6 items-center">
              <img 
                src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400" 
                className="w-40 h-40 object-cover rounded-2xl"
                alt="iPhone"
              />
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold">iPhone 15 Pro Series</h3>
                <p className="text-slate-600 text-sm">Titanium build. Incredible cameras. Limited stock available.</p>
                <a href={WHATSAPP_LINK} className="text-[#2563eb] font-bold text-sm inline-flex items-center hover:underline">
                  Inquire on WhatsApp →
                </a>
              </div>
            </div>
            <div className="group border rounded-3xl overflow-hidden flex flex-col sm:flex-row p-4 gap-6 items-center">
              <img 
                src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400" 
                className="w-40 h-40 object-cover rounded-2xl"
                alt="Samsung"
              />
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold">Samsung Galaxy S24</h3>
                <p className="text-slate-600 text-sm">Experience the new AI features. Best exchange rates.</p>
                <a href={WHATSAPP_LINK} className="text-[#2563eb] font-bold text-sm inline-flex items-center hover:underline">
                  Inquire on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-20 border-t">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Visit Our Store</h2>
              <div className="space-y-4 text-slate-600">
                <p className="flex items-center gap-3 font-medium">
                  📍 123 Mobile Hub Street, Downtown Area
                </p>
                <p className="flex items-center gap-3 font-medium">
                  📞 +974 8725 259
                </p>
              </div>
              <a 
                href={WHATSAPP_LINK}
                className="block w-full bg-[#2563eb] text-white text-center py-4 rounded-xl font-bold hover:bg-blue-700"
              >
                Chat on WhatsApp Now
              </a>
            </div>
            <div className="h-64 bg-slate-100 rounded-3xl overflow-hidden border">
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                {/* Google Maps Placeholder */}
                <iframe 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3!2d51.5!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiTiA1McKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v123456789"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 py-12 border-t text-center space-y-4">
        <p className="font-bold text-lg">SmartZone Mobile Store</p>
        <p className="text-slate-500 text-sm">Phone: +974 8725 259</p>
        <p className="text-slate-400 text-xs italic tracking-wide">
          © 2026 SmartZone Mobile Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
