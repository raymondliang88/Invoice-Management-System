import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { getInvoicById } from '../../api/Invoice'
import { setSelectedInvoice } from '../types/InvoiceTypes'

export const getInvoice = createAsyncThunk<void, number, { dispatch: AppDispatch }>('post/get-invoices', async (id: number, { dispatch }) => {
    try {
        const data = await getInvoicById(id);

        dispatch(setSelectedInvoice(null))

        if (data) {
            dispatch(setSelectedInvoice(data))
        }
    } catch (e) {
        console.error(e)
        throw e
    }
})

