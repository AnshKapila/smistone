const fs = require('fs');

let template = fs.readFileSync('about.html', 'utf8');
const mainStart = template.indexOf('<main id="app">');
const mainEnd = template.indexOf('</main>') + 7;

const veneerHTML = `
  <main id="app">
    <!-- HERO -->
    <section class="relative h-[70vh] w-full flex items-center justify-center overflow-hidden mask-reveal-container">
      <div class="absolute inset-0 z-0">
        <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/stone-sample-2.jpg" alt="Acoustic Veneer" class="w-full h-full object-cover parallax-img" data-speed="0.3" />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 class="font-serif font-normal text-[10vw] leading-[1] md:text-7xl lg:text-[80px] tracking-tightest mb-6 text-white reveal active">Acoustic Linear Veneer</h1>
        <p class="font-sans text-lg md:text-xl text-white/80 max-w-2xl mx-auto tracking-wide font-light reveal active delay-100">
          The exact character of our natural stone. Engineered for advanced sound performance.
        </p>
      </div>
    </section>

    <!-- INTRODUCTION & TECHNICAL DIAGRAM -->
    <section class="py-24 md:py-32 bg-white text-black px-4 md:px-12">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="reveal">
          <h2 class="font-serif text-4xl md:text-5xl mb-6 leading-tight">Beauty That Performs.</h2>
          <p class="font-sans text-lg leading-relaxed text-black/80 mb-6">
            Every finish in our curated collection is also available as a 2cm acoustic linear veneer. We've combined the raw, uncompromising character of our natural stone with advanced sound-dampening architecture.
          </p>
          <p class="font-sans text-lg leading-relaxed text-black/80 mb-8">
            This format is specifically engineered for high-performance wall and ceiling applications where acoustic control is just as critical as aesthetic impact.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-black/10">
            <div>
              <h4 class="font-sans text-xs uppercase tracking-widest text-black/50 mb-2">Profile</h4>
              <p class="font-serif text-2xl">2cm Thickness</p>
            </div>
            <div>
              <h4 class="font-sans text-xs uppercase tracking-widest text-black/50 mb-2">Weight</h4>
              <p class="font-serif text-2xl">Ultra-Lightweight</p>
            </div>
            <div>
              <h4 class="font-sans text-xs uppercase tracking-widest text-black/50 mb-2">Acoustics</h4>
              <p class="font-serif text-2xl">Class A Absorption</p>
            </div>
            <div>
              <h4 class="font-sans text-xs uppercase tracking-widest text-black/50 mb-2">Format</h4>
              <p class="font-serif text-2xl">Linear Planks</p>
            </div>
          </div>
        </div>
        
        <!-- Large Technical Diagram -->
        <div class="reveal delay-100 bg-[#151515] p-12 rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-tr from-[#47331F]/40 to-transparent opacity-50"></div>
          <svg class="w-full max-w-[500px] h-auto drop-shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-105" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Top decorative stone face layer -->
            <path d="M40 80 L200 40 L360 80 L200 120 Z" fill="#F3F2F0" fill-opacity="0.1" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M40 80 L40 100 L200 140 L360 100 L360 80" fill="none" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M200 120 L200 140" fill="none" stroke="#F3F2F0" stroke-width="1.5" stroke-linejoin="round"/>
            
            <!-- Acoustic backing layer (2cm) -->
            <path d="M40 120 L200 160 L360 120 L200 80 Z" fill="#47331F" fill-opacity="0.6" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M40 120 L40 150 L200 190 L360 150 L360 120" fill="none" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M200 160 L200 190" fill="none" stroke="#B98857" stroke-width="1.5" stroke-linejoin="round"/>
            
            <!-- Dimensions / Labels -->
            <path d="M370 120 L385 120" stroke="#F3F2F0" stroke-width="1" stroke-dasharray="2 2"/>
            <path d="M370 150 L385 150" stroke="#F3F2F0" stroke-width="1" stroke-dasharray="2 2"/>
            <path d="M380 120 L380 150" stroke="#F3F2F0" stroke-width="1"/>
            <path d="M377 123 L380 120 L383 123" stroke="#F3F2F0" stroke-width="1"/>
            <path d="M377 147 L380 150 L383 147" stroke="#F3F2F0" stroke-width="1"/>
            <text x="390" y="138" font-family="Inter, sans-serif" font-size="12" fill="#F3F2F0" letter-spacing="1">2CM</text>
            
            <!-- Annotations -->
            <circle cx="120" cy="70" r="4" fill="#F3F2F0"/>
            <path d="M120 70 L90 40 L30 40" stroke="#F3F2F0" stroke-width="1"/>
            <text x="30" y="32" font-family="Inter, sans-serif" font-size="10" fill="#F3F2F0" letter-spacing="1">NATURAL STONE VENEER</text>
            
            <circle cx="280" cy="155" r="4" fill="#B98857"/>
            <path d="M280 155 L310 195 L370 195" stroke="#B98857" stroke-width="1"/>
            <text x="370" y="187" font-family="Inter, sans-serif" font-size="10" fill="#B98857" text-anchor="end" letter-spacing="1">ACOUSTIC CORE</text>
          </svg>
        </div>

      </div>
    </section>

    <!-- KEY BENEFITS -->
    <section class="py-24 bg-global-surface text-white px-4 md:px-12 border-t border-white/10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 reveal">
          <h2 class="font-serif text-4xl mb-4">Engineering Advantages</h2>
          <p class="font-sans text-white/60 max-w-2xl mx-auto">Bridging the gap between monumental aesthetics and modern architectural requirements.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#151515] p-8 rounded border border-white/5 reveal">
            <span class="block font-sans font-extralight text-5xl text-[#B98857] mb-6">01</span>
            <h3 class="font-serif text-2xl mb-4 text-white">Acoustic Control</h3>
            <p class="font-sans text-white/70 leading-relaxed text-sm">
              The proprietary backing structure breaks up sound waves, significantly reducing reverberation and echo in large, open-plan environments.
            </p>
          </div>
          <div class="bg-[#151515] p-8 rounded border border-white/5 reveal delay-100">
            <span class="block font-sans font-extralight text-5xl text-[#B98857] mb-6">02</span>
            <h3 class="font-serif text-2xl mb-4 text-white">Rapid Installation</h3>
            <p class="font-sans text-white/70 leading-relaxed text-sm">
              Weighing a fraction of traditional solid stone slabs, the veneer planks allow for faster, more cost-effective installation on both walls and ceilings without heavy structural reinforcement.
            </p>
          </div>
          <div class="bg-[#151515] p-8 rounded border border-white/5 reveal delay-200">
            <span class="block font-sans font-extralight text-5xl text-[#B98857] mb-6">03</span>
            <h3 class="font-serif text-2xl mb-4 text-white">Visual Continuity</h3>
            <p class="font-sans text-white/70 leading-relaxed text-sm">
              Because the face layer is cut from the exact same blocks as our primary slab collections, you can maintain perfect aesthetic continuity from floor to ceiling.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-32 bg-white text-black px-4 md:px-12 text-center">
      <div class="max-w-3xl mx-auto reveal">
        <h2 class="font-serif text-5xl mb-6">Specify Veneers for Your Project</h2>
        <p class="font-sans text-lg text-black/70 mb-10">
          Our technical team is ready to provide detailed acoustic ratings, installation guidelines, and physical samples for your review.
        </p>
        <a href="contact.html" class="bg-black hover:bg-black/80 text-white font-sans text-sm tracking-widest uppercase px-10 py-5 font-medium transition-colors inline-block">
          Contact Our Team
        </a>
      </div>
    </section>
  </main>
`;

let veneerPage = template.substring(0, mainStart) + veneerHTML + template.substring(mainEnd);
veneerPage = veneerPage.replace(/<title>.*?<\/title>/, '<title>Acoustic Veneer | SMI Stone</title>');
fs.writeFileSync('veneer.html', veneerPage, 'utf8');
console.log('veneer.html fully built.');
