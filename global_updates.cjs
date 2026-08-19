const fs = require('fs');

const filesToUpdate = [
  'about.html',
  'contact.html',
  'professionals.html',
  'field-stone.html',
  'slate-stone.html',
  'ripple-stone.html',
  'sandstone.html',
  'strips.html',
  'galaxy-mix.html',
  'waterfall-stone.html',
  'seamless-slabs.html',
  'products.html',
  'gallery.html',
  'index.html'
];

filesToUpdate.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let fileHtml = fs.readFileSync(file, 'utf8');
  
  // Replace CTA text
  fileHtml = fileHtml.replace(/>Book a Call\s*</g, '>Get In Touch <');
  fileHtml = fileHtml.replace(/>BOOK A CALL\s*</gi, '>Get In Touch <'); // Case insensitive for uppercase buttons if any
  fileHtml = fileHtml.replace(/>Book a Call<\/span>/g, '>Get In Touch</span>');
  
  // We need to inject the Gallery link into the navbar
  // The structure is typically:
  // <a href="products.html" class="...">Our Products</a>
  // We want to add: <a href="gallery.html" class="...">Gallery</a>
  
  // Desktop Nav
  if (!fileHtml.includes('href="gallery.html"')) {
    fileHtml = fileHtml.replace(
      /<a href="products\.html"[^>]*>Our Products<\/a>/,
      `$&
            <a href="gallery.html" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white/60 transition-colors">Gallery</a>`
    );
    
    // Mobile Nav
    fileHtml = fileHtml.replace(
      /<a href="products\.html" class="text-4xl font-serif mobile-link">Our Products<\/a>/,
      `$&
          <a href="gallery.html" class="text-4xl font-serif mobile-link">Gallery</a>`
    );
  }

  fs.writeFileSync(file, fileHtml, 'utf8');
  console.log(`Updated nav/CTA in ${file}`);
});
