import { defineConfig } from "tsup"

export const tsup = defineConfig({
	entry: ["src/index.ts"],
	outDir: "dist",
	dts: true,
	format: ["esm", "iife", "cjs"],
	globalName: "__HapinUtils"
})