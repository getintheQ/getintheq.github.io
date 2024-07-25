import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icons from "astro-icons";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  integrations: [tailwind(),react(), icons()]
});