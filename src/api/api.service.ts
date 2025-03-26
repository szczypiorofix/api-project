import { Injectable } from '@nestjs/common';
import { apiServiceDetails } from '../shared/constants';

@Injectable()
export class ApiService {
    public getWelcome() {
        return JSON.stringify(apiServiceDetails);
    }
}
