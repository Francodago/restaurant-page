const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');



module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean:true
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins:[
    new HtmlWebpackPlugin({
        hash: true,
        // title: 'Restaurant App With Webpack',
        // header: 'Webpack Example Header',
        // metaDesc: 'This Is A Restaurant Example Description',
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })
  ],
  mode:"development",

  devServer: {
     static: {
      directory: path.join(__dirname, 'build'),
  },
  open:true,
  },
  module:{
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};