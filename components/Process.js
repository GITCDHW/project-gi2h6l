const steps = [
  { step: "01", title: "Discuss Requirements", desc: "We map out your business goals and specific needs." },
  { step: "02", title: "Build in 48 Hours", desc: "Rapid development focusing on speed and clean UI." },
  { step: "03", title: "Deploy & Support", desc: "Go live on your domain with 1 month of free tech support." }
];

export default function Process() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-12 text-center">How It Works</h3>
      <div className="grid md:grid-cols-3 gap-12">
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <span className="text-4xl font-black text-slate-100 block mb-2">{s.step}</span>
            <h4 className="font-bold text-xl mb-2">{s.title}</h4>
            <p className="text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
