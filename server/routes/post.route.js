import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyToken } from "../middlewares/verifyUser.middleware.js";
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/post.controller.js";

const router = Router();

router.route("/").post(verifyToken, upload.single("image"), createPost);
router.route("/feed").get(verifyToken, getFeedPosts);
router.route("/:userId/posts").get(verifyToken, getUserPosts);
router.route("/:id/like").patch(verifyToken, likePost);

export default router;
