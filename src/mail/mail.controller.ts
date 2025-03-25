import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailParameters } from '../shared/models';
import { EmailMessageValidator } from '../shared/helpers';

@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Get()
    getWelcome(): string {
        return this.mailService.home();
    }

    @Post('send')
    public sendMail(@Body() sendMailParameters: SendMailParameters) {
        const bodyParameterErrors: string[] =
            EmailMessageValidator(sendMailParameters);
        if (bodyParameterErrors.length > 0) {
            console.log(JSON.stringify(bodyParameterErrors));
            throw new HttpException('Wrong parameters', HttpStatus.BAD_REQUEST);
        }
        const { name, email, message } = sendMailParameters;
        return this.mailService.sendMail(name, email, message);
    }
}
