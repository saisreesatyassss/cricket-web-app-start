// scripts/generate-icons.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../public/icons');
const SVG_LOGO = path.join(__dirname, '../public/Logo.svg');

// Create icons directory if it doesn't exist
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Sizes for icons
const sizes = [192, 384, 512];

async function generateIcons() {
  try {
    for (const size of sizes) {
      await sharp(SVG_LOGO)
        .resize(size, size)
        .png()
        .toFile(path.join(ICONS_DIR, `icon-${size}x${size}.png`));
      
      console.log(`Generated ${size}x${size} icon`);
    }
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();