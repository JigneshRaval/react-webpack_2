/*
	import path from 'path';

const config = {
	devtool: 'eval-source-map',
	entry: path.join(__dirname, 'lib/src/app.js'),
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015','react']
			}
		}]
	}
};
*/


//import path from 'path';
var path = require('path');
//var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'lib/src/client-render.js'),
    output: {
        path: __dirname,
        filename: 'bundle.js'
	},
    module: {
        loaders: [
            {
                loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/,
                test: /\.jsx?$/,
                query: {
					presets: ['es2015','react']
				},
			}
		]
	},
    stats: {
        // Nice colored output
       // colors: true
	},
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
