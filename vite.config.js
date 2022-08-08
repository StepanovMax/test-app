import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  extensions: ['.js', '.vue', '.json'],
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './'),
      '@src' : path.resolve(__dirname, './src'),
      '@cmp' : path.resolve(__dirname, './src/components'),
      '@ndm' : path.resolve(__dirname, './node_modules'),
    },
  },
  plugins: [vue()],
  server: {
    host: true,
    port: 9000,
  },
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require('sass'),
            indentedSyntax: true // optional
          },
          // Requires >= sass-loader@^8.0.0
          // options: {
          //   implementation: require('sass'),
          //   sassOptions: {
          //     indentedSyntax: true // optional
          //   },
          // },
        },
      ],
    },
  ],
})
