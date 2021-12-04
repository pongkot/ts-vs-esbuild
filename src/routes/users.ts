import {
    Router,
    Request,
    Response,
    NextFunction,
} from 'express';

/* GET users listing. */
const usersRouter = Router()

usersRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('respond with a resource');
})

export default usersRouter
