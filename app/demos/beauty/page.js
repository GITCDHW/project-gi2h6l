import React from 'react';

// Shared constant for the booking link
const WHATSAPP_URL = "https://wa.me/9748725259";

export default function BeautySalonLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-rose-100">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-light tracking-widest uppercase text-rose-600">
            GlowAura
          </h1>
          <a 
            href={WHATSAPP_URL}
            className="hidden md:block text-sm tracking-widest uppercase border-b border-rose-600 pb-1 hover:text-rose-400 transition-colors"
          >
            Book Now
          </a>
        </div>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-rose-500 font-medium tracking-widest uppercase text-sm mb-4">
                Where Beauty Meets Confidence
              </span>
              <h2 className="text-5xl lg:text-7xl font-light leading-tight mb-8">
                Premium Beauty & <br /> 
                <span className="italic">Skincare Services</span>
              </h2>
              <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
                Professional makeup, hair styling and skincare tailored specifically for your unique features and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_URL}
                  className="px-8 py-4 bg-rose-600 text-white text-sm tracking-widest uppercase hover:bg-rose-700 transition-colors text-center"
                >
                  Book on WhatsApp
                </a>
                <a 
                  href="#services"
                  className="px-8 py-4 border border-rose-200 text-slate-700 text-sm tracking-widest uppercase hover:bg-rose-50 transition-colors text-center"
                >
                  View Services
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-rose-50">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop" 
                alt="Elegant Salon Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. Services Section */}
        <section id="services" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-light uppercase tracking-widest mb-4">Our Services</h2>
              <div className="h-1 w-20 bg-rose-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              <ServiceItem title="Bridal Makeup" desc="Customized luxury bridal looks designed to last through your entire celebration." />
              <ServiceItem title="Party Makeup" desc="Sophisticated evening and event makeup for any occasion, from gala to cocktail parties." />
              <ServiceItem title="Hair Styling & Treatment" desc="Expert cutting, coloring, and deep conditioning treatments for healthy, vibrant hair." />
              <ServiceItem title="Facial & Skincare" desc="Advanced facial treatments using premium products to rejuvenate and brighten your skin." />
              <div className="md:col-span-2 lg:col-span-1">
                <ServiceItem title="Nail Services" desc="Classic manicures, pedicures, and artistic nail extensions for a polished finish." />
              </div>
            </div>
          </div>
        </section>

        {/* 3. Pricing Preview */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <PriceCard title="Makeup Packages" price="Starting at $150" />
              <PriceCard title="Hair Services" price="Starting at $80" />
              <PriceCard title="Skincare Packages" price="Starting at $120" />
            </div>
          </div>
        </section>

        {/* 4. Gallery Section */}
        <section className="py-24 border-t border-rose-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square bg-rose-50">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional Makeup Work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-rose-50">
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Beauty Details"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. About Section */}
        <section className="py-24 bg-rose-600 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-8">The GlowAura Philosophy</h2>
            <p className="text-lg leading-relaxed mb-16 opacity-90">
              We believe beauty is more than skin deep. At GlowAura, we focus on enhancing your natural features while providing a sanctuary of calm and luxury. Every treatment is personalized to ensure you leave not just looking beautiful, but feeling empowered.
            </p>
            <div className="grid md:grid-cols-3 gap-12 border-t border-white/20 pt-16">
              <div>
                <h4 className="uppercase tracking-widest text-sm font-bold mb-2">Certified Professionals</h4>
                <p className="text-xs opacity-70">Trained experts in modern techniques.</p>
              </div>
              <div>
                <h4 className="uppercase tracking-widest text-sm font-bold mb-2">Premium Products</h4>
                <p className="text-xs opacity-70">Only the finest luxury brands used.</p>
              </div>
              <div>
                <h4 className="uppercase tracking-widest text-sm font-bold mb-2">Personalized Service</h4>
                <p className="text-xs opacity-70">Consultations tailored to your needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-light uppercase tracking-widest mb-10">Visit Us</h2>
                <div className="space-y-6 text-slate-600">
                  <p>
                    <strong className="text-slate-900 block uppercase tracking-tighter text-xs mb-1">Address</strong>
                    123 Elegance Boulevard, Suite 400<br />
                    Luxury District, NY 10001
                  </p>
                  <p>
                    <strong className="text-slate-900 block uppercase tracking-tighter text-xs mb-1">Phone</strong>
                    +1 (555) 012-3456
                  </p>
                  <p>
                    <strong className="text-slate-900 block uppercase tracking-tighter text-xs mb-1">Hours</strong>
                    Mon — Sat: 10:00 AM - 08:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
              <div className="bg-rose-50 p-10 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-light mb-6 uppercase tracking-widest">Ready to glow?</h3>
                <p className="text-slate-500 mb-8">Instant booking and consultation available via WhatsApp.</p>
                <a 
                  href={WHATSAPP_URL}
                  className="w-full py-5 bg-rose-600 text-white text-sm tracking-[0.2em] uppercase hover:bg-rose-700 transition-all font-medium"
                >
                  Book Appointment Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="py-12 border-t border-rose-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-light uppercase tracking-widest text-rose-600 mb-2">GlowAura</h3>
            <p className="text-xs text-slate-400">123 Elegance Boulevard, NY 10001</p>
            <p className="text-xs text-slate-400">+1 (555) 012-3456</p>
          </div>
          <div className="text-xs text-slate-400 uppercase tracking-widest">
            © 2026 GlowAura Beauty Studio
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components for cleaner structure
function ServiceItem({ title, desc }) {
  return (
    <div className="border-l-2 border-rose-200 pl-6">
      <h3 className="text-xl font-medium mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function PriceCard({ title, price }) {
  return (
    <div className="p-8 border border-rose-100 text-center hover:border-rose-300 transition-colors">
      <h3 className="text-lg font-light uppercase tracking-widest mb-2">{title}</h3>
      <p className="text-rose-600 font-medium mb-8 italic">{price}</p>
      <a 
        href={WHATSAPP_URL}
        className="text-xs uppercase tracking-widest font-bold border-b border-rose-600 pb-1 hover:text-rose-400"
      >
        Contact for Details
      </a>
    </div>
  );
}
