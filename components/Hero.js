export default function Hero() {
  return (
<section className="px-6 py-20 lg:py-32 max-w-5xl mx-auto">
  <div className="grid lg:grid-cols-2 gap-12 items-center">
    
    <div>
      <h1 className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-4">
        Somnath Pan
      </h1>
      <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
        I build fast, professional websites for growing businesses.
      </h2>
      <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
        Helping gyms, coaching centers, and media brands dominate their local market with high-performance digital solutions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#projects" className="bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 text-center transition">
          View Projects
        </a>
        <a href="https://wa.me/yournumber" className="border border-slate-200 px-8 py-4 rounded-lg font-medium hover:bg-slate-50 text-center transition">
          Contact on WhatsApp
        </a>
      </div>
    </div>

    <div className="flex justify-center">
      <Image
        src="/profile.png"
        alt="Somnath Pan"
        width={400}
        height={400}
        className="rounded-2xl shadow-lg object-cover"
        priority
      />
    </div>

  </div>
</section>
  );
}
