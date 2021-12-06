import { CreateUserDto } from './createUser.dto';
import {
    IsEmail,
    IsIn,
    IsOptional,
    MaxLength,
    MinLength,
} from 'class-validator';

export class UpdateUserDto {
    @MinLength(2)
    @MaxLength(32)
    @IsOptional()
    firstname: string

    @MinLength(2)
    @MaxLength(32)
    @IsOptional()
    lastname: string

    @IsIn(['male', 'female'])
    @IsOptional()
    gender: string

    @IsEmail()
    @IsOptional()
    email: string
}
