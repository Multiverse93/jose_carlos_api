import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Question } from "../entity/Question";

export const createQuestion = async (req: Request, res: Response): Promise<Response> => {
    const question: Question = req.body;
    question.createdOn = new Date();
    const result = await getRepository(Question).save(question);
    return res.status(200).json(result);
}

export const readQuestions = async (req: Request, res: Response): Promise<Response> => {
    const questions = await getRepository(Question)
        .createQueryBuilder('question')
        .innerJoinAndSelect('question.user', 'user')
        .leftJoinAndSelect('question.replies', 'replies')
        .leftJoinAndSelect('replies.user', 'replyUser')
        .select(['question', 'user', 'replies', 'replyUser'])
        .getMany();
    return res.status(200).json(questions);
}