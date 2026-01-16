import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://d-lundy.github.io",
  integrations: [svelte()],
});
