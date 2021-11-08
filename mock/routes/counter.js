var express = require("express");
const { apply } = require("file-loader");

var router = express.Router();

router.get("/counter", function (req, res) {
  console.log("---get-counter:");
  res.sendJson("get counter,heihei", 200);
});

router.post("/save", function (req, res) {
  console.log("---post-counter:", req.body);
  res.sendJson(req.body, 201);
});

// router.use("/count", router);

module.exports = router;
