import moment from 'moment';

interface Props {
    invoiceDetail: Invoice | null | undefined;
}

export const InvoiceDetails = ({ invoiceDetail }: Props) => {
    return (
        <div>
            <div className="flex">
                <div className="px-2">
                    Payee Name: {invoiceDetail?.vendorName}
                </div>
            </div>
            <div className="flex">
                <div className="px-2">
                    Amount: {invoiceDetail?.amount ? `${invoiceDetail?.amount}` : ''}
                </div>
            </div>
            <div className="flex">
                <div className="px-2">
                    Due Date: {moment(invoiceDetail?.dueDate).format('MM/DD/YYYY')}
                </div>
            </div>
            <div className="flex">
                <div className="px-2">
                    Status: {invoiceDetail?.paid ? "Paid" : "Open"}
                </div>
            </div>
        </div>
    )
}
