// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import wix from "@wix/astro-internal";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [wix(), tailwind()],
  image: {
    domains: ["static.wixstatic.com"],
  },
});
