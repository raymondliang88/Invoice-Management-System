import { createReducer } from '@reduxjs/toolkit'
import { setInvoiceData, setSelectedInvoice } from '../types/InvoiceTypes';

interface DataReducer {
    data: Invoice[];
    selectedInvoice?: Invoice | null;
}

const initialState: DataReducer = {
    data: [],
    selectedInvoice: null
}

const dataReducer = createReducer<DataReducer>(initialState, (builder) => {
    builder.addCase(setInvoiceData, (state, action) => {
        state.data = action.payload
    })

    builder.addCase(setSelectedInvoice, (state, action) => {
        state.selectedInvoice = action.payload;
    })
})

export default dataReducer
