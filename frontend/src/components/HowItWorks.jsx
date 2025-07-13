import React from 'react';

const HowItWorks = () => {
  const handleGetStarted = () => {
    // Scroll to pricing section
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      title: 'Connect Your Devices',
      description: 'Install our smart sensors and connect them to your existing electrical panel. Our easy-to-install devices monitor your energy usage in real-time.',
      icon: '🔌',
      color: 'bg-blue-500'
    },
    {
      title: 'Monitor & Analyze',
      description: 'Track your energy consumption patterns through our intuitive dashboard. Get detailed insights into which appliances use the most power.',
      icon: '📊',
      color: 'bg-green-500'
    },
    {
      title: 'Smart Optimization',
      description: 'Our AI-powered system automatically optimizes your energy usage by suggesting the best times to run appliances and identifying energy waste.',
      icon: '🤖',
      color: 'bg-purple-500'
    },
    {
      title: 'Save Money',
      description: 'Reduce your energy bills by up to 30% through intelligent scheduling, energy-saving recommendations, and automated controls.',
      icon: '💰',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How Smart Energy Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your home into a smart energy hub with our cutting-edge technology. 
            Monitor, optimize, and save on your energy consumption in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Step Card */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-2xl mb-4 mx-auto`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Real-time Monitoring</h4>
              <p className="text-gray-600 text-sm">
                Track your energy usage minute by minute with detailed analytics and insights.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-xl">🌱</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Eco-friendly</h4>
              <p className="text-gray-600 text-sm">
                Reduce your carbon footprint while saving money on your energy bills.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Mobile Control</h4>
              <p className="text-gray-600 text-sm">
                Control your smart devices from anywhere using our mobile app.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <button 
            className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            onClick={handleGetStarted}
          >
            Get Started Today
          </button>
          <p className="text-gray-600 mt-4">
            Join thousands of homeowners already saving on their energy bills
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 