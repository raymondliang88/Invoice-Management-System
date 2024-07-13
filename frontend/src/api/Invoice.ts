import { BASE_URL } from 'src/constants';
import HttpClient from '../utils/HttpClient'

export const getInvoices = async () => {
    return HttpClient.get(`${BASE_URL}/invoices`);
}