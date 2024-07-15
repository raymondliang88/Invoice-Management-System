import { useAppDispatch, useAppSelector } from "../../lib/StoreHooks"
import Invoices from "../../components/Invoices"
import { useEffect, useState } from "react"
import { getInvoice, getInvoicesData } from "../../store/actions/InvoicesActions"
import Modal from "../../components/shared/Modal"
import moment from "moment"
import { getInvoicById } from "src/api/Invoice"

const InvoicesPage = () => {
    const { data, selectedInvoice } = useAppSelector((state) => state.invoices)
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getInvoicesData({}))
    }, [])

    const viewDetails = (data: Invoice) => {
        dispatch(getInvoice(data.id))

        setIsOpen(true)
    }

    return (
        <div>
            <Invoices data={data} viewDetails={viewDetails} />
            <Modal title={`Invoice #${selectedInvoice?.id}`} isOpen={isOpen} close={() => setIsOpen(false)}>
                {selectedInvoice && <div>
                    <div className="flex">
                        <div className="px-2">
                            Payee Name: {selectedInvoice?.vendorName}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="px-2">
                            Amount: {selectedInvoice?.amount ? `${selectedInvoice?.amount}` : ''}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="px-2">
                            Due Date: {moment(selectedInvoice?.dueDate).format('MM/DD/YYYY')}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="px-2">
                            Status: {selectedInvoice?.paid ? "Paid" : "Open"}
                        </div>
                    </div>
                </div>}
            </Modal>
        </div>
    )
}

export default InvoicesPage