// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Big Shoulders",
      cssVariable: "--font-big-shoulders",
      weights: [700, 800],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "IBM Plex Sans",
      cssVariable: "--font-plex-sans",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "IBM Plex Mono",
      cssVariable: "--font-plex-mono",
      weights: [400, 500, 600],
      styles: ["normal"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});