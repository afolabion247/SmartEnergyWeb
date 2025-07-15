import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * 
 * Site footer with navigation links, contact information, and social media.
 * Uses environment variables for contact details and social media URLs.
 * 
 * Features:
 * - Company information and description
 * - Quick navigation links
 * - Social media links
 * - Contact information
 * - Back to top functionality
 * 
 * @returns {JSX.Element} Site footer
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  /**
   * Handles "Back to Top" button click
   * Smoothly scrolls to the top of the page
   */
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Handles section navigation
   * Smoothly scrolls to specified section
   * 
   * @param {string} sectionId - ID of the section to scroll to
   */
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Social media configuration
   * Uses environment variables for URLs with fallbacks
   */
  const socialIcons = [
    { 
      name: 'Facebook', 
      icon: '📘', 
      url: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/smartenergy' 
    },
    { 
      name: 'Twitter', 
      icon: '🐦', 
      url: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/smartenergy' 
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      url: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/company/smartenergy' 
    },
    { 
      name: 'Instagram', 
      icon: '📷', 
      url: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/smartenergy' 
    },
    { 
      name: 'YouTube', 
      icon: '📺', 
      url: import.meta.env.VITE_YOUTUBE_URL || 'https://youtube.com/smartenergy' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                Smart Energy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transform your home into a smart energy hub with AI-powered optimization. 
                Monitor, analyze, and save on your energy consumption with cutting-edge technology.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Contact</h4>
              <div className="flex items-center gap-2 text-gray-300">
                <span>📧</span>
                <a 
                  href={`mailto:${import.meta.env.VITE_SUPPORT_EMAIL || 'support@smartenergy.com'}`}
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  {import.meta.env.VITE_SUPPORT_EMAIL || 'support@smartenergy.com'}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleScrollToSection('about')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
                >
                  About
                </button>
              </li>
              <li>
                <a 
                  href="/privacy-policy" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms-of-use" 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('how-it-works')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('pricing')}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <Link 
                  to="/support"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-green-500 transition-colors duration-200"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Smart Energy. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Made with ❤️ for a greener future</span>
              <button 
                onClick={handleScrollToTop}
                className="text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 