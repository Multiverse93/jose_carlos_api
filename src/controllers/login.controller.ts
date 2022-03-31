import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";

export const login = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;

    const user = await getRepository(User).findOne({ where: { email: data.email, password: data.password }});
    if (user) {
        return res.status(200).json(user);
    } else {
        return res.status(401).json();
    }
}