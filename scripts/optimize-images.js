import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function optimizeLogo() {
  const publicDir = path.join(process.cwd(), 'public');
  const sourceImagePath = path.join(publicDir, '1000870698-removebg-preview.png');
  const outputImagePath = path.join(publicDir, 'logo.webp');

  try {
    await sharp(sourceImagePath)
      .webp({ quality: 80 })
      .toFile(outputImagePath);
    console.log(`Optimized logo saved as ${outputImagePath}`);

    // Opcional: Eliminar la imagen PNG original después de la conversión exitosa
    // await fs.unlink(sourceImagePath);
    // console.log(`Deleted original image ${sourceImagePath}`);

  } catch (error) {
    console.error('Error optimizing logo:', error);
  }
}

optimizeLogo(); 