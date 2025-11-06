import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://caner-cakar.github.io",
  base: "/portfolio",
  integrations: [tailwind()],
});