const express = require("express");
const router = express.Router();
const {
	getTask,
	getAllTask,
	addTask,
	updateTask,
	deleteTask,
	updateCategory,
} = require("../controllers/task");
const wrapAsync = require("../middleware/wrapAsync");
const { authorization } = require("../middleware/authorization");

router.get("/all", authorization, wrapAsync(getAllTask));
router.get("/:id", wrapAsync(getTask));
router.post("/add", authorization, wrapAsync(addTask));
router.put("/:id", authorization, wrapAsync(updateTask));
router.delete("/:id", authorization, wrapAsync(deleteTask));
router.put("/category/:id", authorization, wrapAsync(updateCategory));

module.exports = router;