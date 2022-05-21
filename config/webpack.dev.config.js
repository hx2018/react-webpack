const baseConfig = require("./webpack.base.config");

module.exports = Object.assign({}, baseConfig, {
  mode: "development",

  devServer: {
    port: 3000,
    // 处理mock跨域问题，访问mock接口方式改为：http://localhost:3000/api/..
    proxy: {
      "/api": {
        target: "http://localhost:3001", // target是请求实际目标服务器地址，这里是mock服务地址和端口。前端访问通过访问3000，proxy会自动代理到3001
        secure: false,
      },
    },
  },
});
