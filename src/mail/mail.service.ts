import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as Sendgrid from '@sendgrid/mail';
import { mailServiceDetails } from '../shared/constants';
import { EmailMessageResponse } from '../@types';

@Injectable()
export class MailService {
    public home(): string {
        return JSON.stringify(mailServiceDetails);
    }

    public async sendMail(name: string, email: string, message: string) {
        const apiKey: string | undefined = process.env.SENDGRID_API_KEY;
        const verifiedFromEmail: string | undefined =
            process.env.VERIFIED_FROM_EMAIL;
        if (!apiKey || !verifiedFromEmail) {
            throw new HttpException(
                'No expected env vars found',
                HttpStatus.NOT_FOUND,
            );
        }

        Sendgrid.setApiKey(apiKey);

        const msg = {
            to: verifiedFromEmail,
            from: verifiedFromEmail,
            subject: `Wiadomośc wysłana z formularza strony od ${name} (${email})`,
            replyTo: email,
            text: `Użytkownik ${name} (${email}) przesyła wiadomość ${message}`,
            html: `<p>Użytkownik <i>${name}</i> (${email}) przesyła wiadomość:<p/> <div>${message}</div>`,
        };

        try {
            await Sendgrid.send(msg);
            console.log('Email sent');
        } catch (error: any) {
            throw new HttpException(
                'Email was not sent because of error: ' + JSON.stringify(error),
                HttpStatus.NOT_FOUND,
            );
        }

        const emailSentResponse: EmailMessageResponse = {
            message: ['Email sent'],
            error: '',
            statusCode: HttpStatus.OK,
        };

        return JSON.stringify(emailSentResponse);
    }
}
