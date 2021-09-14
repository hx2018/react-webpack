const utils = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { util } = require("webpack");

module.exports = {
  mode: "development", // default mode
  entry: { app: "./src/index" }, // (name: app，默认是name: main)
  output: {
    path: utils.resolve("../dist"),
    filename: "bundle.js",
    // 打包后的资源的访问路径需要加上前缀：可通过浏览器的source查看资源路径【注意：本地打包后的文件不会生成application文件】
    // 例如：<link href="/assets/spinner.gif" />
    publicPath: "/",
  },
  // devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(bmp|png|jpe?g|gif|svg|)$/,
        loader: "url-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": utils.resolve("../src"),
      components: utils.resolve("../src/components"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // webpack知道遵循该html模板运行app【即将app挂在到该模版】
      filename: utils.resolve("../dist/index.html"), // html模板的生成路径
      //hash: true, // 在打包的资源插入html会加上hash
    }),
  ],

  devServer: {
    port: 9000,

    // historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
    //     hot: true,
    //     contentBase: false, // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要
    //     compress: true, // 一切服务都启用gzip 压缩：
    //     port: "8081", // 指定段靠谱
    //     publicPath: "/", // 访问资源加前缀
    //     proxy: {
    //         // 接口请求代理
    //     },
  },
};
