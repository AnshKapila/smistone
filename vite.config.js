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
        products: resolve(__dirname, 'products.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        veneer: resolve(__dirname, 'veneer.html'),
        'field-stone': resolve(__dirname, 'field-stone.html'),
        'slate-stone': resolve(__dirname, 'slate-stone.html'),
        'ripple-stone': resolve(__dirname, 'ripple-stone.html'),
        sandstone: resolve(__dirname, 'sandstone.html'),
        strips: resolve(__dirname, 'strips.html'),
        'galaxy-mix': resolve(__dirname, 'galaxy-mix.html'),
        'waterfall-stone': resolve(__dirname, 'waterfall-stone.html'),
        'seamless-slabs': resolve(__dirname, 'seamless-slabs.html')
      }
    }
  }
});
