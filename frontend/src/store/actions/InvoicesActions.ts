import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch } from '..'
import { setAuthData } from '../types/AuthTypes'
import { getInvoices } from '../../api/Invoice'
import { LoginFormData } from '../../types/LoginFormData'

export const authenticateUser = createAsyncThunk<void, LoginFormData, { dispatch: AppDispatch }>('post/get-invoices', async ({ }, { dispatch }) => {
    try {
        const data = (await getInvoices()).data
        dispatch(setAuthData(data))
    } catch (e) {
        console.error(e)
        throw e
    }
})