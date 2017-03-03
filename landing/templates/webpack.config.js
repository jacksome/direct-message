// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
var path = require('path');
var webpack = require('webpack');

// 模块导入
module.exports = {
  // 入口文件地址，不需要写完，会自动查找
  entry: {
    main: './src/main',
    vendor: ['vue', 'vue-resource', 'vue-router', 'vuex', 'vuex-router-sync']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
  ],
  // 输出
  output: {
    // 文件地址，使用绝对路径形式
    path: path.join(__dirname, '../static/landing/'),
    //[name]这里是webpack提供的根据路口文件自动生成的名字
    filename: '[name].js',
    // 公共文件生成的地址
    publicPath: '/static/landing/'
  },
  // 服务器配置相关，自动刷新!
  devServer: {
    historyApiFallback: true,
    hot: false,
    inline: true,
    grogress: true,
  },
  // 加载器
  module: {
    loaders: [
      // 解析.vue文件
      { test: /\.vue$/, loader: 'vue' },
      // 转化ES6的语法
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      // 编译css并自动添加css前缀
      { test: /\.css$/, loader: 'style!css!autoprefixer'},
      //.scss 文件想要编译，scss就需要这些东西！来编译处理
      //install css-loader style-loader sass-loader node-sass --save-dev
      { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      // 图片转化，小于8K自动转化为base64的编码
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
      //html模板编译？
      { test: /\.(html|tpl)$/, loader: 'html-loader' },
    ]
  },
  // .vue的配置
  vue: {
    loaders: {
      css: 'style!css!autoprefixer',
    }
  },
  // 转化成es5的语法
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js', '.vue'],
    // 别名，可以直接使用别名来代表设定的路径以及其他
    alias: {
      filter: path.join(__dirname, './src/filters'),
      components: path.join(__dirname, './src/components')
    }
  },
  // 开启source-map，webpack有多种source-map，在官网文档可以查到
  // devtool: 'eval-source-map'
  devtool: 'cheap-module-source-map'
};
