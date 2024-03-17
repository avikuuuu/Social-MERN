import { Router } from "express";
import { verifyToken } from "../middlewares/verifyUser.middleware.js";
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/user.controller.js";

const router = Router();

router.route("/:id").get(verifyToken, getUser);
router.route("/:id/friends").get(verifyToken, getUserFriends);
router.route("/:id/:friendId").patch(verifyToken, addRemoveFriend);


export default router;
