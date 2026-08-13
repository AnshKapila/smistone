const fs = require('fs');

const stones = [
  { name: 'Field Stone', slug: 'field-stone', img: 'cat-field.png' },
  { name: 'Slate Stone', slug: 'slate-stone', img: 'cat-slate.png' },
  { name: 'Ripple Stone', slug: 'ripple-stone', img: 'cat-ripple.png' },
  { name: 'Sandstone', slug: 'sandstone', img: 'cat-sandstone.png' },
  { name: 'Strips', slug: 'strips', img: 'cat-strips.png' },
  { name: 'Galaxy Mix', slug: 'galaxy-mix', img: 'cat-galaxy.png' },
  { name: 'Waterfall Stone', slug: 'waterfall-stone', img: 'cat-waterfall.png' },
  { name: 'Seamless Slabs', slug: 'seamless-slabs', img: 'port-extra.png' }
];

let baseHtml = fs.readFileSync('stone.html', 'utf8');

const galleryHTML = `
      <!-- TEXTURE SUBCATEGORIES -->
      <section class="py-24 bg-global-surface text-white px-4 md:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16 text-center reveal">
            <h2 class="font-serif text-3xl md:text-4xl mb-4">Texture Variations</h2>
            <p class="font-sans text-body-muted-dark max-w-xl mx-auto">Explore the diverse finishes and granular textures available within this collection.</p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="aspect-square bg-white/5 rounded overflow-hidden reveal"><img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-field.png" alt="Texture 1" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
            <div class="aspect-square bg-white/5 rounded overflow-hidden reveal delay-100"><img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slate.png" alt="Texture 2" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
            <div class="aspect-square bg-white/5 rounded overflow-hidden reveal delay-200"><img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-ripple.png" alt="Texture 3" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
            <div class="aspect-square bg-white/5 rounded overflow-hidden reveal delay-300"><img src="https://static.kite.ai/image/upload/v1776530175/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-sandstone.png" alt="Texture 4" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
            <div class="aspect-square bg-white/5 rounded overflow-hidden reveal"><img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-strips.png" alt="Texture 5" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
            <div class="aspect-square bg-white/5 rounded overflow-hidden reveal delay-100"><img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-galaxy.png" alt="Texture 6" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
            <div class="aspect-square bg-white/5 rounded overflow-hidden reveal delay-200"><img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-waterfall.png" alt="Texture 7" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
            <div class="aspect-square bg-white/5 rounded overflow-hidden reveal delay-300"><img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/port-extra.png" alt="Texture 8" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" /></div>
          </div>
        </div>
      </section>
`;

stones.forEach(stone => {
  let html = baseHtml;
  
  html = html.replace(/<h1 class="font-serif text-5xl md:text-7xl mb-4 text-white reveal active">[^<]+<\/h1>/, `<h1 class="font-serif text-5xl md:text-7xl mb-4 text-white reveal active">${stone.name}</h1>`);
  
  html = html.replace(/<img src="[^"]+" alt="Field Stone" class="w-full h-full object-cover parallax-img" data-speed="0\.3" \/>/, `<img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/${stone.img}" alt="${stone.name}" class="w-full h-full object-cover parallax-img" data-speed="0.3" />`);
  
  // Navbar updates for these generated pages
  html = html.replace(/<a href="[^"]*" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white\/60 transition-colors">Home<\/a>/g, '<a href="index.html" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white/60 transition-colors">Home</a>');
  html = html.replace(/<a href="[^"]*" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white\/60 transition-colors">Materials<\/a>/g, '<a href="index.html#materials" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white/60 transition-colors">Our Products</a>');
  html = html.replace(/<a href="[^"]*" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white\/60 transition-colors">Philosophy<\/a>/g, '<a href="about.html" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white/60 transition-colors">About Us</a>');
  
  // Remove portfolio link from desktop navbar completely
  html = html.replace(/<a href="#portfolio" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white\/60 transition-colors">Portfolio<\/a>\s*/g, '');
  
  html = html.replace(/<a href="#contact" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white\/60 transition-colors">Contact<\/a>/g, '<a href="contact.html" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white/60 transition-colors">Contact</a>');
  
  // Update mobile nav
  html = html.replace(/<div class="flex-1 flex flex-col justify-center items-start px-12 gap-8">[\s\S]*?<\/div>/, `
      <div class="flex-1 flex flex-col justify-center items-start px-12 gap-8">
        <a href="index.html" class="text-4xl font-serif mobile-link">Home</a>
        <a href="index.html#materials" class="text-4xl font-serif mobile-link">Our Products</a>
        <a href="about.html" class="text-4xl font-serif mobile-link">About Us</a>
        <a href="contact.html" class="text-4xl font-serif mobile-link mt-8 text-white/50">Contact Us</a>
      </div>`);
      
  // Update footer links to index.html sections properly
  html = html.replace(/<li><a href="#philosophy" class="hover:text-white transition-colors">Philosophy<\/a><\/li>/g, '<li><a href="about.html" class="hover:text-white transition-colors">About Us</a></li>');
  html = html.replace(/<li><a href="#portfolio" class="hover:text-white transition-colors">Portfolio<\/a><\/li>/g, '<li><a href="index.html#materials" class="hover:text-white transition-colors">Our Products</a></li>');
  html = html.replace(/<li><a href="#professionals" class="hover:text-white transition-colors">For Professionals<\/a><\/li>/g, '<li><a href="professionals.html" class="hover:text-white transition-colors">For Professionals</a></li>');
  html = html.replace(/<li><a href="#contact" class="hover:text-white transition-colors">Contact<\/a><\/li>/g, '<li><a href="contact.html" class="hover:text-white transition-colors">Contact</a></li>');
  
  html = html.replace('</main>', galleryHTML + '\n    </main>');
  
  fs.writeFileSync(`${stone.slug}.html`, html, 'utf8');
});

console.log('8 stone pages generated successfully.');
