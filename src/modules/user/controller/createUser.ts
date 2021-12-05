import {
    Request,
    Response,
} from 'express';
import { CreateUserDto } from '../dto';
import { User } from '../model/user.model';

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const user: CreateUserDto = req.body
    const result = await User.create(user)
    return res.json(result)
}
