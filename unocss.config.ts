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
    ['logo-img', 'w-7'],
    ['center-container', 'w-full max-w-4xl px-4 sm:px-6 lg:px-8'],
    ['section-intro', 'flex flex-col justify-center items-center'],
    [
      'page-title',
      'text-2xl text-green-600 w-full flex justify-center items-center py-2 my-2',
    ],
    [
      'btn',
      'inline-block px-4 py-1 rounded bg-green-600 text-white cursor-pointer hover:bg-green-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-flex justify-center items-center text-[0.9em] cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-green-600',
    ],
    [
      'icon-btn-nav',
      'ml-2 h-full inline-flex justify-center items-center text-[0.9em] cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-green-600',
    ],
    [
      'icon-btn-resp',
      'w-full py-2 inline-flex justify-end items-center text-[0.9em] cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-green-600',
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
      body: '#fff',
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
