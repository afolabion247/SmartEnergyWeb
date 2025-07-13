import React from 'react';

/**
 * Pricing Plans Configuration
 * 
 * Defines the subscription tiers available for SmartEnergy platform.
 * Each plan includes:
 * - name: Display name for the plan
 * - price: Monthly cost in USD
 * - features: Array of features included in the plan
 * - id: Stripe price ID for payment processing
 * 
 * Note: Price IDs must be created in Stripe dashboard and match
 * the actual price IDs in your Stripe account.
 */
const plans = [
  { 
    name: 'Free', 
    price: 0, 
    features: ['Basic monitoring'], 
    id: 'price_1RjgEj2UXiuJnTqdpyNSF8Nz' 
  },
  { 
    name: 'Standard', 
    price: 9.99, 
    features: ['Monitoring + Analytics'], 
    id: 'price_1RjgJF2UXiuJnTqdCkPxzcgO' 
  },
  { 
    name: 'Premium', 
    price: 19.99, 
    features: ['Smart scheduling', 'Energy coach'], 
    id: 'price_1RjgOG2UXiuJnTqdZxPvKH57' 
  },
  { 
    name: 'Pro', 
    price: 49.99, 
    features: ['Multi-home', 'Solar optimization'], 
    id: 'price_1RjgVK2UXiuJnTqdUv02ZsX5' 
  },
];

/**
 * PricingPlans Component
 * 
 * Renders the pricing section with subscription plans and Stripe integration.
 * Features:
 * - Responsive grid layout for plan cards
 * - Stripe checkout integration for payments
 * - Error handling for failed API calls
 * - User-friendly error messages
 * - Loading states during form submission
 * 
 * @returns {JSX.Element} Pricing plans section
 */
const PricingPlans = () => {
  /**
   * Handles subscription button clicks and initiates Stripe checkout
   * 
   * @param {string} priceId - Stripe price ID for the selected plan
   */
  const handleSubscribe = async (priceId) => {
    try {
      // Make API call to backend to create Stripe checkout session
     // const response = await fetch('http://localhost:4242/create-checkout-session', {
      const response = await fetch('https://smart-energy-web-klrs.vercel.app/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      
      // Check if the API call was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Parse the response to get the checkout URL
      const data = await response.json();
      
      // Redirect to Stripe checkout if URL is received
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('No URL received from server');
        alert('Error: Unable to create checkout session. Please try again.');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Error: Unable to connect to payment server. Please try again.');
    }
  };

  return (
    <section className="py-12 text-center" data-section="pricing" id="pricing">
      <h2 className="text-3xl font-bold mb-6">Plans & Pricing</h2>
      
      {/* Responsive grid layout for pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {plans.map(plan => (
          <div key={plan.name} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            {/* Plan name and pricing */}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-2xl font-bold mt-2">${plan.price}/mo</p>
            
            {/* Feature list for each plan */}
            <ul className="mt-4 mb-6 text-left list-disc list-inside">
              {plan.features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
            
            {/* Subscribe button with different text for free vs paid plans */}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={() => handleSubscribe(plan.id)}
            >
              {plan.price === 0 ? 'Get Started Free' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans; 