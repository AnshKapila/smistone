import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        professionals: resolve(__dirname, 'professionals.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        veneer: resolve(__dirname, 'veneer.html'),
        
        // Products Category Pages
        'products-main': resolve(__dirname, 'products/index.html'),
        'stone-tiles-and-slabs': resolve(__dirname, 'products/stone-tiles-and-slabs/index.html'),
        'thin-stone-veneer': resolve(__dirname, 'products/thin-stone-veneer/index.html'),
        'wall-panels': resolve(__dirname, 'products/wall-panels/index.html'),
        'mosaics': resolve(__dirname, 'products/mosaics/index.html'),
        'smineer': resolve(__dirname, 'products/smineer/index.html'),

        // Products Leaf Pages
        'slate': resolve(__dirname, 'products/stone-tiles-and-slabs/slate.html'),
        'sandstone': resolve(__dirname, 'products/stone-tiles-and-slabs/sandstone.html'),
        'limestone': resolve(__dirname, 'products/stone-tiles-and-slabs/limestone.html'),
        'marble': resolve(__dirname, 'products/stone-tiles-and-slabs/marble.html'),
        'granite': resolve(__dirname, 'products/stone-tiles-and-slabs/granite.html'),
        
        'field-stone': resolve(__dirname, 'products/thin-stone-veneer/field-stone.html'),
        'castle-stone': resolve(__dirname, 'products/thin-stone-veneer/castle-stone.html'),
        'ledgers': resolve(__dirname, 'products/thin-stone-veneer/ledgers.html'),
        
        'wall-cladding': resolve(__dirname, 'products/mosaics/wall-cladding.html'),
        'pool-tile': resolve(__dirname, 'products/mosaics/pool-tile.html'),
      }
    }
  }
});
