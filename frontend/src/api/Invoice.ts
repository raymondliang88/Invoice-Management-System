import { BASE_URL } from '../constants';
import HttpClient from '../utils/HttpClient'

export const getInvoices = async (): Promise<Invoice[]> => {
    const res = await HttpClient.get(`${BASE_URL}/invoices`);
    return res.data;
}

export const getInvoicById = async (id: number) => {
    const res = await HttpClient.get(`${BASE_URL}/invoices/${id}`);
    return res.data
}