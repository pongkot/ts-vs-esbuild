import {
    Request,
    Response,
} from 'express';

export const listUsers = (req: Request, res: Response): Response => {
    return res.json([
        {
            id: 1,
            name: 'john doe',
        },
    ]);
};
