import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
    @IsEmail({}, { message: 'Wrong email or password' })
    email!: string;

    @IsString()
    password!: string;
}
