import { Request, Response, NextFunction } from 'express'
import { validate } from 'class-validator';

export const createDto = (Dto: any): any => {
    return (req: Request, res: Response, next: NextFunction): any => {
        const { body } = req
        const model = new Dto()

        Object.keys(body).forEach(key => {
            model[key] = body[key]
        })

        validate(model).then(errors => {
            if (errors.length > 0) {
                res.status(400).json(errors);
            } else {
                next();
            }
        });
    }
}
