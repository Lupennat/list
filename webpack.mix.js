let mix = require('laravel-mix')

require('./nova.mix')

mix
  .setPublicPath('dist')
  .js('resources/js/items.js', 'js')
  .vue({ version: 3 })
  .nova('lupennat/items')
  .version();
