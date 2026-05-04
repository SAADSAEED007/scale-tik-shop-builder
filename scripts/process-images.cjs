const sharp = require('sharp');
const fs = require('fs');

async function processImages() {
  const assetsDir = 'c:/Users/SAAD/OneDrive/Documents/scale-tik-shop-builder/src/assets';

  // Task 3: Compress mobile.png and nav_logo.png to webp
  console.log('Compressing mobile.png...');
  await sharp(`${assetsDir}/mobile.png`)
    .webp({ quality: 75 })
    .toFile(`${assetsDir}/mobile.webp`);
    
  console.log('Compressing nav_logo.png...');
  await sharp(`${assetsDir}/nav_logo.png`)
    .webp({ quality: 80 })
    .toFile(`${assetsDir}/nav_logo.webp`);

  const files = [
    'tiktokshop_brand logo.png',
    'mobile.png', // Or perhaps mobile.webp? We'll provide dimensions
    'tiktokshop_logo.png',
    'five-star-rating-icon.svg',
    'nav_logo.png' // in case we need to update it
  ];

  for (const f of files) {
    const p = `${assetsDir}/${f}`;
    if (fs.existsSync(p)) {
      if (f.endsWith('.svg')) {
           console.log(`${f} SVG! manually check dimensions inside XML if needed`);
      } else {
           const metadata = await sharp(p).metadata();
           console.log(`DIMENSIONS ${f}: ${metadata.width}x${metadata.height}`);
      }
    }
  }
}

processImages().catch(console.error);
