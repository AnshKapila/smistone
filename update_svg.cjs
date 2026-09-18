const fs = require('fs');

const newSVG = `
                <svg class="w-full max-w-[500px] h-auto drop-shadow-lg" viewBox="0 0 750 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="750" height="300" fill="#FFFFFF" rx="4" />

                  <!-- Layer 1: BACKING -->
                  <path d="M 160 90 L 320 30 L 480 90 L 320 150 Z" fill="#151515" stroke="#000000" stroke-width="1"/>
                  
                  <!-- Layer 2: FIBERGLASS -->
                  <path d="M 120 100 L 280 40 L 440 100 L 280 160 Z" fill="#E5E5E5" stroke="#CCCCCC" stroke-width="1"/>
                  
                  <!-- Layer 3: ADHESIVE -->
                  <path d="M 80 110 L 240 50 L 400 110 L 240 170 Z" fill="#47331F" stroke="#B98857" stroke-width="1"/>
                  
                  <!-- Layer 4: NATURAL STONE LAYER -->
                  <path d="M 40 120 L 200 60 L 360 120 L 200 180 Z" fill="#F3F2F0" stroke="#D1D1D1" stroke-width="1"/>

                  <!-- Connecting Lines & Labels -->
                  <!-- Backing -->
                  <circle cx="400" cy="120" r="4" fill="#151515"/>
                  <path d="M 400 120 L 420 80 L 550 80" stroke="#151515" stroke-width="1" stroke-dasharray="2 2"/>
                  <text x="560" y="84" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#151515" letter-spacing="1">BACKING</text>

                  <!-- Fiberglass -->
                  <circle cx="360" cy="130" r="4" fill="#151515"/>
                  <path d="M 360 130 L 380 120 L 550 120" stroke="#151515" stroke-width="1" stroke-dasharray="2 2"/>
                  <text x="560" y="124" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#151515" letter-spacing="1">FIBERGLASS</text>

                  <!-- Adhesive -->
                  <circle cx="320" cy="140" r="4" fill="#151515"/>
                  <path d="M 320 140 L 340 160 L 550 160" stroke="#151515" stroke-width="1" stroke-dasharray="2 2"/>
                  <text x="560" y="164" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#151515" letter-spacing="1">ADHESIVE</text>

                  <!-- Stone -->
                  <circle cx="280" cy="150" r="4" fill="#151515"/>
                  <path d="M 280 150 L 300 200 L 550 200" stroke="#151515" stroke-width="1" stroke-dasharray="2 2"/>
                  <text x="560" y="204" font-family="Inter, sans-serif" font-size="12" font-weight="500" fill="#151515" letter-spacing="1">NATURAL STONE LAYER</text>
                </svg>
`;

function replaceSVG(filename) {
    let html = fs.readFileSync(filename, 'utf8');
    const svgRegex = /<svg[^>]*viewBox="0 0 400 250"[\s\S]*?<\/svg>/;
    if (html.match(svgRegex)) {
        html = html.replace(svgRegex, newSVG.trim());
        fs.writeFileSync(filename, html, 'utf8');
        console.log(`Updated SVG in ${filename}`);
    } else {
        console.log(`Could not find SVG in ${filename}`);
    }
}

replaceSVG('index.html');
replaceSVG('veneer.html');
