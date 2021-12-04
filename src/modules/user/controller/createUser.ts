import {
    Request,
    Response,
} from 'express';
import { CreateUserDto } from '../dto';

export const createUser = (req: Request, res: Response): Response => {
    const user: CreateUserDto = req.body
    return res.json(user)
}
