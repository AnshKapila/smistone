const fs = require('fs');

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
  'products.html',
  'gallery.html',
  'index.html'
];

filesToUpdate.forEach(file => {
  if (!fs.existsSync(file)) return;
  
  let fileHtml = fs.readFileSync(file, 'utf8');
  
  // Replace CTA text broadly
  fileHtml = fileHtml.replace(/Book a Call/g, 'Get In Touch');
  fileHtml = fileHtml.replace(/BOOK A CALL/g, 'GET IN TOUCH');
  
  fs.writeFileSync(file, fileHtml, 'utf8');
  console.log(`Updated CTA in ${file}`);
});
