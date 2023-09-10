import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { astroImageTools } from "astro-imagetools";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), astroImageTools]
});
