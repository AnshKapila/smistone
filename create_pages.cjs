const fs = require('fs');
let template = fs.readFileSync('contact.html', 'utf8');

const mainStart = template.indexOf('<main id="app">');
const mainEnd = template.indexOf('</main>') + 7;

const aboutHTML = `
<main id="app">
      <section class="py-32 px-4 md:px-12 bg-global-dark min-h-[70vh] flex items-center justify-center">
        <div class="max-w-4xl mx-auto text-center">
          <i data-lucide="quote" class="w-8 h-8 mx-auto mb-8 text-white/20"></i>
          <h2 class="font-serif text-3xl md:text-5xl leading-snug mb-12 reveal">
            "We believe materials dictate the soul of a space. Our role is to source stones that speak before a word is said."
          </h2>
          <div class="flex items-center justify-center gap-4 reveal delay-100 mb-12">
            <div class="h-[1px] w-12 bg-white/30"></div>
            <span class="font-sans text-sm uppercase tracking-widest text-white/70">Our Philosophy</span>
            <div class="h-[1px] w-12 bg-white/30"></div>
          </div>
          <p class="font-sans text-lg text-body-muted-dark max-w-2xl mx-auto reveal delay-200">
            SMI Stone curates architectural surfaces for visionary spaces. Our global network of quarries allows us to provide designers with materials that exhibit unmatched consistency, rigorous structural integrity, and exquisite textural depth.
          </p>
        </div>
      </section>
</main>
`;

let aboutPage = template.substring(0, mainStart) + aboutHTML + template.substring(mainEnd);
aboutPage = aboutPage.replace('<title>SMI Stone | Architectural Surface Materials</title>', '<title>About Us | SMI Stone</title>');
fs.writeFileSync('about.html', aboutPage, 'utf8');

const profHTML = `
<main id="app">
      <section id="professionals" class="bg-global-surface min-h-[70vh] flex flex-col md:flex-row items-center">
        <!-- Left Text -->
        <div class="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center reveal">
          <div class="flex items-center gap-4 mb-8">
            <div class="h-[1px] w-8 bg-white/30"></div>
            <span class="font-sans text-sm uppercase tracking-widest text-white/50">For Professionals</span>
          </div>
          <h2 class="font-serif text-4xl md:text-5xl mb-6">Dedicated to the Trade.</h2>
          <p class="font-sans text-body-muted-dark mb-8 leading-relaxed">
            We understand the stakes of high-end design. Our commitment is providing unmatched consistency across large orders, rigorous quality control, and dedicated technical support for your architectural and interior design firm.
          </p>
          <a href="contact.html" class="btn-primary hover-trigger inline-flex max-w-max">
            Get In Touch <i data-lucide="chevron-right" class="w-4 h-4 icon-arrow"></i>
          </a>
        </div>
        <!-- Right Image -->
        <div class="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative reveal delay-200">
          <img src="https://static.kite.ai/image/upload/v1776530174/app/12f8a823-49ae-41b1-b52c-2af180d1bd62/iter2/trust-bg.png" alt="Architect" class="w-full h-full object-cover" />
        </div>
      </section>
</main>
`;

let profPage = template.substring(0, mainStart) + profHTML + template.substring(mainEnd);
profPage = profPage.replace('<title>SMI Stone | Architectural Surface Materials</title>', '<title>For Professionals | SMI Stone</title>');
fs.writeFileSync('professionals.html', profPage, 'utf8');

console.log('about.html and professionals.html created');
