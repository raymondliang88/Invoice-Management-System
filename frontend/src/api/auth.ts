import { BASE_URL } from '../constants';
import { LoginFormData } from '../types/LoginFormData'
import HttpClient from '../utils/HttpClient'

export const loginUser = async (data: LoginFormData) => {
    return HttpClient.post(`${BASE_URL}/auth/login`, data);
}