const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix Hero Heading Font
html = html.replace(
  'class="font-sans font-light text-[12vw] leading-[1] md:text-7xl lg:text-[80px] tracking-tightest mb-6 text-white"',
  'class="font-serif font-light text-[12vw] leading-[1] md:text-7xl lg:text-[80px] tracking-tightest mb-6 text-white"'
);

// 2. Philosophy Section (Sourcing, Curation, Application)
const newPhil = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            
            <div class="reveal relative overflow-hidden group h-[400px] md:h-[500px] flex flex-col justify-between p-8 rounded-lg bg-white border border-black/10">
              <div class="absolute inset-0 w-full h-full bg-black/60 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/trust-bg.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 translate-y-full group-hover:translate-y-0 z-[-1] pointer-events-none" alt="Sourcing" />
              
              <div class="relative z-10 w-full flex justify-start">
                <span class="block font-sans font-extralight text-6xl text-black/20 group-hover:text-white/40 transition-colors duration-500">01</span>
              </div>
              <div class="relative z-10 w-full">
                <h3 class="font-serif text-2xl mb-4 text-black group-hover:text-white transition-colors duration-500">Sourcing</h3>
                <p class="font-sans text-body-muted-light group-hover:text-white/80 transition-colors duration-500 leading-relaxed text-sm">
                  We travel globally to unearth materials of exceptional character, focusing on unique geological formations and sustainable quarrying practices.
                </p>
              </div>
            </div>
            
            <div class="reveal delay-100 relative overflow-hidden group h-[400px] md:h-[500px] flex flex-col justify-between p-8 rounded-lg bg-white border border-black/10">
              <div class="absolute inset-0 w-full h-full bg-black/60 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slate.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 translate-y-full group-hover:translate-y-0 z-[-1] pointer-events-none" alt="Curation" />
              
              <div class="relative z-10 w-full flex justify-start">
                <span class="block font-sans font-extralight text-6xl text-black/20 group-hover:text-white/40 transition-colors duration-500">02</span>
              </div>
              <div class="relative z-10 w-full">
                <h3 class="font-serif text-2xl mb-4 text-black group-hover:text-white transition-colors duration-500">Curation</h3>
                <p class="font-sans text-body-muted-light group-hover:text-white/80 transition-colors duration-500 leading-relaxed text-sm">
                  Our collections are heavily edited. We reject the superfluous, presenting only materials that offer true architectural value and aesthetic longevity.
                </p>
              </div>
            </div>
            
            <div class="reveal delay-200 relative overflow-hidden group h-[400px] md:h-[500px] flex flex-col justify-between p-8 rounded-lg bg-white border border-black/10">
              <div class="absolute inset-0 w-full h-full bg-black/60 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-ripple.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 translate-y-full group-hover:translate-y-0 z-[-1] pointer-events-none" alt="Application" />
              
              <div class="relative z-10 w-full flex justify-start">
                <span class="block font-sans font-extralight text-6xl text-black/20 group-hover:text-white/40 transition-colors duration-500">03</span>
              </div>
              <div class="relative z-10 w-full">
                <h3 class="font-serif text-2xl mb-4 text-black group-hover:text-white transition-colors duration-500">Application</h3>
                <p class="font-sans text-body-muted-light group-hover:text-white/80 transition-colors duration-500 leading-relaxed text-sm">
                  Beyond supply, we consult on technical application, ensuring our surfaces perform flawlessly whether deployed on expansive floors or intricate feature walls.
                </p>
              </div>
            </div>

          </div>
`;
html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, newPhil.trim() + '\n        </div>\n      </section>');


// 3. Scrub-container height
html = html.replace(/height: 400vh;/g, 'height: 800vh;');

// 4. Update the Scrub Cards structure to have consistent margins (remove padding from parent, add to inner divs)
html = html.replace(/class="w-\[85vw\] md:w-\[400px\] flex-shrink-0 bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger"/g, 'class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]"');
html = html.replace(/<div class="relative w-full aspect-\[4\/3\] overflow-hidden rounded">/g, '<div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">');

html = html.replace(/<\/div>\s*<\/div>\s*<!-- Card/g, '</div></div>\n                </div>\n\n                <!-- Card');
// Fix last card closing tags
html = html.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/, '</div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>');

html = html.replace(/<div>\s*<span class="block font-sans font-extralight text-5xl/g, '<div class="p-6 pb-0 flex-grow">\n                    <span class="block font-sans font-extralight text-5xl');

// 5. Specialty Applications (Move Subheading, Add CTA)
html = html.replace(
  '<h2 class="font-serif text-5xl md:text-7xl mb-4">Specialty Applications</h2>',
  '<h2 class="font-serif text-5xl md:text-7xl mb-4">Specialty Applications</h2>\n              <p class="font-sans text-body-muted-light max-w-sm">\n                Beyond flooring and facades, our materials are adapted for bespoke interior elements.\n              </p>'
);
html = html.replace(
  '<div class="text-right hidden md:block">\n              <p class="font-sans text-body-muted-light max-w-sm">\n                Beyond flooring and facades, our materials are adapted for bespoke interior elements.\n              </p>\n            </div>',
  '<div class="text-right hidden md:block">\n              <a href="contact.html" class="btn-ghost hover-trigger">\n                Get In Touch <i data-lucide="chevron-right" class="w-4 h-4 icon-arrow"></i>\n              </a>\n            </div>'
);

// 6. Dedicated to the trade link
html = html.replace(/href="professionals\.html"\s*class="btn-primary hover-trigger"/, 'href="contact.html" class="btn-primary hover-trigger"');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done with index.html bulk updates');
