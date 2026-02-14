export default function Contact() {
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">Let's grow your business</h3>
        <p className="text-slate-400 mb-8">Ready to start? Fill the form or message me directly.</p>
        
        <form className="space-y-4 mb-10 text-left">
          <input type="text" placeholder="Name" className="w-full p-4 rounded bg-slate-800 border-none text-white focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className="w-full p-4 rounded bg-slate-800 border-none text-white focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Message" rows="4" className="w-full p-4 rounded bg-slate-800 border-none text-white focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="w-full bg-blue-600 py-4 rounded font-bold hover:bg-blue-700 transition">Send Message</button>
        </form>

        <a href="https://wa.me/yournumber" className="inline-flex items-center gap-2 text-green-400 font-medium hover:underline">
          Connect on WhatsApp →
        </a>
      </div>
    </section>
  );
}
