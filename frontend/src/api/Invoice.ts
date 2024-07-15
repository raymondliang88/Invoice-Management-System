import { BASE_URL } from '../constants';
import HttpClient from '../utils/HttpClient'

export const getInvoices = async () => {
    return HttpClient.get(`${BASE_URL}/invoices`);
}

export const getInvoicById = async (id: number) => {
    return HttpClient.get(`${BASE_URL}/invoices/${id}`);
}