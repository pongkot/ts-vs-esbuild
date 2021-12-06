import { Router } from 'express';
import * as UserController from '../user/controller';
import {
    CreateUserDto,
    UpdateUserDto,
} from './dto';
import { createDto } from '../../middlewares/createDto.midleware';

const usersRouter = Router();

usersRouter
    .get('/', UserController.listUsers)
    .post('/', createDto(CreateUserDto), UserController.createUser)
    .get('/:id', UserController.getUser)
    .put('/:id', createDto(UpdateUserDto), UserController.updateUser)
    .delete('/:id', UserController.deleteUser);

export default usersRouter;
