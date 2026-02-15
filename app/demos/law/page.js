import React from 'react';
import { Scale, ShieldCheck, Briefcase, Users, Phone, MessageSquare, CheckCircle2, MapPin, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

export default function LawFirmLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-gold-200">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Scale className="text-[#c5a059] w-8 h-8" />
            <span className="text-white font-serif text-2xl tracking-tight font-bold">LEX<span className="text-[#c5a059]">AUTHORITY</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-slate-300 font-medium">
            <a href="#practice" className="hover:text-[#c5a059] transition-colors">Practice Areas</a>
            <a href="#about" className="hover:text-[#c5a059] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#c5a059] transition-colors">Contact</a>
          </div>
          <a href="tel:+1234567890" className="hidden md:flex items-center gap-2 bg-[#c5a059] text-white px-5 py-2 rounded-sm hover:bg-[#b08d4a] transition-all font-semibold">
            <Phone size={18} /> Call Now
          </a>
        </div>
      </nav>

      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" 
            alt="Law Office" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Trusted Legal Representation <br/><span className="italic text-[#c5a059]">You Can Rely On</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Specializing in Criminal Defense, Civil Litigation, and Corporate Law. We provide strategic, aggressive advocacy to protect your rights and future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-[#c5a059] text-white px-10 py-4 rounded-sm text-lg font-bold hover:bg-[#b08d4a] transition-all shadow-xl">
              Book a Consultation
            </a>
            <a href="tel:+1234567890" className="border border-white/30 text-white px-10 py-4 rounded-sm text-lg font-bold hover:bg-white/10 transition-all backdrop-blur-md">
              Call Today
            </a>
          </div>
        </div>
      </section>

      {/* --- 2. TRUST INDICATORS --- */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif font-bold text-slate-900">25+</p>
              <p className="text-slate-500 uppercase tracking-widest text-xs mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-slate-900">1,200+</p>
              <p className="text-slate-500 uppercase tracking-widest text-xs mt-1">Cases Handled</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-slate-900">98%</p>
              <p className="text-slate-500 uppercase tracking-widest text-xs mt-1">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-slate-900">BCI</p>
              <p className="text-slate-500 uppercase tracking-widest text-xs mt-1">Registered Advocate</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. PRACTICE AREAS --- */}
      <section id="practice" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Areas of Expertise</h2>
            <div className="h-1 w-20 bg-[#c5a059] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Criminal Defense", desc: "Aggressive defense strategies for complex criminal litigation and trials.", icon: <ShieldCheck /> },
              { title: "Corporate Law", desc: "Comprehensive legal guidance for startups, mergers, and compliance.", icon: <Briefcase /> },
              { title: "Family Law", desc: "Compassionate handling of divorce, custody, and matrimonial disputes.", icon: <Users /> },
              { title: "Property Disputes", desc: "Resolution of real estate conflicts and title verifications.", icon: <Scale /> },
              { title: "Civil Litigation", desc: "Expert representation in recovery suits and contract breaches.", icon: <CheckCircle2 /> },
              { title: "Intellectual Property", desc: "Protecting your innovation through trademarks and patents.", icon: <ShieldCheck /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 border border-slate-200 hover:border-[#c5a059] transition-all group shadow-sm">
                <div className="text-[#c5a059] mb-6 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070" 
              alt="Advocate Portrait" 
              className="rounded-sm shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#c5a059] -z-0 hidden md:block"></div>
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6 leading-tight">Committed to Excellence, <br/>Driven by Integrity</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              With over two decades of experience in high-stakes litigation, we believe that every client deserves a rigorous defense and personalized attention. 
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our firm was founded on the principle that legal excellence should be accessible. We don't just provide advice; we provide solutions that protect your legacy and your business.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-[#c5a059] shrink-0" size={20} />
                <span className="font-medium text-slate-800">Proven Track Record</span>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle2 className="text-[#c5a059] shrink-0" size={20} />
                <span className="font-medium text-slate-800">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. TESTIMONIALS --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-serif mb-16 italic text-[#c5a059]">Client Reflections</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center italic font-light opacity-90">
                <p className="text-lg mb-6">"Their attention to detail and courtroom presence saved my business from a devastating lawsuit. Truly professional and highly recommended."</p>
                <p className="uppercase tracking-[0.2em] text-[#c5a059] text-xs font-bold">— Client {i}, Corporate Sector</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. WHY CHOOSE US --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-12 shadow-sm border-t-4 border-[#c5a059]">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif mb-6">The Firm's Commitment</h2>
                <ul className="space-y-4">
                  {[
                    "Strict Confidentiality of all client data",
                    "Transparent communication with no hidden fees",
                    "Personalized strategy for every unique case",
                    "Strong presence in the High Court and Supreme Court"
                  ].map((text, idx) => (
                    <li key={idx} className="flex gap-3 items-center text-slate-700">
                      <div className="h-1.5 w-1.5 bg-[#c5a059] rounded-full"></div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Scale size={120} className="text-slate-100" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. CONSULTATION SECTION --- */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Schedule Your Consultation</h2>
            <p className="text-slate-500">Take the first step toward resolving your legal matter today.</p>
          </div>
          <div className="bg-slate-50 p-8 md:p-12 rounded-sm shadow-inner border border-slate-200">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Full Name</label>
                <input type="text" className="w-full p-3 border border-slate-300 rounded-sm focus:border-[#c5a059] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Phone Number</label>
                <input type="tel" className="w-full p-3 border border-slate-300 rounded-sm focus:border-[#c5a059] outline-none transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Case Type</label>
                <select className="w-full p-3 border border-slate-300 rounded-sm focus:border-[#c5a059] outline-none transition-all">
                  <option>Criminal Defense</option>
                  <option>Corporate Law</option>
                  <option>Civil Litigation</option>
                  <option>Family Law</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-slate-500">Case Details</label>
                <textarea rows={4} className="w-full p-3 border border-slate-300 rounded-sm focus:border-[#c5a059] outline-none transition-all"></textarea>
              </div>
              <div className="md:col-span-2 flex flex-col gap-4">
                <button type="submit" className="w-full bg-slate-900 text-white py-4 font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
                  Request Callback
                </button>
                <button type="button" className="w-full bg-[#25D366] text-white py-4 font-bold uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <MessageSquare size={20} /> Chat on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 text-white mb-6">
                <Scale className="text-[#c5a059] w-6 h-6" />
                <span className="font-serif text-xl font-bold italic">LexAuthority</span>
              </div>
              <p className="text-sm leading-relaxed">
                Dedicated to providing premium legal services with an unwavering commitment to justice and integrity.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin size={16} className="text-[#c5a059]" /> 123 Legal Avenue, Judicial District, NY 10001</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-[#c5a059]" /> +1 (234) 567-890</li>
                <li className="flex items-center gap-3"><Mail size={16} className="text-[#c5a059]" /> contact@lexauthority.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#c5a059]"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-[#c5a059]"><Facebook size={20} /></a>
                <a href="#" className="hover:text-[#c5a059]"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} LexAuthority Law Firm. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
