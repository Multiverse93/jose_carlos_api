import { Router } from "express";
import { createQuestion, readQuestions } from "../controllers/question.controller";

const router = Router();

router.get('/question', readQuestions);
router.post('/question', createQuestion);

export default router;