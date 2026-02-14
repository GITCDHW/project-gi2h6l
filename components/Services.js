const services = [
  { title: "Business Landing Pages", desc: "High-converting single pages designed to turn visitors into paying customers." },
  { title: "News & Media Websites", desc: "Fast, SEO-optimized portals for news agencies and digital creators." },
  { title: "Website + Android App", desc: "A complete digital package including a website and a synchronized Android application." }
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-xl mb-3">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
