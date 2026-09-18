const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace Stone Tiles & Slabs
html = html.replace(
  /<img src="https:\/\/static\.kite\.ai\/image\/upload\/v1776530172\/app\/12f8a823-49ae-41b1-b52c-2af180d1bd62\/iter2\/cat-slabs\.png" alt="Stone Tiles & Slabs"/,
  '<img src="https://www.regattaexports.com/wp-content/uploads/2017/03/Fantasy-Brown-Marble.webp" alt="Stone Tiles & Slabs"'
);

// Replace Thin Stone Veneer
html = html.replace(
  /<img src="https:\/\/static\.kite\.ai\/image\/upload\/v1776530174\/app\/12f8a823-49ae-41b1-b52c-2af180d1bd62\/iter2\/cat-field\.png" alt="Thin Stone Veneer"/,
  '<img src="https://www.regattaexports.com/wp-content/uploads/2017/04/Terra-Red.webp" alt="Thin Stone Veneer"'
);

// Replace Wall Panels
html = html.replace(
  /<img src="https:\/\/static\.kite\.ai\/image\/upload\/v1776530174\/app\/12f8a823-49ae-41b1-b52c-2af180d1bd62\/iter2\/cat-strips\.png" alt="Wall Panels"/,
  '<img src="https://www.regattaexports.com/wp-content/uploads/2017/04/Stone-Articles-01.webp" alt="Wall Panels"'
);

// Replace Mosaics
html = html.replace(
  /<img src="https:\/\/static\.kite\.ai\/image\/upload\/v1776530174\/app\/12f8a823-49ae-41b1-b52c-2af180d1bd62\/iter2\/cat-ripple\.png" alt="Mosaics"/,
  '<img src="https://www.regattaexports.com/wp-content/uploads/2019/04/Raveena-Circles-Stone-Articles.webp" alt="Mosaics"'
);

fs.writeFileSync('index.html', html, 'utf8');
