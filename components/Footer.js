export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Somnath Pan. All rights reserved.</p>

        <div className="flex gap-6">
          <a
            href="https://wa.me/yournumber"
            className="hover:text-slate-900 transition"
          >
            WhatsApp
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-slate-900 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}