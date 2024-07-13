import { createAction } from '@reduxjs/toolkit'

export const setInvoiceData = createAction<Invoice[]>('invoice/setInvoiceData')
