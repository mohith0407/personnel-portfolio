'use client';
import { useState } from 'react';
import { contactInfo, socialLinks } from '@/constants/Data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [warning, setWarning] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'message') {
      if (value.length < 200) {
        setIsMessageValid(false);
        setWarning(`Minimum 200 characters required (${value.length}/200)`);
      } else if (value.length > 400) {
        setIsMessageValid(false);
        setWarning('⚠️ Message too long! Please reduce below 400 characters.');
      } else {
        setIsMessageValid(true);
        setWarning('');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_API_EMAIL_KEY,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsMessageValid(false);
        setWarning("");
      } else {
        alert('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('⚠️ An error occurred. Please try again.');
    } finally {
      setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Have a project? Let's talk about how I can help.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-24">

          {/* Contact Form (Left Side) */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={200}
                  maxLength={400}
                  className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 transition ${
                    warning ? 'border-red-400' : 'border-gray-300'
                  }`}
                />
                <div className="flex justify-between items-center mt-1">
                  <p className={`text-xs ${warning ? 'text-red-500' : 'text-gray-500'}`}>
                    {warning || `${formData.message.length}/400 characters`}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300 ${
    !isSubmitting
      ? 'bg-amber-500 hover:bg-amber-600 cursor-pointer'
      : 'bg-gray-300 cursor-not-allowed'
  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Details and Social Media (Right Side) */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-10 mb-12">
              {contactInfo.map((item, index) => (
                <a key={index} href={item.href} className="flex items-start gap-4 hover:text-amber-600 transition group">
                  <item.icon className="w-6 h-6 text-amber-500 group-hover:text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-amber-600">{item.title}</p>
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Connect with me</h3>
            <div className="flex items-center space-x-12">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.label}
                  className="p-2 border border-gray-300 rounded-full text-gray-700 
                 hover:bg-amber-500 hover:text-white 
                 transition duration-300 transform hover:scale-110 shadow-sm"
                >
                  <link.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
