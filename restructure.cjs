const fs = require('fs');
const path = require('path');

// 1. Create Stubs
const basePageTemplate = fs.readFileSync(path.join(__dirname, 'products/thin-stone-veneer/field-stone.html'), 'utf8');
const baseCategoryTemplate = fs.readFileSync(path.join(__dirname, 'products/index.html'), 'utf8');

function createPage(filepath, title, category) {
  let content = basePageTemplate;
  // Replace titles
  content = content.replace(/<title>.*?<\/title>/g, `<title>${title} | SMI Stone</title>`);
  content = content.replace(/<h1.*?>.*?<\/h1>/g, `<h1 class="font-serif text-5xl md:text-7xl mb-6 tracking-tight">${title}</h1>`);
  content = content.replace(/Field Stone/g, title);
  
  // Clear the description
  content = content.replace(/<p class="font-sans text-body-muted-dark text-lg md:text-xl leading-relaxed max-w-2xl">[\s\S]*?<\/p>/, `<p class="font-sans text-body-muted-dark text-lg md:text-xl leading-relaxed max-w-2xl">${title} belonging to the ${category} category.</p>`);
  
  // Create directories if they don't exist
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
  console.log('Created:', filepath);
}

function createCategory(filepath, title) {
  let content = baseCategoryTemplate;
  content = content.replace(/<title>.*?<\/title>/g, `<title>${title} | SMI Stone</title>`);
  content = content.replace(/<h1.*?>.*?<\/h1>/g, `<h1 class="font-serif text-5xl md:text-7xl mb-6 tracking-tight">${title}</h1>`);
  content = content.replace(/Our Products/g, title);
  
  // Empty out the product grid for the stub
  const gridRegex = /(<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/section>)/;
  content = content.replace(gridRegex, `$1\n<!-- Stub Grid -->\n$2`);

  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
  console.log('Created:', filepath);
}

// Stub out Category Pages
createCategory('products/stone-tiles-and-slabs/index.html', 'Stone Tiles and Slabs');
createCategory('products/thin-stone-veneer/index.html', 'Thin Stone Veneer');
createCategory('products/wall-panels/index.html', 'Wall Panels');
createCategory('products/mosaics/index.html', 'Mosaics');
createCategory('products/smineer/index.html', 'SMINEER');

// Stub out Product Pages
createPage('products/stone-tiles-and-slabs/limestone.html', 'Limestone', 'Stone Tiles and Slabs');
createPage('products/stone-tiles-and-slabs/marble.html', 'Marble - Coming Soon', 'Stone Tiles and Slabs');
createPage('products/stone-tiles-and-slabs/granite.html', 'Granite - Coming Soon', 'Stone Tiles and Slabs');

createPage('products/thin-stone-veneer/castle-stone.html', 'Castle Stone', 'Thin Stone Veneer');
createPage('products/thin-stone-veneer/ledgers.html', 'Ledgers', 'Thin Stone Veneer');

createPage('products/mosaics/wall-cladding.html', 'Wall Cladding', 'Mosaics');
createPage('products/mosaics/pool-tile.html', 'Pool Tile', 'Mosaics');

// 2. Fix Navigation Links Globally
function fixLinksInFile(filepath) {
  let html = fs.readFileSync(filepath, 'utf8');
  
  // We determine depth to use relative paths if we want, but Vite prefers absolute for dev or we can use absolute.
  // Actually, Vite supports relative paths perfectly. If we are in /products/stone/, relative to root is ../../
  let depth = (filepath.match(/\//g) || []).length;
  let prefix = depth === 0 ? '' : '../'.repeat(depth);
  if (prefix === '') prefix = './'; // Ensure it starts with ./ or ../ for Vite

  // Replace Header/Footer standard links
  html = html.replace(/href="index\.html"/g, `href="${prefix}index.html"`);
  html = html.replace(/href="about\.html"/g, `href="${prefix}about.html"`);
  html = html.replace(/href="contact\.html"/g, `href="${prefix}contact.html"`);
  html = html.replace(/href="professionals\.html"/g, `href="${prefix}professionals.html"`);
  html = html.replace(/href="gallery\.html"/g, `href="${prefix}gallery.html"`);
  html = html.replace(/href="products\.html"/g, `href="${prefix}products/index.html"`);
  html = html.replace(/href="veneer\.html"/g, `href="${prefix}veneer.html"`);

  // Update product links from old flat structure to new nested structure
  const productMaps = {
    'slate-stone.html': 'products/stone-tiles-and-slabs/slate.html',
    'sandstone.html': 'products/stone-tiles-and-slabs/sandstone.html',
    'field-stone.html': 'products/thin-stone-veneer/field-stone.html',
    // Archived links (can point to archived or stay broken/removed, we'll point them to archived)
    'ripple-stone.html': 'archived/ripple-stone.html',
    'strips.html': 'archived/strips.html',
    'waterfall-stone.html': 'archived/waterfall-stone.html',
    'galaxy-mix.html': 'archived/galaxy-mix.html',
    'seamless-slabs.html': 'archived/seamless-slabs.html'
  };

  for (const [oldLink, newPath] of Object.entries(productMaps)) {
    // If the file is already using the old flat link (e.g., href="slate-stone.html" or window.location.href='slate-stone.html')
    // We replace it with prefix + newPath.
    // Use regex to catch both href="" and location.href=''
    const regex1 = new RegExp(`href=["']${oldLink}["']`, 'g');
    html = html.replace(regex1, `href="${prefix}${newPath}"`);
    
    const regex2 = new RegExp(`window\\.location\\.href=["']${oldLink}["']`, 'g');
    html = html.replace(regex2, `window.location.href='${prefix}${newPath}'`);
  }

  fs.writeFileSync(filepath, html, 'utf8');
}

// Recursively find HTML files
function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (file.endsWith('.html')) filelist.push(dirFile);
    }
  });
  return filelist;
}

const allHtmlFiles = walkSync('.');
allHtmlFiles.forEach(file => {
  // Normalize path separators to forward slash for processing
  const normalizedFile = file.replace(/\\/g, '/');
  fixLinksInFile(normalizedFile);
});

console.log('Link fixing complete.');
