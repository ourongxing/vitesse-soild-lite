import { defineConfig } from "vite"
import Unocss from "unocss/vite"
import tsconfigPaths from "vite-tsconfig-paths"
import solidPlugin from "vite-plugin-solid"
import AutoImport from "unplugin-auto-import/vite"
import Pages from "vite-plugin-pages"

export default defineConfig({
  plugins: [
    Unocss(),
    solidPlugin(),
    tsconfigPaths(),
    Pages(),
    AutoImport({
      dts: "src/typings/auto-imports.d.ts",
      include: [
        /\.[tj]sx?$/ // .ts, .tsx, .js, .jsx
      ],
      imports: [
        "solid-app-router",
        "solid-js",
        {
          clsx: [["default", "n"]]
        }
      ]
    })
  ]
})
