const fs = require('fs');
let template = fs.readFileSync('about.html', 'utf8');

const mainStart = template.indexOf('<main id="app">');
const mainEnd = template.indexOf('</main>') + 7;

const productsHTML = `
<main id="app">
      <section class="pt-40 pb-24 px-4 md:px-12 bg-global-dark min-h-[70vh]">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16 reveal">
            <h1 class="font-serif text-5xl md:text-7xl mb-6">Our Products</h1>
            <p class="font-sans text-body-muted-dark max-w-2xl text-lg">
              Explore our full range of curated architectural surface materials, each selected for unmatched consistency and textural depth.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Card 1 -->
            <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal" onclick="window.location.href='field-stone.html'">
              <div>
                <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">01</span>
                <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Field Stone</h3>
                <p class="font-sans text-sm text-body-muted-dark mb-8">Rugged, natural formations for robust exterior and interior facades.</p>
              </div>
              <div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-field.png" alt="Field Stone" class="w-full h-full object-cover hover-card-img" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                </div>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal delay-100" onclick="window.location.href='slate-stone.html'">
              <div>
                <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">02</span>
                <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Slate Stone</h3>
                <p class="font-sans text-sm text-body-muted-dark mb-8">Minimalist, matte finishes ideal for contemporary luxury spaces.</p>
              </div>
              <div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slate.png" alt="Slate Stone" class="w-full h-full object-cover hover-card-img" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                </div>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal delay-200" onclick="window.location.href='ripple-stone.html'">
              <div>
                <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">03</span>
                <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Ripple Stone</h3>
                <p class="font-sans text-sm text-body-muted-dark mb-8">Deep, organic carved textures that play dramatically with light.</p>
              </div>
              <div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-ripple.png" alt="Ripple Stone" class="w-full h-full object-cover hover-card-img" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                </div>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal delay-300" onclick="window.location.href='sandstone.html'">
              <div>
                <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">04</span>
                <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Sandstone</h3>
                <p class="font-sans text-sm text-body-muted-dark mb-8">Warm, granular surfaces that evoke desert landscapes.</p>
              </div>
              <div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                <img src="https://static.kite.ai/image/upload/v1776530175/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-sandstone.png" alt="Sandstone" class="w-full h-full object-cover hover-card-img" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                </div>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal" onclick="window.location.href='strips.html'">
              <div>
                <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">05</span>
                <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Strips</h3>
                <p class="font-sans text-sm text-body-muted-dark mb-8">Linear precision for creating elongated, modern architectural lines.</p>
              </div>
              <div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-strips.png" alt="Strips" class="w-full h-full object-cover hover-card-img" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                </div>
              </div>
            </div>

            <!-- Card 6 -->
            <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal delay-100" onclick="window.location.href='galaxy-mix.html'">
              <div>
                <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">06</span>
                <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Galaxy Mix</h3>
                <p class="font-sans text-sm text-body-muted-dark mb-8">A striking composite offering unpredictable, celestial patterning.</p>
              </div>
              <div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-galaxy.png" alt="Galaxy Mix" class="w-full h-full object-cover hover-card-img" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                </div>
              </div>
            </div>

            <!-- Card 7 -->
            <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal delay-200" onclick="window.location.href='waterfall-stone.html'">
              <div>
                <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">07</span>
                <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Waterfall Stone</h3>
                <p class="font-sans text-sm text-body-muted-dark mb-8">Cascading striations that mimic the fluid motion of water.</p>
              </div>
              <div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-waterfall.png" alt="Waterfall Stone" class="w-full h-full object-cover hover-card-img" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                </div>
              </div>
            </div>

            <!-- Card 8 -->
            <div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal delay-300" onclick="window.location.href='seamless-slabs.html'">
              <div>
                <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">08</span>
                <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Seamless Slabs</h3>
                <p class="font-sans text-sm text-body-muted-dark mb-8">Large-format pieces designed for continuous, uninterrupted surfaces.</p>
              </div>
              <div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/port-extra.png" alt="Seamless Slabs" class="w-full h-full object-cover hover-card-img" />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
</main>
`;

let productsPage = template.substring(0, mainStart) + productsHTML + template.substring(mainEnd);
productsPage = productsPage.replace('<title>About Us | SMI Stone</title>', '<title>Our Products | SMI Stone</title>');
// Ensure navbar points correctly to products page
productsPage = productsPage.replace(/<a href="index\.html#materials" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white\/60 transition-colors">Our Products<\/a>/g, '<a href="products.html" class="text-sm font-sans font-medium tracking-widest uppercase hover:text-white/60 transition-colors">Our Products</a>');
productsPage = productsPage.replace(/<a href="index\.html#materials" class="text-4xl font-serif mobile-link">Our Products<\/a>/g, '<a href="products.html" class="text-4xl font-serif mobile-link">Our Products</a>');

fs.writeFileSync('products.html', productsPage, 'utf8');

console.log('products.html created successfully');
