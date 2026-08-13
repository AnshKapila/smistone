const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const mapping = {
  'Field Stone': 'field-stone.html',
  'Slate Stone': 'slate-stone.html',
  'Ripple Stone': 'ripple-stone.html',
  'Sandstone': 'sandstone.html',
  'Strips': 'strips.html',
  'Galaxy Mix': 'galaxy-mix.html',
  'Waterfall Stone': 'waterfall-stone.html',
  'Seamless Slabs': 'seamless-slabs.html'
};

// Update onclicks for cards
html = html.replace(/<div[^>]*onclick="window\.location\.href='[^']*'"[^>]*>[\s\S]*?<h3[^>]*>([^<]+)<\/h3>/g, (match, p1) => {
  if (mapping[p1]) {
    return match.replace(/onclick="window\.location\.href='[^']*'\"/, onclick="window.location.href=''");
  }
  return match;
});

// Update footer links
html = html.replace(/<li><a href="[^"]*"[^>]*>([^<]+)<\/a><\/li>/g, (match, p1) => {
  if (mapping[p1]) {
    return match.replace(/href="[^"]*"/, href="");
  }
  return match;
});

// Update Professionals link
html = html.replace(/<a href="#contact" class="btn-ghost hover-trigger">[\s\S]*?Get In Touch/, '<a href="professionals.html" class="btn-ghost hover-trigger">\n                Get In Touch');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Done!');
