import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricingPlans from './components/PricingPlans';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import AppPreview from './components/AppPreview';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import SuccessPage from './components/SuccessPage';
import CancelPage from './components/CancelPage';
import SupportPage from './components/SupportPage';

/**
 * HomePage Component
 * 
 * Main landing page that combines all sections of the SmartEnergy platform.
 * This component renders the complete homepage with hero, features, pricing, 
 * testimonials, FAQ, and footer sections.
 * 
 * @returns {JSX.Element} Complete homepage layout
 */
function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero section with main value proposition and CTA buttons */}
      <HeroSection />
      
      {/* Step-by-step guide explaining how the platform works */}
      <HowItWorks />
      
      {/* Pricing plans with Stripe integration for subscriptions */}
      <PricingPlans />
      
      {/* Customer testimonials and app preview screenshots */}
      <AppPreview />
      
      {/* Frequently asked questions with expandable answers */}
      <FAQs />
      
      {/* Footer with navigation links and social media */}
      <Footer />
    </div>
  );
}

/**
 * Main App Component
 * 
 * Root component that sets up React Router for client-side navigation.
 * Handles routing between different pages including:
 * - Homepage (/) - Main landing page
 * - Success page (/success) - Post-payment success confirmation
 * - Cancel page (/cancel) - Payment cancellation page
 * - Support page (/support) - Customer support and contact form
 * 
 * @returns {JSX.Element} Router-wrapped application
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Main homepage with all sections */}
        <Route path="/" element={<HomePage />} />
        
        {/* Post-payment pages for Stripe checkout flow */}
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        
        {/* Customer support page with contact form */}
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </Router>
  );
}

export default App; 