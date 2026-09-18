const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        filelist = walkSync(dirFile, filelist);
      }
    } else {
      if (file.endsWith('.html')) filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('.');
files.forEach(file => {
  let html = fs.readFileSync(file, 'utf8');
  let originalHtml = html;
  
  // Fix the double quote issue inside onclick
  // e.g. onclick="window.location.href="../products/thin-stone-veneer/field-stone.html""
  // Note: the regex matches onclick="window.location.href=" followed by anything up to ""
  html = html.replace(/onclick="window\.location\.href="([^"]+)""/g, 'onclick="window.location.href=\'\'"');
  
  // Also check for index.html case if it was href="index.html" inside an onclick
  // e.g. onclick="window.location.href="../index.html""
  // The above regex catches it.

  if (html !== originalHtml) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Fixed:', file);
  }
});
