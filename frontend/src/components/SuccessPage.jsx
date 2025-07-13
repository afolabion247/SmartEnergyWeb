import React from 'react';

/**
 * SuccessPage Component
 * 
 * Post-payment success confirmation page for SmartEnergy platform.
 * Displayed after successful Stripe payment completion.
 * 
 * Features:
 * - Success confirmation with visual feedback
 * - Next steps guidance for new customers
 * - Navigation options (Dashboard, Support)
 * - Professional design with brand colors
 * 
 * @returns {JSX.Element} Success confirmation page
 */
const SuccessPage = () => {
  /**
   * Handles "Go to Dashboard" button click
   * Redirects user to the main homepage
   */
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-xl p-8">
        
        {/* Success Icon and Header */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for subscribing to SmartEnergy. Your subscription is now active and you'll start saving on your energy bills immediately.
          </p>
        </div>

        {/* Next Steps Guidance */}
        <div className="bg-green-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-green-800 mb-2">What's Next?</h3>
          <ul className="text-sm text-green-700 space-y-1 text-left">
            <li>• Check your email for setup instructions</li>
            <li>• Download our mobile app</li>
            <li>• Connect your energy provider</li>
            <li>• Start monitoring your usage</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleGoHome}
            className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => window.open('mailto:support@smartenergy.com', '_blank')}
            className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage; 