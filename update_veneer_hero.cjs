const fs = require('fs');
let html = fs.readFileSync('veneer.html', 'utf8');
html = html.replace(
  /<img src="https:\/\/static\.kite\.ai\/image\/upload\/[^"]+" alt="Smineer" class="w-full h-full object-cover parallax-img"/,
  '<img src="https://www.regattaexports.com/wp-content/uploads/2017/04/Terra-Red.webp" alt="Smineer" class="w-full h-full object-cover parallax-img"'
);
fs.writeFileSync('veneer.html', html, 'utf8');
