import React, { useState } from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Order from './Order';
import './index.css';

// Main App Component
const App = () => {
  // State to manage the current page view
  const [currentPage, setCurrentPage] = useState('home');

  // Utility function to scroll to a specific ID
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Conditionally render page content based on currentPage state
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} scrollToId={scrollToId} />;
      case 'portfolio':
        return <Portfolio />;
      case 'order':
        return <Order />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-center">
          <div className="flex space-x-4 md:space-x-8 items-center">
            <button onClick={() => setCurrentPage('home')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Home</button>
            <button onClick={() => setCurrentPage('portfolio')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Portfolio</button>
            <a href="#home" className="flex-shrink-0">
              <span className="text-3xl font-bold text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105">StaX Web Designs</span>
            </a>
            <button onClick={() => scrollToId('contact-us')} className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300">Contact</button>
            <button onClick={() => setCurrentPage('order')} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300">Order</button>
          </div>
        </nav>
      </header>

      {/* Render the current page content */}
      {renderPageContent()}

      {/* Footer / Contact Us Section */}
      <footer id="contact-us" className="bg-gray-900 text-white py-8 md:py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4">Ready to start your project? Contact us today to discuss your vision.</p>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06L6.222 9.435a1 1 0 00-.58.986l-.74 4.435a1 1 0 01-1.06.54l-2.153-.362A1 1 0 012 14.847V3z" />
                  <path d="M14.847 2a1 1 0 00-.836-.986l-4.435.74a1 1 0 00-1.06.54l-1.065 1.785a1 1 0 01-.58.986l-.74 4.435a1 1 0 00.54 1.06l4.435.74a1 1 0 001.06-.54l1.785-1.065a1 1 0 01.986-.58l4.435-.74a1 1 0 00.54-1.06L15.653 3a1 1 0 00-.836-.986z" />
                </svg>
                <span className="text-gray-300">555-123-4567</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">hello@staxwebdesigns.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">123 Design Street, Creativille, CA 90210</span>
              </p>
            </div>
          </div>
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">StaX Web Designs</h3>
            <p className="text-gray-400">&copy; 2024. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
