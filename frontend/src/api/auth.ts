import { BASE_URL } from '../constants';
import { LoginFormData } from '../types/LoginFormData'
import HttpClient from '../utils/HttpClient'

export const loginUser = async (data: LoginFormData) => {
    await HttpClient.get(BASE_URL);
    return {
        data: {
            auth_token: '123',
            name: 'Raymond',
            email: 'test@test.com',
            id: 1
        }
    }
}