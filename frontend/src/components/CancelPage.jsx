import React from 'react';

/**
 * CancelPage Component
 * 
 * Payment cancellation page for SmartEnergy platform.
 * Displayed when users cancel their Stripe payment process.
 * 
 * Features:
 * - Cancellation confirmation with clear messaging
 * - Benefits reminder to encourage retry
 * - Navigation options (Try Again, Need Help)
 * - Professional design with appropriate colors
 * 
 * @returns {JSX.Element} Payment cancellation page
 */
const CancelPage = () => {
  /**
   * Handles "Try Again" button click
   * Redirects user back to the main homepage to retry payment
   */
  const handleTryAgain = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-xl p-8">
        
        {/* Cancellation Icon and Header */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl">✕</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Payment Cancelled</h1>
          <p className="text-gray-600 mb-6">
            Your payment was cancelled. No charges were made to your account. You can try again anytime.
          </p>
        </div>

        {/* Benefits Reminder */}
        <div className="bg-red-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-red-800 mb-2">Why Subscribe?</h3>
          <ul className="text-sm text-red-700 space-y-1 text-left">
            <li>• Save up to 30% on energy bills</li>
            <li>• AI-powered optimization</li>
            <li>• Real-time monitoring</li>
            <li>• 24/7 customer support</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleTryAgain}
            className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
          >
            Try Again
          </button>
          <button
            onClick={() => window.open('mailto:support@smartenergy.com?subject=Payment%20Help', '_blank')}
            className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Need Help?
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelPage; 