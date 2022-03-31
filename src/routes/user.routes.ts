import { Router } from "express";
import { readUsers, saveUser } from "../controllers/user.controller";

const router = Router();

router.get('/user', readUsers);
router.patch('/user', saveUser);

export default router;