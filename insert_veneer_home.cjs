const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const veneerSection = `
      <!-- VENEERS PREVIEW SECTION -->
      <section id="veneers-preview" class="py-[120px] bg-[#151515] text-white border-t border-b border-white/5 relative z-10">
        <div class="max-w-[1280px] mx-auto px-6">
          <div class="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            
            <div class="w-full md:w-[45%] reveal">
              <span class="block font-sans text-xs uppercase tracking-widest text-[#B98857] mb-6">New Innovation</span>
              <h2 class="font-serif text-5xl md:text-6xl mb-6 leading-tight">Acoustic Linear Veneer.</h2>
              <p class="font-sans text-white/70 text-lg mb-10 leading-relaxed max-w-lg font-light">
                Every finish in our curated collection is now available as a 2cm acoustic linear veneer. We've combined the raw, uncompromising character of our natural stone with advanced sound-dampening architecture. Specifically engineered for high-performance wall and ceiling applications.
              </p>
              <div class="flex flex-col sm:flex-row items-center gap-6">
                <a href="veneer.html" class="bg-[#B98857] hover:bg-[#a6774a] text-black font-sans text-xs tracking-widest uppercase px-8 py-4 font-medium transition-colors inline-block text-center w-full sm:w-auto">
                  Explore Veneers
                </a>
                <a href="contact.html" class="font-sans text-xs tracking-widest uppercase text-[#F3F2F0] hover:text-[#B98857] transition-colors border-b border-[#F3F2F0]/30 hover:border-[#B98857] pb-1 w-full sm:w-auto text-center">
                  Request Sample -&gt;
                </a>
              </div>
            </div>

            <div class="w-full md:w-[55%] reveal delay-100 relative">
              <div class="aspect-[4/3] w-full relative overflow-hidden rounded-sm shadow-2xl">
                <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/stone-sample-3.jpg" alt="Acoustic Linear Veneer" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/20"></div>
              </div>
              
              <!-- Floating Diagram Element -->
              <div class="absolute -bottom-10 -left-12 bg-global-surface p-6 rounded-sm shadow-2xl hidden lg:block border border-white/5">
                <svg class="w-[280px] h-auto drop-shadow-lg" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <!-- Top decorative stone face layer -->
                  <path d="M40 80 L200 40 L360 80 L200 120 Z" fill="#F3F2F0" fill-opacity="0.05" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M40 80 L40 100 L200 140 L360 100 L360 80" fill="none" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M200 120 L200 140" fill="none" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
                  
                  <!-- Acoustic backing layer (2cm) -->
                  <path d="M40 120 L200 160 L360 120 L200 80 Z" fill="#47331F" fill-opacity="0.5" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M40 120 L40 150 L200 190 L360 150 L360 120" fill="none" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M200 160 L200 190" fill="none" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
                  
                  <!-- Dimensions / Labels -->
                  <path d="M370 120 L385 120" stroke="#F3F2F0" stroke-width="1" stroke-dasharray="2 2"/>
                  <path d="M370 150 L385 150" stroke="#F3F2F0" stroke-width="1" stroke-dasharray="2 2"/>
                  <path d="M380 120 L380 150" stroke="#F3F2F0" stroke-width="1"/>
                  <path d="M377 123 L380 120 L383 123" stroke="#F3F2F0" stroke-width="1"/>
                  <path d="M377 147 L380 150 L383 147" stroke="#F3F2F0" stroke-width="1"/>
                  
                  <text x="390" y="138" font-family="Inter, sans-serif" font-size="10" fill="#F3F2F0" letter-spacing="1">2CM</text>
                  
                  <text x="40" y="35" font-family="Inter, sans-serif" font-size="10" fill="#F3F2F0" letter-spacing="1">STONE VENEER</text>
                  <text x="360" y="180" font-family="Inter, sans-serif" font-size="10" fill="#B98857" text-anchor="end" letter-spacing="1">ACOUSTIC BACKING</text>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
`;

if (!html.includes('id="veneers-preview"')) {
  // Try to find the section to insert before
  let targetString = '<!-- FEATURED PORTFOLIO / GALLERY -->';
  if (!html.includes(targetString)) {
      targetString = '<section id="portfolio"';
  }
  
  html = html.replace(targetString, veneerSection + '\n      ' + targetString);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Added veneers preview to index.html');
} else {
  // Update it if it exists
  let existingRegex = /<!-- VENEERS PREVIEW SECTION -->[\\s\\S]*?(?=<!-- FEATURED PORTFOLIO \/ GALLERY -->|<section id="portfolio")/g;
  if(html.match(existingRegex)) {
      html = html.replace(existingRegex, veneerSection + '\n      ');
      fs.writeFileSync('index.html', html, 'utf8');
      console.log('Updated existing veneers preview');
  } else {
      console.log('Veneers preview exists but could not match regex to replace.');
  }
}
