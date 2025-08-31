import React, { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-center text-4xl md:text-6xl font-extrabold mb-8">Start Your Project</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Tell us about your project and we'll get back to you with a personalized quote.
        </p>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
            />
          </div>
          <div>
            <label htmlFor="plan" className="block text-sm font-medium text-gray-700">Interested Plan</label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
            >
              <option value="">Select a plan...</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="enterprise">Enterprise (Custom)</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Submit Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default Order;