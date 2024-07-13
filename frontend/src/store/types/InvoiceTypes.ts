import { createAction } from '@reduxjs/toolkit'
import { AuthResp } from '../../types/AuthResp'

export const getInvoiceData = createAction<Invoice[]>('invoice/getInvoiceData')
