import React from 'react';

export default function EducationLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-[#1d4ed8]">Horizon International</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold leading-none">Institute</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-[#1d4ed8]">About</a>
            <a href="#" className="hover:text-[#1d4ed8]">Programs</a>
            <a href="#" className="hover:text-[#1d4ed8]">Admissions</a>
            <a href="#" className="bg-[#1d4ed8] text-white px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
                Shaping the <span className="text-[#1d4ed8]">Leaders</span> of Tomorrow
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Comprehensive academic programs with experienced faculty and a structured curriculum designed to foster excellence and global leadership.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#" className="bg-[#1d4ed8] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 shadow-lg shadow-blue-200">
                  Admissions Open
                </a>
                <a href="#" className="border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="flex-1 w-full">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000" 
                alt="Main university building with modern architecture" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* 2. About Section */}
        <section className="bg-slate-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  At Horizon International Institute, we are dedicated to providing a transformative educational experience. We combine rigorous academic standards with practical industry insights to prepare our students for the challenges of a rapidly evolving global landscape.
                </p>
                <div className="space-y-4">
                  {[
                    "Experienced Faculty from Global Institutions",
                    "Modern Infrastructure & Research Labs",
                    "Student-Centric Holistic Growth Approach"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 font-semibold text-slate-800">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#1d4ed8] text-xs">✓</div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#1d4ed8] p-8 rounded-3xl text-white space-y-2">
                  <p className="text-4xl font-bold italic opacity-50">20+</p>
                  <p className="font-bold">Years of Excellence</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-2">
                  <p className="text-4xl font-bold text-[#1d4ed8]">5k+</p>
                  <p className="font-bold">Graduates</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 space-y-2">
                  <p className="text-4xl font-bold text-[#1d4ed8]">100+</p>
                  <p className="font-bold">Industry Partners</p>
                </div>
                <div className="bg-slate-800 p-8 rounded-3xl text-white space-y-2">
                  <p className="text-4xl font-bold opacity-50">95%</p>
                  <p className="font-bold">Placement Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Programs Section */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Academic Programs</h2>
            <p className="text-slate-500">Tailored pathways for every stage of your career.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Undergraduate Programs", 
                desc: "Foundational degrees in Business, Engineering, and Arts designed for future innovators." 
              },
              { 
                title: "Postgraduate Programs", 
                desc: "Advanced research and professional degrees for specialized expertise and leadership." 
              },
              { 
                title: "Professional Certifications", 
                desc: "Short-term, high-impact courses focused on immediate industry skills and career growth." 
              }
            ].map((program, i) => (
              <div key={i} className="group border border-slate-200 p-10 rounded-3xl hover:border-[#1d4ed8] transition-colors flex flex-col h-full">
                <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow">{program.desc}</p>
                <a href="#" className="text-[#1d4ed8] font-bold flex items-center gap-2 group-hover:underline">
                  Learn More <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Campus Gallery */}
        <section className="py-12 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Life at Horizon</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl w-full h-80 object-cover" 
              alt="Group of diverse students collaborating on a project" 
            />
            <img 
              src="https://images.unsplash.com/photo-1507738919721-757729ea8975?auto=format&fit=crop&q=80&w=1000" 
              className="rounded-3xl w-full h-80 object-cover" 
              alt="Students studying in a modern, bright library environment" 
            />
          </div>
        </section>

        {/* 5. Contact Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-100 mt-12">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Inquiry & Admissions</h2>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                  <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <textarea rows="4" placeholder="Your Message" className="w-full px-5 py-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
                <button type="submit" className="w-full bg-[#1d4ed8] text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-shadow">
                  Submit Inquiry
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <h3 className="text-xl font-bold">Contact Details</h3>
              <div className="space-y-6 text-slate-600">
                <div className="flex gap-4">
                  <span className="text-[#1d4ed8] font-bold">Address</span>
                  <p>101 Academic Way, Education District, City Center - 400101</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#1d4ed8] font-bold">Phone</span>
                  <p>+1 (555) 890-1234 / +1 (555) 890-5678</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-[#1d4ed8] font-bold">Email</span>
                  <p>admissions@horizoninstitute.edu</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold">Horizon International Institute</h4>
            <p className="text-slate-400 max-w-xs">Building global leaders through academic excellence and practical learning.</p>
          </div>
          <div className="md:text-right space-y-2 text-slate-400 text-sm">
            <p>101 Academic Way, City Center</p>
            <p>admissions@horizoninstitute.edu</p>
            <p className="pt-8">© 2026 Horizon International Institute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
