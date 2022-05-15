module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 1920, // 视窗的宽度，对应的是我们设计稿的宽度
      viewportHeight: 1080, // 视窗的高度 （也可以不配置）
      unitPrecision: 5, // 指定'px'转化为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['ignore', 'html', 'main-content-max'], //指定不需要转化的类
      minPixelValue: 2, // 小于或等于`1px`不转化未视窗单位
      mediaQuery: false, // 允许在媒体查询中转换`px`
      // exclude: [/node_modules/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
    },
  },
};
