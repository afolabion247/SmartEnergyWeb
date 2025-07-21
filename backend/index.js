
import express from 'express';
import Stripe from 'stripe';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Express Server Configuration
 * 
 * This server handles the backend functionality for SmartEnergy platform:
 * - Stripe payment processing
 * - CORS configuration for frontend communication
 * - API endpoints for checkout session creation
 */

// Initialize Express app
const app = express();

// Initialize Stripe with environment variable
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware Configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
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
                url: process.env.FRONTEND_SUCCESS_URL || 'http://localhost:5173/success',
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
            
            // URLs to redirect after payment completion (hardcoded)
           // success_url: 'http://localhost:5173/success',
           // cancel_url: 'http://localhost:5173/cancel',

            success_url: process.env.FRONTEND_SUCCESS_URL || 'http://localhost:5173/success',
            cancel_url: process.env.FRONTEND_CANCEL_URL || 'http://localhost:5173/cancel',
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
 * Health check endpoint
 * Used to verify server is running
 */
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

/**
 * Start the Express server
 * 
 * Server runs on hardcoded port 4242.
 */
const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`CORS Origin: ${process.env.CORS_ORIGIN || 'http://localhost:5173'}`);
});
