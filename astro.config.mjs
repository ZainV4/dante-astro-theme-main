import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://VannessaPage.github.io',
    base: '',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ],
    outDir: 'docs' // Output to 'docs' folder for GitHub Pages
});
