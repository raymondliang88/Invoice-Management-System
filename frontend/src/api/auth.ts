import { LoginFormData } from '../types/LoginFormData'
import HttpClient from '../utils/HttpClient'

const baseURl = 'http://localhost:3000'

export const loginUser = async (data: LoginFormData) => {
    await HttpClient.get(baseURl);
    return {
        data: {
            auth_token: '123',
            name: 'email',
            email: 'test@test.com',
            id: 1
        }
    }
}