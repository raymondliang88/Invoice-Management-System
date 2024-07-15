import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { getInvoicById, getInvoices } from '../../api/Invoice'
import { setInvoiceData, setSelectedInvoice } from '../types/InvoiceTypes'

export const getInvoicesData = createAsyncThunk<void, {}, { dispatch: AppDispatch }>('post/get-invoices', async ({ }, { dispatch }) => {
    try {
        const data = (await getInvoices()).data
        dispatch(setInvoiceData(data))
    } catch (e) {
        console.error(e)
        throw e
    }
})

export const getInvoice = createAsyncThunk<void, number, { dispatch: AppDispatch }>('post/get-invoices', async (id: number, { dispatch }) => {
    try {
        const data = (await getInvoicById(id)).data
        dispatch(setSelectedInvoice(data))
    } catch (e) {
        console.error(e)
        throw e
    }
})

