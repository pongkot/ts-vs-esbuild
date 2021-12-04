import {
    Router,
    Request,
    Response,
    NextFunction,
} from 'express';

/* GET home page. */
const indexRouter = Router()

indexRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', {
        title: 'ts-vs-build'
    })
})

export default indexRouter
