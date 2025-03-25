import { Injectable } from '@nestjs/common';
import { ApiBaseConfig } from '../shared/models';

@Injectable()
export class MailService {
    public home() {
        const testData: ApiBaseConfig = {
            name: 'API Mail Service',
            path: '/api/mail',
            version: '0.0.1',
        };
        return JSON.stringify(testData);
    }
}
