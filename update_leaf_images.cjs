const fs = require('fs');

const images = {
  slate: [
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Black-rustic-Slate-1200x1200-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Black-Slate-1200x1200-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Chocolate-Slate-1200x1200-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Indian-Autumn-Slate-1200x1200-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Jak-Black-Slate.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Jak-Multicolor-Natural-Thumbnail-1200x1200-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/M-Green-Rustic-1200x1200-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/M-Green-Slate-1200x1200-1.webp'
  ],
  sandstone: [
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Fossil-Mint-Sandstone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Kandla-Grey.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Mandana-Sandstone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Yellow-Teakwood-Sandstone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Kandla-Grey.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Fossil-Mint-Sandstone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Mandana-Sandstone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Yellow-Teakwood-Sandstone.webp'
  ],
  limestone: [
    'https://www.regattaexports.com/wp-content/uploads/2019/05/Kurnool-Grey-Limestone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Lime-Black-Limestone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Kota-Blue-Limestone-1200x1200-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Tandur-Yellow-Limestone-tile.webp',
    'https://www.regattaexports.com/wp-content/uploads/2019/05/Kurnool-Grey-Limestone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Lime-Black-Limestone.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Kota-Blue-Limestone-1200x1200-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Tandur-Yellow-Limestone-tile.webp'
  ],
  marble: [
    'https://www.regattaexports.com/wp-content/uploads/2026/08/Toronto-Marble-Swatch.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Fantasy-Brown-Marble.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Pink-Marble-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Pink-Onyx-Marble.webp',
    'https://www.regattaexports.com/wp-content/uploads/2026/08/Toronto-Marble-Swatch.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Fantasy-Brown-Marble.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Pink-Marble-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/03/Pink-Onyx-Marble.webp'
  ],
  granite: [
    'https://www.regattaexports.com/wp-content/uploads/2021/02/Shivakashi-Granite-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2015/11/Absolute-Black-Granite-1024x1024-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2016/06/Alaska-White-Granite.webp',
    'https://www.regattaexports.com/wp-content/uploads/2015/10/apple-green-Granite.webp',
    'https://www.regattaexports.com/wp-content/uploads/2021/02/Shivakashi-Granite-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2015/11/Absolute-Black-Granite-1024x1024-1.webp',
    'https://www.regattaexports.com/wp-content/uploads/2016/06/Alaska-White-Granite.webp',
    'https://www.regattaexports.com/wp-content/uploads/2015/10/apple-green-Granite.webp'
  ],
  veneer: [
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Terra-Red.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Thainsos-Green-scaled.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Sparkle-Yellow-scaled.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Sparkle-White-scaled.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Sea-white-scaled.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Rainforest-Gold-scaled.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Monsoon-Black-8-x-4-ft-scaled.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Mint-Yellow-scaled.webp'
  ],
  mosaics: [
    'https://www.regattaexports.com/wp-content/uploads/2017/04/crazy-pathway.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Tumbled-Grey-20x20cm.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Stone-Articles-01.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Balustrades-2.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/crazy-pathway.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Tumbled-Grey-20x20cm.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Stone-Articles-01.webp',
    'https://www.regattaexports.com/wp-content/uploads/2017/04/Balustrades-2.webp'
  ]
};

const fileMap = {
  'products/stone-tiles-and-slabs/slate.html': 'slate',
  'products/stone-tiles-and-slabs/sandstone.html': 'sandstone',
  'products/stone-tiles-and-slabs/limestone.html': 'limestone',
  'products/stone-tiles-and-slabs/marble.html': 'marble',
  'products/stone-tiles-and-slabs/granite.html': 'granite',
  'products/thin-stone-veneer/field-stone.html': 'veneer',
  'products/thin-stone-veneer/castle-stone.html': 'veneer',
  'products/thin-stone-veneer/ledgers.html': 'veneer',
  'products/mosaics/wall-cladding.html': 'mosaics',
  'products/mosaics/pool-tile.html': 'mosaics'
};

for (const [file, category] of Object.entries(fileMap)) {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    const catImages = images[category];
    
    // Replace Hero Image
    html = html.replace(
      /<img src="https:\/\/static\.kite\.ai\/image\/upload\/[^"]+" alt="[^"]+" class="w-full h-full object-cover parallax-img"/,
      `<img src="${catImages[0]}" alt="Hero Image" class="w-full h-full object-cover parallax-img"`
    );
    
    // Replace Gallery Images
    let i = 0;
    html = html.replace(/<div class="aspect-square bg-white\/5 rounded overflow-hidden reveal[^>]*><img src="https:\/\/static\.kite\.ai\/image\/upload\/[^"]+" alt="Texture \d+"/g, (match) => {
      let replaced = match.replace(/src="https:\/\/static\.kite\.ai\/image\/upload\/[^"]+"/, `src="${catImages[i % catImages.length]}"`);
      i++;
      return replaced;
    });

    fs.writeFileSync(file, html, 'utf8');
    console.log('Updated leaf page:', file);
  }
}
