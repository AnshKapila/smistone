const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const navStart = indexHtml.indexOf('<nav id="navbar"');
const navEnd = indexHtml.indexOf('<main id="app">');
let navHtml = indexHtml.substring(navStart, navEnd);

const filesToUpdate = [
  'about.html',
  'contact.html',
  'professionals.html',
  'field-stone.html',
  'slate-stone.html',
  'ripple-stone.html',
  'sandstone.html',
  'strips.html',
  'galaxy-mix.html',
  'waterfall-stone.html',
  'seamless-slabs.html',
  'products.html'
];

filesToUpdate.forEach(file => {
  let fileHtml = fs.readFileSync(file, 'utf8');
  let fileNavStart = fileHtml.indexOf('<nav id="navbar"');
  let fileNavEnd = fileHtml.indexOf('<main id="app">');
  
  if (fileNavStart !== -1 && fileNavEnd !== -1) {
    fileHtml = fileHtml.substring(0, fileNavStart) + navHtml + fileHtml.substring(fileNavEnd);
    fs.writeFileSync(file, fileHtml, 'utf8');
    console.log(`Updated navbar in ${file}`);
  } else {
    console.log(`Could not find nav tags in ${file}`);
  }
});
