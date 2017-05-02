const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')

const glob = require('glob');
const path = require('path');
const PurifyCSSPlugin = require('purifycss-webpack');


const isProd = process.env.NODE_ENV === 'production' // true or false
const cssDev = ['style-loader', 'css-loader', 'sass-loader?sourceMap']
const cssProd = ExtractTextPlugin.extract({
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
                  'file-loader?name=img/[hash:12].[ext]',
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
    new webpack.NamedModulesPlugin(),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'src/*.js')),
      minimize: true
    })

    ]


 };

