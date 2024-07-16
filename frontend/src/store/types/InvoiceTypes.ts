import { createAction } from '@reduxjs/toolkit'

export const setInvoiceData = createAction<Invoice[]>('invoice/setInvoiceData')
export const setSelectedInvoice = createAction<Invoice | null>('invoice/setSelectedInvoice')