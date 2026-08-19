const fs = require('fs');

let html = fs.readFileSync('contact.html', 'utf8');

const emailFieldRegex = /<div>\s*<label for="email" class="block font-sans text-xs uppercase tracking-widest text-black\/40 mb-2">Email Address<\/label>\s*<input type="email" id="email" class="w-full bg-transparent border-b border-black\/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" placeholder="john@example\.com">\s*<\/div>/;

const phoneFieldHtml = `
              <div>
                <label for="email" class="block font-sans text-xs uppercase tracking-widest text-black/40 mb-2">Email Address</label>
                <input type="email" id="email" class="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" placeholder="john@example.com">
              </div>
              <div>
                <label for="phone" class="block font-sans text-xs uppercase tracking-widest text-black/40 mb-2">Phone Number</label>
                <div class="flex">
                  <select class="bg-transparent border-b border-black/20 py-3 pr-4 focus:outline-none focus:border-black transition-colors font-sans text-black/60 mr-4">
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (IN)</option>
                    <option value="+61">+61 (AU)</option>
                  </select>
                  <input type="tel" id="phone" class="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" placeholder="(555) 000-0000">
                </div>
              </div>
`;

html = html.replace(emailFieldRegex, phoneFieldHtml.trim());

fs.writeFileSync('contact.html', html, 'utf8');
console.log('contact.html updated successfully');
