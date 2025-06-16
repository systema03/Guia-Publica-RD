import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
  'mstile-144x144.png': 144
};

async function generateFavicons() {
  const publicDir = path.join(process.cwd(), 'public');
  const sourceImagePath = path.join(publicDir, '1000870698-removebg-preview.png'); // Usar la imagen original
  
  // Leer la imagen fuente
  const sourceImageBuffer = await fs.readFile(sourceImagePath);
  
  // Generar cada tamaño
  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(sourceImageBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, filename));
    
    console.log(`Generated ${filename}`);
  }
  
  // Generar safari-pinned-tab.svg (versión en blanco y negro, si es posible con Sharp, o se puede omitir si no es crítico)
  // Sharp puede generar SVG a partir de PNG, pero para 'mask-icon' se necesita un SVG monocromático.
  // Si el logo no es una forma simple, esta conversión podría no ser ideal. 
  // Por ahora, generaremos un PNG monocromático y lo dejaremos como un paso manual si el SVG es complejo.
  await sharp(sourceImageBuffer)
    .resize(144, 144) // Tamaño común para un icono en blanco y negro
    .grayscale()
    .png()
    .toFile(path.join(publicDir, 'safari-pinned-tab.png')); // Cambiar a PNG ya que el SVG es complejo de generar de forma automática
  
  console.log('Generated safari-pinned-tab.png');
}

generateFavicons().catch(console.error); 