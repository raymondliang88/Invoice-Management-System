import { LoginFormData } from '~/types/LoginFormData'
import HttpClient from '~/utils/httpClient'

const baseURl = 'https://www.google.com'

export const loginUser = async (data: LoginFormData) => {
    return {
        data: {
            auth_token: '123',
            name: 'email',
            email: 'test@test.com',
            id: 1
        }
    }
}