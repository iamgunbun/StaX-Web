import React from 'react';

const Portfolio = () => {
  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-12">Our Portfolio</h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          From sleek corporate sites to dynamic e-commerce platforms, our work showcases our commitment to quality, design, and performance.
        </p>
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
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src="https://placehold.co/800x600/A0AEC0/FFFFFF?text=Project+4" alt="Project 4" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Personal Branding Site</h3>
              <p className="text-gray-600">A sleek and modern personal website for a professional consultant.</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src="https://placehold.co/800x600/B83280/FFFFFF?text=Project+5" alt="Project 5" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Non-profit Campaign</h3>
              <p className="text-gray-600">A powerful and informative website to drive donations and awareness for a cause.</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src="https://placehold.co/800x600/718096/FFFFFF?text=Project+6" alt="Project 6" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Restaurant Website</h3>
              <p className="text-gray-600">A visually appealing site with online menu and reservation features.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;