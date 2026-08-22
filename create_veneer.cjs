const fs = require('fs');

if (!fs.existsSync('veneer.html')) {
  let template = fs.readFileSync('about.html', 'utf8');
  const mainStart = template.indexOf('<main id="app">');
  const mainEnd = template.indexOf('</main>') + 7;
  
  const veneerHTML = `
  <main id="app">
    <section class="pt-40 pb-24 px-4 md:px-12 bg-global-dark min-h-[70vh]">
      <div class="max-w-7xl mx-auto text-center reveal">
        <h1 class="font-serif text-5xl md:text-7xl mb-6">Acoustic Linear Veneer</h1>
        <p class="font-sans text-body-muted-dark max-w-2xl mx-auto text-lg">
          Detailed specifications and performance ratings coming soon.
        </p>
      </div>
    </section>
  </main>
  `;
  
  let veneerPage = template.substring(0, mainStart) + veneerHTML + template.substring(mainEnd);
  veneerPage = veneerPage.replace('<title>About Us | SMI Stone</title>', '<title>Acoustic Veneer | SMI Stone</title>');
  fs.writeFileSync('veneer.html', veneerPage, 'utf8');
  
  let config = fs.readFileSync('vite.config.js', 'utf8');
  if (!config.includes('veneer:')) {
    config = config.replace(
      /gallery:\s*resolve\(__dirname,\s*'gallery\.html'\)/,
      "gallery: resolve(__dirname, 'gallery.html'),\n        veneer: resolve(__dirname, 'veneer.html')"
    );
    fs.writeFileSync('vite.config.js', config, 'utf8');
  }
  console.log('veneer.html created');
}
