const express = require("express");
const { createEnquiry, updateEnquiry, deleteEnquiry,getEnquiry,getallEnquiry } = require("../controller/enqCtrl");
const router = express.Router();
const {isAdmin,authMiddleware,} = require("../middlewares/authMiddleware")

router.post("/",createEnquiry);
router.put("/:id",authMiddleware,updateEnquiry);
router.delete("/:id",authMiddleware,deleteEnquiry);
router.get("/:id",getEnquiry);
router.get("/",getallEnquiry);





module.exports = router;