import { defineConfig } from 'vite';
import path from 'path';
import autoprefixer from 'autoprefixer';
import pxtorem from 'postcss-pxtorem';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        pxtorem({
          rootValue: 16, // базовый размер шрифта (обычно 16px)
          unitPrecision: 5, // точность округления
          propList: ['*', '!border*', '!box-shadow', '!text-shadow', '!letter-spacing'],
          selectorBlackList: ['ant-', 'el-', 'icon-', 'no-rem', /^border/, /shadow$/, /pixel-/],
          replace: true, // заменять px на rem
          mediaQuery: false, // не обрабатывать медиазапросы
          minPixelValue: 1, // минимальное значение для конвертации
          exclude: [/\/node_modules\//, /\/index.html/],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
    },
  },
});
