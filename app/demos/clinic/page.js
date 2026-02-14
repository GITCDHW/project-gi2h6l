// app/demos/medical/page.js
import React from 'react';

export default function MedicalCenterPage() {
  const contactPhone = "+9932894989";
  const whatsappLink = "https://wa.me/9932894989";

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-[#1d4ed8] tracking-tight">
              CHANDITALA MEDICAL
            </span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-sm">
            <a href="#services" className="hover:text-[#1d4ed8]">Services</a>
            <a href="#chamber" className="hover:text-[#1d4ed8]">Doctor Chamber</a>
            <a href="#contact" className="hover:text-[#1d4ed8]">Location</a>
          </div>
          <a 
            href={`tel:${contactPhone}`}
            className="bg-[#1d4ed8] text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-800 transition-colors"
          >
            Call Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#1d4ed8] bg-blue-50 rounded-full mb-4">
              Complete Medical Services Under One Roof
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Complete Medical & Diagnostic Services in Chanditala
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Pharmacy, diagnostic tests, oxygen facility, equipment rental and expert doctor consultation — all at one trusted location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={`tel:${contactPhone}`} 
                className="inline-flex justify-center items-center px-8 py-4 bg-[#1d4ed8] text-white font-bold rounded-lg hover:shadow-lg transition-all"
              >
                Call Now
              </a>
              <a 
                href={whatsappLink} 
                className="inline-flex justify-center items-center px-8 py-4 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://plus.unsplash.com/premium_photo-1682129906083-e802555764bf?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Medical Center Interior" 
              className="rounded-2xl shadow-2xl border-8 border-slate-50"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h2>
            <div className="w-20 h-1.5 bg-[#1d4ed8] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Category 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1d4ed8] mb-6 flex items-center">
                Pharmacy Services
              </h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center">• Medicines (In-store)</li>
                <li className="flex items-center">• Medical supplies</li>
                <li className="flex items-center">• Hearing aids</li>
                <li className="flex items-center">• Sunglasses</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1d4ed8] mb-6">Diagnostic Services</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center">• ECG</li>
                <li className="flex items-center">• Blood Test</li>
                <li className="flex items-center">• Urine Test</li>
                <li className="flex items-center">• Stool Test</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1d4ed8] mb-6">Medical Equipment</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center">• Oxygen Facility</li>
                <li className="flex items-center">• Wheelchair & Bed (Rent)</li>
                <li className="flex items-center">• BiPAP Machine</li>
                <li className="flex items-center">• Nebulizer & Airbed</li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#1d4ed8] mb-6">Home Services</h3>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li className="flex items-center">• Wound Dressing</li>
                <li className="flex items-center">• Catheter Fittings</li>
                <li className="flex items-center">• Saline Infusion</li>
                <li className="flex items-center">• Injection Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Chamber Section */}
      <section id="chamber" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialist Doctor Consultations</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Book appointments with experienced physicians across various departments. We maintain a clean and scheduled environment for patient consultations.
              </p>
              <div className="flex flex-wrap gap-4 text-sm mb-8">
                <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                  <span className="block text-slate-400 font-medium mb-1 uppercase text-[10px]">Morning Session</span>
                  10:00 AM — 01:00 PM
                </div>
                <div className="bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                  <span className="block text-slate-400 font-medium mb-1 uppercase text-[10px]">Evening Session</span>
                  05:00 PM — 09:00 PM
                </div>
              </div>
              <a 
                href={`tel:${contactPhone}`} 
                className="inline-block bg-[#1d4ed8] text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors"
              >
                Book Appointment
              </a>
            </div>
            <div className="w-full lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" 
                alt="Doctor Consultation" 
                className="rounded-xl grayscale opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Timings Section */}
      <section id="contact" className="py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Visit Our Center</h2>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Our Address</h4>
                <p className="text-slate-600 leading-relaxed">
                  Chanditala Main Road, Near Central Bank,<br />
                  Hooghly, West Bengal - 712702
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Business Hours</h4>
                <p className="text-slate-600">
                  Monday — Saturday: 08:00 AM to 10:00 PM<br />
                  Sunday: 09:00 AM to 02:00 PM
                </p>
              </div>
              <div>
                <a 
                  href={`tel:${contactPhone}`} 
                  className="inline-flex items-center gap-2 text-[#1d4ed8] font-bold text-lg hover:underline"
                >
                  Call: {contactPhone}
                </a>
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center text-slate-400 relative border border-slate-200">
            {/* Google Maps Iframe Placeholder */}
            <div className="text-center p-8">
              <p className="font-medium text-slate-600 mb-2 italic">Google Maps Iframe Placeholder</p>
              <p className="text-xs max-w-xs mx-auto">In production, insert your Google Maps iframe code here to display the interactive map.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="font-bold text-slate-900 text-lg">Chanditala Medical & Diagnostic Center</p>
              <p className="text-sm text-slate-500 mt-1">Providing reliable healthcare since 2010</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm text-slate-600">Chanditala Main Road, Hooghly</p>
              <p className="text-sm text-slate-600">Phone: {contactPhone}</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between text-xs text-slate-400 font-medium gap-4">
            <p>© 2026 Chanditala Medical & Diagnostic Center. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#1d4ed8]">Terms of Service</a>
              <a href="#" className="hover:text-[#1d4ed8]">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
