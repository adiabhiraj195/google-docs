import { Router } from "express";

import user from "./user.route.js";
import auth from "./auth.router.js";
import document from "./document.router.js";

const router = Router();

router.use("/user", user);
router.use("/auth", auth);
router.use("/document", document)

export default router;