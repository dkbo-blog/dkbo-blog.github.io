module.exports = {
  /*
   * 檔案輸出、輸入路徑
   */
  paths: {
    // 來源
    'source': 'app/',
    'sass': 'app/sass/',
    // 輸出
    'sass_output': 'app/css/',
    'public': 'source/',
  },

  /*
   * CSS, PostCSS, Sass 設定
   */
  postcss: {
    'enabled': true, // 啟用 PostCSS
    'output_name': 'style.css', //輸出之 CSS 名稱
    'output_folder': 'css', //最後輸出之 CSS 資料夾
    'autoprefixer': {browsers: ['last 1 version']}
  },
  sass: {
    'output_style': 'compressed' // sass 輸出模式，可選 'nested', 'expanded', 'compact', 'compressed'
  }
}
