import {
    Request,
    Response,
} from 'express';
import { User } from '../model/user.model';

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const [user] = await User.findAll({where: {id}});
    return res.json({
        data: user ? user: {},
    });
};
