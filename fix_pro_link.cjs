const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/href="professionals\.html"\s*class="btn-ghost hover-trigger"/, 'href="contact.html" class="btn-ghost hover-trigger"');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed professionals.html link');
