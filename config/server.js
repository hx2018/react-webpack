const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const WebpackConfig = require("./webpack.config");

const compiler = Webpack(WebpackConfig);
const devServerOptions = { ...WebpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

server.start();
