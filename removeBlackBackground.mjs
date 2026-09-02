import fs from 'fs';
import { PNG } from 'pngjs';

function processImage(filePath) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(new PNG({ filterType: 4 }))
      .on('parsed', function () {
        for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
            const idx = (this.width * y + x) << 2;
            const r = this.data[idx];
            const g = this.data[idx + 1];
            const b = this.data[idx + 2];
            const a = this.data[idx + 3];

            // If pixel is pure black or very dark background
            if (r < 24 && g < 24 && b < 24) {
              this.data[idx + 3] = 0; // Make 100% transparent!
            } else if (r < 45 && g < 45 && b < 45) {
              // Smooth anti-aliased edge transparency
              const maxVal = Math.max(r, g, b);
              const alphaFactor = (maxVal - 24) / 21;
              this.data[idx + 3] = Math.round(a * Math.max(0, Math.min(1, alphaFactor)));
            }
          }
        }

        this.pack()
          .pipe(fs.createWriteStream(filePath))
          .on('finish', () => {
            console.log(`Processed ${filePath} -> Black background removed!`);
            resolve();
          })
          .on('error', reject);
      })
      .on('error', reject);
  });
}

async function run() {
  await processImage('src/assets/logo-symbol.png');
  await processImage('src/assets/logo-dark.png');
  console.log('All black backgrounds removed successfully!');
}

run().catch(console.error);
