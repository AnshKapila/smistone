const fs = require('fs');
let v = fs.readFileSync('veneer.html', 'utf8');
v = v.replace(/Acoustic Veneer/g, 'Smineer');
v = v.replace(/acoustic veneer/g, 'Smineer');
fs.writeFileSync('veneer.html', v, 'utf8');

let i = fs.readFileSync('index.html', 'utf8');
i = i.replace(/Acoustic Veneer/gi, 'Smineer');
fs.writeFileSync('index.html', i, 'utf8');
