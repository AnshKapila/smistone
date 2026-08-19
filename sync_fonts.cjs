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
  'products.html'
];

filesToUpdate.forEach(file => {
  let fileHtml = fs.readFileSync(file, 'utf8');
  
  fileHtml = fileHtml.replace(
    'family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400',
    'family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400'
  );
  fileHtml = fileHtml.replace(
    "serif: ['Cormorant', 'serif']",
    "serif: ['Fraunces', 'serif']"
  );

  fs.writeFileSync(file, fileHtml, 'utf8');
  console.log(`Updated fonts in ${file}`);
});
