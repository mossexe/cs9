import React from 'react';

export default function LandingPage() {
  return (
    <div className="bg-brand-cream min-h-screen font-serif text-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-6 bg-white border-b border-gray-100">
        <div className="text-2xl font-bold tracking-tighter text-brand-burgundy">
          Häagen-Dazs
        </div>
        <div className="space-x-8 text-sm uppercase tracking-widest font-sans">
          <a href="#" className="hover:text-brand-gold transition">Flavors</a>
          <a href="#" className="hover:text-brand-gold transition">Shops</a>
          <a href="#" className="hover:text-brand-gold transition">Our Story</a>
          <button className="bg-brand-burgundy text-white px-6 py-2 rounded-sm hover:bg-opacity-90">
            Find a Pint
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex items-center px-20 py-20 bg-white">
        <div className="w-1/2 pr-10">
          <h1 className="text-7xl font-bold text-brand-burgundy leading-tight mb-6">
            Every bit as <br /> extraordinary.
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-sans leading-relaxed">
            Crafted with only the finest ingredients since 1960. No stabilizers, 
            no shortcuts—just pure, indulgent luxury in every spoonful.
          </p>
          <button className="border-2 border-brand-burgundy text-brand-burgundy px-10 py-4 font-bold uppercase tracking-widest hover:bg-brand-burgundy hover:text-white transition-all">
            Explore Flavors
          </button>
        </div>
        <div className="w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1000" 
            alt="Delicious Vanilla Ice Cream"
            className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
          />
        </div>
      </header>

      {/* Featured Products */}
      <section className="px-20 py-24 bg-brand-cream">
        <h2 className="text-center text-4xl font-bold text-brand-burgundy mb-16 underline decoration-brand-gold underline-offset-8">
          The Classics
        </h2>
        <div className="grid grid-cols-3 gap-12">
          {/* Item 1 */}
          <div className="bg-white p-6 shadow-sm border border-gray-100 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=500" 
              className="w-full h-64 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <h3 className="text-2xl font-bold mb-2">Belgian Chocolate</h3>
            <p className="text-gray-500 font-sans mb-4">Rich, velvety chocolate with flakes of fine Belgian cocoa.</p>
            <span className="text-brand-gold font-bold uppercase text-sm tracking-tighter">Learn More →</span>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-6 shadow-sm border border-gray-100 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&q=80&w=500" 
              className="w-full h-64 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <h3 className="text-2xl font-bold mb-2">Strawberry</h3>
            <p className="text-gray-500 font-sans mb-4">Hand-picked strawberries at the peak of ripeness.</p>
            <span className="text-brand-gold font-bold uppercase text-sm tracking-tighter">Learn More →</span>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-6 shadow-sm border border-gray-100 group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=500" 
              className="w-full h-64 object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500"
            />
            <h3 className="text-2xl font-bold mb-2">Dulce de Leche</h3>
            <p className="text-gray-500 font-sans mb-4">Caramel swirls inspired by authentic Latin flavors.</p>
            <span className="text-brand-gold font-bold uppercase text-sm tracking-tighter">Learn More →</span>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="flex bg-brand-burgundy text-white">
        <div className="w-1/2 p-24">
          <h2 className="text-5xl font-bold mb-8">Our Heritage</h2>
          <p className="text-lg font-sans leading-relaxed opacity-90 mb-8">
            Häagen-Dazs was founded with a simple vision: to make the finest ice cream in the world. 
            We started with just three simple flavors—vanilla, chocolate, and coffee. 
            Today, our passion for quality remains unchanged.
          </p>
          <button className="bg-brand-gold text-white px-8 py-3 font-sans uppercase font-bold tracking-widest">
            Read Our Story
          </button>
        </div>
        <div className="w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-gray-200">
        <p className="text-brand-burgundy font-bold text-xl mb-4">Häagen-Dazs</p>
        <p className="text-gray-400 text-sm font-sans">© 2024 Häagen-Dazs. All rights reserved.</p>
      </footer>
    </div>
  );
}