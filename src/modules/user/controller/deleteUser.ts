import {
    Request,
    Response,
} from 'express';
import { User } from '../model/user.model';

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const user = await User.destroy({where: {id}});
    return res.json({
        status: user,
    });
};
