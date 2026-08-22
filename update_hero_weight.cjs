const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace font-light with font-normal to match the rest of the headings (which default to 400 in Tailwind)
html = html.replace(
  'class="font-serif font-light text-[12vw] leading-[1] md:text-7xl lg:text-[80px] tracking-tightest mb-6 text-white"',
  'class="font-serif font-normal text-[12vw] leading-[1] md:text-7xl lg:text-[80px] tracking-tightest mb-6 text-white"'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed hero font weight.');
