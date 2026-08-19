const fs = require('fs');

let config = fs.readFileSync('vite.config.js', 'utf8');

if (!config.includes('gallery:')) {
  config = config.replace(
    /products:\s*resolve\(__dirname,\s*'products\.html'\)/,
    "products: resolve(__dirname, 'products.html'),\n        gallery: resolve(__dirname, 'gallery.html')"
  );
  fs.writeFileSync('vite.config.js', config, 'utf8');
  console.log('vite.config.js updated');
}
