
# SmartEnergyWeb - AI-Powered Energy Optimization Platform

A modern, full-stack web application for smart energy management with Stripe subscription integration. Built with React, Express, and Tailwind CSS.

## 🌟 Features

### Frontend Features
- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Interactive Components**: 
  - Hero section with call-to-action buttons
  - How it works step-by-step guide
  - Pricing plans with Stripe integration
  - Customer reviews and testimonials
  - FAQ section with expandable answers
  - Footer with social links and navigation
- **Smooth Navigation**: React Router for seamless page transitions
- **Payment Flow**: Complete Stripe checkout integration
- **Success/Cancel Pages**: Professional post-payment experience

### Backend Features
- **Express Server**: RESTful API with CORS support
- **Stripe Integration**: Secure payment processing
- **ES Modules**: Modern JavaScript architecture
- **Error Handling**: Comprehensive error management
- **Subscription Management**: Support for multiple pricing tiers

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SmartEnergyWeb
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure Stripe**
   - Update `backend/index.js` with your Stripe secret key
   - Update price IDs in `frontend/src/components/PricingPlans.jsx`
   - Configure success/cancel URLs in backend

4. **Start the servers**
   ```bash
   # Start backend (Terminal 1)
   cd backend
   npm start

   # Start frontend (Terminal 2)
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173 (or 5174 if 5173 is busy)
   - Backend: http://localhost:4242

## 📁 Project Structure

```
SmartEnergyWeb/
├── backend/
│   ├── index.js              # Express server with Stripe integration
│   └── package.json          # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppPreview.jsx    # Customer reviews section
│   │   │   ├── CancelPage.jsx    # Payment cancellation page
│   │   │   ├── FAQs.jsx          # FAQ section
│   │   │   ├── Footer.jsx        # Site footer
│   │   │   ├── HeroSection.jsx   # Main hero section
│   │   │   ├── HowItWorks.jsx    # How it works guide
│   │   │   ├── PricingPlans.jsx  # Pricing plans with Stripe
│   │   │   └── SuccessPage.jsx   # Payment success page
│   │   ├── App.jsx               # Main app with routing
│   │   ├── main.jsx              # React entry point
│   │   └── index.css             # Global styles with Tailwind
│   ├── index.html                 # HTML template
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.js            # Vite configuration
│   ├── tailwind.config.js        # Tailwind CSS config
│   └── postcss.config.js         # PostCSS configuration
└── README.md                     # This file
```

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **ES Modules**: Modern JavaScript imports

### Backend
- **Express.js**: Fast, unopinionated web framework
- **Stripe**: Payment processing API
- **CORS**: Cross-origin resource sharing
- **ES Modules**: Modern JavaScript architecture

### Development Tools
- **npm**: Package manager
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 💳 Payment Integration

### Stripe Setup
1. Create a Stripe account
2. Get your test API keys
3. Create products and prices in Stripe dashboard
4. Update the backend with your secret key
5. Update frontend with your price IDs

### Current Price IDs
With real values from:
 Stripe Dashboard → Products → Pricing → Copy API ID
- Free: `price_obtain_the_priceID_from_your_stripe_account`
- Standard: `price_obtain_the_priceID_from_your_stripe_account`
- Premium: `price_obtain_the_priceID_from_your_stripe_account`
- Pro: `price_obtain_the_priceID_from_your_stripe_account`

## 🎨 UI Components

### Hero Section
- Compelling headline and value proposition
- Call-to-action buttons
- Trust indicators
- Visual elements (phone mockup, charts)

### Pricing Plans
- Four subscription tiers
- Feature comparison
- Stripe checkout integration
- Responsive grid layout

### How It Works
- Step-by-step process explanation
- Visual icons and colors
- Key features highlight
- Call-to-action

### Customer Reviews
- Testimonial cards
- Star ratings
- Savings amounts
- Customer avatars

### FAQ Section
- Expandable questions
- Contact support options
- Quick stats

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
```

### Customization
- Update colors in `tailwind.config.js`
- Modify content in component files
- Add new routes in `App.jsx`
- Update Stripe configuration

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist folder
```

### Backend (Railway/Render)
```bash
cd backend
# Deploy with environment variables
```

### Environment Variables for Production
- `STRIPE_SECRET_KEY`: Your live Stripe secret key
- `FRONTEND_URL`: Your production frontend URL

## 🧪 Testing

### Manual Testing
1. Test all navigation buttons
2. Verify Stripe checkout flow
3. Test success/cancel pages
4. Check responsive design
5. Validate form submissions

### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Touch-friendly interactions

## 🔒 Security Features

- CORS configuration
- Input validation
- Error handling
- Secure payment processing
- HTTPS enforcement (in production)

## 🚀 Performance

- Vite for fast development
- Optimized bundle size
- Lazy loading capabilities
- CDN-ready assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For support, email: support@smartenergy.com

---

**Built with ❤️ for a greener future**
