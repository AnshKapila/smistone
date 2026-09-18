const fs = require('fs');

function generateCard(num, title, desc, img, link, delay) {
  return `
              <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal ${delay ? 'delay-'+delay : ''}" onclick="window.location.href='${link}'">
                <div class="flex-grow">
                  <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">${num}</span>
                  <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">${title}</h3>
                  <p class="font-sans text-sm text-body-muted-dark mb-8">${desc}</p>
                </div>
                <div class="relative w-full aspect-[4/3] overflow-hidden rounded mt-auto">
                  <img src="${img}" alt="${title}" class="w-full h-full object-cover hover-card-img" />
                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                  </div>
                </div>
              </div>`;
}

function updateGrid(filepath, cardsHtml) {
  let html = fs.readFileSync(filepath, 'utf8');
  const gridRegex = /(<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/section>)/;
  
  if (gridRegex.test(html)) {
    html = html.replace(gridRegex, `$1\n${cardsHtml}\n$2`);
    fs.writeFileSync(filepath, html, 'utf8');
    console.log('Updated grid in:', filepath);
  } else {
    console.log('Could not find grid in:', filepath);
  }
}

// 1. products/index.html
const productsMain = [
  generateCard('01', 'Stone Tiles & Slabs', 'Slate, Sandstone, Limestone, Marble, and Granite formatted for expansive surfaces.', 'https://www.regattaexports.com/wp-content/uploads/2017/03/Fantasy-Brown-Marble.webp', '../products/stone-tiles-and-slabs/index.html', ''),
  generateCard('02', 'Thin Stone Veneer', 'Field Stone, Castle Stone, and Ledgers crafted for lightweight applications.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/Terra-Red.webp', '../products/thin-stone-veneer/index.html', '100'),
  generateCard('03', 'Wall Panels', 'Engineered modular panels for seamless interior and exterior feature walls.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/Stone-Articles-01.webp', '../products/wall-panels/index.html', '200'),
  generateCard('04', 'Mosaics', 'Detailed wall cladding and pool tile mosaics for intricate surface designs.', 'https://www.regattaexports.com/wp-content/uploads/2019/04/Raveena-Circles-Stone-Articles.webp', '../products/mosaics/index.html', '300')
].join('\n');
updateGrid('products/index.html', productsMain);

// 2. products/stone-tiles-and-slabs/index.html
const stoneTiles = [
  generateCard('01', 'Slate', 'Minimalist, matte finishes ideal for contemporary luxury spaces.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/Black-Slate-1200x1200-1.webp', 'slate.html', ''),
  generateCard('02', 'Sandstone', 'Warm, textured finishes with natural variation.', 'https://www.regattaexports.com/wp-content/uploads/2017/03/Kandla-Grey.webp', 'sandstone.html', '100'),
  generateCard('03', 'Limestone', 'Subtle, elegant aesthetic for refined environments.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/Lime-Black-Limestone.webp', 'limestone.html', '200'),
  generateCard('04', 'Marble', 'Classic luxury materials.', 'https://www.regattaexports.com/wp-content/uploads/2026/08/Toronto-Marble-Swatch.webp', 'marble.html', '300'),
  generateCard('05', 'Granite', 'Durable, high-performance materials.', 'https://www.regattaexports.com/wp-content/uploads/2015/11/Absolute-Black-Granite-1024x1024-1.webp', 'granite.html', '')
].join('\n');
updateGrid('products/stone-tiles-and-slabs/index.html', stoneTiles);

// 3. products/thin-stone-veneer/index.html
const thinVeneer = [
  generateCard('01', 'Field Stone', 'Rugged, natural formations for robust exterior and interior facades.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/Thainsos-Green-scaled.webp', 'field-stone.html', ''),
  generateCard('02', 'Castle Stone', 'Historical, grand aesthetics crafted for lightweight applications.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/Sparkle-White-scaled.webp', 'castle-stone.html', '100'),
  generateCard('03', 'Ledgers', 'Linear, stacked profiles for modern textural depth.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/Mint-Yellow-scaled.webp', 'ledgers.html', '200')
].join('\n');
updateGrid('products/thin-stone-veneer/index.html', thinVeneer);

// 4. products/mosaics/index.html
const mosaics = [
  generateCard('01', 'Wall Cladding', 'Detailed mosaics for intricate wall surface designs.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/crazy-pathway.webp', 'wall-cladding.html', ''),
  generateCard('02', 'Pool Tile', 'Specialized tiles for aquatic and high-moisture environments.', 'https://www.regattaexports.com/wp-content/uploads/2017/04/Tumbled-Grey-20x20cm.webp', 'pool-tile.html', '100')
].join('\n');
updateGrid('products/mosaics/index.html', mosaics);
