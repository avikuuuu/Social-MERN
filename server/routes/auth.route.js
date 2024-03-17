import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { Register, login } from "../controllers/auth.controller.js";

const router = Router();

router.route("/register").post(upload.single("picture"), Register);
router.route("/login").post(login);

export default router;
