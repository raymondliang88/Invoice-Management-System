import Invoices from "~/components/Invoices"

const InvoicesPage = () => {
    const data: Invoice[] = []

    return (
        <Invoices data={data} />
    )
}

export default InvoicesPage