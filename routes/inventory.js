var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/inventory", function (req, res, next) {
  res.render("inventory")
})

module.exports = router
