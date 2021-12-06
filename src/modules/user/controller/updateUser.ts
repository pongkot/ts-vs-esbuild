import {
    Request,
    Response,
} from 'express';
import { User } from '../model/user.model';
import { UpdateUserDto } from '../dto';

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;
    const modifyUser: UpdateUserDto = req.body;
    const [updateUserStatus] = await User.update(modifyUser, {where: {id}});
    return res.json({ status: updateUserStatus });
};
