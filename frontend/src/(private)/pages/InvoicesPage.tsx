import { useAppDispatch, useAppSelector } from "../../lib/StoreHooks"
import { InvoiceList } from "../../components/InvoiceList"
import { useState } from "react"
import Modal from "../../components/shared/Modal"
import { useGetInvoiceById, useGetInvoices } from "../../lib/react-query/Queries"
import { setSelectedInvoice } from "../../store/types/InvoiceTypes"
import { InvoiceDetails } from "../../components/InvoiceDetails"

const InvoicesPage = () => {
    const { selectedInvoice } = useAppSelector((state) => state.invoices)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()
    const { data } = useGetInvoices();
    const { mutateAsync: getInvoiceById, isPending } = useGetInvoiceById();

    const viewDetails = async (invoice: Invoice) => {
        const invoiceResp = await getInvoiceById(invoice.id)
        dispatch(setSelectedInvoice(invoiceResp))
        setIsOpen(true)
    }

    return (
        <div>
            <InvoiceList data={data || []} viewDetails={viewDetails} />
            <Modal title={`Invoice #${selectedInvoice?.id}`} isOpen={isOpen} close={() => setIsOpen(false)}>
                <InvoiceDetails invoiceDetail={selectedInvoice} />
            </Modal>
        </div>
    )
}

export default InvoicesPage