import {
    NextFunction,
    Request,
    Response,
} from 'express';
import {
    validate,
    ValidationError,
} from 'class-validator';

export const createDto = (Dto: any): any => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const {body} = req;
        const model = new Dto();

        Object.keys(body).forEach((keyName: string) => {
            model[keyName] = body[keyName];
        });

        validate(model).then((errors: Array<ValidationError>) => {
            if (errors.length > 0) {
                res.status(400).json(errors);
            } else {
                next();
            }
        });
    };
};
