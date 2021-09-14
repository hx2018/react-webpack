const path = require("path");

module.exports.resolve = function (dir) {
  return path.resolve(__dirname, dir);
};

module.exports.zz = "123";
