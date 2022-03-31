import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Reply } from "../entity/Reply";

export const createReply = async (req: Request, res: Response): Promise<Response> => {
    const reply: Reply = req.body;
    reply.createdOn = new Date();
    const result = await getRepository(Reply).save(reply);
    return res.status(200).json(result);
}