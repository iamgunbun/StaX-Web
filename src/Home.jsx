import React from 'react';

const Home = ({ setCurrentPage, scrollToId }) => {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="py-20 md:py-32 flex items-center justify-center bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Bring Your Vision to Life.
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We create stunning, responsive, and high-performing websites that captivate your audience and grow your business.
          </p>
          <button onClick={() => setCurrentPage('order')} className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-xl transform hover:scale-105">
            Start Your Project
          </button>
        </div>
      </section>

      {/* Featured Work (Portfolio Preview) Section */}
      <section id="featured-work" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src="https://placehold.co/800x600/3182CE/FFFFFF?text=Project+1" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Revamp</h3>
                <p className="text-gray-600">A modern e-commerce platform with seamless user experience and secure payment integration.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src="https://placehold.co/800x600/38A169/FFFFFF?text=Project+2" alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Corporate Website</h3>
                <p className="text-gray-600">A professional corporate site designed to highlight key services and company values.</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <img src="https://placehold.co/800x600/9B2C2C/FFFFFF?text=Project+3" alt="Project 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mobile App Landing Page</h3>
                <p className="text-gray-600">A vibrant and engaging landing page to showcase a new mobile application.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button onClick={() => setCurrentPage('portfolio')} className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">View Full Portfolio</button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-12 text-white">Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pricing Tier 1: Basic */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-400 mb-4">For small businesses getting started.</p>
              <div className="my-6">
                <span className="text-5xl font-extrabold">$999</span>
                <span className="text-lg text-gray-400"> / one-time</span>
              </div>
              <ul className="text-gray-300 text-left space-y-3 mb-8">
                <li>&#x2713; 5-Page Website</li>
                <li>&#x2713; Mobile-Friendly Design</li>
                <li>&#x2713; Contact Form</li>
                <li>&#x2713; Basic SEO</li>
              </ul>
              <button onClick={() => setCurrentPage('order')} className="block bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">Select Plan</button>
            </div>
            {/* Pricing Tier 2: Standard */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 text-center shadow-2xl transform scale-105 relative z-10">
              <div className="absolute top-0 right-0 mt-4 mr-4 bg-yellow-400 text-gray-900 text-xs font-bold py-1 px-3 rounded-full uppercase">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <p className="text-blue-200 mb-4">For growing businesses and startups.</p>
              <div className="my-6">
                <span className="text-5xl font-extrabold">$2,499</span>
                <span className="text-lg text-blue-200"> / one-time</span>
              </div>
              <ul className="text-blue-100 text-left space-y-3 mb-8">
                <li>&#x2713; 10-Page Website</li>
                <li>&#x2713; Custom UI/UX Design</li>
                <li>&#x2713; Blog or Portfolio Integration</li>
                <li>&#x2713; Advanced SEO</li>
                <li>&#x2713; 3-Month Support</li>
              </ul>
              <button onClick={() => setCurrentPage('order')} className="block bg-white text-blue-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">Select Plan</button>
            </div>
            {/* Pricing Tier 3: Enterprise */}
            <div className="bg-gray-800 rounded-2xl p-8 text-center shadow-lg transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-4">For large-scale, custom projects.</p>
              <div className="my-6">
                <span className="text-5xl font-extrabold">Custom</span>
              </div>
              <ul className="text-gray-300 text-left space-y-3 mb-8">
                <li>&#x2713; Custom Pages & Features</li>
                <li>&#x2713; E-commerce Solutions</li>
                <li>&#x2713; Full Backend Development</li>
                <li>&#x2713; Dedicated Project Manager</li>
                <li>&#x2713; Ongoing Support</li>
              </ul>
              <button onClick={() => setCurrentPage('order')} className="block bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;