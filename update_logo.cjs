const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  const oldLogoRegex = /https:\/\/static\.kite\.ai\/image\/upload\/[^"']*?pbk5tmgnjoe2xewhzuzr\.png/g;
  
  if (oldLogoRegex.test(content)) {
    content = content.replace(oldLogoRegex, '/logo.svg');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated logo in:', filePath);
  }
}

function walkSync(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkSync(filePath);
    } else if (file.endsWith('.html')) {
      replaceInFile(filePath);
    }
  }
}

walkSync('.');
