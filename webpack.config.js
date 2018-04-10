const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const ROOT = __dirname;
const buildPath = path.resolve(ROOT, 'build');
const WatchTimePlugin = require('webpack-watch-time-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log("Is production: " + !debug);

module.exports = {
    context: ROOT,
    devtool: debug
        ? 'eval-source-map'
        : 'source-map',
    entry: {
        demo: './app/main.ts',
        
    },
    output: {
        path: buildPath,
        publicPath: '/build/',
        filename: '[name]-bundle.min.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: "./app",
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                // Generate css from sass
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                    {
                        // Style loader should be used when the CSS is not extracted
                        // fallback: 'style-loader',
                        loader: 'css-loader',
                        options: {
                            // If you are having trouble with urls not resolving add this setting.
                            // See https://github.com/webpack-contrib/css-loader#url
                            url: false,
                            minimize: false,
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            outputStyle: 'expanded',
                            includePaths: [ path.resolve(ROOT, "./node_modules/compass-mixins/lib") ],
                            sourceComments: true
                        }
                    }
                ]})
            },
            {
                test: /\.ts$/,
                exclude: [
                    /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/, /app\/libs\/(?!(ng2-.+))/
                ],
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.webpack.json',
                            useCache: debug
                        }
                    }, {
                        loader: 'angular2-template-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: [/\.(spec|e2e)\.js$/, /node_modules\/(?!(ng2-.+))/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: debug
        ? [
            /** Webpack plugin to display time when watcher rebuild happens
            */
            WatchTimePlugin,
            new ExtractTextPlugin({filename: (getPath) => {
                    var path = getPath('./styles/[name].css');
                    // The entry point of the main.css is the pqm, therefore,
                    // if we do not interfere the name of the css will be pqm.css
                    return path.endsWith("pqm.css") ? path.replace("pqm.css", "main.css") : path;
                }, allChunks: true}),
            /**
             * Plugin: ContextReplacementPlugin
             * Description: Provides context to Angular's use of System.import
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
             * See: https://github.com/angular/angular/issues/11580
             */
            new ContextReplacementPlugin(
            /**
             * The (\\|\/) piece accounts for path separators in *nix and Windows
             */
            /angular(\\|\/)core(\\|\/)@angular/, ROOT // location of your src
            ),
            new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client')),
            new webpack
                .optimize
                .LimitChunkCountPlugin({
                    maxChunks: 1, // disable creating additional chunks
                })
        ]
        // Prod
        : [
            new webpack
                .optimize
                .DedupePlugin(),
            new webpack
                .optimize
                .OccurenceOrderPlugin(),
            new ExtractTextPlugin({filename: (getPath) => {
                    var path = getPath('./styles/[name].css');
                    // The entry point of the main.css is the pqm, therefore,
                    // if we do not interfere the name of the css will be pqm.css
                    return path.endsWith("pqm.css") ? path.replace("pqm.css", "main.css") : path;
                }, allChunks: true}),
            /**
             * Plugin: UglifyJsPlugin
             * Description: Minimize all JavaScript output of chunks.
             * Loaders are switched into minimizing mode.
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
             */
            new webpack
                .optimize
                .UglifyJsPlugin({mangle: false, sourcemap: false})
        ]
};
