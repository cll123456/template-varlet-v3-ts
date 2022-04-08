import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({}),
    Unocss(),
    // 自动引入组件
    components({
      dirs: ['src/components'],
      resolvers: [VarletUIResolver()],
      dts: './src/components.d.ts',
    }),
    // 自动引入库的api
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './src/auto-imports.d.ts',
    }),
    // 基于文件系统的路由
    Pages({
      dirs: [{ dir: resolve(__dirname, './src/pages'), baseRoute: '' }],
      extensions: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), //设置别名
    },
    dedupe: ['vue'],
  },
  build: {
    outDir: 'docs',
  },
})
