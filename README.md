
# SmartEnergy Web Application

A full-stack web application for smart energy management with AI-powered optimization, featuring React frontend, Express backend, and Stripe payment integration.

## 🚀 Features

- **AI-Powered Energy Optimization**: Intelligent algorithms to reduce energy consumption
- **Real-time Monitoring**: Live energy usage tracking and analytics
- **Subscription Management**: Multiple pricing tiers with Stripe integration
- **Responsive Design**: Modern UI that works on all devices
- **Customer Support**: Comprehensive support system with multiple contact methods
- **Security**: Environment variables for secure configuration management

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Environment Variables** - Secure configuration management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Stripe** - Payment processing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
SmartEnergyWeb/
├── backend/
│   ├── index.js              # Express server with Stripe integration
│   ├── package.json          # Backend dependencies
│   └── env.example          # Environment variables template
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── App.jsx       # Main app component with routing
│   │   │   ├── HeroSection.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── AppPreview.jsx
│   │   │   ├── PricingPlans.jsx
│   │   │   ├── FAQs.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SupportPage.jsx
│   │   │   ├── SuccessPage.jsx
│   │   │   └── CancelPage.jsx
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Global styles with Tailwind
│   ├── index.html           # HTML template
│   ├── package.json         # Frontend dependencies
│   └── env.example         # Frontend environment variables template
├── .gitignore              # Git ignore rules
└── README.md              # Project documentation
```

## 🔧 Environment Variables Setup

### Security First Approach

This application uses environment variables to keep sensitive data secure. Never commit actual environment files to version control.

### Backend Environment Variables

1. **Copy the example file:**
   ```bash
   cd backend
   cp env.example .env
   ```

2. **Configure your variables in `.env`:**
   ```env
   # Server Configuration
   PORT=4242
   NODE_ENV=development

   # Stripe Configuration (SECRET KEYS - Keep Secure!)
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

   # Frontend URLs
   FRONTEND_URL=http://localhost:5173
   FRONTEND_SUCCESS_URL=http://localhost:5173/success
   FRONTEND_CANCEL_URL=http://localhost:5173/cancel

   # Security Configuration
   CORS_ORIGIN=http://localhost:5173
   SESSION_SECRET=your_session_secret_here

   # Logging Configuration
   LOG_LEVEL=info
   ```

### Frontend Environment Variables

1. **Copy the example file:**
   ```bash
   cd frontend
   cp env.example .env.local
   ```

2. **Configure your variables in `.env.local`:**
   ```env
   # API Configuration
   VITE_API_BASE_URL=https://smartenergywebservice.onrender.com
   VITE_LOCAL_API_URL=http://localhost:4242

   # Application Configuration
   VITE_APP_NAME=SmartEnergy
   VITE_APP_VERSION=1.0.0

   # Stripe Configuration (Public Keys)
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

   # Contact Information
   VITE_SUPPORT_EMAIL=support@smartenergy.com
   VITE_SUPPORT_PHONE=+1 (555) 123-4567

   # External Services
   VITE_LIVE_CHAT_URL=https://tawk.to/chat/smartenergy
   VITE_WHATSAPP_URL=https://wa.me/15551234567

   # Social Media Links
   VITE_FACEBOOK_URL=https://facebook.com/smartenergy
   VITE_TWITTER_URL=https://twitter.com/smartenergy
   VITE_LINKEDIN_URL=https://linkedin.com/company/smartenergy
   VITE_INSTAGRAM_URL=https://instagram.com/smartenergy
   VITE_YOUTUBE_URL=https://youtube.com/smartenergy
   ```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Stripe account for payment processing

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd SmartEnergyWeb
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables:**
   - Copy `backend/env.example` to `backend/.env`
   - Copy `frontend/env.example` to `frontend/.env.local`
   - Update the variables with your actual values

### Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:4242`

2. **Start the frontend development server:**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## 💳 Payment Integration

### Stripe Setup

1. **Create a Stripe account** at [stripe.com](https://stripe.com)

2. **Get your API keys** from the Stripe Dashboard:
   - Go to Developers → API keys
   - Copy your publishable key and secret key

3. **Create products and prices** in Stripe Dashboard:
   - Go to Products
   - Create products for each subscription tier
   - Note the price IDs for each plan

4. **Update environment variables:**
   - Add your Stripe secret key to `backend/.env`
   - Add your Stripe publishable key to `frontend/.env.local`

### Testing Payments

- Use Stripe's test card numbers for testing
- Test card: `4242 4242 4242 4242`
- Expiry: Any future date
- CVC: Any 3 digits

## 🔒 Security Features

### Environment Variables
- Sensitive data stored in environment variables
- `.env` files excluded from version control
- Separate configurations for development and production

### CORS Configuration
- Backend configured with proper CORS settings
- Frontend URL whitelisted for security

### API Security
- Input validation on all endpoints
- Error handling without exposing sensitive information
- HTTPS enforcement in production

## 🎨 UI Components

### Main Components
- **HeroSection**: Landing page hero with call-to-action
- **HowItWorks**: Step-by-step process explanation
- **AppPreview**: Interactive app demonstration
- **PricingPlans**: Subscription tiers with Stripe integration
- **FAQs**: Frequently asked questions
- **SupportPage**: Comprehensive customer support
- **Footer**: Site navigation and social links

### Features
- Responsive design for all screen sizes
- Smooth scrolling navigation
- Interactive hover effects
- Loading states and error handling
- Form validation and user feedback

## 🚀 Deployment

### Backend Deployment (Render)

1. **Connect your repository to Render**
2. **Set environment variables in Render dashboard**
3. **Deploy with Node.js buildpack**

### Frontend Deployment (Vercel/Netlify)

1. **Connect your repository**
2. **Set environment variables**
3. **Deploy with Vite build command**

### Environment Variables for Production

Update your environment variables for production URLs:

```env
# Backend (.env)
FRONTEND_URL=https://your-domain.com
FRONTEND_SUCCESS_URL=https://your-domain.com/success
FRONTEND_CANCEL_URL=https://your-domain.com/cancel
CORS_ORIGIN=https://your-domain.com

# Frontend (.env.local)
VITE_API_BASE_URL=https://your-backend-domain.com
```

## 🧪 Testing

### Manual Testing
1. Test all navigation links
2. Verify Stripe checkout flow
3. Test form submissions
4. Check responsive design
5. Validate environment variable usage

### Automated Testing (Future)
- Unit tests for components
- Integration tests for API endpoints
- E2E tests for user flows

## 🔧 Configuration

### Development vs Production
- Environment variables control behavior
- Different API endpoints for dev/prod
- Separate Stripe keys for testing/live

### Customization
- Update contact information in environment variables
- Modify social media links
- Customize Stripe products and prices
- Adjust CORS settings for your domain

## 📞 Support

### Getting Help
- Check the FAQ section on the website
- Use the support page for direct contact
- Review environment variable setup
- Verify Stripe configuration

### Common Issues
1. **Environment variables not loading**: Ensure `.env` files are in correct locations
2. **CORS errors**: Check CORS_ORIGIN in backend environment
3. **Stripe errors**: Verify API keys and price IDs
4. **Port conflicts**: Change PORT in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style
- Use meaningful variable names
- Add comments for complex logic
- Follow existing component structure
- Update environment variable documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔐 Security Notes

- Never commit `.env` files to version control
- Use different API keys for development and production
- Regularly rotate sensitive credentials
- Monitor for security vulnerabilities
- Keep dependencies updated

---

**Built with ❤️ for a greener future**
