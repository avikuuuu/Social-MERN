import { Router } from "express";
import { verifyToken } from "../middlewares/verifyUser.middleware.js";
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/user.controller.js";

const router = Router();

router.route("/:id").post(verifyToken, getUser);
router.route("/:id/friends").post(verifyToken, getUserFriends);
router.route("/:id/:friendId").post(verifyToken, addRemoveFriend);


export default router;
