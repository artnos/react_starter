var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/app.js",
   output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module:{
  	 rules: [
     	{
            test: /\.scss$/, 
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: ['css-loader','sass-loader'],
                publicPath: '/dist'
            })
        }
  	]
  },
  devServer:{
  	 contentBase: path.join(__dirname, "dist"),
  	 compress: true,
  	 port: 9000,
  	 stats: 'errors-only',
  	 open: true
  },
  plugins: [
  	new HtmlWebpackPlugin({
		title: 'Stater File Webpack',
		//path: path.join(__dirname, 'dist'),
		//filename: 'index.html',
		template: './src/index.ejs',
		minify:{
			collapseWhitespace: false,
		},
		hash: true,
    }),
    new ExtractTextPlugin({
	    filename: 'app.css',
	    disable: false,
	    allChunks: true
        })
    ]


 };