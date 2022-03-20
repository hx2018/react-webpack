const baseConfig = require("./webpack.base.config");

module.exports = Object.assign({}, baseConfig, {
  mode: "development",

  devServer: {
    port: 3000,
    // 处理mock跨域问题，访问mock接口方式改为：http://localhost:3000/api/..
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        secure: false,
      },
    },
  },
});
