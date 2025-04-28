// scripts/generate-splash.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SPLASH_DIR = path.join(__dirname, '../public/splash');
const SVG_LOGO = path.join(__dirname, '../public/logo.svg');

// Create splash directory if it doesn't exist
if (!fs.existsSync(SPLASH_DIR)) {
  fs.mkdirSync(SPLASH_DIR, { recursive: true });
}

// iOS splash screen dimensions [width, height]
const splashScreens = [
  [2048, 2732], // iPad Pro 12.9"
  [1668, 2388], // iPad Pro 11"
  [1536, 2048], // iPad Air
  [1125, 2436], // iPhone X/XS/11 Pro
  [828, 1792],  // iPhone XR/11
  [750, 1334],  // iPhone 8/SE
  [640, 1136],  // iPhone 5/SE
];

async function generateSplashScreens() {
  try {
    // Resize logo to fit properly on splash screens
    const logoSize = 512;
    const logoBuffer = await sharp(SVG_LOGO)
      .resize(logoSize, logoSize)
      .toBuffer();

    for (const [width, height] of splashScreens) {
      // Create a blank white canvas
      const canvas = sharp({
        create: {
          width,
          height,
          channels: 4,
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        }
      });

      // Calculate position to center the logo
      const left = Math.floor((width - logoSize) / 2);
      const top = Math.floor((height - logoSize) / 2);

      // Composite the logo onto the canvas
      await canvas
        .composite([
          {
            input: logoBuffer,
            left,
            top
          }
        ])
        .toFile(path.join(SPLASH_DIR, `apple-splash-${width}-${height}.png`));
      
      console.log(`Generated ${width}x${height} splash screen`);
    }
  } catch (error) {
    console.error('Error generating splash screens:', error);
  }
}

generateSplashScreens();