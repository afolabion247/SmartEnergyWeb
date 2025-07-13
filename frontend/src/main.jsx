import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Main Application Entry Point
 * 
 * This file serves as the entry point for the SmartEnergyWeb React application.
 * It initializes the React application and renders the root App component.
 * 
 * Key Features:
 * - React 18 with createRoot API
 * - Strict Mode for development debugging
 * - Global CSS imports (Tailwind CSS)
 * - Root component mounting
 * 
 * File Structure:
 * - App.jsx: Main application component with routing
 * - index.css: Global styles and Tailwind CSS imports
 * - components/: All React components
 */

// Create React root using React 18 createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with Strict Mode enabled
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 