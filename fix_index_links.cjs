const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mapping = {
  'Field Stone': 'field-stone.html',
  'Slate Stone': 'slate-stone.html',
  'Ripple Stone': 'ripple-stone.html',
  'Sandstone': 'sandstone.html',
  'Strips': 'strips.html',
  'Galaxy Mix': 'galaxy-mix.html',
  'Waterfall Stone': 'waterfall-stone.html',
  'Seamless Slabs': 'seamless-slabs.html'
};

html = html.replace(/<div[^>]*window\.location\.href=''[^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>/g, (match, p1) => {
  if (mapping[p1]) {
    return match.replace(/window\.location\.href=''/, onclick="window.location.href=''");
  }
  return match;
});

// Update the Navbar "Our Products" link
html = html.replace(/<a href="index\.html#materials" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white\/60 transition-colors">Our Products<\/a>/g, '<a href="products.html" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white/60 transition-colors">Our Products</a>');

html = html.replace(/<a href="index\.html#materials" class="text-4xl font-serif mobile-link">Our Products<\/a>/g, '<a href="products.html" class="text-4xl font-serif mobile-link">Our Products</a>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed index.html links and navbar.');
