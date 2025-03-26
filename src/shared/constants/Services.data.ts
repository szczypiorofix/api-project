import { ServiceDetails } from '../../@types';
import { API_VERSION } from './Config.data';

export const apiServiceDetails: ServiceDetails = {
    name: 'API Service',
    path: `/${API_VERSION}`,
    version: '0.1.1',
};

export const mailServiceDetails: ServiceDetails = {
    name: 'API Mail Service',
    path: `/${API_VERSION}/mail`,
    version: '0.1.2',
};
