// const express = require('express');
// const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
// const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog, likeBlog,unlikeblog} = require('../controller/blogCtrl');
// const router = express.Router();

// router.post("/", authMiddleware,isAdmin,createBlog);
// router.put('/likes',authMiddleware,isAdmin,likeBlog);
// router.put("/:id", authMiddleware,isAdmin,updateBlog);
// router.put("/:id", authMiddleware,isAdmin,unlikeblog);

// // router.get("/:id",getBlog);
// // router.get("/",getAllBlogs);
// // router.delete("/:id",authMiddleware,isAdmin,deleteBlog);



// module.exports = router;

const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  liketheBlog,
  disliketheBlog,
  uploadImages,
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { blogImgResize, uploadPhoto } = require("../middlewares/uploadImages");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadImages,
);
router.put("/likes", authMiddleware, liketheBlog);
router.put("/dislikes", authMiddleware, disliketheBlog);

router.put("/:id", authMiddleware, isAdmin, updateBlog);

router.get("/:id", getBlog);
router.get("/", getAllBlogs);

router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;