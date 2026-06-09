import { defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import defineManifest from "./src/manifest";

export default defineConfig({
    plugins: [
        react(),
        crx({ manifest: defineManifest })
    ],

    build: {
        sourcemap: true,
    }
});