import { Injectable } from '@nestjs/common';
import { ApiBaseConfig } from '../shared/models';

@Injectable()
export class ApiService {
    public getWelcome() {
        const testData: ApiBaseConfig = {
            name: 'API Service',
            path: '/api',
            version: '0.0.1',
        };
        return JSON.stringify(testData);
    }
}
