import {
    IsEmail,
    IsIn,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @MinLength(2)
    @MaxLength(32)
    firstName: string

    @MinLength(2)
    @MaxLength(32)
    lastName: string

    @IsIn(['male', 'female'])
    gender: string

    @IsEmail()
    email: string
}
