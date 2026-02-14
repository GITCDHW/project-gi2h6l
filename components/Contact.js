"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappMessage = `
New Inquiry from Portfolio:

Name: ${form.name}
Email: ${form.email}
Message: ${form.message}
    `;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(
      `https://wa.me/9748725259?text=${encodedMessage}`,
      "_blank"
    );
  };
  
  return (
    <section className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">
          Let's grow your business
        </h3>
        <p className="text-slate-400 mb-8">
          Ready to start? Fill the form or message me directly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mb-10 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-800 text-white focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-800 text-white focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            onChange={handleChange}
            className="w-full p-4 rounded bg-slate-800 text-white focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 py-4 rounded font-bold hover:bg-blue-700 transition"
          >
            Send via WhatsApp
          </button>
        </form>

        <a
          href="https://wa.me/9748725259"
          className="inline-flex items-center gap-2 text-green-400 font-medium hover:underline"
        >
          Connect on WhatsApp →
        </a>
      </div>
    </section>
  );
}