const fs = require('fs');
const path = require('path');

// 1. Update text globally in all files that contain the banner
function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (file.endsWith('.html')) filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('.');

files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  let originalHtml = html;
  
  html = html.replace(/\[Placeholder\] Beauty That Performs/g, 'Smineer');
  html = html.replace(/\[Placeholder\] Every finish in this collection is also available as a 2cm acoustic linear veneer - the same natural character, engineered for sound performance\./g, 'Every finish in this collection is also available as Smineer - our proprietary flexible stone veneer treatment.');
  html = html.replace(/Inquire About Veneer/g, 'Inquire About Smineer');

  // For the homepage text as well, if it has it
  html = html.replace(/Acoustic Linear Veneer/g, 'Smineer');

  if (html !== originalHtml) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Updated banner text in:', file);
  }
});

// 2. Modify products/index.html
const productsIndexFile = 'products/index.html';
let pIndexHtml = fs.readFileSync(productsIndexFile, 'utf8');

// Remove the 5th card (SMINEER)
const smineerCardRegex = /<div class="bg-global-surface rounded-lg p-6 flex flex-col justify-between group cursor-pointer hover-trigger reveal "[^>]*onclick="window\.location\.href='[^']*products\/smineer\/index\.html'"[^>]*>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
pIndexHtml = pIndexHtml.replace(smineerCardRegex, '');

// Also remove it from the homepage scrub container
const indexFile = 'index.html';
let indexHtml = fs.readFileSync(indexFile, 'utf8');
const smineerScrubCardRegex = /<!-- Card 5 -->[\s\S]*?<div class="w-\[85vw\].*?onclick="window\.location\.href='\.\/products\/smineer\/index\.html'"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
if (smineerScrubCardRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(smineerScrubCardRegex, '');
  // Adjust scroll height back to 4 cards (600vh)
  indexHtml = indexHtml.replace(/height: 750vh; \/\* 5 cards \*\//g, 'height: 600vh; /* 4 cards */');
  fs.writeFileSync(indexFile, indexHtml, 'utf8');
  console.log('Removed SMINEER from homepage horizontal scroll.');
}


// Extract the full promotional strip from field-stone.html to inject into products/index.html
const fieldStonePath = 'products/thin-stone-veneer/field-stone.html';
const fieldStoneHtml = fs.readFileSync(fieldStonePath, 'utf8');
const stripRegex = /(<!-- PROMOTIONAL STRIP \(VENEER\) -->[\s\S]*?<\/section>)/;
const match = fieldStoneHtml.match(stripRegex);

if (match) {
  let promoStrip = match[1];
  // Adjust the links in the strip since we are injecting into products/index.html (depth 1)
  promoStrip = promoStrip.replace(/href="\.\.\/\.\.\//g, 'href="../');
  
  // Inject below the <section class="pt-32 pb-24"> containing the categories
  const injectRegex = /(<\/section>)\s*(<!-- FOOTER -->)/;
  pIndexHtml = pIndexHtml.replace(injectRegex, `$1\n\n      ${promoStrip}\n\n      $2`);
  
  fs.writeFileSync(productsIndexFile, pIndexHtml, 'utf8');
  console.log('Injected promotional strip into products/index.html');
} else {
  console.log('Could not extract promotional strip.');
}

