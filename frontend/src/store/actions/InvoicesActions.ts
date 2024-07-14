import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { getInvoices } from '../../api/Invoice'
import { setInvoiceData } from '../types/InvoiceTypes'

export const getInvoicesData = createAsyncThunk<void, {}, { dispatch: AppDispatch }>('post/get-invoices', async ({ }, { dispatch }) => {
    try {
        const data = (await getInvoices()).data
        dispatch(setInvoiceData(data))
    } catch (e) {
        console.error(e)
        throw e
    }
})