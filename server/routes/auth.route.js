import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { Register } from "../controllers/auth.controller.js";

const router = Router();

router.route("/register").post(upload.single("picture"), Register);




export default router
