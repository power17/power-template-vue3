import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 自动化路由
    Pages(),
    // 自动引入组件
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // 自动引入核心库
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        '@vueuse/core',
        // custom
        {
          axios: [
            // default imports
            ['default', 'axios'] // import { default as axios } from 'axios',
          ],
          '[package-name]': [
            '[import-names]',
            // alias
            ['[from]', '[alias]']
          ]
        },
        // example type import
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
