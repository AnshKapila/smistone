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
  // Match the grid block
  // The original has: <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ...cards... </div> </div> </section>
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
  generateCard('01', 'Stone Tiles & Slabs', 'Slate, Sandstone, Limestone, Marble, and Granite formatted for expansive surfaces.', 'https://static.kite.ai/image/upload/v1776530172/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slabs.png', '../products/stone-tiles-and-slabs/index.html', ''),
  generateCard('02', 'Thin Stone Veneer', 'Field Stone, Castle Stone, and Ledgers crafted for lightweight applications.', 'https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-field.png', '../products/thin-stone-veneer/index.html', '100'),
  generateCard('03', 'Wall Panels', 'Engineered modular panels for seamless interior and exterior feature walls.', 'https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-strips.png', '../products/wall-panels/index.html', '200'),
  generateCard('04', 'Mosaics', 'Detailed wall cladding and pool tile mosaics for intricate surface designs.', 'https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-ripple.png', '../products/mosaics/index.html', '300'),
  generateCard('05', 'SMINEER (Add-on)', 'Our proprietary flexible stone veneer treatment available across categories.', 'https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-galaxy.png', '../products/smineer/index.html', '')
].join('\n');
updateGrid('products/index.html', productsMain);

// 2. products/stone-tiles-and-slabs/index.html
const stoneTiles = [
  generateCard('01', 'Slate', 'Minimalist, matte finishes ideal for contemporary luxury spaces.', 'https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slate.png', 'slate.html', ''),
  generateCard('02', 'Sandstone', 'Warm, textured finishes with natural variation.', 'https://static.kite.ai/image/upload/v1776530175/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-sandstone.png', 'sandstone.html', '100'),
  generateCard('03', 'Limestone', 'Subtle, elegant aesthetic for refined environments.', 'https://static.kite.ai/image/upload/v1776530172/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slabs.png', 'limestone.html', '200'),
  generateCard('04', 'Marble', 'Classic luxury materials. Coming Soon.', 'https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-strips.png', 'marble.html', '300'),
  generateCard('05', 'Granite', 'Durable, high-performance materials. Coming Soon.', 'https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-galaxy.png', 'granite.html', '')
].join('\n');
updateGrid('products/stone-tiles-and-slabs/index.html', stoneTiles);

// 3. products/thin-stone-veneer/index.html
const thinVeneer = [
  generateCard('01', 'Field Stone', 'Rugged, natural formations for robust exterior and interior facades.', 'https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-field.png', 'field-stone.html', ''),
  generateCard('02', 'Castle Stone', 'Historical, grand aesthetics crafted for lightweight applications.', 'https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slate.png', 'castle-stone.html', '100'),
  generateCard('03', 'Ledgers', 'Linear, stacked profiles for modern textural depth.', 'https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-strips.png', 'ledgers.html', '200')
].join('\n');
updateGrid('products/thin-stone-veneer/index.html', thinVeneer);

// 4. products/mosaics/index.html
const mosaics = [
  generateCard('01', 'Wall Cladding', 'Detailed mosaics for intricate wall surface designs.', 'https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-ripple.png', 'wall-cladding.html', ''),
  generateCard('02', 'Pool Tile', 'Specialized tiles for aquatic and high-moisture environments.', 'https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-waterfall.png', 'pool-tile.html', '100')
].join('\n');
updateGrid('products/mosaics/index.html', mosaics);

// 5. products/wall-panels/index.html & products/smineer/index.html (Empty/Coming Soon)
const emptyGrid = `<div class="col-span-full py-12 text-center text-white/50 font-sans">Options in this category are being updated. Check back soon.</div>`;
updateGrid('products/wall-panels/index.html', emptyGrid);
updateGrid('products/smineer/index.html', emptyGrid);
