import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['exclude-h-n-s', 'h-[calc(100vh-14.4vw-3rem)] common-content'],
    ['exclude-h-s', 'h-[calc(100vh-14.4vw)] common-content'],
    [
      'common-content',
      'w-full overflow-y-auto overflow-x-hidden text-black-100 dark:text-white-100 bg-gray-100 dark:bg-gray-500 p-2 hyphens-auto',
    ],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        mdi: () =>
          import('@iconify-json/mdi/icons.json').then((i) => i.default as any),
      },
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    extend: {},
    /**这里的颜色可以自己定义，然后在代码中使用windi.css的预设，主要的颜色值需要与main.css中的一致 */
    colors: {
      // 主要的颜色值
      success: '#00c48f',
      danger: '#f44336',
      primary: '#3a7afe',
      info: '#00afef',
      warning: '#ff9f00',
      disabled: '#e0e0e0',
      text: '#000',
      textDisabled: '#aaa',
      light: '#fff',
      dark: `#272727`,
    },
    fontSize: {
      xs: '.6rem',
      sm: '.65rem',
      base: '.7rem',
      lg: '.8rem',
      xl: '1rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '6rem',
      '7xl': '7rem',
    },
  },
})
