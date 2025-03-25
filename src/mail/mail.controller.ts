import { Body, Controller, Get, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailParameters } from '../shared/models';

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Get()
    getWelcome(): string {
        return this.mailService.home();
    }

    @Post('send')
    public sendMail(@Body() sendMailParameters: SendMailParameters) {
        const { name, email, message } = sendMailParameters;
        return this.mailService.sendMail(name, email, message);
    }
}
