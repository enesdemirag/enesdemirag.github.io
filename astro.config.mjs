import { defineConfig } from "astro/config";

// The old Jekyll blog served posts at /<slug>/. Keep those links working.
const oldPosts = [
  "underwater-3d-vision", "image-kernels", "perlin-noise", "linear-regression",
  "approximating-pi", "caesar-cipher", "fibonacci-finder", "mass-spring-damper-simulation",
  "markov-chains", "yapay-sinir-aglari", "fuzzy-search", "symbolic-programming", "integrated-optics",
];

export default defineConfig({
  site: "https://enesdemirag.com",
  redirects: Object.fromEntries(oldPosts.map((slug) => [`/${slug}`, `/blog/${slug}/`])),
});
