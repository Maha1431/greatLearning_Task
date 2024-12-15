const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");
const wrapAsync = require("../middleware/wrapAsync");
const { authorization } = require("../middleware/authorization");

router.get("/profile", authorization, wrapAsync(userControllers.getAuthUser));
router.put("/update", authorization, wrapAsync(userControllers.updateUser));
router.get("/users", authorization, wrapAsync(userControllers.getAllUsers));
router.post("/board", authorization, wrapAsync(userControllers.updateBoard));

module.exports = router;