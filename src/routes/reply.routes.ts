import { Router } from "express";
import { createReply } from "../controllers/reply.controller";

const router = Router();

router.post('/reply', createReply);

export default router;