//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
  entry: './js/main.js',

  //결과물(번들)을 반환하는 방식
  output: {
    // //path와 filename 없어도 자동으로 생성되는 것 있다.
    // path: path.resolve(__dirname, 'public'), //node.js에서 필요로 하는 절대경로로! 반환될 directory
    // filename: 'main.js', //만들어질 파일의 이름
    clean: true //원래 있던 파일 삭제 후 만들어라
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, //.css로 끝나는 내용을 찾아 -> css 파일들 찾아라
        // scss이거나 css
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin ({
      template: './index.html'
    }),
    new CopyPlugin ({ // 어디에서부터 내용을 복사해서 dist 폴더에 넣을 수 있게 한다.
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}