import { resolve } from 'path';
const webpack = require('webpack');
const path = require('path');
import envVars from 'preact-cli-plugin-env-vars';
//import preactCliSvgLoader from 'preact-cli-svg-loader'
//import preactCliTypeScript from 'preact-cli-plugin-typescript'
// import CopyWebpackPlugin from 'copy-webpack-plugin';
//import criticalCssPlugin from "preact-cli-plugin-critical-css";

export default (config, env, helpers) => {
	// Disabled CSS modules
	let styles = helpers.getLoadersByName(config, 'css-loader');
	styles[0].loader.options.modules = false;

	// TODO: Global variales and mixins
	// const sassResourceLoader = {
	// 	loader: 'sass-resources-loader',
	// 	options: {
	// 		resources: [
	// 			path.resolve(__dirname, './src/style/_mixins.scss'),
	// 			path.resolve(__dirname, './src/style/_variables.scss')
	// 		]
	// 	}
	// };
	// config.module.loaders[2].use.push(sassResourceLoader);

	envVars(config, env, helpers); // enable .env file
	// preactCliSvgLoader(config, helpers);
	// preactCliTypeScript(config)
	// criticalCssPlugin(config, env);

	// copy offline.html and service-worker.js to root directory
	// config.plugins.push(
	//   new CopyWebpackPlugin([
	//     { context: `${__dirname}/src/assets/root`, from: `*.*` },
	//   ]),
	// )
};
