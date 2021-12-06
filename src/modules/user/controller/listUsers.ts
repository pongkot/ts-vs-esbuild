import {
    Request,
    Response,
} from 'express';
import { User } from '../model/user.model';

export const listUsers = async (req: Request, res: Response): Promise<Response> => {
    const users = await User.findAll();
    const total = await User.count();
    return res.json({total, data: users});
};
