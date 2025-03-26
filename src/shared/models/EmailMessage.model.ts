import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailMessage {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    message: string;
}
