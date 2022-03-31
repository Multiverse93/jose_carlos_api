import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const readUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await getRepository(User).find();
    return res.status(200).json(users);
}

export const saveUser = async (req: Request, res: Response): Promise<Response> => {
    const data: User = req.body;

    if (data?.id > 0) {
        const user = await getRepository(User).findOne({ where: { id: data.id }});
        if (!user) {
            return res.status(4040).json();
        }
        getRepository(User).merge(user, data);
        const result = await getRepository(User).save(user);
        return res.status(200).json(result);
    } else {
        const result = await getRepository(User).save(data);
        return res.status(200).json(result);
    }
}