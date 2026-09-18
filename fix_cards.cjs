const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const missingCards = `
                <!-- Card 5 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='strips.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">05</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Strips</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">Linear, architectural cuts that emphasize horizontal or vertical rhythm.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-strips.png" alt="Strips" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>

                <!-- Card 6 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='galaxy-mix.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">06</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Galaxy Mix</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">A curated blend of mineral deposits offering celestial, scattered patterns.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-galaxy.png" alt="Galaxy Mix" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>

                <!-- Card 7 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='waterfall-stone.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">07</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Waterfall Stone</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">Flowing, vertical striations that mimic the movement of water over time.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-waterfall.png" alt="Waterfall Stone" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>

                <!-- Card 8 -->
                <div class="w-[85vw] md:w-[400px] flex-shrink-0 bg-global-surface rounded-lg flex flex-col justify-between group cursor-pointer hover-trigger overflow-hidden h-[55vh] min-h-[450px]" onclick="window.location.href='seamless-slabs.html'">
                  <div class="p-6 pb-0 flex-grow">
                    <span class="block font-sans font-extralight text-5xl text-white/20 mb-6">08</span>
                    <h3 class="font-serif text-2xl mb-2 group-hover:text-white transition-colors">Seamless Slabs</h3>
                    <p class="font-sans text-sm text-body-muted-dark mb-8">Ultra-large format stones for monolithic, continuous surface designs.</p>
                  </div>
                  <div class="p-6 pt-0"><div class="relative w-full aspect-[4/3] overflow-hidden rounded">
                    <img src="https://static.kite.ai/image/upload/v1776530172/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slabs.png" alt="Seamless Slabs" class="w-full h-full object-cover hover-card-img" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span class="font-sans text-sm uppercase tracking-widest font-medium">Explore</span>
                    </div>
                  </div></div>
                </div>
`;

if (!html.includes('<!-- Card 5 -->')) {
  // Find where Card 4 ends
  const card4EndIndex = html.indexOf('<!-- END OF SCROLL TRACK -->');
  // Wait, there is no END OF SCROLL TRACK. Let's just find the closing div of Card 4.
  const card4Start = html.indexOf('<!-- Card 4 -->');
  const trackEnd = html.indexOf('</div>', card4Start + 1000); // Rough, let's use regex
  
  html = html.replace(/(<!-- Card 4 -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>)/, '$1\n' + missingCards);
}

// 2. Fix height of scrub-container
html = html.replace('height: 800vh; /* 4 cards = 400vh */', 'height: 1200vh; /* 8 cards */');

// 3. Fix maxTranslate math
// Current: const maxTranslate = scrubTrack.scrollWidth - window.innerWidth + (window.innerWidth * 0.2);
// Let's change it so the rightmost card stops comfortably with its left edge beyond the 35vw text block.
// Text block takes 35vw. Gap between text block and card could be 5vw. So left edge of last card should be 40vw.
// right edge of last card = 40vw + 400px.
// Translation math: 
// const leftEdgeTarget = window.innerWidth * 0.45; // 45vw ensures it clears the 35vw block
// const maxTranslate = scrubTrack.scrollWidth - leftEdgeTarget - 400 - (window.innerWidth * 0.2); // wait, simpler:

const oldMath = "const maxTranslate = scrubTrack.scrollWidth - window.innerWidth + (window.innerWidth * 0.2);";
const oldMath2 = "const maxTranslate = scrubTrack.scrollWidth - window.innerWidth + (window.innerWidth * 0.2);"; // There are two

// The best way to make the last card visible is to translate by exactly its distance from the right edge minus 60vw.
// Or just let's change padding-right of .scrub-track to something larger like 60vw, then maxTranslate = scrollWidth - innerWidth.
html = html.replace(/padding-right: 20vw;/g, 'padding-right: 55vw; /* ensure last card clears the 35vw text panel */');
html = html.replace(/const maxTranslate = scrubTrack\.scrollWidth - window\.innerWidth \+ \(window\.innerWidth \* 0\.2\);/g, 'const maxTranslate = scrubTrack.scrollWidth - window.innerWidth;');


// 4. Update the card onclicks since the earlier ones used empty hrefs: `window.location.href=''`
html = html.replace(/window\.location\.href=''/g, (match, offset, str) => {
    // Determine which card this is based on nearby text
    let substring = str.substring(offset, offset + 300);
    if (substring.includes('Field Stone')) return "window.location.href='field-stone.html'";
    if (substring.includes('Slate Stone')) return "window.location.href='slate-stone.html'";
    if (substring.includes('Ripple Stone')) return "window.location.href='ripple-stone.html'";
    if (substring.includes('Sandstone')) return "window.location.href='sandstone.html'";
    return match;
});

fs.writeFileSync('index.html', html, 'utf8');
