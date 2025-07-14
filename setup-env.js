#!/usr/bin/env node

/**
 * Environment Variables Setup Script
 * 
 * This script helps users set up their environment variables for the SmartEnergy application.
 * It creates the necessary .env files from the example templates.
 * 
 * Usage: node setup-env.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Colors for console output
 */
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

/**
 * Logs a message with color
 * 
 * @param {string} message - Message to log
 * @param {string} color - Color to use
 */
function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

/**
 * Checks if a file exists
 * 
 * @param {string} filePath - Path to check
 * @returns {boolean} - Whether file exists
 */
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

/**
 * Copies a file from source to destination
 * 
 * @param {string} source - Source file path
 * @param {string} destination - Destination file path
 */
function copyFile(source, destination) {
  try {
    fs.copyFileSync(source, destination);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Main setup function
 */
function setupEnvironment() {
  log('🚀 SmartEnergy Environment Variables Setup', colors.bold + colors.blue);
  log('==========================================', colors.blue);
  
  // Check if we're in the right directory
  if (!fileExists('backend') || !fileExists('frontend')) {
    log('❌ Error: Please run this script from the project root directory', colors.red);
    log('   Make sure you have backend/ and frontend/ folders', colors.yellow);
    process.exit(1);
  }

  log('\n📁 Setting up environment variables...', colors.green);

  // Backend setup
  const backendEnvExample = path.join(__dirname, 'backend', 'env.example');
  const backendEnv = path.join(__dirname, 'backend', '.env');

  if (fileExists(backendEnv)) {
    log('⚠️  Backend .env file already exists. Skipping...', colors.yellow);
  } else if (fileExists(backendEnvExample)) {
    if (copyFile(backendEnvExample, backendEnv)) {
      log('✅ Backend .env file created successfully', colors.green);
    } else {
      log('❌ Failed to create backend .env file', colors.red);
    }
  } else {
    log('❌ Backend env.example file not found', colors.red);
  }

  // Frontend setup
  const frontendEnvExample = path.join(__dirname, 'frontend', 'env.example');
  const frontendEnv = path.join(__dirname, 'frontend', '.env.local');

  if (fileExists(frontendEnv)) {
    log('⚠️  Frontend .env.local file already exists. Skipping...', colors.yellow);
  } else if (fileExists(frontendEnvExample)) {
    if (copyFile(frontendEnvExample, frontendEnv)) {
      log('✅ Frontend .env.local file created successfully', colors.green);
    } else {
      log('❌ Failed to create frontend .env.local file', colors.red);
    }
  } else {
    log('❌ Frontend env.example file not found', colors.red);
  }

  log('\n📝 Next Steps:', colors.bold + colors.blue);
  log('1. Edit backend/.env with your Stripe secret key and other settings', colors.yellow);
  log('2. Edit frontend/.env.local with your API URLs and contact information', colors.yellow);
  log('3. Never commit .env files to version control', colors.red);
  log('4. Use different keys for development and production', colors.yellow);
  
  log('\n🔐 Security Reminders:', colors.bold + colors.red);
  log('• Keep your Stripe secret keys secure', colors.red);
  log('• Use test keys for development', colors.yellow);
  log('• Use live keys only in production', colors.yellow);
  log('• Regularly rotate your credentials', colors.red);

  log('\n✅ Setup complete!', colors.green);
  log('Run "npm start" in backend/ and "npm run dev" in frontend/ to start the application', colors.blue);
}

// Run the setup
setupEnvironment(); 