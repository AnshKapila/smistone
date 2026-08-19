const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix Parallax Gap
html = html.replace(
  'img.style.transform = `translateY(${yPos}px)`;',
  'const scaleAmount = 1.15 + (window.scrollY * 0.0003);\n              img.style.transform = `translateY(${yPos}px) scale(${scaleAmount})`;'
);

const newLeft = `
            <!-- Left Fixed Content -->
            <div class="w-full md:w-[35%] pt-24 md:pt-0 z-20 reveal bg-global-dark h-full flex flex-col justify-center pr-8 relative">
              <h2 class="font-serif text-4xl md:text-5xl mb-6">Curated Collections</h2>
              <p class="font-sans text-body-muted-dark mb-8 max-w-sm">
                Explore our primary surface categories, each offering distinct textural and visual properties for diverse architectural applications.
              </p>
              <div class="mb-12">
                <a href="products.html" class="btn-primary hover-trigger inline-flex max-w-max">
                  Explore All Products <i data-lucide="chevron-right" class="w-4 h-4 icon-arrow ml-2"></i>
                </a>
              </div>
              <div class="hidden md:flex items-center gap-2 mt-auto pb-12">
                <span class="text-xs font-sans uppercase tracking-widest text-white/40">Scroll to explore</span>
                <i data-lucide="arrow-down" class="w-4 h-4 text-white/40 animate-bounce"></i>
              </div>
            </div>
`;
html = html.replace(/<!-- Left Fixed Content -->[\s\S]*?<!-- Right Scrolling Track -->/, newLeft.trim() + '\n\n            <!-- Right Scrolling Track -->');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed parallax gap and updated Curated Collections left section.');
