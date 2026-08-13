const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const contactStart = html.indexOf('<!-- FINAL CTA SECTION -->');
const contactEnd = html.indexOf('</main>');

const contactHTML = html.substring(contactStart, contactEnd).trim();

// Remove contact from index
html = html.substring(0, contactStart) + html.substring(contactEnd);
fs.writeFileSync('index.html', html, 'utf8');

// Generate contact.html
let template = fs.readFileSync('stone.html', 'utf8');
const mainStart = template.indexOf('<main id="app">');
const mainEnd = template.indexOf('</main>') + 7;

let contactPage = template.substring(0, mainStart) + '<main id="app">\n<div class="pt-32"></div>\n' + contactHTML + '\n</main>' + template.substring(mainEnd);
fs.writeFileSync('contact.html', contactPage, 'utf8');
console.log('Contact section moved to contact.html');
