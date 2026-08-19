const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Fonts
html = html.replace(
  'family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400',
  'family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400'
);
html = html.replace(
  "serif: ['Cormorant', 'serif']",
  "serif: ['Fraunces', 'serif']"
);

// 2. Curated Collections text centering and bg extension
html = html.replace(
  'class="w-full md:w-[35%] pt-24 md:pt-0 z-20 reveal bg-global-dark h-full flex flex-col justify-center pr-8 relative"',
  'class="w-full md:w-[35%] pt-24 md:pt-0 z-20 reveal bg-global-dark h-full flex flex-col justify-center pr-8 relative before:absolute before:inset-0 before:-left-[100vw] before:bg-global-dark before:-z-10"'
);
// Remove mt-auto pb-12
html = html.replace(
  '<div class="hidden md:flex items-center gap-2 mt-auto pb-12">',
  '<div class="hidden md:flex items-center gap-2">'
);

// 3. Scrub-sticky 80vh
html = html.replace(/\.scrub-sticky\s*\{\s*position:\s*sticky;\s*top:\s*0;\s*height:\s*100vh;/g, '.scrub-sticky {\n          position: sticky;\n          top: 10vh;\n          height: 80vh;');


// 4. Philosophy Section (Sourcing, Curation, Application)
const newGrid = `
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            
            <div class="reveal relative overflow-hidden group min-h-[400px] flex flex-col justify-end p-8 rounded-lg">
              <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/trust-bg.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" alt="Sourcing" />
              <div class="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/50 transition-colors duration-700"></div>
              <div class="relative z-10">
                <span class="block font-sans font-extralight text-6xl text-white/40 mb-4">01</span>
                <h3 class="font-serif text-2xl mb-4 text-white">Sourcing</h3>
                <p class="font-sans text-white/80 leading-relaxed text-sm">
                  We travel globally to unearth materials of exceptional character, focusing on unique geological formations and sustainable quarrying practices.
                </p>
              </div>
            </div>
            
            <div class="reveal delay-100 relative overflow-hidden group min-h-[400px] flex flex-col justify-end p-8 rounded-lg">
              <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slate.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" alt="Curation" />
              <div class="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/50 transition-colors duration-700"></div>
              <div class="relative z-10">
                <span class="block font-sans font-extralight text-6xl text-white/40 mb-4">02</span>
                <h3 class="font-serif text-2xl mb-4 text-white">Curation</h3>
                <p class="font-sans text-white/80 leading-relaxed text-sm">
                  Our collections are heavily edited. We reject the superfluous, presenting only materials that offer true architectural value and aesthetic longevity.
                </p>
              </div>
            </div>
            
            <div class="reveal delay-200 relative overflow-hidden group min-h-[400px] flex flex-col justify-end p-8 rounded-lg">
              <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-ripple.png" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-0" alt="Application" />
              <div class="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/50 transition-colors duration-700"></div>
              <div class="relative z-10">
                <span class="block font-sans font-extralight text-6xl text-white/40 mb-4">03</span>
                <h3 class="font-serif text-2xl mb-4 text-white">Application</h3>
                <p class="font-sans text-white/80 leading-relaxed text-sm">
                  Beyond supply, we consult on technical application, ensuring our surfaces perform flawlessly whether deployed on expansive floors or intricate feature walls.
                </p>
              </div>
            </div>

          </div>
`;

html = html.replace(/<div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-black\/10 pt-12">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, newGrid.trim() + '\n        </div>\n      </section>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully.');
