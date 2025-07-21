import React, { useState } from 'react';

/**
 * SupportPage Component
 * 
 * Comprehensive customer support page with multiple contact methods:
 * - Contact form with email integration
 * - Multiple contact channels (email, phone, chat, WhatsApp)
 * - FAQ section for common questions
 * - Support hours and availability
 * 
 * Features:
 * - Form validation and error handling
 * - Email integration via mailto links
 * - Responsive design for all devices
 * - Interactive contact method cards
 * 
 * @returns {JSX.Element} Complete support page
 */
const SupportPage = () => {
  /**
   * Form data state for contact form
   * Includes all form fields with validation
   */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium' // Default priority level
  });

  // Loading state during form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form submission status (success/error/null)
  const [submitStatus, setSubmitStatus] = useState(null);

  /**
   * Handles input changes for all form fields
   * Updates the formData state with new values
   * 
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handles form submission
   * 
   * Process:
   * 1. Prevents default form submission
   * 2. Sets loading state
   * 3. Simulates API call (replace with actual backend integration)
   * 4. Opens email client with pre-filled content
   * 5. Shows success/error feedback
   * 6. Resets form on success
   * 
   * @param {Event} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call delay (replace with actual backend integration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Use hardcoded support email
      const supportEmail = 'support@smartenergy.com';
      
      // Create mailto link with form data
      const mailtoLink = `mailto:${supportEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPriority: ${formData.priority}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open email client with pre-filled content
      window.location.href = mailtoLink;
      
      // Show success message and reset form
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', priority: 'medium' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Contact methods configuration
   * 
   * Each method includes:
   * - icon: Emoji icon for visual representation
   * - title: Display name
   * - description: Brief explanation
   * - contact: Contact information
   * - action: Function to execute when clicked
   * - color: Background color for icon
   */
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@smartenergy.com',
      action: () => {
        window.location.href = 'mailto:support@smartenergy.com';
      },
      color: 'bg-blue-500'
    },
    {
      icon: '📞',
      title: 'Phone Support',
      description: 'Call us directly',
      contact: '+1 (555) 123-4567',
      action: () => {
        window.location.href = 'tel:+15551234567';
      },
      color: 'bg-green-500'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 24/7',
      action: () => {
        window.open('https://tawk.to/chat/smartenergy', '_blank');
      },
      color: 'bg-purple-500'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      description: 'Message us on WhatsApp',
      contact: '+1 (555) 123-4567',
      action: () => {
        window.open('https://wa.me/15551234567', '_blank');
      },
      color: 'bg-green-600'
    }
  ];

  /**
   * Quick help links for common support topics
   * These can be expanded to link to specific help articles
   */
  const quickLinks = [
    { title: 'How to get started', href: '#getting-started' },
    { title: 'Billing & Payments', href: '#billing' },
    { title: 'Technical Issues', href: '#technical' },
    { title: 'Account Management', href: '#account' },
    { title: 'Feature Requests', href: '#features' },
    { title: 'Privacy & Security', href: '#privacy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Customer Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you get the most out of SmartEnergy. 
              Choose your preferred way to reach our support team.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            
            {/* Success message display */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                </div>
              </div>
            )}

            {/* Error message display */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span>
                  <span className="text-red-800">There was an error sending your message. Please try again.</span>
                </div>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Subject field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="What can we help you with?"
                />
              </div>

              {/* Priority selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="low">Low - General inquiry</option>
                  <option value="medium">Medium - Account issue</option>
                  <option value="high">High - Technical problem</option>
                  <option value="urgent">Urgent - Service down</option>
                </select>
              </div>

              {/* Message textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Please describe your issue or question in detail..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Methods Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Other Ways to Reach Us
              </h2>
              
              {/* Contact method cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                    onClick={method.action}
                  >
                    <div className={`w-12 h-12 ${method.color} rounded-full flex items-center justify-center text-white text-xl mb-4`}>
                      {method.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                    <p className="text-green-600 font-medium">{method.contact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Help Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quick Help
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-green-600 hover:text-green-700 font-medium text-sm hover:underline"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Support Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency support only</span>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    <strong>24/7 Emergency Support:</strong> For critical issues affecting your service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">How do I reset my password?</h3>
              <p className="text-gray-600 text-sm">
                Go to the login page and click "Forgot Password". Enter your email address and we'll send you a reset link.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">How do I cancel my subscription?</h3>
              <p className="text-gray-600 text-sm">
                Log into your account, go to Settings → Billing, and click "Cancel Subscription". You can reactivate anytime.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600 text-sm">
                We accept all major credit cards (Visa, MasterCard, American Express) and PayPal.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">How long does setup take?</h3>
              <p className="text-gray-600 text-sm">
                Setup takes just 5 minutes. Simply connect your energy provider account and our AI will start optimizing immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage; 