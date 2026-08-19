const fs = require('fs');

let template = fs.readFileSync('about.html', 'utf8');

const mainStart = template.indexOf('<main id="app">');
const mainEnd = template.indexOf('</main>') + 7;

const galleryHTML = `
<main id="app">
      <section class="pt-40 pb-24 px-4 md:px-12 bg-global-dark min-h-[70vh]">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16 reveal">
            <h1 class="font-serif text-5xl md:text-7xl mb-6">Gallery</h1>
            <p class="font-sans text-body-muted-dark max-w-2xl text-lg">
              A visual exploration of our materials and their applications.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/hero.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 1">
            <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-field.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 2">
            <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-slate.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 3">
            <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-ripple.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 4">
            <img src="https://static.kite.ai/image/upload/v1776530175/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-sandstone.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 5">
            <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-strips.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 6">
            <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-galaxy.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 7">
            <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/cat-waterfall.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 8">
            <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/port-extra.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 9">
            <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/trust-bg.png" class="w-full h-64 object-cover rounded" alt="Gallery Image 10">
            <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/stone-sample-1.jpg" class="w-full h-64 object-cover rounded" alt="Gallery Image 11">
            <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/stone-sample-2.jpg" class="w-full h-64 object-cover rounded" alt="Gallery Image 12">
            <img src="https://static.kite.ai/image/upload/v1776530173/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/stone-sample-3.jpg" class="w-full h-64 object-cover rounded" alt="Gallery Image 13">
          </div>
        </div>
      </section>
</main>
`;

let galleryPage = template.substring(0, mainStart) + galleryHTML + template.substring(mainEnd);
galleryPage = galleryPage.replace('<title>About Us | SMI Stone</title>', '<title>Gallery | SMI Stone</title>');
fs.writeFileSync('gallery.html', galleryPage, 'utf8');
console.log('gallery.html created successfully');
