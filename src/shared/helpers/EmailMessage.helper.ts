import { SendMailParameters } from '../models';

export function EmailMessageValidator(
    bodyParameters: SendMailParameters,
): string[] {
    const errors: string[] = [];
    if (!bodyParameters || Object.keys(bodyParameters).length === 0) {
        errors.push('Request body must not be empty');
    }
    const { name, email, message } = bodyParameters;
    if (!email || email.length === 0) {
        errors.push('Email field is required');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        errors.push('Wrong email format');
    }
    if (!name || name.length === 0) {
        errors.push('Name field is required');
    }
    if (!message || message.length === 0) {
        errors.push('Message field is required');
    }
    return errors;
}
