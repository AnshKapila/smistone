const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const newCards = `
                <!-- Card 1 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='./products/stone-tiles-and-slabs/index.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">01</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Stone Tiles & Slabs</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">Slate, Sandstone, Limestone, Marble, and Granite formatted for expansive surfaces.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530172/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slabs.png" alt="Stone Tiles and Slabs" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>

                <!-- Card 2 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='./products/thin-stone-veneer/index.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">02</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Thin Stone Veneer</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">Field Stone, Castle Stone, and Ledgers crafted for lightweight architectural applications.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-field.png" alt="Thin Stone Veneer" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>

                <!-- Card 3 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='./products/wall-panels/index.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">03</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Wall Panels</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">Engineered modular panels for seamless interior and exterior feature walls.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-strips.png" alt="Wall Panels" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>

                <!-- Card 4 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='./products/mosaics/index.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">04</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Mosaics</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">Detailed wall cladding and pool tile mosaics for intricate surface designs.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-ripple.png" alt="Mosaics" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>

                <!-- Card 5 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='./products/smineer/index.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">05</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">SMINEER (Add-on)</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">Our proprietary flexible stone veneer treatment available across categories.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-galaxy.png" alt="SMINEER" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>
`;

// Replace everything inside the track
html = html.replace(/(<div class="scrub-track"[^>]*>)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/, `$1
${newCards}
              </div>
            </div>
          </div>
        </div>
      </section>`);

html = html.replace(/height:\s*1200vh;\s*\/\*\s*8 cards\s*\*\//g, 'height: 750vh; /* 5 cards */');

fs.writeFileSync('index.html', html);
console.log('Homepage cards updated.');
