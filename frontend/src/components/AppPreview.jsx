import React from 'react';

const AppPreview = () => {
  const handleStartTrial = () => {
    // Scroll to pricing section
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewReviews = () => {
    // Open reviews page or scroll to reviews section
    window.open('https://trustpilot.com/review/smartenergy.com', '_blank');
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      location: 'Austin, TX',
      comment: 'This app is a game-changer! I saved $156 on my last electric bill. The smart scheduling feature is incredible - it automatically runs my dishwasher and laundry during off-peak hours.',
      avatar: '👩‍💼',
      savings: '$156/month'
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 5,
      location: 'Seattle, WA',
      comment: 'Finally, an app that actually helps me understand my energy usage. The AI recommendations are spot-on. My bills dropped by 28% in just two months!',
      avatar: '👨‍💻',
      savings: '$89/month'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      location: 'Miami, FL',
      comment: 'As someone who cares about the environment, I love how this app helps me reduce my carbon footprint while saving money. The interface is so intuitive!',
      avatar: '👩‍🌾',
      savings: '$203/month'
    },
    {
      id: 4,
      name: 'David Thompson',
      rating: 5,
      location: 'Denver, CO',
      comment: 'The real-time monitoring feature is amazing. I can see exactly which appliances are using the most power and optimize accordingly. Highly recommend!',
      avatar: '👨‍🔧',
      savings: '$134/month'
    },
    {
      id: 5,
      name: 'Lisa Park',
      rating: 5,
      location: 'Portland, OR',
      comment: 'Setup was incredibly easy - just 5 minutes and I was up and running. The energy coach feature gives me personalized tips that actually work.',
      avatar: '👩‍🎨',
      savings: '$178/month'
    },
    {
      id: 6,
      name: 'Robert Williams',
      rating: 5,
      location: 'Nashville, TN',
      comment: 'I was skeptical at first, but the results speak for themselves. My energy bills have been consistently lower every month since I started using this app.',
      avatar: '👨‍🏫',
      savings: '$112/month'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Loved by 50,000+ Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our users are saying about their energy savings and experience with Smart Energy
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-green-50 rounded-full px-8 py-4">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-gray-800">4.9</span>
            <span className="text-gray-600">out of 5</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">50,000+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{review.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    {renderStars(review.rating)}
                  </div>
                  <div className="text-sm font-semibold text-green-600">{review.savings}</div>
                </div>
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>

        {/* App Screenshots Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              See the App in Action
            </h3>
            <p className="text-lg text-gray-600">
              Explore the features that are helping customers save money every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dashboard Screenshot */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 mx-auto w-64 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-sm font-semibold text-gray-800">Energy Dashboard</div>
                  <div className="text-xs text-gray-600 mt-2">Real-time monitoring</div>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Smart Dashboard</h4>
              <p className="text-sm text-gray-600">Track your energy usage in real-time with detailed analytics</p>
            </div>

            {/* Scheduling Screenshot */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 mx-auto w-64 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">⏰</div>
                  <div className="text-sm font-semibold text-gray-800">Smart Scheduling</div>
                  <div className="text-xs text-gray-600 mt-2">Optimize usage times</div>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Smart Scheduling</h4>
              <p className="text-sm text-gray-600">Automatically run appliances during off-peak hours</p>
            </div>

            {/* Tips Screenshot */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-4 mb-4 mx-auto w-64 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">💡</div>
                  <div className="text-sm font-semibold text-gray-800">Energy Tips</div>
                  <div className="text-xs text-gray-600 mt-2">Personalized advice</div>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Energy Coach</h4>
              <p className="text-sm text-gray-600">Get personalized tips to reduce your energy consumption</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-green-500 text-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Join Thousands of Happy Customers
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Start saving on your energy bills today with our AI-powered optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                onClick={handleStartTrial}
              >
                Start Free Trial
              </button>
              <button 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
                onClick={handleViewReviews}
              >
                View More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview; 