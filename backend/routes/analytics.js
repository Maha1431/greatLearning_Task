const express = require("express");
const router = express.Router();
const { getAnalytics } = require("../controllers/analytics");
const wrapAsync = require("../middleware/wrapAsync");
const { authorization } = require("../middleware/authorization");

router.get("/", authorization, wrapAsync(getAnalytics));

module.exports = router;