import { Controller, Get } from '@nestjs/common';
import { MailService } from "./mail.service";


@Controller('mail')
export class MailController {
    constructor(private readonly mailService: MailService) {}

    @Get()
    getWelcome(): string {
        return this.mailService.home();
    }
}
