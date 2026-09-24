import { defineConfig } from "astro/config";

const legacySlugs = [
  "approximating-pi", "caesar-cipher", "fibonacci-finder", "fuzzy-search",
  "image-kernels", "integrated-optics", "linear-regression", "markov-chains",
  "mass-spring-damper-simulation", "perlin-noise", "symbolic-programming",
  "underwater-3d-vision", "yapay-sinir-aglari",
];

export default defineConfig({
  site: "https://enesdemirag.com",
  redirects: Object.fromEntries(legacySlugs.map((slug) => [`/${slug}`, `/blog/${slug}/`])),
});
