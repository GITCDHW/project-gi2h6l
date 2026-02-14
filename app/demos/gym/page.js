import React from 'react';
import Head from 'next/head';

export default function GymLandingPage() {
  const WHATSAPP_LINK = "https://wa.me/9748725259";

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-600 selection:text-white">
      <Head>
        <title>Titan Fitness Club | Transform Your Body</title>
        <meta name="description" content="Professional training, modern equipment, and real results at Titan Fitness Club." />
      </Head>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-[#111827] text-white px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <nav className="flex justify-between items-center mb-16 md:mb-24">
            <span className="text-2xl font-black tracking-tighter uppercase italic">Titan Fitness</span>
            <a href={WHATSAPP_LINK} className="text-sm font-bold border border-white px-4 py-2 hover:bg-white hover:text-black">CONTACT</a>
          </nav>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Transform Your Body. <br />
            <span className="text-[#dc2626]">Transform Your Life.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Professional training, modern equipment, and real results. Join the elite community at Titan Fitness Club today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_LINK} className="bg-[#dc2626] text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-red-700">
              Join Now on WhatsApp
            </a>
            <a href="#plans" className="border-2 border-white text-white px-8 py-4 text-lg font-bold uppercase tracking-wider hover:bg-white hover:text-black">
              View Membership Plans
            </a>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-black uppercase mb-16 text-center tracking-tight">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Certified Trainers", desc: "Our elite coaches hold international certifications and years of experience.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop" },
            { title: "Modern Equipment", desc: "Train on the latest resistance and cardio machines for peak performance.", img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&auto=format&fit=crop" },
            { title: "Personalized Plans", desc: "We build programs tailored specifically to your metabolism and goals.", img: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&auto=format&fit=crop" }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="h-48 overflow-hidden mb-6">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
              <div className="w-12 h-1 bg-[#dc2626] mb-4"></div>
              <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- MEMBERSHIP PLANS --- */}
      <section id="plans" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black uppercase mb-16 text-center tracking-tight text-[#111827]">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white p-10 border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-black uppercase mb-4">Basic Plan</h3>
              <p className="text-gray-600 mb-8 grow italic">Access to gym equipment during standard hours.</p>
              <a href={WHATSAPP_LINK} className="bg-[#dc2626] text-white text-center py-4 font-bold uppercase tracking-widest hover:bg-red-800">
                Contact for Pricing
              </a>
            </div>
            {/* Standard */}
            <div className="bg-white p-10 border-4 border-[#dc2626] flex flex-col relative md:-translate-y-4 shadow-2xl z-10">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#dc2626] text-white text-xs font-black px-6 py-2 uppercase tracking-widest">Most Popular</span>
              <h3 className="text-2xl font-black uppercase mb-4">Standard Plan</h3>
              <p className="text-gray-800 mb-8 grow italic font-semibold">Gym access + personalized workout guidance.</p>
              <a href={WHATSAPP_LINK} className="bg-[#dc2626] text-white text-center py-4 font-bold uppercase tracking-widest hover:bg-red-800">
                Contact for Pricing
              </a>
            </div>
            {/* Premium */}
            <div className="bg-white p-10 border border-gray-200 flex flex-col">
              <h3 className="text-2xl font-black uppercase mb-4">Premium Plan</h3>
              <p className="text-gray-600 mb-8 grow italic">Full access + personal training + diet consultation.</p>
              <a href={WHATSAPP_LINK} className="bg-[#dc2626] text-white text-center py-4 font-bold uppercase tracking-widest hover:bg-red-800">
                Contact for Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRANSFORMATION GALLERY --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black uppercase mb-16 tracking-tight">Transformation Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&auto=format&fit=crop",
            "https://unsplash.com/photos/topless-man-in-black-shorts-carrying-black-dumbbell-7kEpUPB8vNk&auto=format&fit=crop"
          ].map((url, i) => (
            <div key={i} className="aspect-square bg-gray-100 overflow-hidden">
              <img src={url} alt={`Transformation ${i+1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* --- TRAINERS SECTION --- */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase mb-16 text-center tracking-tight">Meet the Experts</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center group">
              <div className="w-56 h-72 mx-auto mb-6 overflow-hidden">
                <img src="https://unsplash.com/photos/topless-man-in-black-shorts-carrying-black-dumbbell-7kEpUPB8vNk&auto=format&fit=crop" className="w-full h-full object-cover" alt="Coach Alex" />
              </div>
              <h4 className="text-2xl font-black uppercase">Coach Alex Reed</h4>
              <p className="text-[#dc2626] font-bold uppercase text-sm mb-2 italic">Lead Strength Coach</p>
              <p className="text-gray-600">10+ years specializing in functional hypertrophy.</p>
            </div>
            <div className="text-center group">
              <div className="w-56 h-72 mx-auto mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Coach Sarah" />
              </div>
              <h4 className="text-2xl font-black uppercase">Sarah Jenkins</h4>
              <p className="text-[#dc2626] font-bold uppercase text-sm mb-2 italic">Nutrition Specialist</p>
              <p className="text-gray-600">Certified nutritionist helping clients shed fat sustainably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- LOCATION & CONTACT --- */}
      <section className="py-24 px-6 bg-[#111827] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black uppercase mb-8 tracking-tight leading-none">Visit Our <br />Facility</h2>
            <div className="space-y-6 mb-10">
              <div className="border-l-4 border-[#dc2626] pl-4">
                <strong className="block uppercase text-xs text-gray-400 mb-1 tracking-[0.2em]">Address</strong>
                <p className="text-xl">123 Powerhouse Street, Fitness District, NY 10001</p>
              </div>
              <div className="border-l-4 border-[#dc2626] pl-4">
                <strong className="block uppercase text-xs text-gray-400 mb-1 tracking-[0.2em]">Phone</strong>
                <p className="text-xl">+91 97487 25259</p>
              </div>
            </div>
            <a href={WHATSAPP_LINK} className="inline-block bg-[#dc2626] text-white px-10 py-5 text-xl font-bold uppercase tracking-widest hover:bg-red-700 w-full md:w-auto text-center transition-transform active:scale-95">
              Message Us on WhatsApp
            </a>
          </div>
          <div className="h-[400px] overflow-hidden grayscale contrast-125 border border-gray-800">
             <img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&auto=format&fit=crop" alt="Map Placeholder" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 text-center bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-xl font-black uppercase tracking-tighter">Titan Fitness Club</span>
          <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">
            <p>123 Powerhouse St, NY 10001 | +91 97487 25259</p>
          </div>
          <p className="text-xs text-gray-400 font-mono tracking-tighter">© 2026 TITAN FITNESS CLUB. BUILT FOR RESULTS.</p>
        </div>
      </footer>
    </div>
  );
}
