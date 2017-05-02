var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack')
const path = require('path');

var isProd = process.env.NODE_ENV === 'production' // true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader?sourceMap']
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/'
})




var cssConfig = isProd ? cssProd : cssDev;
module.exports = {
  entry: "./src/app.js",
   output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].bundle.js'
  },
  // resolve: {
  //   extensions: ['', '.js', '.jsx', '.json']
  // },
  module:{
  	 rules: [
     	{
     		test: /\.scss$/, 
            use: cssConfig,            
        },
        { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
        {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'file-loader?name=img/[name].[ext]',
                  'image-webpack-loader?bypassOnDebug'
                ]
        }
        // {
        //        test: /\.jsx?$/,
        //        exclude: /node_modules/,
        //        loaders: ["babel-loader"]
        //      }
  	]
  },
  devServer:{
  	 contentBase: path.join(__dirname, "dist"),
  	 compress: true,
  	 //port: 1234,
  	 //stats: 'errors-only',
  	 hot:true,
     open: true,
  },
  plugins: [
  	new HtmlWebpackPlugin({
		title: 'Stater File Webpack',
		//path: path.join(__dirname, 'dist'),
		//filename: 'index.html',
		template: './src/index.ejs',
		minify:{
			collapseWhitespace: isProd,
		},
		hash: true,
    }),
    new ExtractTextPlugin({
	    filename: 'app.css',
	    disable: !isProd,
	    allChunks: true
        }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
    ]


 };

