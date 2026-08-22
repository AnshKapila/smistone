const fs = require('fs');
const path = require('path');

const productFiles = [
  'field-stone.html',
  'slate-stone.html',
  'ripple-stone.html',
  'sandstone.html',
  'strips.html',
  'galaxy-mix.html',
  'waterfall-stone.html',
  'seamless-slabs.html'
];

const veneerSection = `
      <!-- PROMOTIONAL STRIP (VENEER) -->
      <section class="w-full relative min-h-[40vh] py-16 flex flex-col md:flex-row items-center bg-gradient-to-b md:bg-gradient-to-r from-[#47331F] to-transparent overflow-hidden">
        <div class="w-full max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center relative z-10">
          
          <!-- Left Content -->
          <div class="w-full md:w-1/2 md:pr-16 mb-12 md:mb-0">
            <h3 style="font-family: 'Newsreader', serif;" class="text-3xl md:text-4xl text-[#F3F2F0] mb-4">
              [Placeholder] Beauty That Performs
            </h3>
            <p class="font-sans font-light text-[#F3F2F0]/90 text-lg mb-8 leading-relaxed max-w-lg">
              [Placeholder] Every finish in this collection is also available as a 2cm acoustic linear veneer — the same natural character, engineered for sound performance.
            </p>
            <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
              <a href="contact.html" class="bg-[#B98857] hover:bg-[#a6774a] text-black font-sans text-xs tracking-widest uppercase px-8 py-4 font-medium transition-colors text-center w-full md:w-auto">
                Inquire About Veneer
              </a>
              <a href="veneer.html" class="font-sans text-xs tracking-widest uppercase text-[#F3F2F0] hover:text-[#B98857] transition-colors border-b border-[#F3F2F0]/30 hover:border-[#B98857] pb-1 w-full md:w-auto text-center md:text-left">
                Learn More &rarr;
              </a>
            </div>
          </div>

          <!-- Right Graphic -->
          <div class="w-full md:w-1/2 flex justify-center md:justify-end items-center relative">
            <svg class="w-full max-w-[450px] h-auto drop-shadow-xl" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Technical Diagram / Line Illustration -->
              <!-- Top decorative stone face layer -->
              <path d="M40 80 L200 40 L360 80 L200 120 Z" fill="#F3F2F0" fill-opacity="0.05" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M40 80 L40 100 L200 140 L360 100 L360 80" fill="none" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M200 120 L200 140" fill="none" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
              
              <!-- Acoustic backing layer (2cm) -->
              <path d="M40 120 L200 160 L360 120 L200 80 Z" fill="#47331F" fill-opacity="0.4" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M40 120 L40 150 L200 190 L360 150 L360 120" fill="none" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M200 160 L200 190" fill="none" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
              
              <!-- Dimensions / Labels -->
              <path d="M370 120 L385 120" stroke="#F3F2F0" stroke-width="1" stroke-dasharray="2 2"/>
              <path d="M370 150 L385 150" stroke="#F3F2F0" stroke-width="1" stroke-dasharray="2 2"/>
              <path d="M380 120 L380 150" stroke="#F3F2F0" stroke-width="1"/>
              <path d="M377 123 L380 120 L383 123" stroke="#F3F2F0" stroke-width="1"/>
              <path d="M377 147 L380 150 L383 147" stroke="#F3F2F0" stroke-width="1"/>
              
              <text x="390" y="138" font-family="Inter, sans-serif" font-size="10" fill="#F3F2F0" letter-spacing="1">2CM</text>
              
              <!-- Annotations -->
              <circle cx="120" cy="70" r="3" fill="#F3F2F0"/>
              <path d="M120 70 L90 40 L40 40" stroke="#F3F2F0" stroke-width="1"/>
              <text x="40" y="35" font-family="Inter, sans-serif" font-size="10" fill="#F3F2F0" letter-spacing="1">STONE VENEER</text>
              
              <circle cx="280" cy="155" r="3" fill="#B98857"/>
              <path d="M280 155 L310 185 L360 185" stroke="#B98857" stroke-width="1"/>
              <text x="360" y="180" font-family="Inter, sans-serif" font-size="10" fill="#B98857" text-anchor="end" letter-spacing="1">ACOUSTIC BACKING</text>
            </svg>
          </div>
        </div>
      </section>
`;

productFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  // 1. Add Newsreader to Google Fonts if missing
  if (!html.includes('family=Newsreader')) {
    html = html.replace(
      'family=Inter:wght@300;400;500&display=swap',
      'family=Inter:wght@300;400;500&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&display=swap'
    );
  }

  // 2. Insert Veneer strip before Texture Subcategories
  // Using a regex to find <!-- TEXTURE SUBCATEGORIES -->
  if (!html.includes('PROMOTIONAL STRIP (VENEER)')) {
    html = html.replace('<!-- TEXTURE SUBCATEGORIES -->', veneerSection + '\n      <!-- TEXTURE SUBCATEGORIES -->');
  }

  fs.writeFileSync(file, html, 'utf8');
  console.log(`Processed ${file}`);
});
