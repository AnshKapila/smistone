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
  
  html = html.replace(/tryansh@gmail\.com/g, 'sales@smistone.in');
  html = html.replace(/\+1 \(555\) 000-0000/g, '8058510592');
  html = html.replace(/123 Design District<br>\s*Metropolis, NY 10001/g, 'Riico Industrial Area<br>Deoli, Tonk Rajasthan 304804');
  
  if (html !== originalHtml) {
    fs.writeFileSync(file, html, 'utf8');
    console.log('Updated contact info in:', file);
  }
});
