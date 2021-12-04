import { Router } from 'express';
import * as UserController from '../user/controller';
import { CreateUserDto } from './dto';
import { createDto } from '../../middlewares/createDto.midleware';

/* GET users listing. */
const usersRouter = Router();

// usersRouter
//     .get('/', UserController.listUsers)
//     .post('/',
//         (req: Request, res: Response, next: NextFunction) => {
//             const bodyKeys = Object.keys(req.body);
//             const body = req.body;
//             const model = new CreateUserDto();
//
//             bodyKeys.forEach(k => {
//                 model[k] = body[k];
//             });
//
//             validate(model, {validationError: {target: false}}).then(errors => {
//                 if (errors.length > 0) {
//                     res.status(401).json(errors);
//                 } else {
//                     next();
//                 }
//             });
//         }, (req: Request, res: Response) => {
//             res.send('create');
//         });
usersRouter
    .get('/', UserController.listUsers)
    .post('/', createDto(CreateUserDto), UserController.createUser);

export default usersRouter;
