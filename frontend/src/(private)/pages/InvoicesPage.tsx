import { useAppDispatch, useAppSelector } from "../../lib/StoreHooks"
import Invoices from "../../components/Invoices"
import { useEffect, useState } from "react"
import { getInvoicesData } from "../../store/actions/InvoicesActions"
import Modal from "../../components/shared/Modal"
import moment from "moment"

const InvoicesPage = () => {
    const { data } = useAppSelector((state) => state.invoices)
    const [selectedData, setSelectedData] = useState<any>()
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getInvoicesData({}))
    }, [])

    const viewDetails = (data: Invoice) => {
        setSelectedData(data)
        setIsOpen(true)
    }

    return (
        <div>
            <Invoices data={data} viewDetails={viewDetails} />
            <Modal title={'Invoice Details'} isOpen={isOpen} close={() => setIsOpen(false)}>
                {selectedData && <div>
                    <div className="flex">
                        <div className="px-2">
                            Payee Name: {selectedData?.vendorName}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="px-2">
                            Amount: ${selectedData?.amount}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="px-2">
                            Due Date: {moment(selectedData?.dueDate).format('MM/DD/YYYY')}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="px-2">
                            Status: {selectedData?.paid ? "Paid" : "Open"}
                        </div>
                    </div>
                </div>}
            </Modal>
        </div>
    )
}

export default InvoicesPage