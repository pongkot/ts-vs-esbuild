import { Router } from 'express';
import * as UserController from '../user/controller';
import { CreateUserDto } from './dto';
import { createDto } from '../../middlewares/createDto.midleware';

const usersRouter = Router();

usersRouter
    .get('/', UserController.listUsers)
    .post('/', createDto(CreateUserDto), UserController.createUser);

export default usersRouter;
