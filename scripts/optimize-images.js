import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputImage = join(__dirname, '../public/1000870698-removebg-preview.png');
const outputWebP = join(__dirname, '../public/logo-optimized.webp');
const outputPNG = join(__dirname, '../public/logo-optimized.png');

async function optimizeImages() {
  try {
    // Optimize and convert to WebP
    await sharp(inputImage)
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputWebP);

    // Optimize PNG
    await sharp(inputImage)
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(outputPNG);

    console.log('Images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 