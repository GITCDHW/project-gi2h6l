import React from 'react';

export default function RestaurantPage() {
  const WHATSAPP_LINK = "https://wa.me/9748725259";

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-stone-800">
            URBAN <span className="text-amber-700">SPICE</span>
          </span>
          <a 
            href={WHATSAPP_LINK}
            className="bg-amber-700 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-amber-800 transition-colors"
          >
            Book Table
          </a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
              Experience <br />
              <span className="text-amber-700">Authentic Flavors</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-md">
              Fresh ingredients, handcrafted dishes, and a welcoming atmosphere. Urban Spice Kitchen brings the heart of the kitchen to your table.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="bg-amber-700 text-white px-8 py-4 rounded-md font-semibold text-center hover:bg-amber-800">
                View Menu
              </a>
              <a href={WHATSAPP_LINK} className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-md font-semibold text-center hover:bg-amber-50">
                Contact on WhatsApp
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" 
              alt="Signature Dish" 
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
      <section className="py-20 bg-white border-y border-stone-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-stone-600 leading-relaxed mb-12">
            Founded on the belief that great food brings people together, Urban Spice Kitchen combines traditional recipes with modern culinary techniques. We source every ingredient locally to ensure that every bite is as fresh as it is flavorful.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-amber-700 font-bold mb-2">Fresh Ingredients</div>
              <p className="text-sm text-stone-500">Sourced daily from local organic farms.</p>
            </div>
            <div className="p-6 border-x border-stone-100">
              <div className="text-amber-700 font-bold mb-2">Signature Dishes</div>
              <p className="text-sm text-stone-500">Unique spice blends you won't find anywhere else.</p>
            </div>
            <div className="p-6">
              <div className="text-amber-700 font-bold mb-2">Cozy Ambience</div>
              <p className="text-sm text-stone-500">The perfect setting for family dinners and dates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Menu Section --- */}
      <section id="menu" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Menu</h2>
            <div className="w-20 h-1 bg-amber-700 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Starters */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-stone-200">Starters</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between font-bold"><span>Crispy Calamari</span> <span>$14</span></div>
                  <p className="text-sm text-stone-500">Served with spicy lemon aioli and herbs.</p>
                </div>
                <div>
                  <div className="flex justify-between font-bold"><span>Stuffed Mushrooms</span> <span>$12</span></div>
                  <p className="text-sm text-stone-500">Garlic, herbs, and three-cheese blend.</p>
                </div>
              </div>
            </div>

            {/* Main Course */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-stone-200">Main Course</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between font-bold"><span>Urban Spice Curry</span> <span>$24</span></div>
                  <p className="text-sm text-stone-500">Our signature slow-cooked vegetable or meat curry.</p>
                </div>
                <div>
                  <div className="flex justify-between font-bold"><span>Grilled Sea Bass</span> <span>$28</span></div>
                  <p className="text-sm text-stone-500">Wilted greens, lemon butter sauce, and jasmine rice.</p>
                </div>
              </div>
            </div>

            {/* Beverages */}
            <div>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-stone-200">Beverages</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between font-bold"><span>Artisan Coffee</span> <span>$5</span></div>
                  <p className="text-sm text-stone-500">Freshly roasted beans, brewed to perfection.</p>
                </div>
                <div>
                  <div className="flex justify-between font-bold"><span>House Mocktail</span> <span>$8</span></div>
                  <p className="text-sm text-stone-500">Fresh seasonal fruits with a hint of mint.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href={WHATSAPP_LINK} className="inline-block bg-stone-900 text-white px-8 py-3 rounded-md hover:bg-stone-800 transition-colors">
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section className="py-20 bg-stone-100 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" 
            alt="Interior Atmosphere" 
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
          <img 
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=800" 
            alt="Chef Preparing Food" 
            className="w-full h-80 object-cover rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* --- Contact & Footer --- */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Visit Us</h2>
            <div className="space-y-4 text-stone-600">
              <p><strong>Address:</strong> 123 Culinary Lane, Food District, City 40001</p>
              <p><strong>Phone:</strong> +91 97487 25259</p>
              <div className="pt-4">
                <h4 className="font-bold text-stone-900 mb-2">Opening Hours</h4>
                <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                <p>Sat - Sun: 09:00 AM - 11:00 PM</p>
              </div>
              <a 
                href={WHATSAPP_LINK}
                className="mt-8 inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-stone-200 rounded-2xl h-80 flex items-center justify-center text-stone-500 overflow-hidden">
            {/* Placeholder for Google Maps Iframe */}
            <div className="text-center p-8">
              <p className="font-medium italic">Google Maps Integrated Here</p>
              <p className="text-xs mt-2">123 Culinary Lane, Food District</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-12 px-4 border-t border-stone-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-2">Urban Spice Kitchen</h3>
            <p className="text-sm leading-relaxed">
              123 Culinary Lane, Food District<br />
              Phone: +91 97487 25259
            </p>
          </div>
          <p className="text-sm">
            © 2026 Urban Spice Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
