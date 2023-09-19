import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
    },
    rollupOptions: {
      external: [
        /^node:.*/,
      ],
			output: [
				{
					dir: "dist/cjs",
					format: "cjs",
					preserveModules: true,
					preserveModulesRoot: "src",
				},
				{
					dir: "dist/esm",
					format: "esm",
					preserveModules: true,
					preserveModulesRoot: "src",
				},
			]
    },
    target: 'esnext',
  },
  plugins: [dts()],
})
