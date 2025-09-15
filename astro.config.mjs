// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from 'astro-icon';


// https://astro.build/config
export default defineConfig({
  site: 'https://blog.motues.top',

  integrations: [
    icon({
      include: {
        "fa6-brands": ["*"],
        "fa6-solid": ["*"],
        "simple-icons": ["*"],
        "vscode-icons": ["*"],
        "material-symbols": ["*"]
      }
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});