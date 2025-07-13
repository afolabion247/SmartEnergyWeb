
import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';

/**
 * Express Server Configuration
 * 
 * This server handles the backend functionality for SmartEnergy platform:
 * - Stripe payment processing
 * - CORS configuration for frontend communication
 * - API endpoints for checkout session creation
 * 
 * Environment Variables Required:
 * - STRIPE_SECRET_KEY: Your Stripe secret key (test or live)
 * - FRONTEND_URL: URL of your frontend application
 */

// Initialize Express app
const app = express();

// Initialize Stripe with your secret key
// Replace with your actual Stripe secret key from dashboard
const stripe = new Stripe('sk_test_51Rc9052UXiuJnTqdvAzSekXjATshU9GZdWPlGacqjVPOr8I0k1tOv9SicXqRyRXDjzhQ2POONjCswLbc9X0Uzk3m00bLsa5g2I');

// Middleware Configuration
// Enable CORS for frontend communication
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

/**
 * POST /create-checkout-session
 * 
 * Creates a Stripe checkout session for subscription payments.
 * 
 * Request Body:
 * - priceId: Stripe price ID for the selected subscription plan
 * 
 * Response:
 * - Success: { url: "stripe_checkout_url" }
 * - Error: { error: "error_message", details: "additional_info" }
 * 
 * Special Handling:
 * - Free plan (priceId: 'price_free') redirects directly to success page
 * - Paid plans create Stripe checkout sessions
 */
app.post('/create-checkout-session', async (req, res) => {
    const { priceId } = req.body;
    
    try {
        // Handle free plan - redirect directly to success page
        if (priceId === 'price_free') {
            return res.json({ 
                url: 'http://localhost:5173/success',
                message: 'Free plan activated'
            });
        }

        // Create Stripe checkout session for paid plans
        const session = await stripe.checkout.sessions.create({
            // Accept card payments only
            payment_method_types: ['card'],
            
            // Set mode to subscription for recurring payments
            mode: 'subscription',
            
            // Define the line items (what customer is paying for)
            line_items: [{ 
                price: priceId,  // Stripe price ID
                quantity: 1       // One subscription
            }],
            
            // URLs to redirect after payment completion
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
        });
        
        // Return the checkout URL to frontend
        res.json({ url: session.url });
        
    } catch (error) {
        // Log error for debugging
        console.error('Stripe error:', error);
        
        // Return error response to frontend
        res.status(500).json({ 
            error: error.message,
            details: 'Unable to create checkout session'
        });
    }
});

/**
 * Start the Express server
 * 
 * Server runs on port 4242 by default.
 * In production, use environment variable PORT.
 */
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
